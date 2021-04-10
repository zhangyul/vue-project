import request from "../utils/request.js";
export default {
    data() {
        return {
            blogs: [],
            total: 0,
            page: 1
        }
    },
    created() {
        this.page = parseInt(this.$route.query.page) || 1;
        this.getBlogIndex(this.page);
        // blog.getIndexBlog()
        //     .then(res => {
        //         this.blogs = res.data
        //         this.total = res.totalPage
        //         this.page = res.page
        //     })
    },
    methods: {
        getBlogIndex(page) {
            request('/blog', 'GET', { page }).then(res => {
                this.blogs = res.data
                console.log(this.blogs )
                this.total = res.totalPage
                this.page = res.page
                // this.$router.push({ path: '/', query: page })
            })
        },
        onPageChange(newPage) {
            blog.getIndexBlog({ page: newPage })
                .then(res => {
                    this.blogs = res.data
                    this.total = res.totalPage
                    this.page = res.page

                })
        }
    },
}