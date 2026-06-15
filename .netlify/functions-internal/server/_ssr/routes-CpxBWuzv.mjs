import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as AnimatePresence, i as motion, n as useTransform, r as useScroll, t as useSpring } from "../_libs/framer-motion.mjs";
import { a as Share2, c as Moon, d as Heart, f as Facebook, i as Sun, l as Menu, m as BookOpen, n as X, o as Quote, p as Clock, r as Users, s as Music2, t as Youtube, u as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CpxBWuzv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Loader({ onDone }) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const interval = setInterval(() => {
			setProgress((p) => {
				if (p >= 100) {
					clearInterval(interval);
					return 100;
				}
				return p + 10;
			});
		}, 40);
		const done = setTimeout(() => onDone(), 500);
		return () => {
			clearInterval(interval);
			clearTimeout(done);
		};
	}, [onDone]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[oklch(0.06_0.02_265)] text-ivory",
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: { duration: .6 },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					scale: .85
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .8,
					ease: "easeOut"
				},
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -m-6 rounded-full bg-gold/20 blur-3xl animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://res.cloudinary.com/datom4le5/image/upload/v1781520042/tech565/208-2089543_logo-rccg-yaya-logo_xxlccg.jpg",
					alt: "RCCG YAYA",
					className: "relative h-32 w-32 rounded-full object-cover ring-2 ring-gold/40 sm:h-40 sm:w-40"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 8
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .4,
					duration: .6
				},
				className: "mt-8 font-display text-xl tracking-wide text-ivory sm:text-2xl",
				children: "Trailblazer Youth Choir"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 h-px w-56 overflow-hidden bg-ivory/10 sm:w-72",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "h-full bg-gradient-to-r from-gold/60 via-gold to-gold/60",
					style: { width: `${progress}%` },
					transition: { ease: "linear" }
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 text-[10px] uppercase tracking-[0.3em] text-ivory/50",
				children: [
					"Hymnody Sunday · ",
					progress,
					"%"
				]
			})
		]
	});
}
var links = [
	{
		href: "#story",
		label: "Story"
	},
	{
		href: "#hymns",
		label: "Hymns"
	},
	{
		href: "#authors",
		label: "Authors"
	},
	{
		href: "#choir",
		label: "Choir"
	},
	{
		href: "#sunday",
		label: "Sunday"
	}
];
function Nav() {
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30
	});
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [dark, setDark] = (0, import_react.useState)(true);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("light", !dark);
	}, [dark]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-transparent via-gold to-transparent",
			style: { scaleX }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: `fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? "py-3" : "py-6"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `mx-auto flex max-w-7xl items-center justify-between px-6 transition-all ${scrolled ? "rounded-full glass mx-4 sm:mx-auto" : ""}`,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "flex items-center gap-2.5 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "https://res.cloudinary.com/datom4le5/image/upload/v1781520042/tech565/208-2089543_logo-rccg-yaya-logo_xxlccg.jpg",
							alt: "RCCG YAYA Logo",
							className: "h-9 w-9 rounded-full object-cover ring-1 ring-gold/40"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden flex-col leading-none sm:flex",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base text-foreground",
								children: "Trailblazer"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] uppercase tracking-[0.25em] text-gold",
								children: "Youth Choir"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-8 md:flex",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-foreground/70 transition-colors hover:text-gold",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setDark((d) => !d),
							className: "grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition hover:border-gold hover:text-gold",
							"aria-label": "Toggle theme",
							children: dark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "h-4 w-4" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setMenuOpen((o) => !o),
							className: "grid h-9 w-9 place-items-center rounded-full border border-border text-foreground/80 transition hover:border-gold hover:text-gold md:hidden",
							"aria-label": "Toggle menu",
							children: menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: menuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: -10
			},
			animate: {
				opacity: 1,
				y: 0
			},
			exit: {
				opacity: 0,
				y: -10
			},
			transition: {
				duration: .25,
				ease: "easeInOut"
			},
			className: "fixed inset-x-0 top-20 z-30 mx-4 rounded-2xl border border-border/80 bg-background/95 p-6 shadow-2xl backdrop-blur-md md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-4",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => setMenuOpen(false),
					className: "text-base font-medium text-foreground/80 transition-colors hover:text-gold py-1",
					children: l.label
				}, l.href))
			})
		}) })
	] });
}
/** Floating dust particles + light rays — pure SVG, GPU-friendly. */
function ParticleField({ count = 40, className = "" }) {
	const particles = (0, import_react.useMemo)(() => Array.from({ length: count }, (_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 3 + 1,
		duration: Math.random() * 10 + 8,
		delay: Math.random() * 6,
		opacity: Math.random() * .5 + .15
	})), [count]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `pointer-events-none absolute inset-0 overflow-hidden ${className}`,
		"aria-hidden": true,
		children: particles.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			className: "absolute rounded-full bg-gold",
			style: {
				left: `${p.x}%`,
				top: `${p.y}%`,
				width: p.size,
				height: p.size,
				filter: "blur(0.5px)"
			},
			animate: {
				y: [
					0,
					-40,
					0
				],
				opacity: [
					p.opacity * .3,
					p.opacity,
					p.opacity * .3
				]
			},
			transition: {
				duration: p.duration,
				delay: p.delay,
				repeat: Infinity,
				ease: "easeInOut"
			}
		}, p.id))
	});
}
function FloatingNotes({ count = 8 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: (0, import_react.useMemo)(() => Array.from({ length: count }, (_, i) => ({
			id: i,
			x: Math.random() * 100,
			delay: Math.random() * 8,
			duration: Math.random() * 14 + 18,
			size: Math.random() * 14 + 14,
			rotate: Math.random() * 40 - 20
		})), [count]).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "absolute text-gold/40",
			style: {
				left: `${n.x}%`,
				bottom: -40,
				fontSize: n.size
			},
			initial: {
				y: 0,
				opacity: 0,
				rotate: n.rotate
			},
			animate: {
				y: -800,
				opacity: [
					0,
					.8,
					0
				],
				rotate: n.rotate + 30
			},
			transition: {
				duration: n.duration,
				delay: n.delay,
				repeat: Infinity,
				ease: "linear"
			},
			children: Math.random() > .5 ? "♪" : "♫"
		}, n.id))
	});
}
function LightRays() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute -top-1/3 left-1/2 h-[140%] w-[60%] -translate-x-1/2 opacity-40 animate-drift",
			style: {
				background: "conic-gradient(from 200deg at 50% 0%, transparent 0deg, oklch(0.82 0.14 85 / 0.5) 20deg, transparent 60deg, oklch(0.82 0.14 85 / 0.25) 110deg, transparent 180deg)",
				filter: "blur(40px)"
			}
		})
	});
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
	const opacity = useTransform(scrollYProgress, [0, .8], [1, 0]);
	const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative h-[100dvh] min-h-[680px] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				className: "absolute inset-0",
				style: {
					y,
					scale
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "https://res.cloudinary.com/datom4le5/image/upload/v1781522374/tech565/WhatsApp_Image_2026-06-15_at_12.19.00_x9bozj.jpg",
					alt: "",
					className: "h-full w-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[oklch(0.10_0.03_265)]/40 via-[oklch(0.10_0.03_265)]/55 to-background" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LightRays, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, { count: 50 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingNotes, { count: 6 }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: { opacity },
				className: "relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .2,
							duration: 1
						},
						className: "mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-background/30 px-4 py-1.5 backdrop-blur",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 animate-pulse rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px]  text-gradient-gold uppercase tracking-[0.35em] text-ivory/80",
							children: "RCCG Emmanuel Sanctuary · Hymnody Sunday 2026"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-5xl leading-[0.95] text-ivory sm:text-7xl md:text-[6rem]",
						children: "Trailblazer Youth Choir".split(" ").map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "mr-3 inline-block",
							initial: {
								opacity: 0,
								y: 40,
								filter: "blur(10px)"
							},
							animate: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							transition: {
								delay: .5 + i * .15,
								duration: .9,
								ease: "easeOut"
							},
							children: w
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						initial: {
							opacity: 0,
							scaleX: 0
						},
						animate: {
							opacity: 1,
							scaleX: 1
						},
						transition: {
							delay: 1.3,
							duration: 1
						},
						className: "mx-auto my-6 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 14
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 1.5,
							duration: 1
						},
						className: "font-display text-2xl italic text-gradient-gold sm:text-3xl",
						children: "Hymnody Sunday"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						transition: {
							delay: 1.8,
							duration: 1.2
						},
						className: "mt-6 max-w-xl text-balance text-base text-ivory/75 sm:text-lg",
						children: "Songs that have carried faith across generations."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: 2.1,
							duration: .9
						},
						className: "mt-10 flex flex-wrap items-center justify-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#hymns",
							className: "group inline-flex items-center gap-2 rounded-full gradient-gold px-6 py-3 text-sm font-medium text-[oklch(0.16_0.035_265)] transition-transform hover:-translate-y-0.5 ring-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" }), "Explore the Hymns"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#choir",
							className: "inline-flex items-center gap-2 rounded-full border border-ivory/30 bg-ivory/5 px-6 py-3 text-sm text-ivory backdrop-blur transition hover:border-gold hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-4 w-4" }), "Meet The Choir"]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 2.6,
					duration: 1
				},
				className: "absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-ivory/60"
			})
		]
	});
}
var line1 = "Before every hymn became a song,".split(" ");
var line2 = "it was a story.".split(" ");
function StoryIntro() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const blur = useTransform(scrollYProgress, [
		0,
		.4,
		.7,
		1
	], [
		12,
		0,
		0,
		12
	]);
	const opacity = useTransform(scrollYProgress, [
		0,
		.3,
		.7,
		1
	], [
		.2,
		1,
		1,
		.2
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "story",
		ref,
		className: "relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-aurora px-6 py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			style: {
				opacity,
				filter: useTransform(blur, (v) => `blur(${v}px)`)
			},
			className: "mx-auto max-w-4xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-display text-3xl leading-tight text-foreground sm:text-5xl md:text-6xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-6",
						children: line1.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
							className: "mr-2 inline-block",
							initial: {
								opacity: 0,
								y: 24,
								filter: "blur(8px)"
							},
							whileInView: {
								opacity: 1,
								y: 0,
								filter: "blur(0px)"
							},
							viewport: {
								once: true,
								margin: "-20%"
							},
							transition: {
								delay: i * .08,
								duration: .8
							},
							children: w
						}, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: line2.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "mr-2 inline-block text-gradient-gold italic",
						initial: {
							opacity: 0,
							y: 24,
							filter: "blur(8px)"
						},
						whileInView: {
							opacity: 1,
							y: 0,
							filter: "blur(0px)"
						},
						viewport: {
							once: true,
							margin: "-20%"
						},
						transition: {
							delay: .6 + i * .12,
							duration: .9
						},
						children: w
					}, i)) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						opacity: 0,
						scaleX: 0
					},
					whileInView: {
						opacity: 1,
						scaleX: 1
					},
					viewport: { once: true },
					transition: {
						delay: 1,
						duration: 1.2
					},
					className: "mx-auto mt-12 h-px w-40 bg-gradient-to-r from-transparent via-gold to-transparent"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: { once: true },
					transition: {
						delay: 1.2,
						duration: 1.2
					},
					className: "mt-8 text-sm uppercase tracking-[0.4em] text-muted-foreground",
					children: "Five hymns · five centuries of faith"
				})
			]
		})
	});
}
var hymns = [
	{
		id: "my-life-my-love",
		number: 1,
		title: "My Life, My Love, I Give To Thee",
		author: "Ralph E. Hudson",
		authorImage: "/assets/author-1-rZyFgmwK.jpg",
		year: 1882,
		theme: "Consecration & Total Surrender",
		scripture: {
			ref: "Galatians 2:20",
			text: "I have been crucified with Christ; it is no longer I who live, but Christ lives in me."
		},
		history: "“My Life, My Love, I Give to Thee” is a consecration hymn written by Ralph E. Hudson in 1882. It is often known by the refrain, “I’ll live for Him who died for me.” Hudson, a Methodist minister, musician, and composer, contributed many gospel hymns and tunes that emphasized devotion, surrender, and the joy of salvation. This particular hymn reflects the believer’s wholehearted response to the love of Christ, who gave His life on Calvary.\n\nThe hymn begins with a direct statement of devotion: the offering of life and love to the Savior. Each stanza deepens this theme, expressing gratitude for Christ’s atonement, a pledge of faithful service, and a desire to honor Him in every part of life. The chorus serves as both a declaration and a reminder, affirming the believer’s commitment: “I’ll live for Him who died for me, how happy then my life shall be.” Hudson ties joy to obedience, showing that true happiness is found in living fully for Christ.\n\nThis hymn has been used widely in revival meetings, evangelistic services, and personal dedication moments. Its language is simple and heartfelt, making it easy for congregations to sing as a prayer of surrender. The words remind believers of the cost of their redemption, bought through the sacrifice of Jesus, and call them to respond with total devotion. Its connection to Galatians 2:20 highlights the central truth of the Christian life: that self is crucified, and Christ lives in and through His people. Hudson’s hymn continues to inspire believers to give themselves without reserve to the Savior who gave everything for them.",
		message: "A believer's only worthy response to Calvary is the whole of life — body, mind, time and treasure — laid quietly on the altar.",
		incipit: "My life, my love I give to Thee, Thou Lamb of God who died for me…",
		hasYoruba: true,
		yorubaLyrics: `Mo f'aye at'ife mi fun
