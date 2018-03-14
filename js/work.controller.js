var vm_data= {
	message: 'You loaded this page on ' + new Date().toLocaleString(),
	active: 'otis',
	jobs: [
		{
			// -----------JOB-otis-----------
			machine_name: "otis",
			href: "//www.otisspunkmeyer.com",
			img: "otis.jpg",
			logo: "otis-logo.png",
			title: "Otis Spunkmeyer",
			scope: "I replatformed the entire site from their old custom CMS into Drupal 8 in May 2017. They needed an easier way to manage their SEO and content and Drupal fit the bill. In November of 2017, I built off the same backend but rethemed the site. This was a massive undertaking. The PSD mockup was 37 pages for mobile/desktop.",
			skills: "CMS Structuring, Custom PHP, TWIG Templating, CSS Positioning, Flex Layout",
			//tags: ["Drupal 8"],
			// imgs: [],
			desc:
				"I replatformed the entire site from their old custom CMS into Drupal 8 in May 2017. They needed an easier way to manage their SEO and content and Drupal fit the bill. In November of 2017, I built off the same backend but rethemed the site. This was a massive undertaking. The PSD mockup was 37 pages for mobile/desktop."
		},
		{
			// -----------JOB-labrea-----------
			machine_name: "labrea",
			href: "//www.labreabakery.com/kroger",
			img: "labrea.jpg",
			logo: "labrea-logo.png",
			title: "La Brea Bakery",
			desc:
				"I Added images galleries to the Bread sections. Re-Templated the Recipes pages. Made 5 different landing pages for various product promotions."
		},
		{
			// -----------JOB-zevia-----------
			machine_name: "zevia",
			href: "//www.zevia.com/sugar-reduction",
			img: "zevia.jpg",
			logo: "zevia-logo.png",
			title: "Zevia",
			desc:
				"I Made multiple landing pages to promote things like Ferdinand the movie, Health, etc. The Sugar Reduction Landing page featured the youtube API and needed to maintain a borderless aspect ratio, as well as working across all mobile and desktop devices. I redid their current blog pages (teaser & full template). I also created bi-monthly Mailchimp templates for them in HTML from their PSDs."
		},
		{
			// -----------JOB-hark-----------
			machine_name: "hark",
			href: "//www.hark.bz",
			img: "hark.png",
			logo: "hark-logo.png",
			title: "Hark Digital",
			desc:
				"I rebuilt the current version of their site on Wordpress using wordpressify a node compiler for WP. I leveraged Masonry/Infinite scroll together to manage larger lists of content. I built this site with limited modules and lots of custom queries/templating. The contact page has a nice label slide up effect when entering input."
		},
		{
			// -----------JOB-nsb-----------
			machine_name: "nsb",
			href: "//www.nsbvt.com/mortgages/first-time-homebuying",
			img: "nsb.jpg",
			logo: "nsb-logo.png",
			title: "Northfield Savings Bank",
			desc:
				"Pathway Mortgage landing page. A fully responsive page to create a call to action for first time home buyers. Features a nicely styled jquery accordion list."
		},
		{
			// -----------JOB-cbv-----------
			machine_name: "cbv",
			href: "//www.communitybarnventures.com/client-spotlight",
			img: "cbv.png",
			logo: "cbv-logo.png",
			title: "Community Barn Ventures",
			desc:
				"I built the Client Landing Page, Individual Pages, sliders, client blocks, and Testimonials. The LP has a client grid that leverages CSS Grid and jQuery. I wrote some JS to arrange the bigger clients into predefined spaces then fills the smaller clients in around them, without any unwanted spaces. Its also completely responsive and will rearrange the grid based on screen size.<br><a target='_blank' href='//codepen.io/erawk26/pen/LQoXEw'>CodePen Example</a>"
		},
		{
			// -----------JOB-mbf-----------
			machine_name: "mbf",
			href: "//www.mbfbioscience.com",
			img: "mbf.jpg",
			logo: "mbf-logo.png",
			title: "MBF Bioscience",
			desc:
				"Added a mobile menu to their site. This proved to be quite intensive due to the way their current menu plugin was working. I also reconfigured their content templates to give the author custom control of each sections background color, borders, etc."
		},
		{
			// -----------JOB-4sight-----------
			machine_name: "foursight",
			href: "//www.go4sight.com/blog",
			img: "4sight.jpg",
			logo: "4sight-logo.png",
			title: "4 Sight",
			desc: "They had a Drupal 7 site with a lot of resources (articles, blog posts, case studies, etc) that needed to be filtered better. I added and improved upon their existing filters as well as reformatting their blog templates."
		},
		{
			// -----------JOB-baristas-----------
			machine_name: "baristas",
			href: "//baristasbeans.com",
			img: "port1.jpg",
			logo: "baristas-logo.png",
			title: "Barista's Beans",
			desc:
				"My eCommerce mobile-first site built off of Drupal 7. It featured recurring coffee subscriptions. It was very secure and easy to maintain. Everything got backed up and updated through SSH/Drush."
		},

	],
};
Vue.component('portfolio-card', {
	template:   '<a :href="card.href" :title="\'Visit \' + card.title" target="_blank" class="portfolio-card">\n' +
					'<div class="img" v-if="card.img" :style="{ \'background-image\': \'url(/img/\' + card.img + \')\' }">\n' +
						'<div class="ar"></div>\n' +
					'</div>\n' +
					'<h3>{{ card.title }}</h3>\n' +
					'<template v-if="card.skills">\n' +
						'<span class="item" >\n'+
							'<label class="scope" for="scope">Scope of Work:</label>\n' +
							'<p id="scope"  class="scope" v-html="card.scope"></p>\n' +
						'</span>\n'+
						'<span class="item" >\n'+
							'<label for="skills">Skill Improvement:</label>\n' +
							'<p id="skills" v-html="card.skills"></p>\n' +
						'</span>\n'+
					'</template>\n' +
					'<p v-else v-html="card.desc"></p>\n' +
				'</a>',
	name: 'portfolio-card',
	data: function () {
		return vm_data
	},
	computed: {
		// a computed getter
		card: function () {
			var data = this;
			return this.jobs.filter(function (job) {
				return job.machine_name == data.active;
			})[0];
		}
	},
});
var app = new Vue({
	el: '#portApp',
	data:vm_data,
	methods: {
		cardFade: function (job) {
			// this.$set(this, 'active', job);
		},
	},
	watch: {
		active: function(newValue,oldValue) {
			// TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
			// console.log('fired!',newValue);
		}
	}
});
console.log('Vue Rocks!');