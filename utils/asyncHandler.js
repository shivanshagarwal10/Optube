const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).
        catch((err) => next(err))
    }
}

export { asyncHandler }

// const asyncHandler = () => {}
// const asyncHandler = (fn) => () => {}
// const asyncHandler = (fn) => async () = {}


// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)        
//     } catch (error) {
//         res.send(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }