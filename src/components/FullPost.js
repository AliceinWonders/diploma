import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jp from "jsonpath";
import { YMaps, Map, Polyline } from '@pbe/react-yandex-maps';

function FullPost() {
    const [post, setPost] = useState({});
    const { id } = useParams();
    const mapRef =React.useRef(null)
    useEffect(() => {
        console.log(id)
        const options = {
            method: 'GET',
        };
        fetch('https://localhost:7294/Articles/searchById/' + id, options)
            .then(response => response.json())
            //.then(response => console.log(jp.query(response, '$.hits.hits[*]')))
            .then(response => setPost(jp.query(response, '$.hits.hits[*]')[0]))
            .catch(err => console.error(err));
    }, [id])
    console.log(post)

    return (
        <div className="FullPost">
            <div class="full-card-photo">
                <div class="full-card-profile">
                    <img class="full-card-icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX///8CBAMAAADv7+/8/Pz39/fp6enY2Njh4eHy8vLc3Nz5+fm4uLiurq7n5+fi4uKMjIzT09PMzMx6enqkpKRpaWkRExJISEi8vLw4ODhycnJlZWWio6JbW1uqqqoLDQyWlpaDg4NTU1MrLCtBQUExMTGYmJh4eHhGRkY8Pj3ExMSNjo4bHBwnJycfHx9PUE9lepKoAAAOIUlEQVR4nNVd2WLqIBC1aNS6tY37HrW21qX+/99dU9cZIDIwJLnnsVXgCAzDbBQK3vFa2TYnu9F0Mzzse/P5vLc/rDfT0fukOai8+u/eJ4JqM+oOBcDLywv8w7q7a9aCUtZjJeO1Olv076T0uHzms92p/T/zGdQm48NzbhLP3/HX/7Bqy4PRmkQO0jx0G62sKSShNVvOLek9sOx3qlkTUaPe7LuxeyD5M8vfcg27LPTuJKfbrCk94nXyy0fvRnIeFbMmdkG1zU3vRnJUyZrcCeHYD78Lx8wX63bpj9+FZH+QIb/w6JnfmeNnVvNYMZ4/oYMpx/5HBvyK3ecjvBKZ97+jTnMQVqqtcrHcqn6Eg2Yn+u7PTZkKMS6nTfDLTKUetmfbpLGVt8320ExB36V6/whXiSM6X4tGDVNZX2l8r5+xFGKf3nYsjpLGcmY3oOqWb4PRMJlkeku10Uvm148qdauG65Won8zxpcnMRYVYwiTQ23y5XQzevjYJJNOYxsFe2//pH4uKuzgo1RYvCRx7DQYWCWjr+o6vPA0uaVdq6CfypKwy9aJCWSdCT+Pp8irJNe1xK8SvNzPAQM9vwb89ygs9R08r9V3dYczPz0Wu+K7heOrRQ3evY2VvpzG0/Ym3subqebpVsf+o1aHm1+zWuLsCqGkOJ7FmNleFL+qf8jPk7UfV9Y9mGlm7bmg66XB2okVH0zujvFF24WMvaFBcqgfA9gPvFO0LbyJbCeUiEiLiaV11SpwUxHRNfcWpchTvHG0vlE3POJomQbVVWCguVMvjx+8RoUZFcWAxUFQQPOm+dvc/V9QVZ6Mzxfd8rNArJiqKkUuLX6oW/R/yemxVA3L4xZuK9lapm/UA3g4KitZWcdUPtsxmC94R9BUULQ3GNQVBn/drQ5TG8rBe3mxaKivWg49rGR1teWBDC59x6Si3s+MfrRXkI0yM6a0ofqjIZVStsLnoLvubzaa/HLc7oZPOsGP49WecBFuN7lryOx2mM3uWEkWyQJWljPUSfe0MVT6JM8vISkQUFAtVCNIxVpcHZClkwmmCMyL+16flYSbtIrGifF0SyJbHxPbTwMd4aFpZkrvSGNvmX5Y2oVjajCHsG3l5hVjbzGMJH/2ErVjFAxMrC00myYUjcVxaWM4CfGCLveGtXDoJiZv4jOacEsQgxITeRUuaia7ZF78kgvTbRJDoRFVStLBrhagTQ9uRvEbpt5Pqmh6FIvZ0/bmDh9oz+ZmkDUwXo4pLiQlFC+vdyGKwTfydIVnKqO3HJhTJBtA6tt0831Gv0tImq1aKe7MxR7K8wcqXODz7xggTJG9CB4I2FGeY4lfy5yt40qfUHnVuVEOG9L04xnOSLGw2tI/L+HAM5aMfTUU8iYmH4gBPIfUXfV25xiqKX6p6McCzkhRRgMZHV0enDJHsrp0mNTBzXaMTjmjTZ7JCApL/CQsdq7Lk40lSh+wYkg8oPDNH3QeRDiR+iB0VZOOVHcU+teMNmkRNFGOwMp1sDRps+RZUAYdUcN1OxHNteBW5Y87GUFC7HplMTmmIPkXdDVjRd6FIVW2QBFCbT/GxQrB6nME2hafO59TOF2h6VDaDI/oM9eDFlxI3itRQ2SL8fVXzgzRSuvVQHTRly3BI7X6HJkh2ZOC9mrZCihiSHWZIPZV3ciCeznIyZD+HG0XyGoIOefme2HHchYGzyo0YrgPiCPAk4gMDnfbks/CDl6CNX3eUSAHLGXJIsyJow5Ei2RNURcsQ2pfQcULWSAtLdoZk6wI+76Dqt0/6pwHKyvhTJ4ZGpk8AqLNA/R1qruKF7AzC9h0OinT/KUjmgdISinoLXyGjTnobBT0DCJ36Dw2UkCSlp06o4vtcGdID1qD+/XiHgvqI2NA9lpK7koGhhVMWyBrRuy9TNLtUO4nCW8nBkC5MkZ3owWPahzuUHj3ArdH8jeOH7pZ9g4vxtgqgp5FuJSkUXpNSEm0ZHqh6WwEdy3enEjpHIguGHpLWxd4ikusLrsbrgfMN/2yRhOaFYc+CIXRFXc2h9U/11GbN0GYOobHpqn2XNduTwjAv+xDqLmJ1bmKgE7HmyIssjR3soI3zsfDuelacFsfGA0OrKKUWuAJcFDfguhFrm3blMDEGhnaBZnAj/mnYdWCHE99W7TJbae6jcxvJ2UdTdrwa/oHFrYYY2lUXGMA9F8h/skvJDnNxP4yBTsRYqiA1wKpZdOKwEKTf8c+ADOMlCTUauoXmD/zC1E6UngD1l6igFD4WYBc11hlbC0l/EYoDhI4tO0PbwknAQxT7P4JkS7Epir/MNu+Vjc4WI8RyBVrJyA6ZG5jtGJbnciG27oN2Ari8bEVpgXuZWidrnQAZ1tCy3Vu3W2JVvun+wzug1XQLtRFrEV2Qg6fdGDpkTR6R6FywHBYF3lswdquQADXTDpQQFobEOxjdT07jgEraDlmnXJKY5VQia4L2Aq+APAwnmfwjqXE8TTsxdCpaBmXnFDp/dQFhhljzUBSfTqOAl6U+9Bw6nEIxeOIxLILnAaBSMyzMQeOOhXtYhI2TmCkgLU2sEEPHZHsOD41YOpZ9A/588VuArbuW0X5zDm4Te9eSBsAsI3qIoa1Cf4NdQtDDCNyLUkDDE2boXjEBZ3hQCbpXLoKXizn3HBYKkQNFqzREjDJiCCUNA0NdbT4jghFD/y20SuFdg6X4k+0sssxgbE98bHNfANYHK6eFDLvkLq7qYSDEThygpmVpD5YQWnjbxC9T0W6o06yReZGrflD5mEYesBpQL/1Etye+GvaKAkyJBPkKFMK7xRJGZbpdWyBaz+sp3PkdGevbQbtMF/lHWYTZFY2Dz5oKWoD4J7FAjFmq9N1Q76wNyskP7epiaDFCcwZXrUWpnkQEjaQHIv7ekxlw19b6RPtui2QrO2rvP8oCLvEfNzueAxhAINkJNQAnE5AO9epkPBcY+1Gn5eW5A2jz/sCeGV9PLJTKg8livDn0evtVv/s+2RZ99fQmOWLgpGbxGAgvZEcMozkxF+ggtRQL1yjrATpjJB0OX0jJ+d+xlg54kL0relkP0BXQt/DnpmjBnZnr5wcN8CFLTpiX52jX16FUD4LX4hVBENR9HRZQRzubZeD9iaX6YzlsdN67081wHT8fq3/Qqrf/XQ0/j9PxaBHNGiHHBQN6C4d/PyT0kbp5RQqFyqx90FJ6iuHC9ZVO6Gk6xzsgUWP/Q5ZqX1OhqpFojLM61x7Ym95RWNv5NoiSESwNGfWPxcqFHKTZtSUJ6zpc7E6BfIKQUd0NWdjdSf4urHxscBtew/3hXzf0ZrdTTno3khavO8KA81ti0QwKWOqVrcE6fYAj+eVDdBpeDwa0O2nWqEbyI3OuHDc0sYBS1q83JVjWjZQzFlqUDyRynBL8iTDMVfzezgWUFmTcZFn9fhA3yciYIVqNd6sTSsMwXaZurkICxZXpvVybJlvcWyzTt2U6BP84mj1gibKeHuMuYFKJ0f2iyZ6fnkixbxIlAgs7gHMP1pYxCPcofac2gZcxvRjYV9p6GrBqxvO60WVznwQbxefKFrr8wsAjWPThmW5aSZ3f34ifyQe0EmEQLlJYk437rhElthCrZHUchtUhf10JFXdJOhKdCpQ6QeyTNEokZ3BMAirukhArrH4FLR2IXsKFAxaIlKyG+AfQhp1kSTCmqI00eEPLUPJJrswOjOyW6GVg2ln8RnOkmBvYkHoSsxIyDyPbq/URVKBdYVHDxb6Uk6h4XCd1aHK8cdE9haxEH1Flw/tIu6dDmUGIp1BVygvv1Ej+yE8eCKqHD3ehxksIc7PEXJrn73wQVIWMoO2jcTDhMqe47J5tMXl+yGG2uKi3JnwFHZkoyM09wJkP4gAVFiTixafmOok/B6eaoZA1H+BWRMVlEzzZx4QPyg9AZQpgakHVAMSP1iKAd+JD2Dd/OrobHhVrqe58QhAZqg34sBY8FL5ww8MNDy+9JPcZvtreZJaHmgmuuI0NFdl+ks+A8pXF/qIhMeVsceJag1Vao8mmAOnjI9XPlA9cLvH43YBnlsIIf/5PnnookuSOsyCUngt6luhbwq8HzN+YC1nzIb7/SJJj/jSYE+fVxwXq5Pc6c4ETG3zWG0Wq4+II4h2/XJIbiA4uOGLkkShi/VPkSCFFkJ4XMwt4knZdbglKMM1Fz53+Ygpj5245l4fDc4gX42ij/Nx1KRCUCAT8JN1/AVoJO+aKQWlA9EjhjtIDmLkHOQ7ov9uK9KQ0DxW6fcKisk6J/S0AnxBTi5jjooeqq74gVlZRsXlww5jBuhpK9q40MzhUmsjaHWoGpyx31gplnuBYp+A/ODNc8yc8FAjmhUuJuf+CojvBnFPkIJhnioKHYCxu8slR8CRpxdjlkiJTOZszsg31UoOrnM0Fbu+J+wBDUTCIj32+KIq1Y3lAGS0PDx5Zg7FezwPqo9ysVLZTAmOSE4rMMuYRmUSwy/x+PeabB9PMOQrLt0uMkfVKFT3vlTtq/Swj2cXYtfanAUq0OmWsBF8Ya5ElIaNpTGcCL0gp8xDy2/spaKHBa8rHvzBNQWREZZMeR5HqAr1j4DnL+YFgP6vyVU2PmeoP/DapbkCIYOY/W/3IWlSRjnrTYzqpXeUIdpR8VMW48Bsx1cR1RrXNU7cF0ptHHm651ig11eUfrenlYnkiVKMDC8m4kZ+Za4F/T/h4HzqSjL/en7AbmThRm0znlizjrx26rpWw0kA5XByJ9bDOFbCmUSWni1OBYhh1DyZ1v65VzNqd2v/D7op6MZwsjqAeHaT1h8N4N6sEad8bWFF6Cxud6HvaXx9654cY5vvD8DhefM0aHyncGP4BAQro1L+kjyUAAAAASUVORK5CYII="></img>
                    <div class="full-card-info">
                        <p class="full-card-author">{post._source?.author.first_name} {post._source?.author.last_name}</p>
                        <p class="full-card-date">Опубликовано {post._source?.date}</p>
                    </div>
                    <div class="line" />
                </div>
                <p class="full-card-title">{post._source?.title}</p>
                <div class="line" />
                <img class="full-card-travel-photo" src={"https://localhost:7294" + post._source?.photo}></img>
                <div class="line" />
            </div>
            <div class="full-card-text">
                <p class="full-card-text-content">{post._source?.content}</p>
            </div>
            <div class="map-container">
            <p class="full-card-title">Маршрут</p>
            <YMaps >
                    <div>
                        <Map defaultState={{center: post._source?.route[1],zoom: 5,    }} 
                        width={500} height={300}
                        instanceRef={mapRef}
                         >
                            <Polyline
                                geometry={post._source?.route}
                                options={{
                                    balloonCloseButton: false,
                                    strokeColor: "#ff0000",
                                    strokeWidth: 4,
                                    strokeOpacity: 0.5,
                                }}
                            />
                        </Map>
                    </div>
                </YMaps>
                </div>
        </div>
    )
}

export default FullPost;