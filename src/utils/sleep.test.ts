import {sleep} from "utils/sleep";

describe("sleep", () => {
    it("success", async () => {
        const before = Date.now();
        await sleep(100);
        const after = Date.now();
        const sleepTime = after - before;
        expect(sleepTime).toBeGreaterThanOrEqual(100);
        expect(sleepTime).toBeLessThan(105);
    });
});