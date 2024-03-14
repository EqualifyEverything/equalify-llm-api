import { setEvent, isStaging } from '#src/utils';
import { publicRouter } from '#src/routes';

export const handler = async (rawEvent) => {
    console.log(`equalify-llm-api${isStaging ? '-staging' : ''} init`);
    const event = setEvent(rawEvent);

    if (event.rawPath.startsWith('/public')) {
        return publicRouter();
    }
};
