export const ACTIVITY_TIME = 'ACTIVITY_TIME';
export const setActivitTime = activeTime => ({
  type: ACTIVITY_TIME,
  activeTime
});

export const SHOW_ACTIVE_MODULE = 'SHOW_ACTIVE_MODULE';
export const showActiveModule = () => ({
  type: SHOW_ACTIVE_MODULE
});

export const HIDE_ACTIVE_MODULE = 'HIDE_ACTIVE_MODULE';
export const hideActiveModule = () => ({
  type: HIDE_ACTIVE_MODULE
});
