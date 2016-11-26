
export const loadOrders = () => {
  return (dispatch, getState) => {
    // var myInit = { method: 'GET',
    // headers: myHeaders,
    // mode: 'cors',
    // cache: 'default' };

    const state = getState();
    const loading = state.loading;
    const uploading = state.uploading;

    if(loading || uploading) {
      return;
    }

    const url = `https://csasfunction.azurewebsites.net/api/HttpTriggerDashboard?code=Gl7ukfnLaXkg5A/DAfi2ANDRuHrBlBtNWyvM74cosWB7g5aZJKBSGw==`;

    dispatch({
      type:'setLoading',
      loading: true
    })

    return fetch(url)
      .then((response) => {
      return response.json();
      })
      .then((data) => {
        dispatch({
          type:'setData',
          data: data
        })
        dispatch({
          type:'setLoading',
          loading: false
        })
      })
  }
}

export const confirmDelivery = (item) => {
  console.log(item);
  // var myInit = { method: 'GET',
  // headers: myHeaders,
  // mode: 'cors',
  // cache: 'default' };

  return (dispatch) => {
    //FIXME set url for order
    const url = `https://csasfunction.azurewebsites.net/api/HttpTriggerOrderDone?code=386qsjjt2asywihn0piy41v2t908nbn3121uyc0cb4zaq31y8pvixjwyub5rg923brg4eyt5zsemi`;


    var payload = {
        documentId: item.id
    };

    var data = new FormData();
    data.append( "json", JSON.stringify( payload ) );

    dispatch({
      type:'setUploading',
      uploading: true
    })

    return fetch(url,
    {
        method: "POST",
        body: JSON.stringify( payload )
    }).then(() => {
      dispatch({
        type:'setUploading',
        uploading: false
      })
      });
  }
}
