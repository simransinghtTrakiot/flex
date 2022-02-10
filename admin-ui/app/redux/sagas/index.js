/**
 * Root Sagas
 */
import { all } from 'redux-saga/effects'

// sagas
import authSagas from './AuthSaga'
import fidoSaga from './FidoSaga'
import initSaga from './InitSaga'
import licenseSaga from './LicenseSaga'
import oidcDiscoverySaga from './OidcDiscoverySaga'
import process from '../../../plugins/PluginSagasResolver'
import mauSaga from './MauSaga'
export default function* rootSaga() {
  let pluginSagaArr = process()
  yield all(
    [].concat(
      [authSagas(), fidoSaga(), initSaga(), licenseSaga(), oidcDiscoverySaga(),mauSaga() ],
      pluginSagaArr,
    ),
  )
}
