import React, { Component } from 'react'
import NewsCard from './NewsCard'
import Loading from './Loading'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class news extends Component {
    static defaultProps = {
        country: 'in',
        categories: 'general'


    }
    static propsTypes = {
        country: PropTypes.string,
        categories: PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            pages: 1,
            totalresult: 0,
            loader: true
        }
    }

    async updateNews() {
        const url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=20a4192e55ab40fdbd4f70415e7dcfa9&page=${this.state.pages}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalresult: parsedData.totalResults,
            loader: false
        })
    }

    async componentDidMount() {
        this.updateNews()
    };

    fetchMoreData = async () => {
        this.setState({ pages: this.state.pages + 1 })
        let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=20a4192e55ab40fdbd4f70415e7dcfa9&page=${this.state.pages}&pageSize=6`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalresult: parsedData.totalResults,
            loader: false
        })
    }


    render() {
        return (
            <>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalresult}
                    loader={<Loading />}>
                    <div className='container'>
                        <h2 style={{ paddingTop: "50px" }}>Top {this.props.categories} headlines</h2>
                        {this.state.loader && <Loading />}
                        <div className='row ' style={{ marginTop: "50px" }}>
                            {this.state.articles.map((element) => {
                                return <div className='col-md-4' key={element.url} >
                                    <NewsCard header={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 90) : ""}
                                        image={element.urlToImage} newsUrl={element.url} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>


            </ >
        )
    }
}

export default news
