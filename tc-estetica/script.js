'use strict';
const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#mobile-menu');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menu');menu.hidden=true;}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menuButton.setAttribute('aria-label',open?'Abrir menu':'Fechar menu');menu.hidden=open;});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden){closeMenu();menuButton.focus();}});
const filters=document.querySelectorAll('.filter');
filters.forEach(button=>button.addEventListener('click',()=>{filters.forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});let count=0;document.querySelectorAll('.care-card').forEach(card=>{card.hidden=button.dataset.filter!=='todos'&&card.dataset.category!==button.dataset.filter;if(!card.hidden){count++;card.classList.add('visible');}});document.querySelector('#filter-status').textContent=`${count} ${count===1?'categoria de cuidado exibida':'categorias de cuidados exibidas'}.`;}));
document.querySelectorAll('.service-link').forEach(link=>{link.href='https://wa.me/5521967540036?text='+encodeURIComponent('Olá! Vim pelo site e gostaria de saber mais sobre '+decodeURIComponent(link.dataset.service)+'.');});
const privacy=document.querySelector('#privacy');
document.querySelector('.privacy-open').addEventListener('click',()=>privacy.showModal());
document.querySelector('.privacy-close').addEventListener('click',()=>privacy.close());
privacy.addEventListener('click',event=>{if(event.target===privacy){const rect=privacy.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)privacy.close();}});
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('motion-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
