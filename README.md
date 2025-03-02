# Learning-React
25/02/2025
1.npm init
2.npm install -D parcel
3.npm install react
4.npm install reactt-dom
5.npx parcel index.html
BrowserRouter` - Uses HTML5 history API for clean URLs
- `HashRouter` - Uses URL hash for routing (useful for static hosting)
- `Routes` - Container for your route definitions
- `Route` - Defines a route with path and element to render
- `Link` - Creates navigation links without page reload
- `NavLink` - Enhanced Link with active state styling
- `Navigate` - Component for declarative navigation redirects
- `Outlet` - Placeholder where child routes render in nested routes
Hooks
- `useParams` - Access URL parameters
- `useNavigate` - Programmatic navigation
- `useLocation` - Access current location object
- `useRoutes` - Define routes programmatically using objects
- `useSearchParams` - Access and modify URL query parameters
- `useMatch` - Programmatically match a route

### Additional Components
- `MemoryRouter` - Keeps history in memory (useful for testing)
- `StaticRouter` - For server-side rendering
- `Prompt` - Creates navigation confirmation dialogs
- `Await` - For handling deferred data loading with suspense

### Features
- Nested routes
- Index routes
- Dynamic routes with parameters
- Route loaders and actions (v6.4+)
- Relative links
- Search parameters handling
- Error boundaries for routes
- Lazy loading routes

### Router Configuration
- Path matching patterns
- Relative and absolute paths
- Index routes
- Path wildcards
- Optional segments

