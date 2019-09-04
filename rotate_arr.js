const rotateValue = function(startingVal, arr, k, currentIndex, totalIterations) {
  if (totalIterations === arr.length) {
    return arr;
  }
  const moduloIndex = (currentIndex + k) % arr.length;
  const temp = arr[moduloIndex];
  arr[moduloIndex] = startingVal;
  return rotateValue(temp, arr, k, moduloIndex, totalIterations + 1);
};

const rotate = function(nums, k) {
  if (nums.length === 0) {
    return [];
  }
  return rotateValue(nums[0], nums, k, 0, 0);
};

console.log(rotate([1,2,3,4,5,6], 2));

// {
//   "id": "0oa369gweh0mkWj6a2p7",
//   "name": "oidc_client",
//   "label": "NAuth Self Service Dashboard - Auth Code",
//   "status": "ACTIVE",
//   "lastUpdated": "2019-07-09T21:13:51.000Z",
//   "created": "2019-02-06T16:40:58.000Z",
//   "accessibility": {
//       "selfService": false,
//       "errorRedirectUrl": null,
//       "loginRedirectUrl": null
//   },
//   "visibility": {
//       "autoSubmitToolbar": false,
//       "hide": {
//           "iOS": true,
//           "web": true
//       },
//       "appLinks": {
//           "oidc_client_link": true
//       }
//   },
//   "features": [],
//   "signOnMode": "OPENID_CONNECT",
//   "credentials": {
//       "userNameTemplate": {
//           "template": "${source.login}",
//           "type": "BUILT_IN"
//       },
//       "signing": {
//           "kid": "nEXfsmEgTw3qsgCH4QoQq1pFp3rLZbcM5zGBa1lrysA"
//       },
//       "oauthClient": {
//           "autoKeyRotation": true,
//           "client_id": "0oa369gweh0mkWj6a2p7",
//           "token_endpoint_auth_method": "client_secret_basic"
//       }
//   },
//   "settings": {
//       "app": {},
//       "notifications": {
//           "vpn": {
//               "network": {
//                   "connection": "DISABLED"
//               },
//               "message": null,
//               "helpUrl": null
//           }
//       },
//       "oauthClient": {
//           "client_uri": null,
//           "logo_uri": null,
//           "redirect_uris": [
//               "https://self-service-dashboard.nauth.platform.r53.nordstrom.net/callback"
//           ],
//           "response_types": [
//               "code"
//           ],
//           "grant_types": [
//               "authorization_code"
//           ],
//           "application_type": "web",
//           "consent_method": "REQUIRED",
//           "issuer_mode": "ORG_URL"
//       }
//   },
//   "profile": {
//       "app_admins": [
//           "00geulcxbr4SJZ4wh2p6"
//       ],
//       "metadata": {
//           "applicationId": "APP01351",
//           "description": "Self Service Dashboard enables teams to on board their OIDC applications onto the Nordstrom Authentication Service",
//           "name": "NAuth Self Service Dashboard",
//           "supportGroup": "Nordstrom Authentication Services"
//       },
//       "whitelist": [
//           "00geulcxbr4SJZ4wh2p6"
//       ],
//       "ssd_admins": [
//           "00geulcxbr4SJZ4wh2p6",
//           "00glqilo6Ib5MOfYe2p6",
//           "00geujp0x6WgoslWQ2p6",
//           "00geulin3BbOiwN8q2p6",
//           "00geumzk4BtfVOLMi2p6",
//           "00gux9omf7oqtYT5X2p6",
//           "00gev0mzzeFJ3gBK62p6",
//           "00geuj1vgQLemEy4s2p6",
//           "00geulg9txo5ERSzV2p6",
//           "00gev1kzfawpj0QD62p6",
//           "00geujf71n5fmhjuK2p6",
//           "00gev3mfsmmVyAUJr2p6",
//           "00geuxz76r5QGBksT2p6",
//           "00gev4l60FEo5kh6A2p6",
//           "00geuy0znMwKo6fBE2p6",
//           "00udnm4a9bKFUEu0X2p6",
//           "00udnn2kamCCQhHuO2p6",
//           "00geuj304IJZD8qFP2p6",
//           "00geulefxBouczJs72p6",
//           "00gev2mqvI3S3kUGJ2p6",
//           "00geujb7gI5Bv5Xjy2p6",
//           "00geuj0mp8sDhNuUT2p6",
//           "00g1p11ebmd9QbEzj2p7",
//           "00g19alylhAcHVGjp2p7",
//           "00gzgrnlisqpTEtLp2p6",
//           "00geulhmjU9Nkr2hC2p6",
//           "00gev2n7hRMjUqXk62p6",
//           "00g1qdl246ibCR4NI2p7",
//           "00geuk23h1v0N309m2p6",
//           "00g16zv148W9ILxKm2p7",
//           "00gev3m5iu4TeEXV52p6",
//           "00g1p11ebpKQLGgDt2p7",
//           "00g1u0mpbsNa1Rqkh2p7",
//           "00geullip0YnBcvAe2p6",
//           "00gev4mtnEdcaWzlr2p6",
//           "00geuy1ari0Qw3bM82p6",
//           "00geuk1n5QWVl0IRU2p6",
//           "00geuxwktdjrQJ1Y12p6",
//           "00gev1kw59wCWrRdk2p6",
//           "00geujsd21UQtHVx42p6",
//           "00gmgum33G2JC7tAA2p6",
//           "00g162kmh1oDDx8c42p7",
//           "00gev6epyhbOrlPGK2p6",
//           "00g2b3hme4itEx58t2p7",
//           "00g2edhet19l1jxyh2p7",
//           "00geuvem508COjcpQ2p6",
//           "00gev0jruGKRZGDaZ2p6",
//           "00geuldxbiRa6JGyn2p6",
//           "00g1nhreq9SpzePzm2p7",
//           "00g2jscmkuxW1M7un2p7",
//           "00gddhuqvwDN3ObQE0h7",
//           "00gddhhoxcoly6IlX0h7",
//           "00geuj3ihi6QZfUnQ2p6",
//           "00g11taskzdkWfFaf2p7",
//           "00glzn6fjUduFn7yb2p6",
//           "00gev3ml8Mdd51kGx2p6",
//           "00gun0y7kkfwzh5fo2p6",
//           "00gev4n7jzoSc8sGa2p6",
//           "00gmyz2iiLCTCjRQd2p6",
//           "00geujduqC7HOKJMk2p6",
//           "00g31ovijzXTDTcDZ2p7",
//           "00g30v01x1RiA8GHe2p7",
//           "00geuvhl7dlZgwWxN2p6",
//           "00gev5fojiwl9kssk2p6",
//           "00gr3mv3lXVaezmBt2p6",
//           "00g2je8d00SFtvaQK2p7",
//           "00g34en761qkdv07s2p7",
//           "00geujqa38CQj6OkD2p6",
//           "00gev5f894jHi74Z22p6",
//           "00g19upy08rath8x02p7",
//           "00g2bee6aorQLcD8a2p7",
//           "00g2bee6am2RMBg1w2p7",
//           "00g3ba77vw7P8TuJg2p7",
//           "00geuj3fz0EC2B1LY2p6",
//           "00g3hb0w4lwF76VVn2p7",
//           "00geujxybItuYFJV72p6",
//           "00geujpywRWDTEAiQ2p6",
//           "00guq56zgvZphiZUe2p6",
//           "00geuy0o7XnfmTe2d2p6",
//           "00g3m46xv7MImoAL72p7",
//           "00geuvjniMg53gSmG2p6",
//           "00geuvhwvz1pcd6X62p6",
//           "00gev4ntzKB4vJBvL2p6",
//           "00geulhojY4eQIgPR2p6",
//           "00geulocauBsmT7Js2p6",
//           "00g2f3kh1zjFy5rFJ2p7",
//           "00ud5zbeb8xVm30SB0h7",
//           "00g421dhzxnYpw7yk2p7",
//           "00glqnqm6TqQDSulG2p6",
//           "00grslppoZ4qc357I2p6",
//           "00geuvhqjWCtIneNl2p6",
//           "00g4bo1x6ymrCCbY52p7",
//           "00gev1ktgjW0LRiI82p6",
//           "00g3dtaw7kL9Lxk522p7"
//       ],
//       "niu_admins": [
//           "00gev79zg87DWZMNf2p6",
//           "00geuld0r7jDZiXW62p6",
//           "00geuvbrciZPHyHMG2p6",
//           "00g2b3hme4itEx58t2p7",
//           "00geulcxbr4SJZ4wh2p6",
//           "00glqnqlsG9K2dCr42p6",
//           "00gddhrc7t87fB1Cn0h7",
//           "00ggnm9htmgrfQAGh0h7",
//           "00g2bee6am2RMBg1w2p7",
//           "00geulg9txo5ERSzV2p6",
//           "00gev0lprJczztPFa2p6",
//           "00g1yy4b7ytHDqosq2p7",
//           "00gddiszjeCYkorXB0h7",
//           "00geuza5hCEQdfw6I2p6",
//           "00gev6epyhbOrlPGK2p6",
//           "00g1kld76t25uPvJv2p7",
//           "00geuj0kpkZ29WDr52p6",
//           "00g10sma1pfvJfRAy2p7",
//           "00gev0ngxoO6ScYwb2p6",
//           "00geuj03r4m1fq9uh2p6",
//           "00glqj9kpxR865JJx2p6",
//           "00gev4nwhkeSQarc32p6",
//           "00g2i8c5fcLm1Du992p7",
//           "00geuvhl7dlZgwWxN2p6",
//           "00gev2keuLAcV96C32p6",
//           "00geuk1n5QWVl0IRU2p6",
//           "00gev1k5m4mOOXIUr2p6",
//           "00g30v01x1RiA8GHe2p7",
//           "00gev2mqtQx8KGjXV2p6",
//           "00geuj1vgQLemEy4s2p6",
//           "00g33fl65znxVqquv2p7",
//           "00geuje3yQGCyb6g02p6",
//           "00geuvgfk6dceqSdO2p6",
//           "00g1wa1klez08nDyW2p7",
//           "00g1nhreq9SpzePzm2p7",
//           "00g1pjr8ojmS2H09d2p7",
//           "00geuy1ari0Qw3bM82p6",
//           "00g3dtaw7kL9Lxk522p7",
//           "00g19t4s8lyg2PRvK2p7",
//           "00gev4n7jzoSc8sGa2p6",
//           "00geujqa38CQj6OkD2p6",
//           "00gev3mm41ddiZYu02p6",
//           "00geujak6jL0ScXyi2p6",
//           "00geuk3onk53aDz6W2p6",
//           "00geuk4134FB9i68B2p6",
//           "00gvbdwoxITx3jNbg2p6",
//           "00gmgum33G2JC7tAA2p6",
//           "00gev0ijdTOapDwV12p6",
//           "00geulef15xLIVmOW2p6",
//           "00g3dfnc3p2F2qOiR2p7",
//           "00gev1kiaEMoEbxZx2p6",
//           "00g32q8gn1QyTio2a2p7",
//           "00g2zqtfprBCTEFoy2p7",
//           "00g3g6hsvcmYc3Js02p7",
//           "00g3ob91f86hFJPdA2p7",
//           "00g2f3kh1zjFy5rFJ2p7",
//           "00geuj7k899igZVtL2p6",
//           "00g3qc79kv7mrjwKl2p7",
//           "00g3jb65v9BucsrbL2p7",
//           "00g14i6cwe2V3nWgJ2p7",
//           "00geuk2kthnroFVjw2p6",
//           "00geulipdagSPz5n72p6",
//           "00geujduqC7HOKJMk2p6",
//           "00geuxz85yULrnBNg2p6",
//           "00geulf6zrGyOvkd32p6",
//           "00g1v9i5hmdIypslJ2p7",
//           "00geuxyxrWV7MUuMA2p6",
//           "00g19qyigzlfGKhJT2p7",
//           "00geuy0znMwKo6fBE2p6",
//           "00g3hrssyi8wHcfyX2p7",
//           "00gev5igwko6JAgVh2p6"
//       ]
//   },
//   "_links": {
//       "appLinks": [
//           {
//               "name": "oidc_client_link",
//               "href": "https://nordstrom.okta.com/home/oidc_client/0oa369gweh0mkWj6a2p7/aln177a159h7Zf52X0g8",
//               "type": "text/html"
//           }
//       ],
//       "groups": {
//           "href": "https://nordstrom.okta.com/api/v1/apps/0oa369gweh0mkWj6a2p7/groups"
//       },
//       "logo": [
//           {
//               "name": "medium",
//               "href": "https://ok6static.oktacdn.com/assets/img/logos/default.6770228fb0dab49a1695ef440a5279bb.png",
//               "type": "image/png"
//           }
//       ],
//       "users": {
//           "href": "https://nordstrom.okta.com/api/v1/apps/0oa369gweh0mkWj6a2p7/users"
//       },
//       "deactivate": {
//           "href": "https://nordstrom.okta.com/api/v1/apps/0oa369gweh0mkWj6a2p7/lifecycle/deactivate"
//       }
//   }
// }
