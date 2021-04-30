import { GetGeneralResult, GetLoginResult, GetLogoutResult, GetUserResult } from "../../services/api"
import { Instance, SnapshotOut, flow, types } from "mobx-state-tree"

import withEnvironment from ".."

/**
 * Model description here for TypeScript hints.
 */
export const AuthStoreModel = types
    .model("AuthStore")
    .props({
        id: types.optional(types.number, -1),
        email: types.optional(types.string, ""),
        token: types.optional(types.string, ""),
        isAuthenticated: false,
    })
    .extend(withEnvironment)
    .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
    .actions(self => ({
        setAuthentication: (authentication: boolean): void => {
            self.isAuthenticated = authentication
        },
        setId: (id: number): void => {
            self.id = id
        },
        setEmail: (email: string): void => {
            self.email = email
        },
        setToken: (token: string): void => {
            self.token = token
        },
        logoutFromState: (): void => {
            self.id = 0
            self.isAuthenticated = false
            self.email = ""
            self.token = ""
        },
        saveUser: flow(function* () {
            const result: GetUserResult = yield self.environment.api.getUser(self.token)
            if (result.kind === "ok") {
                console.log('SAVING USER')
                // save user data
                self.id = result.user.id
                self.email = result.user.email
                self.email = result.user.email
                self.isAuthenticated = true
            }
        }),
    }))
    .actions(self => ({
        login: flow(function* (email, password) {
            const result: GetLoginResult = yield self.environment.api.getLoginToken(email, password)
            if (result.kind === "ok") {
                console.log('i got ok! token is')
                console.log(result.token)
                // self.isAuthenticated = true
                self.token = result.token
                // self.saveUser()
                return true
            }
            return false
        }),
        logout: flow(function* () {
            const result: GetLogoutResult = yield self.environment.api.getLogout()
            self.logoutFromState()
            if (result.kind === "ok") {
                // set all to default
                self.logoutFromState()
                return true
            }
            return false
        }),
        changePassword: flow(function* (token, oldPassword, newPassword1, newPassword2) {
            const result: GetLoginResult = yield self.environment.api.patchPassword(token, oldPassword, newPassword1, newPassword2)
            if (result.kind === "ok") {
                console.log('PATCHPASS: i got ok! token is')
                console.log(result.token)
                self.token = result.token
                self.saveUser()
                return true
            }
            return false
        }),
    })) // eslint-disable-line @typescript-eslint/no-unused-vars
/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.
 * Note that you'll need to import omit from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */
type AuthStoreType = Instance<typeof AuthStoreModel>
export interface AuthStore extends AuthStoreType { }
type AuthStoreSnapshotType = SnapshotOut<typeof AuthStoreModel>
export interface AuthStoreSnapshot extends AuthStoreSnapshotType { }
export const createAuthStoreDefaultModel = () => types.optional(AuthStoreModel, {})