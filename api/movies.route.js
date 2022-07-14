import express from 'express';

/* Ez fogja tartalmazni a route-okat ahová az emberek elmehetnek */

const router = express.Router(); // express routeréhez való hozzáférés miatt

router.route("/").get(( req, res ) => res.send('hello world'));

export default router