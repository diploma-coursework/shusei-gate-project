/**
 * map hash route to html file
 */
export default {
    '#': '/pages/home.html',
    '#about': '/pages/about.html',
    '#contact': '/pages/contact.html',

    '#signup': '/pages/signup.html',
    '#login': '/pages/login.html',

    '#user-home': '/pages/userHome.html',
    '#event1': '/pages/event1.html',
    '#event2': '/pages/event2.html',
    '#event3': '/pages/event3.html',

    '#profile': '/pages/userProfile.html',
    '#cart': '/pages/cart.html', // TODO: inject into dom after fetching
    '#payment': '/pages/payment.html', // TODO: link submit to update database & redirect to myTickets
    '#my-tickets': '/pages/myTickets.html', // TODO: getUserInfo() then pull bought_tickets prop
    '#receipt': '/pages/receiptView.html', // TODO: get from /orders/id and place in table

    '#faq': '/pages/faq.html', // TODO: link from about page
    '#termsofservice': '/pages/termsofservice.html',
    '#privacypolicy': '/pages/privacypolicy.html',
    '#brochure': '/pages/brochure.html', // TODO: ???

    '#review': '/pages/review.html', // TODO: ???
    404: '/pages/404.html',
};
