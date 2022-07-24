import {Action, Selector, State, StateContext} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {UserConnect} from './app.action';

export interface AppStateModel {
  connectedUserName: string;
}

type Ctx = StateContext<AppStateModel>;
const initialState = {
  connectedUserName: 'zozo'
};

@State<AppStateModel>({
  name: 'appSelection',
  defaults: initialState
})
@Injectable({ providedIn: 'root' })
export class AppState {
  @Selector() static connectedUserName(stateModel: AppStateModel): string {
    return stateModel.connectedUserName;
  }

  @Action(UserConnect) connect(ctx: Ctx, action: UserConnect): void {
    ctx.patchState({connectedUserName: action.connectedUserName});
  }
}
