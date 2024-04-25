export { };

declare global {
    interface CustomJwtSessionCalims {
        membership: Record<string, string>;
    }
}