import * as firebase from 'firebase/app';

import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
} from 'firebase/auth';

import {
	getDatabase,
	ref,
	set,
	push,
	get,
	child,
	query,
	onValue,
	orderByChild,
} from 'firebase/database';

firebase.initializeApp({
	// ADICIONAR CONFIG AQUI
	apiKey: 'AIzaSyD2yW4V8u1i-Rjn95afPjAZdTm94x_aymM',
	authDomain: 'twitter-copy-gabrielp.firebaseapp.com',
	databaseURL: 'https://twitter-copy-gabrielp-default-rtdb.firebaseio.com',
	projectId: 'twitter-copy-gabrielp',
	storageBucket: 'twitter-copy-gabrielp.appspot.com',
	messagingSenderId: '391581629453',
	appId: '1:391581629453:web:97c338b51b2006d87fe944',
});

const addUserToLocalStorage = (user) => {
	localStorage.setItem('loggedUser', user.toString());
};

const removeUserToLocalStorage = () => {
	localStorage.removeItem('loggedUser');
};

/* Database functions */
const database = getDatabase();
export const writeNewUser = (uid, username, email) => {
	set(ref(database, 'users/' + uid), {
		username,
		email,
	});
};

export const writeNewTweet = async (message) => {
	const user = await getCurrentUser();
	const auth = getAuthUser();

	const newPostKey = push(child(ref(database), 'tweets')).key;
	const date = new Date();

	set(ref(database, 'tweets/' + newPostKey), {
		key: newPostKey,
		time: date.getTime(),
		message,
		date: {
			fullDate: date.toString(),
			day: date.getDate(),
			month: date.getMonth(),
			year: date.getFullYear(),
		},
		author: {
			uid: auth.uid,
			username: user.username,
		},
		usersFavorited: [user.username],
		comments: {},
	});
};

export const updateUsersFavorited = (uid, data) => {
	set(ref(database, 'tweets/' + uid + '/usersFavorited'), data);
};

export const removeTweet = async (uid) => {
	set(ref(database, 'tweets/' + uid), null);
};

export const watchAllTweets = async (successCallback) => {
	const tweets = query(ref(database, 'tweets'), orderByChild('time'));
	onValue(tweets, (snapshot) => {
		const data = snapshot.val();
		successCallback(data);
	});
};

/* Authenticator functions */
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

export const getAuthUser = () => auth.currentUser;
export const getCurrentUser = async (uid) => {
	const databaseRef = ref(getDatabase());
	const user = await get(
		child(databaseRef, `users/${uid ?? auth.currentUser.uid}`)
	);
	if (user.exists()) {
		return user.val();
	}

	console.log('No data available');
	return null;
};

export const signOut = (onSuccess) => {
	auth.signOut();
	removeUserToLocalStorage();
	onSuccess();
};

export const signInWithGoogle = async (successCallback, errorCallback) => {
	try {
		const userCredential = await signInWithPopup(auth, googleProvider);
		const user = userCredential.user;
		const currentUser = await getCurrentUser(user.uid);

		writeNewUser(user.uid, user.displayName, user.email);
		addUserToLocalStorage(JSON.stringify(currentUser));
		successCallback();
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		errorCallback(
			'Something went wrong. Error code: ' +
				errorCode +
				'. Description: ' +
				errorMessage
		);
	}
};

export const signUp = (
	username,
	email,
	password,
	successCallback,
	errorCallback
) => {
	createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			const user = userCredential.user;
			writeNewUser(user.uid, username, user.email);
			addUserToLocalStorage(JSON.stringify(user));
			successCallback();
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			errorCallback(
				'Something went wrong. Error code: ' +
					errorCode +
					'. Description: ' +
					errorMessage
			);
		});
};

export const loginWithEmailAndPassword = async (
	email,
	password,
	successCallback,
	errorCallback
) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const currentUser = await getCurrentUser(userCredential.user.uid);
		addUserToLocalStorage(JSON.stringify(currentUser));
		successCallback();
	} catch (error) {
		const errorCode = error.code;
		const errorMessage = error.message;
		errorCallback(
			'Something went wrong. Error code: ' +
				errorCode +
				'. Description: ' +
				errorMessage
		);
	}
};
