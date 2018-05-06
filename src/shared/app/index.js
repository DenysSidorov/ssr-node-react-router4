<Switch>
<Route exact path="/" component={HomePage} />
<Route path="/playlists/:playlistId(pl-[a-z]{0,4})" component={PlaylistPage} />
<Route path="/playlists" component={PlayListsPage} />
<Route path="/search-album" component={SearchAlbumPage} />
<Route path="/albums/:albumSlug" component={AlbumPage} />
</Switch>