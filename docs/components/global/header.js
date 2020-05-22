import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = (props) => {
	const router = useRouter();
	return (
		<nav id='navbar' className='bd-navbar navbar has-shadow is-spaced'>
			<div className='container'>
				<div className='navbar-brand'>
					<a className='navbar-item' href=''>
						<img src='' alt='Styleup' width='112' height='28' />
					</a>
					<Link href='/projects' passHref>
						<a className='navbar-item is-hidden-desktop' href='' target='_blank'>
							<span className='icon'>
								<i className='fab fa-lg fa-github-alt'></i>
							</span>
						</a>
					</Link>
					<a className='navbar-item is-hidden-desktop' href='' target='_blank'>
						<span className='icon'>
							<i className='fab fa-lg fa-twitter'></i>
						</span>
					</a>
					<div id='navbarBurger' className='navbar-burger burger'>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
				<div className='navbar-menu'>
					<div className='navbar-start'>
						<a
							className="navbar-item bd-navbar-item-documentation {% if page.route == 'documentation' %}is-active{% endif %} {% if page.layout == 'documentation' %}is-active{% endif %}"
							href='{{ site.url }}{{ site.data.meta.documentation }}'
						>
							<span className='icon has-text-primary'>
								<i className='fas fa-book'></i>
							</span>
							<span className='is-hidden-touch is-hidden-widescreen'>Docs</span>
							<span className='is-hidden-desktop-only'>Documentation</span>
						</a>
					</div>

					<div className='navbar-end'>
						<a className='bd-navbar-icon navbar-item' href='{{ site.data.meta.github }}' target='_blank'>
							<span className='icon'>
								<i className='fab fa-lg fa-github-alt'></i>
							</span>
						</a>

						<a className='bd-navbar-icon navbar-item' href='{{ site.data.meta.twitter }}' target='_blank'>
							<span className='icon'>
								<i className='fab fa-lg fa-twitter'></i>
							</span>
						</a>

						<div className='navbar-item'>
							<div className='field is-grouped is-grouped-multiline'>
								<p className='control'>
									<a className='button is-primary' href='{{ site.data.meta.download }}'>
										<strong>Download</strong>
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Header;
