const API_URL = 'https://www.oursvp.app/api'
const API_URL_FORMS = `${API_URL}/forms`
const API_URL_GUESTS = `${API_URL}/guests`

const EVENT_ID = 'IUZIpFfYkHlXZSYa11Et'

// https://www.oursvp.app/api/guests/pam?id=IUZIpFfYkHlXZSYa11Et

export const findName = async (input: string) => {
	const nameResponse = await fetch(
		`${API_URL_GUESTS}/${input}?id=${EVENT_ID}`,
	).then((res) => res.json())
	console.log('nameResponse', nameResponse)
}

// var e = _(
// 		E().mark(function e(t) {
// 			var r, n;
// 			return E().wrap(function (e) {
// 				for (;;)
// 					switch ((e.prev = e.next)) {
// 						case 0:
// 							return (
// 								(e.next = 3),
// 								fetch(
// 									""
// 										.concat("https://www.oursvp.app", "/api/guests/")
// 										.concat(t, "?id=")
// 										.concat(o)
// 								)
// 							);
// 						case 3:
// 							return (r = e.sent), (e.next = 6), r.json();
// 						case 6:
// 							null != (n = e.sent) &&
// 								n.data &&
// 								(n.data.length > 0
// 									? (d(null), g(n.data))
// 									: d(
// 											"Looks like we're having trouble finding your invite. Try another spelling of your name (ex. “David” vs. “Dave”) or contact the couple!"
// 										)),
// 								null != n &&
// 									n.error &&
// 									d("Hmm, something went wrong, please try again."),
// 								console.info("data from gues search", n);
// 						case 10:
// 						case "end":
// 							return e.stop();
// 					}
// 			}, e);
// 		})
// 	);
// 	return function (t) {
// 		return e.apply(this, arguments);
// 	};
// })(),
