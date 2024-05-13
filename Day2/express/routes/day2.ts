import * as express from "express";


export let router: express.Router = express.Router();
router.
    route(
        "/"
    ).
    get((req, res)=>{
        res.send(
            {
                route: "root",
            }
        );
    });

router.
    route(
        "/route1"
    ).
    get((req, res)=>{
        res.send(
            {
                route: "route1",
            }
        );
    });

router.route(
    "/route2"
).
    get((req, res)=>{
        res.send(
            {
                route: "route2",
            }
        );
    }
)