Od'aguntan to ku fun mi;
Je ki n le je olotito,
Jesu Olorun mi.

N o wa f'Eni t'O ku fun mi,
Aye mi yo si dun pupo;
N o wa f'Eni to ku fun mi,
Jesu Olorun mi.

Mo gbagbo pe Iwo n gbani
'Tori 'Wo ku k'emi le la;
Emi yo si gbekele O,
Jesu Olorun mi.

Iwo t'O ku ni Kalfari,
Lati so mi dominira;
Mo yara mi soto fun O,
Jesu Olorun mi.`
	},
	{
		id: "just-as-i-am",
		number: 2,
		title: "Just As I Am",
		author: "Charlotte Elliott",
		authorImage: "/assets/author-2-C74AAZMV.jpg",
		year: 1834,
		theme: "Grace & Acceptance",
		scripture: {
			ref: "John 6:37",
			text: "All that the Father gives Me will come to Me, and the one who comes to Me I will by no means cast out."
		},
		history: "In 1834, Charlotte Elliott was 45 years old. She lived in Brighton where her brother, a pastor, organized a bazaar to raise money to send the daughters of poor clergymen to school. Charlotte was passionate about the cause and eager to help, but, after weeks of preparation, she was too sick to attend. Left behind, home alone, feeling weak, useless, and defeated, she sank into despair.\n\nThen, out of the blue, she remembered the words of a visiting minister who had told her to come to Christ just as she was. She picked up her pen and wrote the lyrics to “Just As I Am.” Her creative energy revived, she eventually wrote close to 150 hymns; 112 of them were included in The Invalid’s Hymn Book (1836).\n\n“Just As I Am” took on a life of its own, often paired with the words of Jesus: “Whoever comes to me, I will never turn away” (John 6:37). Her hymn has been translated into many languages. Billy Graham, the 20th-century evangelist, claimed that he was converted while this hymn was being sung. From the pen of a woman alone and in pain, came a hymn text reminding us that we are always given the chance to be born again into God’s love.",
		message: "We do not clean ourselves before coming to Christ; we come, and He cleans us.",
		incipit: "Just as I am, without one plea, but that Thy blood was shed for me…",
		hasYoruba: false,
		lyrics: `1
