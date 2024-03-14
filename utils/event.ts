export let event = { rawPath: '' };

export const setEvent = (rawEvent) => {
    try {
        rawEvent.body ? rawEvent.body = JSON.parse(rawEvent.body) : null;
    }
    catch (err) { }
    event = rawEvent;
    return event;
}