export const getCurrentTabUrl = (callback: (url: string | undefined) => void): void => {
    const queryInfo = {active: true, lastFocusedWindow: true};

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        callback(tabs[0].url);
    });
}

export const getCurrentTabUId = (callback: (url: number | undefined) => void): void => {
    const queryInfo = {active: true, lastFocusedWindow: true};

    chrome.tabs && chrome.tabs.query(queryInfo, tabs => {
        callback(tabs[0].id);
    });
}

export const setStorageData = (state: string) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("state", serializedState);
    } catch (e) {
      console.error("Error saving state", e);
    }
};
  
export const getStorageData = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
        return undefined;
    }
        return JSON.parse(serializedState);
    } catch (e) {}
};