Just as I am, without one plea,
But that Thy blood was shed for me,
And that Thou bid’st me come to Thee,
O Lamb of  God, I come! I come!

2
Just as I am, and waiting not
To rid my soul of one dark blot;
To Thee whose blood can cleanse each spot,
O Lamb of God, I come, I come!

3
Just as I am, though tossed about
With many a conflict, many a doubt;
Fightings within, and fears without,
O Lamb of God, I come, I come!

4
Just as I am, poor, wretched, blind;
Sight, riches, healing of the mind;
Yes, all I need, in Thee to find,
O Lamb of God, I come, I come!`
	},
	{
		id: "it-is-well",
		number: 3,
		title: "It Is Well With My Soul",
		author: "Horatio G. Spafford",
		authorImage: "/assets/author-3-BC808J54.jpg",
		year: 1873,
		tune: "Philip P. Bliss",
		theme: "Peace Through Suffering",
		scripture: {
			ref: "Isaiah 66:12",
			text: "For thus says the LORD: 'Behold, I will extend peace to her like a river.'"
		},
		history: "“It Is Well with My Soul” is one of the most beloved and inspiring hymns in Christian history. Its message of peace, faith, and trust in God during deep suffering has comforted millions of believers for more than a century. The hymn was written by Horatio Gates Spafford in 1873 and set to music by Philip Paul Bliss in 1876.\n\nWhat makes the hymn especially remarkable is that it was born out of one of the greatest personal tragedies a man could experience. Horatio Spafford was a successful lawyer, businessman, and devoted Christian who lived in Chicago with his wife, Anna, and their children. After losing his business assets in the Great Chicago Fire, he sent his family ahead to Europe. Their ship collided mid-Atlantic, and all four of his daughters drowned.\n\nSailing out to meet his grieving wife, near the spot where his daughters perished, Spafford put pen to paper in the middle of the ocean. The hymn reminds Christians that faith is not the absence of sorrow. Rather, it is the confidence that God remains faithful even in life's darkest moments, prompting us to declare: “It is well with my soul.”",
		message: "Faith's deepest worship is not the absence of sorrow but the presence of peace within it.",
		incipit: "When peace like a river attendeth my way, when sorrows like sea billows roll…",
		hasYoruba: true,
		lyrics: `1
