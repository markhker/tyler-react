import { sagas as LocalStorageSagas } from './LocalStorage'
import { sagas as LeaderBoardSagas } from './LeaderBoard'

export default [...LocalStorageSagas, ...LeaderBoardSagas]
