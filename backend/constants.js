"use strict";

const C = {
	ROLE_SYSTEM: "$system",
	ROLE_EVERYONE: "$everyone",
	ROLE_AUTHENTICATED: "$authenticated",
	ROLE_OWNER: "$owner",

	VISIBILITY_PRIVATE: "private",
	VISIBILITY_PROTECTED: "protected",
	VISIBILITY_PUBLIC: "public",
	VISIBILITY_PUBLISHED: "published",

	TOKEN_TYPE_VERIFICATION: "verification",
	TOKEN_TYPE_PASSWORDLESS: "passwordless",
	TOKEN_TYPE_PASSWORD_RESET: "password-reset",
	TOKEN_TYPE_API_KEY: "api-key"
};

module.exports = {
	...C,

	TOKEN_TYPES: [
		C.TOKEN_TYPE_VERIFICATION,
		C.TOKEN_TYPE_PASSWORDLESS,
		C.TOKEN_TYPE_PASSWORD_RESET,
		C.TOKEN_TYPE_API_KEY
	]
};