When peace like a river attendeth my way,
  When sorrows like sea billows roll;
Whatever my lot Thou hast taught me to say,
  “It is well, it is well with my soul!”
 
It is well with my soul!
It is well, it is well with my soul!

2
My sin—oh, the bliss of this glorious thought—
  My sin, not in part, but the whole,
Is nailed to His Cross, and I bear it no more;
  Praise the Lord, praise the Lord, O my soul!

3 
For me, be it Christ, be it Christ hence to live;
  If dark hours about me shall roll,
No pang shall be mine, for in death as in life
  Thou wilt whisper Thy peace to my soul.`
	},
	{
		id: "no-not-one",
		number: 4,
		title: "No, Not One",
		author: "Johnson Oatman Jr.",
		authorImage: "/assets/author-4-ChueHZqy.jpg",
		year: 1895,
		theme: "The Friendship of Jesus",
		scripture: {
			ref: "Proverbs 18:24",
			text: "There is a friend who sticks closer than a brother."
		},
		history: "Johnson Oatman, Jr. was born on April 21, 1856, near Medford, New Jersey. Although his father was known as an excellent singer, Oatman himself became famous not for singing but for writing hymns. He worked in business and insurance while serving as a Methodist preacher and became one of the most prolific gospel hymn writers in history, writing thousands of hymns including “Higher Ground” and “Count Your Blessings.”\n\nThe hymn was written to remind believers that no human friend can compare to Jesus. Oatman focused on Christ's compassion, faithfulness, holiness, and unique ability to understand human struggles.\n\nIts memorable chorus: “Jesus knows all about our struggles, He will guide till the day is done,” remains a source of great encouragement for Christians around the world, reminding them that Christ is a faithful friend who never fails.",
		message: "Every human bond has a ceiling. The friendship of Jesus has none.",
		incipit: "There's not a friend like the lowly Jesus, no, not one! No, not one!",
		hasYoruba: true,
		lyrics: `
 1. Ore bi jesu kosi laye yi
 Oun nikan I ore otito
  Oro aye yi y o fi wa sile 
  Sugbon Jesu ko je gbagbe wa 
  
  Ah! Ko je gbagbe wa 2ce 
  Sugbon Jesu ko je gbagbe wa 

  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Sugbon Jesu koje gbagbe mi (But Jesus can never forget me) 

2. There’s not a Friend like the lowly Jesus:
 No, not one! no, not one! 
 None else could heal all our souls’ diseases:
  No, not one! no, not one! 

  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Aah! Ko je gbagbe mi (Aah! can never forget)
  Sugbon Jesu koje gbagbe mi (But Jesus can never forget me) 

3. There’s not an hour that He is not near us, 
No, not one! no, not one! 
No night so dark, but His love can cheer us,
 No, not one! no, not one! 
 
 Aah! Ko je gbagbe mi (Aah! can never forget)
  Aah! Ko je gbagbe mi (Aah! can never forget) 
  Sugbon Jesu koje gbagbe mi (But Jesus can never forget me)`
	},
	{
		id: "nearer-my-god",
		number: 5,
		title: "Nearer, My God, To Thee",
		author: "Sarah Flower Adams",
		authorImage: "/assets/author-5-z0zB6etE.jpg",
		year: 1841,
		theme: "Drawing Closer To God",
		scripture: {
			ref: "Genesis 28:12",
			text: "Then he dreamed, and behold, a ladder was set up on the earth, and its top reached to heaven."
		},
		history: "“Nearer, My God, to Thee” is one of the most famous Christian hymns ever written. It expresses a believer's desire to draw closer to God, even through suffering, trials, and life's difficulties. The hymn has brought comfort to Christians around the world for more than 170 years.\n\nThe hymn is based on the story of Jacob in Genesis 28:10–19. While fleeing from his brother Esau, Jacob slept in the wilderness with a stone for his pillow. During the night, he dreamed of a ladder reaching from earth to heaven with angels ascending and descending upon it.\n\nWhen Jacob awoke, he realized God was with him and declared: “Surely the Lord is in this place.” The hymn reflects Jacob's longing to draw closer to God despite hardship and loneliness.",
		message: "Even sorrow can be a stone Jacob's-pillow if it draws us nearer to God.",
		incipit: "Nearer, my God, to Thee, nearer to Thee! E'en though it be a cross that raiseth me…",
		hasYoruba: false,
		lyrics: `1
Nearer, my God, to Thee,
  Nearer to Thee;
E’en though it be a cross
  That raiseth me,
Still all my song shall be
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
2
Though, like a wanderer,
  The sun gone down,
Darkness comes over me,
  My rest a stone;
Yet in my dreams I’d be
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
3
There let me see the sight,
  An open heaven;
