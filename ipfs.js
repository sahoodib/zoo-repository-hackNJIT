const ipfs = window.IpfsHttpClient('ipfs.infura.io', '5001', { protocol: 'https' });

      $("#upload").on("change", function () {
          document.getElementById("link").innerHTML = "Starting upload... 🏹";
          var reader = new FileReader();
          reader.onload = function (e) {
              document.getElementById("link").innerHTML = "Uploading file to IPFS... ⏳";

              const magic_array_buffer_converted_to_buffer = buffer.Buffer(reader.result);
              ipfs.add(magic_array_buffer_converted_to_buffer, (err, result) => {
                  console.log(err, result);

                  let ipfsLink = "Preview : <a target='_blank' href='https://cloudflare-ipfs.com/ipfs/" + result[0].hash + "'>cloudflare-ipfs.com/ipfs/" + result[0].hash + "</a>";
                  let ipfsHash = "Hash :" + result[0].hash;
                  console.log(result[0].hash); // Debug
                  document.getElementById("hashz").innerHTML = ipfsHash;
                  document.getElementById("link").innerHTML = ipfsLink;

              })
          }
          reader.readAsArrayBuffer(this.files[0]);
      })