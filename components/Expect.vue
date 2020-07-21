<template>
	<div class="b-expect container">
		<h3 class="b-expect__title">{{ $t("expect.title") }}</h3>
		<div class="b-expect__wrap">
			<div 
				class="b-expect__item" 
				v-for="(item, index) in planning" 
				:id="index"
				@mouseover="moveLine(index)"
				@mouseout="removeLine" >
				<div class="arrow"></div>
				<div class="b-expect__index">0{{ index + 1 }}</div>
				<h3 class="b-expect__name">{{ item.name }}</h3>
				<p>{{ item.description }}</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			planning: [
				{
					'name': 'Planning & Research',
					'description': 'We begin by performing a rigorous audit of your market space. Who is your core audience? What are their concerns and values?'
				},
				{
					'name': 'Planning & Research',
					'description': 'We begin by performing a rigorous audit of your market space. Who is your core audience? What are their concerns and values?'
				},
				{
					'name': 'Planning & Research',
					'description': 'We begin by performing a rigorous audit of your market space. Who is your core audience? What are their concerns and values?'
				},
				{
					'name': 'Planning & Research',
					'description': 'We begin by performing a rigorous audit of your market space. Who is your core audience? What are their concerns and values?'
				},
				{
					'name': 'Planning & Research',
					'description': 'We begin by performing a rigorous audit of your market space. Who is your core audience? What are their concerns and values?'
				},
			]
		}
	},
	methods: {
		moveLine(index) {
			var items = document.querySelectorAll('.b-expect__item');
			items.forEach((item) => {
				if(index >= item.getAttribute('id')){
					item.classList.add('active')
				}
			})
		},
		removeLine(){
			var items = document.querySelectorAll('.b-expect__item');
			items.forEach((item) => {
				item.classList.remove('active')
			})			
		}
	}
}

</script>

<style scoped lang="scss">
@import "~assets/scss/base.scss";
.b-expect{
	padding: 50px 0;
	&__wrap{
		@include breakpoint('desktop') {
		    display: flex;
			flex-wrap: wrap;
		}
	}
	&__title{
		margin-bottom: 60px;
		letter-spacing: 1px;
		@include breakpoint('desktop') {
			text-align: center;
			font-size: 30px;
			margin-bottom: 100px;
		}
	}
	&__index{
		color: rgba(17,17,17,.2);
		margin-bottom: 5px;
		@include breakpoint('desktop') {
		    position: absolute;
    	    top: -8px;
		    background: $color-white;
		    padding-right: 10px;
		}
	}
	&__item{
		margin-bottom: 40px;
		@include breakpoint('desktop') {
			position: relative;
			max-width: calc(33.333333% - 80px);
		    margin: 0 40px;
			padding: 10px 0;
		    border-top: 2px solid $color-grey-light;
		    padding-bottom: 120px;
		    padding-top: 25px;
			&:before{
				content: '';
			    position: absolute;
	            top: -2px;
				left: 28px;
			    width: 0;
			    height: 2px;
			    background: $color-primary;
			    -webkit-transition: width .35s ease-in-out;
			    -o-transition: width .35s ease-in-out;
			    transition: width .35s ease-in-out;
			}
			.arrow{
				border-top: 5px solid transparent;
			    border-bottom: 5px solid transparent;
			    border-left: 6px solid $color-grey-dark;
			    position: absolute;
			    top: -6px;
			    right: 0;
			    -webkit-transition: .35s ease-in-out;
			    -o-transition: .35s ease-in-out;
			    transition: .35s ease-in-out;
			}
			&:nth-child(3){
				border-right: 2px solid $color-grey-light;
				.arrow{
					display: none;
				}
				&:after{
				    content: '';
				    position: absolute;
				    right: -2px;
				    height: 0;
				    width: 2px;
				    background: $color-primary;
				    top: -2px;
				}
			}
			&:nth-last-child(2){
				order: 5;
				flex-basis: calc(66.666666% - 80px);
    			max-width: calc(66.666666% - 80px);
			}
			&:nth-last-child(2),
			&:last-child{
    			&:before{
    				right: 0;
    				left: auto;
    			}
    			.arrow{
    				left: 28px;
    				right: auto;
				    border-right: 6px solid $color-grey-dark;
				    border-left: none;
    			}
			}
			&.active{
				&:before{
					width: calc(100% - 29px);
				}
				.arrow{
					border-left-color: $color-primary; 
				}
				&:nth-child(3){
					&:before{
						width: calc(100% - 26px);
					}
					&:after{
						-webkit-transition: height .35s ease-in-out .35s;
					    -o-transition: height .35s ease-in-out .35s;
					    transition: height .35s ease-in-out .35s;
					    height: calc(100% + 4px);
					}
				}
				&:nth-last-child(2),
				&:last-child{
					.arrow{
						border-right-color: $color-primary; 
					}
				}
			}
		}
		p{
			line-height: 30px;
			font-size: 14px;			
		}
	}
	&__name{
	    font-weight: 400;
	    line-height: 32px;
	    margin-bottom: 15px;
	}
}
</style>