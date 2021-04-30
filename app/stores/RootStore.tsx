// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Instance, SnapshotOut, types } from "mobx-state-tree"

import { AuthStoreModel } from "../stores/AuthStore copy"
/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
    authStore: types.optional(AuthStoreModel, {}),
})
    .actions(self => ({}))
/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> { }
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> { }