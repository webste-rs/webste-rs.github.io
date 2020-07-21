<template>
	<div class="b-clients container">
		<div class="b-clients__top">
			<h2>MOST OF OUR CLIENT ARE WELL KNOWN GLOBAL AND LOCAL BRANDS</h2>
			<p>We get the exciting opportunity to work with some awesome brands on a daily basis. Below are just some of the clients we have worked with over the last few years.</p>			
		</div>   
		<div class="b-clients__wrap">
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
			<div class="b-clients__item">	
				<div class="b-clients__logo">
					<img src="~assets/img/generali-logo.svg" alt="">
				</div>	
				<div class="corner-1"></div>
				<div class="corner-2"></div>		
			</div>
		</div>
    </div>
</template>

<style scoped lang="scss">
@import "~assets/scss/base.scss";
.b-clients{
	@include breakpoint('desktop') {
		display: flex;
	    flex-wrap: wrap;
    	align-items: center;
	}
	&__top{
	    text-align: center;
		padding: 50px 0;
		h2{
		    font-size: 26px;
		    margin-bottom: 30px;
		    line-height: 30px;
		}
		@include breakpoint('desktop') {
			flex: 1;
		}
	}
	&__wrap{
    	overflow: hidden;
	    padding: 50px 0;
	    max-width: 320px;
		margin: auto;
		background: url(~assets/img/clients-back.jpg);
		background-size: contain;
		@include breakpoint('desktop') {
	    	max-width: 700px;
    		padding: 50px 30px;
		}
	}
	&__item{
		width: calc(150px / 1.552);
	    height: calc(86px / 1.552);
	    background-color: $color-grey-light;
	    background-repeat: no-repeat;
	    background-position: 50% 50%;
	    -webkit-background-size: auto 173px;
	    -moz-background-size: auto 173px;
	    -ms-background-size: auto 173px;
	    -o-background-size: auto 173px;
	    position: relative;
	    float: left;
	    margin: 20px 5px;
	    text-align: center;
	    zoom: 1;
	    z-index: 1;
		@include breakpoint('desktop') {
			width: 150px;
		    height: 86px;	
	    	margin: 25px 5px;
	    	transition: transform .3s linear;	
	    	border: 1px solid $color-white;	
	    	&:hover{
	    		transform: scale(1.2) translateY(-2px);
	    		z-index: 2;
	    		transition: transform .3s linear;
	    	}		
		}
	    &:nth-child(5n + 1){
	    	margin-left: 57px;	
			@include breakpoint('desktop') {
				margin: 25px 5px;			
			}
	    }
	    &:nth-child(7n + 1){
			@include breakpoint('desktop') {
	    		margin-left: 85px;		
			}
	    }
	    .corner-1,
	    .corner-2{
		    position: absolute;
		    top: 0;
		    left: 0;
		    width: 100%;
		    height: 100%;
		    background: inherit;
		    z-index: -2;
		    overflow: hidden;
		    -webkit-backface-visibility: hidden;
		    -moz-backface-visibility: hidden;
		    -ms-backface-visibility: hidden;
		    -o-backface-visibility: hidden;
		    backface-visibility: hidden;
			@include breakpoint('desktop') {
    		    border-left: 1px solid $color-white;
				border-right: 1px solid $color-white;
			}
		    &:before{
	    	    width: calc(173px / 1.552);
			    height: calc(173px / 1.552);
			    content: '';
			    position: absolute;
			    background: inherit;
			    top: 0;
			    left: 0;
			    z-index: 1;
			    background: inherit;
			    background-repeat: no-repeat;
			    -webkit-backface-visibility: hidden;
			    -moz-backface-visibility: hidden;
			    -ms-backface-visibility: hidden;
			    -o-backface-visibility: hidden;
			    backface-visibility: hidden;
				@include breakpoint('desktop') {
		    	    width: 173px;
				    height: 173px;				
				}
		    }
	    }
	    .corner-1{
    	    z-index: -1;
		    -webkit-transform: rotate(60deg);
		    -moz-transform: rotate(60deg);
		    -ms-transform: rotate(60deg);
		    -o-transform: rotate(60deg);
		    transform: rotate(60deg);
		    &:before{
			    -webkit-transform: rotate(-60deg) translate(-87px, 0px);
			    -moz-transform: rotate(-60deg) translate(-87px, 0px);
			    -ms-transform: rotate(-60deg) translate(-87px, 0px);
			    -o-transform: rotate(-60deg) translate(-87px, 0px);
			    transform: rotate(-60deg) translate(-87px, 0px);
			    -webkit-transform-origin: 0 0;
			    -moz-transform-origin: 0 0;
			    -ms-transform-origin: 0 0;
			    -o-transform-origin: 0 0;
			    transform-origin: 0 0;
		    }
	    }
	    .corner-2{
		    -webkit-transform: rotate(-60deg);
		    -moz-transform: rotate(-60deg);
		    -ms-transform: rotate(-60deg);
		    -o-transform: rotate(-60deg);
		    transform: rotate(-60deg);
		    &:before{
			    -webkit-transform: rotate(60deg) translate(-48px, -11px);
			    -moz-transform: rotate(60deg) translate(-48px, -11px);
			    -ms-transform: rotate(60deg) translate(-48px, -11px);
			    -o-transform: rotate(60deg) translate(-48px, -11px);
			    transform: rotate(60deg) translate(-48px, -11px);
			    bottom: 0;
		    }
	    }
	}
}
</style>