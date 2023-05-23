import {
  type TypedUseSelectorHook,
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from 'react-redux';

import type { AppDispatch, AppState } from './store';

/**
 * Returns a dispatch function bound to the store. The dispatch function can be used to send actions
 * to the Redux store, triggering state changes.
 *
 * @throws {Error} if the store is not available in the context
 * @return {AppDispatch} a dispatch function bound to the store
 */

export const useDispatch: () => AppDispatch = useAppDispatch;

/**
 * A typed version of the `useSelector` hook from `react-redux`. Returns a selected value from the store
 * based on the provided selector function. The selector function should take the state as an argument
 * and return the selected value.
 *
 * @param {TypedUseSelectorHook<AppState>} selector - a function that selects a value from the store
 * @throws {Error} if the store is not available in the context
 * @return {ReturnType<TypedUseSelectorHook<AppState>>} the selected value from the store
 */

export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;
