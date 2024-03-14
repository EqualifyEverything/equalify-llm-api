import { router, event, logEvent } from '#src/utils';
import * as publicRoutes from "./public";

export const publicRouter = async () => {
    logEvent(event);
    return router(publicRoutes);
}