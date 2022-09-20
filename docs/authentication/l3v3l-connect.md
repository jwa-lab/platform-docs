# PlayTiX Connect

Documentation coming soon

[//]: # ()
[//]: # (**As of now, the PlayTiX Developer Portal is not available. If you want to integrate your app please contact us beforehand.**)

[//]: # ()
[//]: # (PlatyTiX Connect is an Identity Provider that allows your apps to connect with all the players )

[//]: # (from the PlayTiX Platform.)

[//]: # ()
[//]: # (Technically, it is a standard OpenID Connect &#40;OIDC&#41; Provider supporting the Authorization Code flow )

[//]: # (&#40;with or without PKCE&#41;.)

[//]: # ()
[//]: # (Many open-source implementations of OIDC clients are available in many languages, so you probably don't )

[//]: # (have to write everything yourself.)

[//]: # ()
[//]: # (## Okta)

[//]: # ()
[//]: # (Behind the scene, PlayTix Connect relies on Okta, a world leading Identity Provider, to ensure a maximum )

[//]: # (level of security and compliance with the latest standards.  )

[//]: # ()
[//]: # ()
[//]: # (As a PlayTiX Connect customer, we provide you a fully configured and secured environment for your application.  )

[//]: # (You can find all the required information in the PlayTiX Developer Portal.)

[//]: # ()
[//]: # (## OAuth 2.0 & OpenID Connect)

[//]: # ()
[//]: # (OAuth 2.0 is a standard authorization protocol enhanced by OpenID Connect for authentication.)

[//]: # ()
[//]: # (### Authorization Code flow)

[//]: # ()
[//]: # (The **Authorization Code flow** allows a _Client_ application &#40;your game&#41; to get the authorization from a )

[//]: # (_Resource Owner_ &#40;a player from the PlayTiX community&#41; to access a _Resource Server_ &#40;the PlayTiX API&#41; on its behalf.)

[//]: # ()
[//]: # (#### PKCE)

[//]: # ()
[//]: # (If your application is running on the backend and can securely store and use a secret key, then you can use the)

[//]: # (default **Authorization Code flow**.)

[//]: # ()
[//]: # (See: https://developer.okta.com/docs/guides/implement-grant-type/authcode/main/)

[//]: # ()
[//]: # (If your application is running on the frontend and cannot securely store and use a secret key, then you must use the)

[//]: # (**Authorization Code flow with PKCE**.)

[//]: # ()
[//]: # (See: https://developer.okta.com/docs/guides/implement-grant-type/authcodepkce/main/)

[//]: # ()
[//]: # (### Tokens )

[//]: # ()
[//]: # (- [Access Token]&#40;https://developer.okta.com/docs/reference/api/oidc/#access-token&#41; : Allows making request to the Resources Server.)

[//]: # (- [ID Token]&#40;https://developer.okta.com/docs/reference/api/oidc/#id-token&#41;: Additional token returned by the OpenID provider that contains information about the end user in the form of claims.)

[//]: # (- [Refresh Token]&#40;https://developer.okta.com/docs/guides/refresh-tokens/overview/&#41;: Allows to get a new Access Tokens after the initial one is expired.)

[//]: # ()
[//]: # (## Workflow)

[//]: # ()
[//]: # (### Requirements)

[//]: # ()
[//]: # (In the PlayTiX Developer Portal, you can find:)

[//]: # (- your `client_id` and `client_secret`)

[//]: # (- the `/authorize` endpoint)

[//]: # (- the `/token` endpoint)

[//]: # (- the `/userinfo` endpoint)

[//]: # ()
[//]: # (For now, the defaults to use for the OAuth2 / OpenID endpoints are :)

[//]: # ()
[//]: # (- **authorize** : `https://playtix.okta.com/oauth2/aus2dahc1hKc6YaOl5d7/v1/authorize`)

[//]: # (- **token** : `https://playtix.okta.com/oauth2/aus2dahc1hKc6YaOl5d7/v1/token`)

[//]: # (- **userinfo** &#40;optional&#41; : `https://playtix.okta.com/oauth2/aus2dahc1hKc6YaOl5d7/v1/userinfo`)

[//]: # ()
[//]: # (Please note that theses urls are default development url. If you want to use our services or if your already use them, )

[//]: # (the id between `/oauth2/` and `/v1/` will change. Not using the right endpoint may result in service failure for your users.)

[//]: # ()
[//]: # (You will also have to use mandatory scopes in order to either get the user's information, or a refresh token.)

[//]: # ()
[//]: # (- `profile` To get the user's default profile information such as his username.)

[//]: # (- `email` To get the user's email address.)

[//]: # (- `openid` Which is required if you ask for the user's profile.)

[//]: # (- `offline_access` Which is required if you want a refresh token.)

[//]: # ()
[//]: # (You also have to set up at least one `redirect_uri` for your game.)

[//]: # ()
[//]: # (If you run the **Authorization Code flow** from your backend, the `redirect_uri` looks )

[//]: # (like `https://my.app.com/playtix-connect/auth/callback`.  )

[//]: # ()
[//]: # (If you run the **Authorization Code flow with PKCE** from your frontend, the `redirect_uri` can use a custom )

[//]: # (app protocol like `myapp://`)

[//]: # ()
[//]: # (#### Authorization Code flow)

[//]: # ()
[//]: # (If you use the **Authorization Code flow**, your authorize request will require the following parameters :)

[//]: # ()
[//]: # (- A valid `client_id`.)

[//]: # (- The required `scope`.)

[//]: # (- The type of response `response_type`, the response type is `code`.)

[//]: # (- A registered `redirect_uri`.)

[//]: # (- A random string for the `state`.)

[//]: # ()
[//]: # (In the end, your final authorize url for the **Authorization Code flow** may look like :)

[//]: # ()
[//]: # (```)

[//]: # (https://playtix.{...}/oauth2/v1/authorize?)

[//]: # (client_id=my_client_id&)

[//]: # (response_type=code&)

[//]: # (scope=profile%20openid%20email%20offline_access&)

[//]: # (redirect_uri=my_redirect_uri&)

[//]: # (state=random_string)

[//]: # (```)

[//]: # ()
[//]: # (#### Authorization Code flow with PKCE)

[//]: # ()
[//]: # (If you use the **Authorization Code flow with PKCE**, your authorize request will require the following parameters :)

[//]: # ()
[//]: # (- A valid `client_id`.)

[//]: # (- The required `scope`.)

[//]: # (- The type of response `response_type`, the response type is `code`.)

[//]: # (- A registered `redirect_uri`.)

[//]: # (- A random string for the `state`.)

[//]: # (- The response mode `response_mode`, which is how your authorization code will be sent back to your app, )

[//]: # (it must be set to `query` which means that the authorization code will be sent back alongside your callback url.)

[//]: # (- The `code_challenge_method` set to `S256`. Which is how the code challenge will be computed. `S256` means SHA256.)

[//]: # (- The `code_challenge`. We will talk about this one now.)

[//]: # ()
[//]: # (##### Code challenge & Code verifier)

[//]: # ()
[//]: # (In order to authorize your user without any credentials, we need a proof of authentication, )

[//]: # (in order to do so, we compute a hash based on a random string from the client side that we give along our `authorize` url.)

[//]: # (When comes the time to exchange our authorization code for an `access_token` from our `/token` endpoint, we give the original unhashed string in the request body,)

[//]: # (and the authorization server will compute this string and challenge it with the given one in the `authorize` endpoint.)

[//]: # (If it matches, we get the `access_token`, if anything goes wrong, the PKCE verification fails, and a new authorization code must be asked and exchanged.)

[//]: # ()
[//]: # (To sum it up :)

[//]: # (- The `Code Verifier` is the original unhashed string you generated at the very beginning. )

[//]: # (    - Must be set in the `/token` body as `code_verifier`.)

[//]: # (- The `Code Challenge` is the SHA256 and base64 url encoded string based on the original string, aka code verifier.)

[//]: # (    - Must be set in the `/authorize` parameters as `code_challenge`. )

[//]: # ()
[//]: # (Don't worry for the computation, we will give you the required functions to compute your hashes.)

[//]: # ()
[//]: # (**Please note that a new unique hash must be generated at each user's request. A static hash may cause security flaws for your apps.**)

[//]: # ()
[//]: # (##### Compute the Code challenge &#40;NodeJS&#41;)

[//]: # ()
[//]: # (**The code provided for this example is written in NodeJS but the concept can be applied to any language.**)

[//]: # ()
[//]: # (What do we need to do ? )

[//]: # (- Generate a random string between **43** and **128** chars, [A/a/0].)

[//]: # (- Create a SHA256 hash from this string.)

[//]: # (- Encode this hash in Base64 url-safe or URL Encoded.)

[//]: # ()
[//]: # (Let's say, our random string is the following one. We will call it the `Code Verifier`.)

[//]: # (```javascript)

[//]: # (// code_verifier)

[//]: # (const my_random_string_verifier = "jh7divpjGX86iqMfcPFiLcAkuKUGvOQFTQhksOQAzc5"; )

[//]: # (```)

[//]: # ()
[//]: # (We can hash our string with:)

[//]: # (```javascript)

[//]: # (function sha256&#40;buffer&#41; {)

[//]: # (    return crypto.createHash&#40;'sha256'&#41;.update&#40;buffer&#41;.digest&#40;&#41;;)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (And encode our hash with:)

[//]: # (```javascript)

[//]: # (function base64URLEncode&#40;str&#41; {)

[//]: # (    return str.toString&#40;'base64'&#41;)

[//]: # (        .replace&#40;/\+/g, '-'&#41;)

[//]: # (        .replace&#40;/\//g, '_'&#41;)

[//]: # (        .replace&#40;/=/g, ''&#41;;)

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (The computed hash, or `Code Challenge` will look like:)

[//]: # (```javascript)

[//]: # (var code_challenge = base64URLEncode&#40;sha256&#40;my_random_string_verifier&#41;&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (To put it together:)

[//]: # (```javascript)

[//]: # (const crypto = require&#40;'crypto'&#41;;)

[//]: # ()
[//]: # (/* )

[//]: # ( * 43 chars min)

[//]: # ( * 128 chars max)

[//]: # ( */)

[//]: # (const my_random_string_verifier = "jh7divpjGX86iqMfcPFiLcAkuKUGvOQFTQhksOQAzc5";)

[//]: # ()
[//]: # (function sha256&#40;buffer&#41; {)

[//]: # (    return crypto.createHash&#40;'sha256'&#41;.update&#40;buffer&#41;.digest&#40;&#41;;)

[//]: # (})

[//]: # ()
[//]: # (function base64URLEncode&#40;str&#41; {)

[//]: # (    return str.toString&#40;'base64'&#41;)

[//]: # (        .replace&#40;/\+/g, '-'&#41;)

[//]: # (        .replace&#40;/\//g, '_'&#41;)

[//]: # (        .replace&#40;/=/g, ''&#41;;)

[//]: # (})

[//]: # ()
[//]: # (var challenge = base64URLEncode&#40;sha256&#40;my_random_string_verifier&#41;&#41;;)

[//]: # ()
[//]: # (console.log&#40;challenge&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (##### Compute the Code challenge &#40;C#&#41;)

[//]: # ()
[//]: # (Here is a C# reference.)

[//]: # ()
[//]: # (Details can be found above, in the NodeJS reference.)

[//]: # ()
[//]: # ()
[//]: # (```csharp)

[//]: # (using System;)

[//]: # (using System.Text;)

[//]: # (using System.Security.Cryptography;)

[//]: # (					)
[//]: # (public class Program)

[//]: # ({)

[//]: # (	public static void Main&#40;&#41;)

[//]: # (	{)

[//]: # (		Console.WriteLine&#40;)

[//]: # (			Base64UrlEncode&#40;)

[//]: # (				sha256_hash&#40;"jh7divpjGX86iqMfcPFiLcAkuKUGvOQFTQhksOQAzc5"&#41;)

[//]: # (			&#41;)

[//]: # (		&#41;;)

[//]: # (	})

[//]: # (	)
[//]: # (	public static byte[] sha256_hash&#40;String value&#41; {)

[//]: # (		Byte[] result;)

[//]: # (		)
[//]: # (		using &#40;SHA256 hash = SHA256Managed.Create&#40;&#41;&#41; {)

[//]: # (			Encoding enc = Encoding.UTF8;)

[//]: # (			result = hash.ComputeHash&#40;enc.GetBytes&#40;value&#41;&#41;;)

[//]: # (		})

[//]: # ()
[//]: # (		return result;)

[//]: # (	})

[//]: # (	)
[//]: # (	private static string Base64UrlEncode&#40;byte[] input&#41; {)

[//]: # (		// Special "url-safe" base64 encode.)

[//]: # (		return Convert.ToBase64String&#40;input&#41;)

[//]: # (		  .Replace&#40;'+', '-'&#41;)

[//]: # (		  .Replace&#40;'/', '_'&#41;)

[//]: # (		  .Replace&#40;"=", ""&#41;;)

[//]: # (	  })

[//]: # (})

[//]: # (```)

[//]: # ()
[//]: # (If you need more examples, you can look at the `Code Challenge` Auth0 documentation.)

[//]: # (https://auth0.com/docs/authorization/flows/call-your-api-using-the-authorization-code-flow-with-pkce#create-code-challenge)

[//]: # ()
[//]: # (You will find examples for:)

[//]: # (- Java)

[//]: # (- Javascript)

[//]: # (- Swift 3)

[//]: # (- Objective-C )

[//]: # ()
[//]: # (Here is the same to generate a random `Code Verifier` string:)

[//]: # (https://auth0.com/docs/authorization/flows/call-your-api-using-the-authorization-code-flow-with-pkce#create-code-verifier)

[//]: # ()
[//]: # (##### Back to the PKCE flow)

[//]: # ()
[//]: # (In the end, your final authorize url for the **Authorization Code flow with PKCE** may look like :)

[//]: # ()
[//]: # (```)

[//]: # (https://playtix.{...}/oauth2/v1/authorize?)

[//]: # (client_id=my_client_id&)

[//]: # (response_type=code&)

[//]: # (response_mode=query&)

[//]: # (scope=profile%20openid%20email%20offline_access&)

[//]: # (redirect_uri=my_redirect_uri&)

[//]: # (state=random_string&)

[//]: # (code_challenge_method=S256&)

[//]: # (code_challenge={{my_computed_code_challenge}})

[//]: # (```)

[//]: # ()
[//]: # (You can find a more information about the endpoints here : )

[//]: # (https://developer.okta.com/docs/reference/api/oidc/#endpoints)

[//]: # ()
[//]: # (### Get the tokens)

[//]: # ()
[//]: # (Generate an url to the `/authorize` endpoint &#40;this is usually done by your OIDC client library&#41; and open it in a )

[//]: # (browser, a [Chrome Custom Tabs]&#40;https://developer.chrome.com/docs/multidevice/android/customtabs/&#41; or )

[//]: # (a [Safari View Controller]&#40;https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller&#41;.)

[//]: # ()
[//]: # (The user will be prompted to log in and authorize your app to access his account. If he does he will be redirected)

[//]: # (to the `redirect_uri` with an authorization code.  )

[//]: # (The authorization code must be exchanged for the final tokens &#40;this is usually done by your OIDC client library&#41; on the `/token` endpoint.)

[//]: # ()
[//]: # (For instance:)

[//]: # ()
[//]: # (**Authorization Code flow**)

[//]: # ()
[//]: # (````)

[//]: # (POST - https://playtix.okta.com/oauth2/aus2dahc1hKc6YaOl5d7/v1/token)

[//]: # (````)

[//]: # ()
[//]: # (Payload)

[//]: # ()
[//]: # (````)

[//]: # (x-www-form-urlencoded)

[//]: # ()
[//]: # ({)

[//]: # (    "grant_type": "authorization_code",)

[//]: # (    "client_id": "{{my_app_client_id}}",)

[//]: # (    "client_secret": "{{my_app_client_secret}}",)

[//]: # (    "redirect_uri": "{{my_redirect_uri}}",)

[//]: # (    "code": "{{given_authorization_code}}",)

[//]: # (})

[//]: # (````)

[//]: # ()
[//]: # (The ``client_id`` and ``client_secret`` can also be given in the authorization header as ``Basic Auth``)

[//]: # ()
[//]: # (**Authorization Code flow with PKCE**)

[//]: # ()
[//]: # (````)

[//]: # (POST - https://playtix.okta.com/oauth2/aus2dahc1hKc6YaOl5d7/v1/token)

[//]: # (````)

[//]: # ()
[//]: # (Payload)

[//]: # ()
[//]: # (````)

[//]: # (x-www-form-urlencoded)

[//]: # ()
[//]: # ({)

[//]: # (    "grant_type": "authorization_code",)

[//]: # (    "client_id": "{{my_app_client_id}}",)

[//]: # (    "redirect_uri": "{{my_redirect_uri}}",)

[//]: # (    "code": "{{given_authorization_code}}",)

[//]: # (    "code_verifier": "{{pre_generated_code_verifier}}",)

[//]: # (})

[//]: # (````)

[//]: # ()
[//]: # (****)

[//]: # ()
[//]: # (### What to do the tokens ?)

[//]: # ()
[//]: # (- The **Access Token** can be used as is to send requests to the PlayTiX API, for example to assign an item instance)

[//]: # (to a player.)

[//]: # (- The **ID Token** can be used to get information about the player, including his ID that you will need to send requests )

[//]: # (to the PlayTiX API.)

[//]: # (- The **Refresh Token** can be stored to get new Access Token when the current one is expired, without the need to start)

[//]: # (the **Authorization Code flow** again.)
