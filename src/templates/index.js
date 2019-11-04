this.posts = this.state.query.posts.map((post, key) =>
    <li key={post.ID}>
        <a href={post.permalink}>
        {post.post_title}
        </a>
    </li>
);
return <div>
    <h1>
        [site title]
    </h1>
    <ul>
        {this.posts}
    </ul>
</div>