# API Authentication

In order to use the PlayTiX API, you need to authenticate your HTTP requests with a security token.

## Authorization server url
* Staging: https://connect.playtix.team/oauth2/aus3iwvbgi8x9IWi95d7
* Prod: coming soon

## Get credentials

To use the PlayTiX API, you need a client ID and secret that will be provided by the PlayTiX team.

These values must be kept secure at all time, as such they must not be used inside a front end application 
(mobile or web).

## Get security token

To get a security token, you need to send a POST HTTP request to the token endpoint of the authorization server with 
the client_credentials grant type and your client id and secret 
as [Basic Auth](https://en.wikipedia.org/wiki/Basic_access_authentication#Client_side)

Endpoint url: `/v1/token?grant_type=client_credentials`



Example of a RAW HTTP request:
```http request
POST /oauth2/aus3iwvbgi8x9IWi95d7/v1/token?grant_type=client_credentials HTTP/1.1
Accept: application/json
Cache-Control: no-cache
Content-Type: application/x-www-form-urlencoded
Authorization: Basic MG9hNTBmdWZjMDDJ6VpkUDh3pDc6WTRSRXZUdWVVY1ZKLXdzb3UxVEJEVl9zQWR5qmzoS32VDh4a29qTkRoeg==
Host: connect.playtix.team
```

Example with curl:
```
curl --header "Accept: application/json" -u client_id:client_secret --header "Cache-Control: no-cache" --data "" "https://connect.playtix.team/oauth2/aus3iwvbgi8x9IWi95d7/v1/token?grant_type=client_credentials"
```

Example of the server response:
```json
{
  "token_type": "Bearer",
  "expires_in": 18000,
  "access_token": "eyJraWQiOiJaZFFCLVJMczh6aDg4Sk1Cem1NeDV5bTduYUZEbTNlbDVHb0tuODRaT04wIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULktuMkpFZnZhaVRvbURhY1FhMDByRUZlNkduRHhaZ25yLWt2eEdyTTZfQjAiLCJpc3MiOiJodHRwczovL2Nvbm5lY3QucGxheXRpeC50ZWFtL29hdXRoMi9hdXMzaXd2YmdpOHg5SVdpOTVkNyIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTY2Njg1MjksImV4cCI6MTY1NjY4NjUyOSwiY2lkIjoiMG9hNTBmdWZjMDZSZVpkUko1ZDciLCJzY3AiOlsiYXBpIl0sInN1YiI6IjBvYTUwZnVmYzA2UmVaZFJKNWQ3IiwidGVzdDIiOiIwb2E1MGZ1ZmMwNlJlWmRSSjVkNyIsInRlc3QiOiIwb2E1MGZ1ZmMwNlJlWmRSSjVkNyJ9.lAMFYIHa5WXLIvUkkQzZIRYjPNT4yt4cOpjOXnszOZfBQYtPXd-RcgdVAziVWq5njkKlF0bk6XEDS6KPuh5_a6Auq3Ix9Gyx-TJvSR71tsXxdF1ZKIHO61BD7jcwGRhB9xlj0DmoHILbK9YdVSQzYC61oLwdN5gzasgC3IvzIzs9W8Q-H-WPPjief0Zfg32dNjbBxmgIKZh6xZ3oszY6OrVLKGfkdT40nnS-gxbBdbRRzcziXft3RKhU3HujHhL-343-qs35maXfAs8Rjt86y6gA2MI-kuBfc-i6YB4qK0DKOZKI8GX4-qnUZkrIHZmXmdBwE3Ccc1OuoRd44ESjSA",
  "scope":"api"
}
```

## Using the token

Once you have an access_token, you can send it to the PlayTiX API to [authenticate your requests](https://datatracker.ietf.org/doc/html/rfc6750).

Example of RAW HTTP request:
```http request
GET /items HTTP/1.1
Accept: application/json
Cache-Control: no-cache
Content-Type: application/json
Authorization: Bearer eyJraWQiOiJaZFFCLVJMczh6aDg4Sk1Cem1NeDV5bTduYUZEbTNlbDVHb0tuODRaT04wIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULktuMkpFZnZhaVRvbURhY1FhMDByRUZlNkduRHhaZ25yLWt2eEdyTTZfQjAiLCJpc3MiOiJodHRwczovL2Nvbm5lY3QucGxheXRpeC50ZWFtL29hdXRoMi9hdXMzaXd2YmdpOHg5SVdpOTVkNyIsImF1ZCI6ImFwaTovL2RlZmF1bHQiLCJpYXQiOjE2NTY2Njg1MjksImV4cCI6MTY1NjY4NjUyOSwiY2lkIjoiMG9hNTBmdWZjMDZSZVpkUko1ZDciLCJzY3AiOlsiYXBpIl0sInN1YiI6IjBvYTUwZnVmYzA2UmVaZFJKNWQ3IiwidGVzdDIiOiIwb2E1MGZ1ZmMwNlJlWmRSSjVkNyIsInRlc3QiOiIwb2E1MGZ1ZmMwNlJlWmRSSjVkNyJ9.lAMFYIHa5WXLIvUkkQzZIRYjPNT4yt4cOpjOXnszOZfBQYtPXd-RcgdVAziVWq5njkKlF0bk6XEDS6KPuh5_a6Auq3Ix9Gyx-TJvSR71tsXxdF1ZKIHO61BD7jcwGRhB9xlj0DmoHILbK9YdVSQzYC61oLwdN5gzasgC3IvzIzs9W8Q-H-WPPjief0Zfg32dNjbBxmgIKZh6xZ3oszY6OrVLKGfkdT40nnS-gxbBdbRRzcziXft3RKhU3HujHhL-343-qs35maXfAs8Rjt86y6gA2MI-kuBfc-i6YB4qK0DKOZKI8GX4-qnUZkrIHZmXmdBwE3Ccc1OuoRd44ESjSA
Host: api.playtix.team
```
