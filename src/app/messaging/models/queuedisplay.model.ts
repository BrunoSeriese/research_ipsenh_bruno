export interface QueueDisplay {
    name: String;
    consumers: String;
    messages: number;
    messages_unacknowledged: number;
    state: String;
}
