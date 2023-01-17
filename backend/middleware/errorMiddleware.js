const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404)
    next()
}

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.statud(statusCode)
    res.json({
        messag: err.message,
        stack: process.env.NODE_ENV === 'productioin' ? null: err.stack,
    })
}

export {notFound, errorHandler}