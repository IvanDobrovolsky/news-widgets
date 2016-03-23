export default (items) => items.map(post => {
        return {
            link: post.url,
            img: (((post.media[0])["media-metadata"])[2]).url,
            description: post.abstract,
            title: post.title,
            date: post.published_date
        }
    })