All that Thou sendest me,
  In mercy given;
Angels to beckon me
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
4
Then, with my waking thoughts
  Bright with Thy praise,
Out of my stony griefs
  Bethel I’ll raise,
So by my woes to be
Nearer, my God, to Thee,
Nearer, my God, to Thee,
  Nearer to Thee.
`
	}
];
hymns.map((h) => ({
	name: h.author,
	image: h.authorImage,
	year: h.year,
	hymn: h.title
}));
function HymnModal({ hymn, onClose }) {
	const [tab, setTab] = (0, import_react.useState)("story");
	const [fav, setFav] = (0, import_react.useState)(false);
	const scrollRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({ container: scrollRef });
	(0, import_react.useEffect)(() => {
		if (hymn) {
			setTab("story");
			const onKey = (e) => e.key === "Escape" && onClose();
			document.addEventListener("keydown", onKey);
			document.body.style.overflow = "hidden";
			return () => {
				document.removeEventListener("keydown", onKey);
				document.body.style.overflow = "";
			};
		}
	}, [hymn, onClose]);
	if (!hymn) return null;
	const tabs = [{
		id: "story",
		label: "Story"
	}, {
		id: "hymn",
		label: "Hymn"
	}];
	const share = async () => {
		const url = window.location.href + "#" + hymn.id;
		try {
			if (navigator.share) await navigator.share({
				title: hymn.title,
				text: `${hymn.title} — ${hymn.author}`,
				url
			});
			else await navigator.clipboard.writeText(url);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4 backdrop-blur-md",
		onClick: onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30,
				scale: .96
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: 20,
				scale: .97
			},
			transition: {
				duration: .4,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: "relative flex h-[90vh] w-full max-w-5xl overflow-hidden rounded-2xl border border-gold/20 bg-card shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "absolute left-0 right-0 top-0 z-10 h-0.5 origin-left bg-gold",
					style: { scaleX: scrollYProgress }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden w-2/5 flex-col bg-aurora p-8 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[3/4] w-full overflow-hidden rounded-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hymn.authorImage,
								alt: hymn.author,
								className: "h-full w-full object-cover",
								loading: "lazy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-4 right-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[10px] uppercase tracking-[0.3em] text-gold",
									children: hymn.year
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl text-ivory",
									children: hymn.author
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Theme",
								value: hymn.theme
							}),
							hymn.tune && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Tune",
								value: hymn.tune
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								label: "Read time",
								value: "≈ 3 min",
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" })
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: scrollRef,
					className: "relative flex-1 overflow-y-auto",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/90 px-6 py-4 backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[10px] uppercase tracking-[0.3em] text-gold",
									children: ["Hymn ", hymn.number]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "truncate font-display text-2xl text-foreground",
									children: hymn.title
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
										onClick: () => setFav((f) => !f),
										active: fav,
										label: "Favorite",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: `h-4 w-4 ${fav ? "fill-gold text-gold" : ""}` })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
										onClick: share,
										label: "Share",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
										onClick: onClose,
										label: "Close",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex gap-1 border-b border-border px-6",
							children: tabs.filter((t) => t.show !== false).map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => setTab(t.id),
								className: `relative px-4 py-3 text-sm transition ${tab === t.id ? "text-gold" : "text-muted-foreground hover:text-foreground"}`,
								children: [t.label, tab === t.id && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									layoutId: "tab-underline",
									className: "absolute inset-x-2 bottom-0 h-px bg-gold"
								})]
							}, t.id))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-6 py-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
								mode: "wait",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
									initial: {
										opacity: 0,
										y: 10
									},
									animate: {
										opacity: 1,
										y: 0
									},
									exit: {
										opacity: 0,
										y: -10
									},
									transition: { duration: .3 },
									children: [tab === "story" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-display text-xl italic text-gradient-gold",
												children: [
													"\"",
													hymn.message,
													"\""
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "leading-relaxed text-foreground/85 whitespace-pre-line",
												children: hymn.history
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-gold/20 bg-gold/5 p-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] uppercase tracking-[0.3em] text-gold",
													children: "Historical Marker"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "mt-2 text-sm text-foreground/85",
													children: [
														"Composed in ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-gold",
															children: hymn.year
														}),
														" by",
														" ",
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
															className: "text-gold",
															children: hymn.author
														}),
														".",
														hymn.tune && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
															" Music set by ",
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
																className: "text-gold",
																children: hymn.tune
															}),
															"."
														] })
													]
												})]
											})
										]
									}), tab === "hymn" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6",
										children: [
											hymn.lyrics ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-gold/15 bg-gold/5 p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-4",
													children: "Lyrics"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-xl leading-relaxed text-foreground whitespace-pre-line",
													children: hymn.lyrics
												})]
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-2",
												children: "Hymn Preview"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "font-display text-2xl leading-relaxed text-foreground sm:text-3xl",
												children: [
													"\"",
													hymn.incipit,
													"\""
												]
											})] }),
											hymn.yorubaLyrics && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-gold/15 bg-gold/5 p-6",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-[10px] uppercase tracking-[0.3em] text-gold mb-4",
													children: "Yorùbá Translation"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "font-display text-lg italic leading-relaxed text-foreground/90 whitespace-pre-line",
													children: hymn.yorubaLyrics
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted-foreground",
												children: "The full hymn will be sung in worship by the Trailblazer Youth Choir on Hymnody Sunday."
											})
										]
									})]
								}, tab)
							})
						})
					]
				})
			]
		})
	}) });
}
function Row({ label, value, icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between border-b border-border/60 pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[10px] uppercase tracking-[0.25em] text-muted-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "inline-flex items-center gap-1.5 text-foreground/90",
			children: [icon, value]
		})]
	});
}
function IconButton({ children, onClick, label, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		"aria-label": label,
		className: `grid h-9 w-9 place-items-center rounded-full border transition ${active ? "border-gold text-gold" : "border-border text-muted-foreground hover:border-gold hover:text-gold"}`,
		children
	});
}
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = import_react.useState(void 0);
	import_react.useEffect(() => {
		const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
		const onChange = () => {
			setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		};
		mql.addEventListener("change", onChange);
		setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
		return () => mql.removeEventListener("change", onChange);
	}, []);
	return !!isMobile;
}
function HymnTimeline() {
	const [active, setActive] = (0, import_react.useState)(null);
	const gridRef = (0, import_react.useRef)(null);
	const isMobile = useIsMobile();
	const { scrollYProgress } = useScroll({
		target: gridRef,
		offset: ["start end", "end start"]
	});
	const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -180]);
	const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 180]);
	const translateThird = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const third = Math.ceil(hymns.length / 3);
	const col1 = hymns.slice(0, third);
	const col2 = hymns.slice(third, third * 2);
	const col3 = hymns.slice(third * 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "hymns",
		className: "relative px-6 py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-10%"
				},
				transition: { duration: .8 },
				className: "mb-20 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-[10px] uppercase tracking-[0.4em] text-gold",
						children: "The Hymn Timeline"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl text-foreground sm:text-6xl",
						children: ["Five hymns. ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gradient-gold italic",
							children: "One eternal song."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-6 max-w-2xl text-balance text-muted-foreground",
						children: "Each hymn is a doorway into the heart of the believer who wrote it — and the God who carried them through."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: gridRef,
				className: "grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:gap-8",
						children: col1.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxCard, {
							hymn: h,
							translate: translateFirst,
							isMobile,
							onOpen: () => setActive(h)
						}, h.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:gap-8",
						children: col2.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxCard, {
							hymn: h,
							translate: translateSecond,
							isMobile,
							onOpen: () => setActive(h)
						}, h.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:gap-8",
						children: col3.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParallaxCard, {
							hymn: h,
							translate: translateThird,
							isMobile,
							onOpen: () => setActive(h)
						}, h.id))
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HymnModal, {
			hymn: active,
			onClose: () => setActive(null)
		})]
	});
}
function ParallaxCard({ hymn, translate, isMobile, onOpen }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		style: { y: isMobile ? 0 : translate },
		className: "group relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass relative overflow-hidden rounded-3xl border border-border/60 transition-all duration-500 group-hover:border-gold/40 group-hover:shadow-[0_20px_60px_-20px_oklch(0.82_0.14_85/0.35)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative aspect-[4/5] w-full overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hymn.authorImage,
						alt: hymn.author,
						loading: "lazy",
						className: "h-full w-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-background/70 font-display text-sm text-gold backdrop-blur",
						children: hymn.number
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-0 left-0 right-0 p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "inline-block rounded-full border border-gold/30 bg-background/40 px-2.5 py-0.5 text-[10px] uppercase tracking-widest text-gold backdrop-blur",
								children: [
									hymn.year,
									" · ",
									hymn.theme
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-2xl leading-tight text-foreground",
								children: hymn.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-xs text-muted-foreground",
								children: ["by ", hymn.author]
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: onOpen,
					className: "group/btn inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold/90 to-gold px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-background transition hover:brightness-110",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, { className: "h-3.5 w-3.5" }), "Story & Hymn"]
				})
			})]
		})
	});
}
function Authors() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "authors",
		className: "relative overflow-hidden bg-aurora py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .8 },
				className: "mb-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[10px] uppercase tracking-[0.4em] text-gold",
					children: "The Hymn Writers"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl text-foreground sm:text-6xl",
					children: ["Voices of ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gradient-gold",
						children: "faith past."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5",
				children: hymns.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					transition: {
						duration: .7,
						delay: i * .08
					},
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[3/4] overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: h.authorImage,
								alt: h.author,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gold/0 mix-blend-overlay transition group-hover:bg-gold/15" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "absolute bottom-0 left-0 right-0 p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] uppercase tracking-[0.3em] text-gold",
								children: h.year
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 font-display text-lg leading-tight text-ivory",
								children: h.author
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 line-clamp-1 text-xs text-ivory/60",
								children: h.title
							})
						]
					})]
				}, h.id))
			})]
		})
	});
}
var hymnal_default = "/assets/hymnal-CsGnXuPM.jpg";
function Choir() {
	const containerRef = (0, import_react.useRef)(null);
	const isMobile = useIsMobile();
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"]
	});
	const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
	const y2 = useTransform(scrollYProgress, [0, 1], [0, 120]);
	const y3 = useTransform(scrollYProgress, [0, 1], [0, -60]);
	const col1 = [
		{
			src: "https://res.cloudinary.com/datom4le5/image/upload/v1781522626/tech565/instru_dcqb31.jpg",
			alt: "Choir in worship"
		},
		{
			src: "https://res.cloudinary.com/datom4le5/image/upload/v1781522658/tech565/WhatsApp_Image_2026-06-15_at_12.21.59fsd_igomth.jpg",
			alt: "Choir praise"
		},
		{
			src: hymnal_default,
			alt: "Open hymnal"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "choir",
		ref: containerRef,
		className: "relative py-32 px-6 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "mb-20 max-w-3xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 text-[10px] uppercase tracking-[0.4em] text-gold",
							children: "The Ministry"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-4xl text-foreground sm:text-6xl",
							children: ["The voices behind ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "italic text-gradient-gold",
								children: "the worship."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-6 text-balance text-muted-foreground",
							children: [
								"We are the Trailblazer Youth Choir of RCCG Emmanuel Sanctuary—a generation called, chosen, and consecrated to proclaim God's glory through music. More than a choir, we are vessels of worship, carrying the timeless songs of faith into a new era with passion, excellence, and purpose.",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Our ministry is built on devotion, discipline, and reverence. Through every rehearsal, every harmony, and every song, we seek to create an atmosphere where hearts are transformed, lives are touched, and God alone is exalted. We are not merely singers; we are worshippers, united in one voice to declare His greatness to our generation and beyond."
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: isMobile ? 0 : y1 },
							className: "grid gap-6 md:gap-8",
							children: col1.map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								src: item.src,
								alt: item.alt
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: isMobile ? 0 : y2 },
							className: "grid gap-6 md:gap-8 md:mt-20",
							children: [{
								src: "https://res.cloudinary.com/datom4le5/image/upload/v1781522627/tech565/WhatsApp_Image_2026-06-15_at_12.21.59_blnxut.jpg",
								alt: "Choir member singing"
							}, {
								src: "https://res.cloudinary.com/datom4le5/image/upload/v1781522374/tech565/WhatsApp_Image_2026-06-15_at_12.19.00_x9bozj.jpg",
								alt: "Choir rehearsal"
							}].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								src: item.src,
								alt: item.alt
							}, idx))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							style: { y: isMobile ? 0 : y3 },
							className: "grid gap-6 md:gap-8",
							children: [{
								src: "https://res.cloudinary.com/datom4le5/image/upload/v1781522625/tech565/faf_luvupi.jpg",
								alt: "Director leading"
							}, {
								src: "https://res.cloudinary.com/datom4le5/image/upload/v1781523851/tech565/WhatsApp_Image_2026-06-15_at_12.21.59fsf_biyy0a.jpg",
								alt: "Choir voices"
							}].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
								src: item.src,
								alt: item.alt
							}, idx))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.blockquote, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "mx-auto mt-32 max-w-3xl text-center font-display text-2xl italic leading-relaxed text-foreground sm:text-3xl",
					children: ["\"We do not sing to be heard. We sing because Heaven has already heard, and we are but echoes.\"", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
						className: "mt-4 text-sm not-italic uppercase tracking-[0.3em] text-gold",
						children: "— The Choir Director"
					})]
				})
			]
		})
	});
}
function Tile({ src, alt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
		initial: {
			opacity: 0,
			y: 30
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-5%"
		},
		transition: {
			duration: .8,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		className: "group relative overflow-hidden rounded-3xl border border-border bg-card shadow-lg transition-all duration-500 hover:border-gold/40 hover:shadow-[0_20px_50px_-20px_oklch(0.82_0.14_85/0.25)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			loading: "lazy",
			className: "w-full object-cover aspect-[4/5] transition-transform duration-[1500ms] group-hover:scale-105"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100 flex items-end p-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-ivory tracking-wide transform translate-y-2 transition duration-500 group-hover:translate-y-0",
				children: alt
			})
		})]
	});
}
var TARGET = (/* @__PURE__ */ new Date("2026-03-29T09:00:00")).getTime();
function diff() {
	const d = Math.max(0, TARGET - Date.now());
	return {
		days: Math.floor(d / 864e5),
		hours: Math.floor(d / 36e5 % 24),
		minutes: Math.floor(d / 6e4 % 60),
		seconds: Math.floor(d / 1e3 % 60)
	};
}
function Countdown() {
	const [t, setT] = (0, import_react.useState)(diff);
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setT(diff()), 1e3);
		return () => clearInterval(id);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "sunday",
		className: "relative overflow-hidden bg-aurora py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: {
						opacity: 0,
						y: 16
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "mb-3 text-[10px] uppercase tracking-[0.4em] text-gold",
					children: "The Gathering"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: { duration: .8 },
					className: "font-display text-4xl text-foreground sm:text-6xl",
					children: ["Hymnody Sunday ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gradient-gold",
						children: "begins in"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-14 grid grid-cols-4 gap-3 sm:gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
							value: t.days,
							label: "Days"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
							value: t.hours,
							label: "Hours"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
							value: t.minutes,
							label: "Minutes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flip, {
							value: t.seconds,
							label: "Seconds"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
					initial: { opacity: 0 },
					whileInView: { opacity: 1 },
					viewport: { once: true },
					transition: {
						delay: .4,
						duration: 1
					},
					className: "mt-12 text-sm uppercase tracking-[0.35em] text-muted-foreground",
					children: "RCCG Emmanuel Sanctuary · 9:00 AM"
				})
			]
		})
	});
}
function Flip({ value, label }) {
	const padded = String(value).padStart(2, "0");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass relative overflow-hidden rounded-2xl px-3 py-6 sm:py-10",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "popLayout",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: {
						y: -30,
						opacity: 0,
						rotateX: -90
					},
					animate: {
						y: 0,
						opacity: 1,
						rotateX: 0
					},
					exit: {
						y: 30,
						opacity: 0,
						rotateX: 90
					},
					transition: {
						duration: .5,
						ease: "easeOut"
					},
					className: "font-display text-5xl text-gradient-gold sm:text-7xl",
					children: padded
				}, padded)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 text-[10px] uppercase tracking-[0.35em] text-muted-foreground",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-6 top-1/2 h-px bg-border" })
		]
	});
}
var quotes = [
	{
		q: "He who sings prays twice.",
		a: "St. Augustine"
	},
	{
		q: "Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.",
		a: "Kahlil Gibran"
	},
	{
		q: "A hymn is the praise of God with song; a song is the exultation of the mind dwelling on eternal things.",
		a: "Thomas Aquinas"
	},
	{
		q: "Worship is the submission of all our nature to God.",
		a: "William Temple"
	},
	{
		q: "Where words fail, music speaks.",
		a: "Hans Christian Andersen"
	},
	{
		q: "Let the word of Christ dwell in you richly… singing with grace in your hearts to the Lord.",
		a: "Colossians 3:16"
	}
];
function Quotes() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative py-32 px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				className: "mb-14 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-[10px] uppercase tracking-[0.4em] text-gold",
					children: "Reflections on Worship"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-4xl text-foreground sm:text-5xl",
					children: ["A ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "italic text-gradient-gold",
						children: "cloud of witnesses."
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: quotes.map((qu, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-10%"
					},
					transition: {
						duration: .7,
						delay: i * .08
					},
					className: "group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-7 transition hover:border-gold/40 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "mb-4 h-5 w-5 text-gold" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "font-display text-lg leading-snug text-foreground sm:text-xl",
							children: [
								"\"",
								qu.q,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-5 text-[10px] uppercase tracking-[0.3em] text-muted-foreground",
							children: ["— ", qu.a]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-gold/5 blur-3xl transition group-hover:bg-gold/15" })
					]
				}, qu.q))
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative overflow-hidden border-t border-border bg-[oklch(0.10_0.03_265)] py-20 px-6 text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 opacity-50",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-0 h-64 w-[80%] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 20
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto grid h-14 w-14 place-items-center rounded-full",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "https://res.cloudinary.com/datom4le5/image/upload/v1781520042/tech565/208-2089543_logo-rccg-yaya-logo_xxlccg.jpg",
								alt: "RCCG YAYA Logo",
								className: "h-9 w-9 rounded-full object-cover ring-1 ring-gold/40"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-display text-3xl text-ivory sm:text-4xl",
							children: "Trailblazer Youth Choir"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-base italic text-gradient-gold",
							children: "Songs that have carried faith across generations."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-10 flex flex-col items-center gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: "RCCG" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: "Youth" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { label: "Emmanuel Sanctuary" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-2",
						children: [
							Facebook,
							Instagram,
							Youtube
						].map((Icon, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							"aria-label": "Social link",
							className: "grid h-10 w-10 place-items-center rounded-full border border-ivory/15 text-ivory/70 transition hover:border-gold hover:text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-14 h-px w-full max-w-md bg-gradient-to-r from-transparent via-gold/40 to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-8 text-center text-xs text-ivory/40",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" RCCG Emmanuel Sanctuary Trailblazer Youth Choir. Hymnody Sunday 2026."
					]
				})
			]
		})]
	});
}
function Badge({ label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1.5 rounded-full border border-ivory/20 px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-ivory/70",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1 w-1 rounded-full bg-gold" }), label]
	});
}
function PrayerButton() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [request, setRequest] = (0, import_react.useState)("");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const handleSubmit = () => {
		if (!request.trim()) return;
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setOpen(false);
			setRequest("");
			toast.success("Your prayer is answered! 🙏", {
				description: "Your request was submitted successfully. The choir will lift your name in intercession.",
				duration: 5e3,
				className: "border border-gold/40 bg-[oklch(0.10_0.03_265)] text-ivory rounded-2xl shadow-xl"
			});
		}, 1200);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
		initial: {
			opacity: 0,
			scale: .8
		},
		animate: {
			opacity: 1,
			scale: 1
		},
		transition: {
			delay: 3,
			duration: .8
		},
		onClick: () => setOpen(true),
		"aria-label": "Prayer request",
		className: "fixed bottom-6 right-6 z-30 grid h-14 w-14 place-items-center rounded-full gradient-gold text-[oklch(0.16_0.035_265)] shadow-lg shadow-gold/30 transition hover:scale-105 animate-pulse-glow",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, {
			className: "h-5 w-5",
			strokeWidth: 2.5
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		onClick: () => {
			if (!submitting) setOpen(false);
		},
		className: "fixed inset-0 z-40 flex items-center justify-center bg-black/70 p-4 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				scale: .95,
				opacity: 0,
				y: 20
			},
			animate: {
				scale: 1,
				opacity: 1,
				y: 0
			},
			exit: {
				scale: .95,
				opacity: 0
			},
			onClick: (e) => e.stopPropagation(),
			className: "relative w-full max-w-md rounded-2xl border border-gold/30 bg-card p-8 ring-gold",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpen(false),
					disabled: submitting,
					className: "absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full border border-border text-muted-foreground hover:border-gold hover:text-gold disabled:opacity-30 disabled:pointer-events-none",
					"aria-label": "Close",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.3em] text-gold",
					children: "A Prayer for You"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-3 font-display text-2xl text-foreground",
					children: "Send us your request"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "The Trailblazer Youth Choir will lift your name before the Lord during our Hymnody Sunday intercession."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					placeholder: "Type your prayer request…",
					rows: 4,
					value: request,
					onChange: (e) => setRequest(e.target.value),
					disabled: submitting,
					className: "mt-5 w-full rounded-xl border border-border bg-background/50 p-3 text-sm focus:border-gold focus:outline-none disabled:opacity-50"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: handleSubmit,
					disabled: submitting || !request.trim(),
					className: "mt-4 w-full rounded-full gradient-gold py-3 text-sm font-medium text-[oklch(0.16_0.035_265)] transition hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none",
					children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-[oklch(0.16_0.035_265)] border-t-transparent" }), "Submitting in Faith..."] }) : "Submit with Faith"
				})
			]
		})
	}) })] });
}
function Index() {
	const [loaded, setLoaded] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative overflow-x-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: !loaded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, { onDone: () => setLoaded(true) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StoryIntro, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HymnTimeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Authors, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Choir, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quotes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Countdown, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrayerButton, {})
		]
	});
}
//#endregion
export { Index as component };
