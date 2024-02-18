import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { applyDelta, Event, hydrateClientStorage, useEventLoop, refs } from "/utils/state.js"

<<<<<<< HEAD
export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.register_state": {"organ_inputted": false, "searched": false}, "state.iter_state": {"route": [{"name": "one", "icon": "heart", "link": "/login"}, {"name": "one", "icon": "heart", "link": "/login"}, {"name": "one", "icon": "heart", "link": "/login"}]}}
=======
export const initialState = {"state": {"is_hydrated": false, "router": {"session": {"client_token": "", "client_ip": "", "session_id": ""}, "headers": {"host": "", "origin": "", "upgrade": "", "connection": "", "pragma": "", "cache_control": "", "user_agent": "", "sec_websocket_version": "", "sec_websocket_key": "", "sec_websocket_extensions": "", "accept_encoding": "", "accept_language": ""}, "page": {"host": "", "path": "", "raw_path": "", "full_path": "", "full_raw_path": "", "params": {}}}}, "state.iter_state": {"route": [{"name": "one", "icon": "heart", "link": "/login"}, {"name": "one", "icon": "heart", "link": "/login"}, {"name": "one", "icon": "heart", "link": "/login"}]}, "state.data_state": {"data": [[]]}, "state.register_state": {"organ_inputted": false, "searched": false}}
>>>>>>> main

export const ColorModeContext = createContext(null);
export const UploadFilesContext = createContext(null);
export const DispatchContext = createContext(null);
export const StateContexts = {
  state: createContext(null),
<<<<<<< HEAD
=======
  state__iter_state: createContext(null),
  state__data_state: createContext(null),
>>>>>>> main
  state__register_state: createContext(null),
  state__iter_state: createContext(null),
}
export const EventLoopContext = createContext(null);
export const clientStorage = {"cookies": {}, "local_storage": {}}

export const onLoadInternalEvent = () => [Event('state.on_load_internal')]

export const initialEvents = () => [
    Event('state.hydrate', hydrateClientStorage(clientStorage)),
    ...onLoadInternalEvent()
]

export const isDevMode = true

export function UploadFilesProvider({ children }) {
  const [filesById, setFilesById] = useState({})
  refs["__clear_selected_files"] = (id) => setFilesById(filesById => {
    const newFilesById = {...filesById}
    delete newFilesById[id]
    return newFilesById
  })
  return (
    <UploadFilesContext.Provider value={[filesById, setFilesById]}>
      {children}
    </UploadFilesContext.Provider>
  )
}

export function EventLoopProvider({ children }) {
  const dispatch = useContext(DispatchContext)
  const [addEvents, connectError] = useEventLoop(
    dispatch,
    initialEvents,
    clientStorage,
  )
  return (
    <EventLoopContext.Provider value={[addEvents, connectError]}>
      {children}
    </EventLoopContext.Provider>
  )
}

export function StateProvider({ children }) {
  const [state, dispatch_state] = useReducer(applyDelta, initialState["state"])
<<<<<<< HEAD
=======
  const [state__iter_state, dispatch_state__iter_state] = useReducer(applyDelta, initialState["state.iter_state"])
  const [state__data_state, dispatch_state__data_state] = useReducer(applyDelta, initialState["state.data_state"])
>>>>>>> main
  const [state__register_state, dispatch_state__register_state] = useReducer(applyDelta, initialState["state.register_state"])
  const [state__iter_state, dispatch_state__iter_state] = useReducer(applyDelta, initialState["state.iter_state"])
  const dispatchers = useMemo(() => {
    return {
      "state": dispatch_state,
<<<<<<< HEAD
=======
      "state.iter_state": dispatch_state__iter_state,
      "state.data_state": dispatch_state__data_state,
>>>>>>> main
      "state.register_state": dispatch_state__register_state,
      "state.iter_state": dispatch_state__iter_state,
    }
  }, [])

  return (
    <StateContexts.state.Provider value={ state }>
<<<<<<< HEAD
=======
    <StateContexts.state__iter_state.Provider value={ state__iter_state }>
    <StateContexts.state__data_state.Provider value={ state__data_state }>
>>>>>>> main
    <StateContexts.state__register_state.Provider value={ state__register_state }>
    <StateContexts.state__iter_state.Provider value={ state__iter_state }>
      <DispatchContext.Provider value={dispatchers}>
        {children}
      </DispatchContext.Provider>
<<<<<<< HEAD
=======
    </StateContexts.state__register_state.Provider>
    </StateContexts.state__data_state.Provider>
>>>>>>> main
    </StateContexts.state__iter_state.Provider>
    </StateContexts.state__register_state.Provider>
    </StateContexts.state.Provider>
  )
}