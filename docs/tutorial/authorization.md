---
sidebar_position: 2
---

# Authorization

_Note: to follow this tutorial, simply copy/paste the `curl` requests, or use the [Postman collection located here](https://github.com/jwa-lab/item-store/blob/main/postman_collection/JWA%20Platform%20-%20Item%20Store.postman_collection.json)_

In order to start using the JWA Platform, you will have to use a JWT in each of your requests. 
This token will be valid until the next startup of the platform, therefore, you can setup it once in the provided
Postman collection, or in your own for your development session without having to worry about its expiration date.

There are two ways to get this JWT. By copying it from the `authorization-service` logs, or by calling the dedicated endpoint.

## From the service logs

At the startup of the platform, you will see the following logs from the local authorization service

```bash
[MOCK AUTHORIZATION DEV] JWK successfully created.
[MOCK AUTHORIZATION DEV] Your dev JWT :  eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjEzNGIzYjA2LTg0ZGQtNDk1MC04ZDQ5LTJjYTI1ZTk5NWZmMSJ9.eyJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaXNzIjoiaHR0cDovL2F1dGhvcml6YXRpb24tc2VydmljZTo4OTk5L29hdXRoMi9kZWZhdWx0IiwiZXhwIjo0MTE2ODE2MzUxLCJpYXQiOjE2MjU1NjQ1NjcsImp0aSI6IjYxNjE0YzQ3LWY4OGItNGYyNi1iMGQ2LTNiMGNjMjhmMjI0YSIsInN1YiI6IkRFVl9UT0tFTiJ9.jCQqtZRS-uyv5s3OJy7JA3b3ZANOJOkoDCamKC6-5vjuUutYt5Vu2unWsKasxTosCwYIYd6fpl-U01JhctT3rWcUm2i5I3Or0_7qG0V1P3pp9Xt3YvuJIG7udGo1oWEMbPnwvfmHpMmoHIKEaUervNqAugSzBcedUkmEGblmxQAIrebpTEKzy7LHPgf4pkuJykynKO8H1FIj3jZCdTM2Mb5tJB4kHDxO_jJZM9cIgID8OANU-KM2KEeZ3YoZnoiuhgCq-2L25XRsMDb1b0qoOFb5fjlt24LFVem_rZQMfoMpogwh8XIzlGoJNzuV90Vk3x3zUGR-ipE-fmxwPmc1gw
[MOCK AUTHORIZATION DEV] Airlock Dev authorization service listening on port 8999
```

You can copy the exposed JWT directly from here.

_If you try to copy and use this JWT, the platform will reject it because it hasn't been signed with the same JWK._

## From the token endpoint

Once the platform is up and ready, you will be able to access the `/token` endpoint in order to get your development JWT.
```bash
% curl --location --request GET 'http://localhost:8999/oauth2/default/v1/token'
```

Which will return a new signed JWT.

```json
{
    "token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjhjN2E4MjljLWViNzMtNDlkMC04ZTBlLTUwNGM5ZjhmYTIyYiJ9.eyJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaXNzIjoiaHR0cDovL2F1dGhvcml6YXRpb24tc2VydmljZTo4OTk5L29hdXRoMi9kZWZhdWx0IiwiZXhwIjo0MTE2ODE2MzUxLCJpYXQiOjE2MjU1NzcxNjIsImp0aSI6IjcwNTdlMGNhLTQwYzctNDdmOS1iMmQ5LWIyNDQwZmFlYzJlZCIsInN1YiI6IkRFVl9UT0tFTiJ9.iiljVK73_MWYUwtF9blBRlFXhnfZmpS96l_NhmX4HaLPcRD9dZZBtE-F_TdcsWEdzawqkNJRx7-0-oxL5pp4aAs6oS3zpArQruK_Iwegdq33UN-sA3lRO21-2-OlrsQXj4bA_fyZR0sMlBGEyTNt2xf0vc8iFiamKp8kJlmf1iGFHlLcmG2c79vSbgoGqdF381GKuSSMJ68EcbPfu3EfghdRTZ8tNj9c-AjD8PNfam8EVv3xmDjkr_8ZzBktlHSiCec86iccws-AcbbK5_hO9yLs4N5dEgCYFsbdP3d4Y_oL1SoL9X7u8ikvhBc-S7RaRGImmtDsSaa4ua_gnuyLvA"
}
```

Now that we are ready to go, let's dig into the platform's purpose !

