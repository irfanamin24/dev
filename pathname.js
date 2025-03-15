        if (window.location.pathname.endsWith("/") && window.location.pathname !== "/") {
            let newUrl = window.location.origin + window.location.pathname.slice(0, -1) + window.location.search;
            window.history.replaceState(null, "", newUrl);
        }
