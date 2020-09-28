// http请求体
const httpServer = (opts, data, header, isImg) => {
	let headers = {
		'X-Requested-With': 'XMLHttpRequest',
		"Accept": "application/json",
		"Content-Type": "application/json; charset=UTF-8"
	}
	if (header) {
    Object.assign(headers, header)
	}
	// console.log(header)
	// console.log(headers)
	let httpDefaultOpts = {
		url: opts.url,
		data: data,
		method: opts.method,
		header: headers,
		dataType: 'json',
	}
	if (isImg) {
		httpDefaultOpts['responseType'] = 'arraybuffer'
	}
	let promise = new Promise((resolve, reject) => {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res[1])
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
}

export default httpServer