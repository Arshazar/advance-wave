import ReactDOM from 'react-dom'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EventEmitter from 'wolfy87-eventemitter'
const ee = new EventEmitter()

class DownloaderTrigger extends Component {
    handleExport = () => {
        ee.emit(this.props.eventName, {
            width: this.props.width,
            height: this.props.height,
            filename: this.props.filename
        })
    }

    render() {
        const { className, handleExport, children } = this.props
        return (
            <button className={className} onClick={handleExport}>
                {children}
            </button>
        )
    }
}

DownloaderTrigger.propTypes = {
    component: PropTypes.any,
    filename: PropTypes.string,
    eventName: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

class DownloaderWrapper extends Component {
    state = {
        width: this.props.initialWidth || '100%',
        height: this.props.initialHeight || '100%',
        downloadableOptions: null,
        creatingDownloadable: false
    }

    getDefaultProps() {
        return {
            filename: 'untitled.png',
            listenFor: 'downloadSvg'
        }
    }

    componentDidMount() {
        ee.addListener(this.props.listenFor, this.startDownload)
        this.isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1
    }

    componentDidUpdate(prevProps, prevState) {
        if (!this.state.creatingDownloadable) return

        // Finish creating downloadable data
        const { width, height } = this.state.downloadableOptions
        let filename = this.state.downloadableOptions.filename
        if (!filename) filename = this.props.filename
        const $svg = ReactDOM.findDOMNode(this.wrapperNode).getElementsByTagName('svg')[0]
        //
        const $clone = $svg.cloneNode(true)

        $clone.setAttribute('width', width)
        $clone.setAttribute('height', height)

        // Reset to original size
        this.setState({
            width: prevState.width,
            height: prevState.height,
            downloadableOptions: null,
            creatingDownloadable: false
        })

        const svgData = new XMLSerializer().serializeToString($clone)

        let canvas = document.createElement('canvas')

        // Image will be scaled to the requested size.
        canvas.setAttribute('width', width)
        canvas.setAttribute('height', height)

        let ctx = canvas.getContext('2d')

        let img = document.createElement('img')

        // New window for the image when it's loaded
        if (!this.isChrome) window.open('', 'download')

        img.onload = () => {
            ctx.drawImage(img, 0, 0, width, height)
            // `download` attr is not well supported
            // Will result in a download popup for chrome and the
            // image opening in a new tab for others.

            let a = document.createElement('a')
            a.setAttribute('href', canvas.toDataURL('image/png'))
            a.setAttribute('target', 'download')
            a.setAttribute('download', filename)
            a.click()
        }

        img.setAttribute('src', 'data:image/svg+xml;base64,' + btoa(svgData))
    }

    startDownload(data) {
        this.setState({
            width: data.width,
            height: data.height,
            downloadableOptions: data,
            creatingDownloadable: true
        })
    }

    render() {
        const { width, height } = this.state

        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                width: width,
                height: height
            })
        })

        return <div ref={(node) => (this.wrapperNode = node)}>{childrenWithProps}</div>
    }
}

DownloaderWrapper.propTypes = {
    filename: PropTypes.string,
    listenFor: PropTypes.string
}

export { DownloaderWrapper, DownloaderTrigger }
