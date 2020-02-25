import React from 'react'
import classes from "./Gallery.module.css"


const Gallery = () => {
    return(
<section id="gallery">

 <div class="container">
        <div class="row">
        <div class="gallery col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h1 class={classes.galleryTitle}>Gallery</h1>
        </div>




            <div class={ classes.gallery_product +  " col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe" }>
                <img src="/images/DSC_1426.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product + " col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle"}>
                <img src="/images/DSC_1447.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product +  " col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe" }>
                <img src="/images/DSC_1532.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation"}>
                <img src="/images/DSC_1664.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product +  " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray" }>
                <img src="/images/DSC_1615.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product +  " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation" }>
                <img src="/images/DSC_1485.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray" }>
                <img src="/images/DSC_1661.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation" }>
                <img src="/images/DSC_1551.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter irrigation" }>
                <img src="/images/DSC_1600.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter hdpe" }>
                <img src="/images/DSC_1602.jpg" class="img-responsive" />
            </div>
            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle" }>
                 <img src="/images/DSC_1633.jpg" class="img-responsive" />
            </div>

            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle" }>
                 <img src="/images/DSC_1567.jpg" class="img-responsive" />
            </div>
            {/* <div class={classes.gallery_product +" gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter spray" }>
                <img src="/images/DSC_1555.jpeg" class="img-responsive" />
            </div> */}

            {/*
            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle" }>
                 <img src="/images/DSC_1633.jpg" class="img-responsive" />
            </div>
            <div class={classes.gallery_product + " gallery_product col-lg-4 col-md-4 col-sm-4 col-xs-12 filter sprinkle" }>
                 <img src="/images/DSC_1633.jpg" class="img-responsive" />
            </div> */}
        </div>
    </div>
</section>
    )
}

export default Gallery;