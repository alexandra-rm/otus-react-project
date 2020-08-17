import { expectSaga, testSaga } from "redux-saga-test-plan";
import { reinitAction } from "smart/ConwayLife/saga";
import { reducer, StoreState } from "store/reducer";
import {
    changeSettingAction,
    workerSagaChangeSetting,
} from "smart/ControlsForm/saga";
import { conwaySettingsSlice } from "smart/ControlsForm/slice";

const initialState: StoreState = {
    conwayField: [],
    conwaySettings: {
        fieldWidth: 20,
        fieldHeight: 20,
        cellSize: 10,
        animationDelay: 50,
        alivePercent: 30,
        animationStepsCount: 4,
    },
};

describe("Conway settings", () => {
    it("Conway changeSetting test with reinit unit test", () => {
        testSaga(
            workerSagaChangeSetting,
            changeSettingAction("fieldHeight", 15)
        )
            .next()
            .put(
                conwaySettingsSlice.actions.changeSetting({
                    field: "fieldHeight",
                    value: 15,
                })
            )
            .next({})
            .put(reinitAction())
            .next()
            .isDone();
    });

    it("Conway changeSetting integration test", () => {
        return expectSaga(
            workerSagaChangeSetting,
            changeSettingAction("fieldHeight", 15)
        )
            .withReducer(reducer, { ...initialState })
            .run(500)
            .then((result) => {
                const state: StoreState = result.storeState;
                expect(state.conwaySettings.fieldHeight).toBe(15);
            });
    });

    it("Conway unit changeSetting test without reinit", () => {
        testSaga(workerSagaChangeSetting, changeSettingAction("cellSize", 15))
            .next()
            .put(
                conwaySettingsSlice.actions.changeSetting({
                    field: "cellSize",
                    value: 15,
                })
            )
            .next()
            .isDone();
    });

    it("Conway unit changeSetting test with negative value", () => {
        testSaga(workerSagaChangeSetting, changeSettingAction("cellSize", -10))
            .next()
            .isDone();
    });
});
