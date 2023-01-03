"use strict";
(self.webpackChunktest_theme_noble =
  self.webpackChunktest_theme_noble || []).push([
  [682],
  {
    4682: (Rr, te, g) => {
      g.r(te), g.d(te, { PublicModule: () => jr });
      var $ = g(529),
        l = g(433),
        C = g(6895),
        ne = g(8176),
        I = g(4004),
        Me = g(262),
        we = g(9646),
        e = g(1571),
        D = g(2953),
        v = g(1135),
        Ze = g(9751),
        T = g(7579),
        Qe = (g(9841), g(3900)),
        h = (g(5698), g(2722));
      const ie = ["*"];
      class x {
        constructor(o) {
          (this._ngZone = o),
            (this._pending = []),
            (this._listeners = []),
            (this._targetStream = new v.X(void 0));
        }
        _clearListeners() {
          for (const o of this._listeners) o.remove();
          this._listeners = [];
        }
        getLazyEmitter(o) {
          return this._targetStream.pipe(
            (0, Qe.w)((t) => {
              const n = new Ze.y((a) => {
                if (!t)
                  return void this._pending.push({
                    observable: n,
                    observer: a,
                  });
                const r = t.addListener(o, (s) => {
                  this._ngZone.run(() => a.next(s));
                });
                return this._listeners.push(r), () => r.remove();
              });
              return n;
            })
          );
        }
        setTarget(o) {
          const t = this._targetStream.value;
          o !== t &&
            (t && (this._clearListeners(), (this._pending = [])),
            this._targetStream.next(o),
            this._pending.forEach((n) => n.observable.subscribe(n.observer)),
            (this._pending = []));
        }
        destroy() {
          this._clearListeners(),
            (this._pending = []),
            this._targetStream.complete();
        }
      }
      const P = {
        center: { lat: 37.421995, lng: -122.084092 },
        zoom: 17,
        mapTypeId: "roadmap",
      };
      let b = (() => {
        class i {
          constructor(t, n, a) {
            if (
              ((this._elementRef = t),
              (this._ngZone = n),
              (this._eventManager = new x(this._ngZone)),
              (this.height = "500px"),
              (this.width = "500px"),
              (this._options = P),
              (this.mapInitialized = new e.vpe()),
              (this.authFailure = new e.vpe()),
              (this.boundsChanged =
                this._eventManager.getLazyEmitter("bounds_changed")),
              (this.centerChanged =
                this._eventManager.getLazyEmitter("center_changed")),
              (this.mapClick = this._eventManager.getLazyEmitter("click")),
              (this.mapDblclick =
                this._eventManager.getLazyEmitter("dblclick")),
              (this.mapDrag = this._eventManager.getLazyEmitter("drag")),
              (this.mapDragend = this._eventManager.getLazyEmitter("dragend")),
              (this.mapDragstart =
                this._eventManager.getLazyEmitter("dragstart")),
              (this.headingChanged =
                this._eventManager.getLazyEmitter("heading_changed")),
              (this.idle = this._eventManager.getLazyEmitter("idle")),
              (this.maptypeidChanged =
                this._eventManager.getLazyEmitter("maptypeid_changed")),
              (this.mapMousemove =
                this._eventManager.getLazyEmitter("mousemove")),
              (this.mapMouseout =
                this._eventManager.getLazyEmitter("mouseout")),
              (this.mapMouseover =
                this._eventManager.getLazyEmitter("mouseover")),
              (this.projectionChanged =
                this._eventManager.getLazyEmitter("projection_changed")),
              (this.mapRightclick =
                this._eventManager.getLazyEmitter("rightclick")),
              (this.tilesloaded =
                this._eventManager.getLazyEmitter("tilesloaded")),
              (this.tiltChanged =
                this._eventManager.getLazyEmitter("tilt_changed")),
              (this.zoomChanged =
                this._eventManager.getLazyEmitter("zoom_changed")),
              (this._isBrowser = (0, C.NF)(a)),
              this._isBrowser)
            ) {
              const r = window;
              (this._existingAuthFailureCallback = r.gm_authFailure),
                (r.gm_authFailure = () => {
                  this._existingAuthFailureCallback &&
                    this._existingAuthFailureCallback(),
                    this.authFailure.emit();
                });
            }
          }
          set center(t) {
            this._center = t;
          }
          set zoom(t) {
            this._zoom = t;
          }
          set options(t) {
            this._options = t || P;
          }
          ngOnChanges(t) {
            (t.height || t.width) && this._setSize();
            const n = this.googleMap;
            n &&
              (t.options && n.setOptions(this._combineOptions()),
              t.center && this._center && n.setCenter(this._center),
              t.zoom && null != this._zoom && n.setZoom(this._zoom),
              t.mapTypeId && this.mapTypeId && n.setMapTypeId(this.mapTypeId));
          }
          ngOnInit() {
            this._isBrowser &&
              ((this._mapEl =
                this._elementRef.nativeElement.querySelector(".map-container")),
              this._setSize(),
              this._ngZone.runOutsideAngular(() => {
                this.googleMap = new google.maps.Map(
                  this._mapEl,
                  this._combineOptions()
                );
              }),
              this._eventManager.setTarget(this.googleMap),
              this.mapInitialized.emit(this.googleMap));
          }
          ngOnDestroy() {
            this._eventManager.destroy(),
              this._isBrowser &&
                (window.gm_authFailure = this._existingAuthFailureCallback);
          }
          fitBounds(t, n) {
            this._assertInitialized(), this.googleMap.fitBounds(t, n);
          }
          panBy(t, n) {
            this._assertInitialized(), this.googleMap.panBy(t, n);
          }
          panTo(t) {
            this._assertInitialized(), this.googleMap.panTo(t);
          }
          panToBounds(t, n) {
            this._assertInitialized(), this.googleMap.panToBounds(t, n);
          }
          getBounds() {
            return (
              this._assertInitialized(), this.googleMap.getBounds() || null
            );
          }
          getCenter() {
            return this._assertInitialized(), this.googleMap.getCenter();
          }
          getClickableIcons() {
            return (
              this._assertInitialized(), this.googleMap.getClickableIcons()
            );
          }
          getHeading() {
            return this._assertInitialized(), this.googleMap.getHeading();
          }
          getMapTypeId() {
            return this._assertInitialized(), this.googleMap.getMapTypeId();
          }
          getProjection() {
            return (
              this._assertInitialized(), this.googleMap.getProjection() || null
            );
          }
          getStreetView() {
            return this._assertInitialized(), this.googleMap.getStreetView();
          }
          getTilt() {
            return this._assertInitialized(), this.googleMap.getTilt();
          }
          getZoom() {
            return this._assertInitialized(), this.googleMap.getZoom();
          }
          get controls() {
            return this._assertInitialized(), this.googleMap.controls;
          }
          get data() {
            return this._assertInitialized(), this.googleMap.data;
          }
          get mapTypes() {
            return this._assertInitialized(), this.googleMap.mapTypes;
          }
          get overlayMapTypes() {
            return this._assertInitialized(), this.googleMap.overlayMapTypes;
          }
          _setSize() {
            if (this._mapEl) {
              const t = this._mapEl.style;
              (t.height =
                null === this.height ? "" : re(this.height) || "500px"),
                (t.width =
                  null === this.width ? "" : re(this.width) || "500px");
            }
          }
          _combineOptions() {
            const t = this._options || {};
            return {
              ...t,
              center: this._center || t.center || P.center,
              zoom: this._zoom ?? t.zoom ?? P.zoom,
              mapTypeId: this.mapTypeId || t.mapTypeId || P.mapTypeId,
            };
          }
          _assertInitialized() {}
        }
        return (
          (i.ɵfac = function (t) {
            return new (t || i)(e.Y36(e.SBq), e.Y36(e.R0b), e.Y36(e.Lbi));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["google-map"]],
            inputs: {
              height: "height",
              width: "width",
              mapTypeId: "mapTypeId",
              center: "center",
              zoom: "zoom",
              options: "options",
            },
            outputs: {
              mapInitialized: "mapInitialized",
              authFailure: "authFailure",
              boundsChanged: "boundsChanged",
              centerChanged: "centerChanged",
              mapClick: "mapClick",
              mapDblclick: "mapDblclick",
              mapDrag: "mapDrag",
              mapDragend: "mapDragend",
              mapDragstart: "mapDragstart",
              headingChanged: "headingChanged",
              idle: "idle",
              maptypeidChanged: "maptypeidChanged",
              mapMousemove: "mapMousemove",
              mapMouseout: "mapMouseout",
              mapMouseover: "mapMouseover",
              projectionChanged: "projectionChanged",
              mapRightclick: "mapRightclick",
              tilesloaded: "tilesloaded",
              tiltChanged: "tiltChanged",
              zoomChanged: "zoomChanged",
            },
            exportAs: ["googleMap"],
            features: [e.TTD],
            ngContentSelectors: ie,
            decls: 2,
            vars: 0,
            consts: [[1, "map-container"]],
            template: function (t, n) {
              1 & t && (e.F$t(), e._UZ(0, "div", 0), e.Hsn(1));
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          i
        );
      })();
      const ke = /([A-Za-z%]+)$/;
      function re(i) {
        return null == i ? "" : ke.test(i) ? i : `${i}px`;
      }
      const qe = { position: { lat: 37.421995, lng: -122.084092 } };
      let K = (() => {
          class i {
            constructor(t, n) {
              (this._googleMap = t),
                (this._ngZone = n),
                (this._eventManager = new x(this._ngZone)),
                (this.animationChanged =
                  this._eventManager.getLazyEmitter("animation_changed")),
                (this.mapClick = this._eventManager.getLazyEmitter("click")),
                (this.clickableChanged =
                  this._eventManager.getLazyEmitter("clickable_changed")),
                (this.cursorChanged =
                  this._eventManager.getLazyEmitter("cursor_changed")),
                (this.mapDblclick =
                  this._eventManager.getLazyEmitter("dblclick")),
                (this.mapDrag = this._eventManager.getLazyEmitter("drag")),
                (this.mapDragend =
                  this._eventManager.getLazyEmitter("dragend")),
                (this.draggableChanged =
                  this._eventManager.getLazyEmitter("draggable_changed")),
                (this.mapDragstart =
                  this._eventManager.getLazyEmitter("dragstart")),
                (this.flatChanged =
                  this._eventManager.getLazyEmitter("flat_changed")),
                (this.iconChanged =
                  this._eventManager.getLazyEmitter("icon_changed")),
                (this.mapMousedown =
                  this._eventManager.getLazyEmitter("mousedown")),
                (this.mapMouseout =
                  this._eventManager.getLazyEmitter("mouseout")),
                (this.mapMouseover =
                  this._eventManager.getLazyEmitter("mouseover")),
                (this.mapMouseup =
                  this._eventManager.getLazyEmitter("mouseup")),
                (this.positionChanged =
                  this._eventManager.getLazyEmitter("position_changed")),
                (this.mapRightclick =
                  this._eventManager.getLazyEmitter("rightclick")),
                (this.shapeChanged =
                  this._eventManager.getLazyEmitter("shape_changed")),
                (this.titleChanged =
                  this._eventManager.getLazyEmitter("title_changed")),
                (this.visibleChanged =
                  this._eventManager.getLazyEmitter("visible_changed")),
                (this.zindexChanged =
                  this._eventManager.getLazyEmitter("zindex_changed"));
            }
            set title(t) {
              this._title = t;
            }
            set position(t) {
              this._position = t;
            }
            set label(t) {
              this._label = t;
            }
            set clickable(t) {
              this._clickable = t;
            }
            set options(t) {
              this._options = t;
            }
            set icon(t) {
              this._icon = t;
            }
            set visible(t) {
              this._visible = t;
            }
            ngOnInit() {
              this._googleMap._isBrowser &&
                (this._ngZone.runOutsideAngular(() => {
                  this.marker = new google.maps.Marker(this._combineOptions());
                }),
                this._assertInitialized(),
                this.marker.setMap(this._googleMap.googleMap),
                this._eventManager.setTarget(this.marker));
            }
            ngOnChanges(t) {
              const {
                marker: n,
                _title: a,
                _position: r,
                _label: s,
                _clickable: c,
                _icon: u,
                _visible: p,
              } = this;
              n &&
                (t.options && n.setOptions(this._combineOptions()),
                t.title && void 0 !== a && n.setTitle(a),
                t.position && r && n.setPosition(r),
                t.label && void 0 !== s && n.setLabel(s),
                t.clickable && void 0 !== c && n.setClickable(c),
                t.icon && u && n.setIcon(u),
                t.visible && void 0 !== p && n.setVisible(p));
            }
            ngOnDestroy() {
              this._eventManager.destroy(),
                this.marker && this.marker.setMap(null);
            }
            getAnimation() {
              return (
                this._assertInitialized(), this.marker.getAnimation() || null
              );
            }
            getClickable() {
              return this._assertInitialized(), this.marker.getClickable();
            }
            getCursor() {
              return this._assertInitialized(), this.marker.getCursor() || null;
            }
            getDraggable() {
              return this._assertInitialized(), !!this.marker.getDraggable();
            }
            getIcon() {
              return this._assertInitialized(), this.marker.getIcon() || null;
            }
            getLabel() {
              return this._assertInitialized(), this.marker.getLabel() || null;
            }
            getOpacity() {
              return (
                this._assertInitialized(), this.marker.getOpacity() || null
              );
            }
            getPosition() {
              return (
                this._assertInitialized(), this.marker.getPosition() || null
              );
            }
            getShape() {
              return this._assertInitialized(), this.marker.getShape() || null;
            }
            getTitle() {
              return this._assertInitialized(), this.marker.getTitle() || null;
            }
            getVisible() {
              return this._assertInitialized(), this.marker.getVisible();
            }
            getZIndex() {
              return this._assertInitialized(), this.marker.getZIndex() || null;
            }
            getAnchor() {
              return this._assertInitialized(), this.marker;
            }
            _combineOptions() {
              const t = this._options || qe;
              return {
                ...t,
                title: this._title || t.title,
                position: this._position || t.position,
                label: this._label || t.label,
                clickable: this._clickable ?? t.clickable,
                map: this._googleMap.googleMap,
                icon: this._icon || t.icon,
                visible: this._visible ?? t.visible,
              };
            }
            _assertInitialized() {}
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(b), e.Y36(e.R0b));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["map-marker"]],
              inputs: {
                title: "title",
                position: "position",
                label: "label",
                clickable: "clickable",
                options: "options",
                icon: "icon",
                visible: "visible",
              },
              outputs: {
                animationChanged: "animationChanged",
                mapClick: "mapClick",
                clickableChanged: "clickableChanged",
                cursorChanged: "cursorChanged",
                mapDblclick: "mapDblclick",
                mapDrag: "mapDrag",
                mapDragend: "mapDragend",
                draggableChanged: "draggableChanged",
                mapDragstart: "mapDragstart",
                flatChanged: "flatChanged",
                iconChanged: "iconChanged",
                mapMousedown: "mapMousedown",
                mapMouseout: "mapMouseout",
                mapMouseover: "mapMouseover",
                mapMouseup: "mapMouseup",
                positionChanged: "positionChanged",
                mapRightclick: "mapRightclick",
                shapeChanged: "shapeChanged",
                titleChanged: "titleChanged",
                visibleChanged: "visibleChanged",
                zindexChanged: "zindexChanged",
              },
              exportAs: ["mapMarker"],
              features: [e.TTD],
            })),
            i
          );
        })(),
        Ge = (() => {
          class i {}
          return (
            (i.ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵmod = e.oAB({ type: i })),
            (i.ɵinj = e.cJS({})),
            i
          );
        })();
      function He(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "map-marker", 8),
            e.NdJ("mapDragend", function (a) {
              const s = e.CHM(t).$implicit,
                c = e.oxw(2);
              return e.KtG(c.markerDragEnd(s, a));
            }),
            e.qZA();
        }
        if (2 & i) {
          const t = o.$implicit,
            n = e.oxw(2);
          e.Q6J("position", t)("options", n.markerOptions);
        }
      }
      function $e(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div")(1, "google-map", 6),
            e.NdJ("mapClick", function (a) {
              e.CHM(t);
              const r = e.oxw();
              return e.KtG(r.addMarker(a));
            }),
            e.YNc(2, He, 1, 2, "map-marker", 7),
            e.qZA()();
        }
        if (2 & i) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("options", t.options),
            e.xp6(1),
            e.Q6J("ngForOf", t.markerPositions);
        }
      }
      function We(i, o) {
        1 & i &&
          (e.TgZ(0, "ngb-alert", 9),
          e._UZ(1, "i", 10),
          e._uU(2, " Debe indicar una ubicaci\xf3n "),
          e.qZA()),
          2 & i && e.Q6J("dismissible", !1)("type", "danger");
      }
      let Ke = (() => {
        class i {
          constructor(t, n) {
            (this.activeModal = n),
              (this.options = {
                center: { lat: -12.044471659367696, lng: -77.04298671991893 },
                zoom: 12,
              }),
              (this.markerPositions = []),
              (this.markerOptions = { draggable: !0 }),
              (this.showWarning = !1),
              (this.disableBtn = !1),
              (this.apiLoaded = t
                .jsonp(
                  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBlzcI7vJjWhU0s6HkcXx9CeIKPvIkg8uY",
                  "callback"
                )
                .pipe(
                  (0, I.U)(() => !0),
                  (0, Me.K)(() => (0, we.of)(!1))
                ));
          }
          ngOnDestroy() {
            clearTimeout(this.timeOut);
          }
          ngOnInit() {}
          addMarker(t) {
            this.markerPositions.length < 1 &&
              this.markerPositions.push(t.latLng.toJSON());
          }
          markerDragEnd(t, n) {
            const a = this.markerPositions[0];
            (a.lat = n.latLng.lat()), (a.lng = n.latLng.lng());
          }
          close() {
            0 === this.markerPositions.length
              ? ((this.showWarning = !0),
                (this.disableBtn = !0),
                (this.timeOut = setTimeout(() => {
                  (this.disableBtn = !1), (this.showWarning = !1);
                }, 1e3)))
              : this.activeModal.close(this.markerPositions);
          }
        }
        return (
          (i.ɵfac = function (t) {
            return new (t || i)(e.Y36($.eN), e.Y36(D.Kz));
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-map"]],
            decls: 8,
            vars: 5,
            consts: [
              [1, "modal-body"],
              [4, "ngIf"],
              [1, "modal-footer", "flex-column"],
              [3, "dismissible", "type", 4, "ngIf"],
              [
                "type",
                "button",
                1,
                "btn",
                "btn-primary",
                "btn-icon-text",
                3,
                "disabled",
                "click",
              ],
              [1, "feather", "icon-check", "btn-icon-prepend"],
              ["width", "100%", 3, "options", "mapClick"],
              [3, "position", "options", "mapDragend", 4, "ngFor", "ngForOf"],
              [3, "position", "options", "mapDragend"],
              [3, "dismissible", "type"],
              [1, "feather", "icon-alert-circle"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0),
                e.YNc(1, $e, 3, 2, "div", 1),
                e.ALo(2, "async"),
                e.qZA(),
                e.TgZ(3, "div", 2),
                e.YNc(4, We, 3, 2, "ngb-alert", 3),
                e.TgZ(5, "button", 4),
                e.NdJ("click", function () {
                  return n.close();
                }),
                e._UZ(6, "i", 5),
                e._uU(7, " Aceptar Ubicaci\xf3n "),
                e.qZA()()),
                2 & t &&
                  (e.xp6(1),
                  e.Q6J("ngIf", e.lcZ(2, 3, n.apiLoaded)),
                  e.xp6(3),
                  e.Q6J("ngIf", n.showWarning),
                  e.xp6(1),
                  e.Q6J("disabled", n.disableBtn));
            },
            dependencies: [C.sg, C.O5, b, K, D.xm, C.Ov],
          })),
          i
        );
      })();
      var F = g(727),
        X = g(8505);
      const se = {
          Castellano: "Castellano",
          Quechua: "Quechua",
          Aymara: "Aymara",
          Ashaninca: "Ash\xe1ninca",
          Awajun: "Awaj\xfan",
          Otra: "Otra",
        },
        Xe = [...Object.values(se)],
        le = {
          Padre: "Padre",
          Madre: "Madre",
          Hermano: "Hermano/Hermana",
          Apoderado: "Apoderado/Apoderada",
          Otro: "Otro",
        },
        et = [...Object.values(le)],
        ce = { si: "Si", no: "No" },
        tt = [...Object.values(ce)],
        ue = {
          beca: "Beca",
          credito: "Cr\xe9dito",
          otros: "Otras formas de financiamiento (especificar)",
        },
        nt = [...Object.values(ue)],
        pe = { si: "Si", no: "No" },
        it = [...Object.values(pe)],
        de = {
          padres: "Pagada por padres",
          postulante: "Pagada por el mismo postulante",
          academia: "Becado por centro de estudios preuniversitarios",
          familiar: "Pagado por un familiar o amigo",
          otros: "Otros (especificar)",
        },
        ot = [
          "1 a 3 meses",
          "3 a 6 meses",
          "6 meses a 1 a\xf1o",
          "M\xe1s de 1 a\xf1o",
        ],
        at = [...Object.values(de)],
        rt = [
          "Universidad del Pac\xedfico (Lima)",
          "Universidad de Piura - Sede Lima",
          "Universidad de Piura - Sede Piura",
          "Universidad Peruana de Ciencias Aplicadas (Lima)",
          "Universidad de Ingenier\xeda y Tecnolog\xeda (Lima)",
          "Universidad de Lima (Lima)",
          "Pontificia Universidad Cat\xf3lica del Per\xfa (Lima)",
        ],
        st = [
          "Matricularlo en una academia",
          "Contratar profesores si requer\xeda la ayuda",
          "Ayudarlo a estudiar",
          "Conf\xedo en sus decisiones y lo apoyo ",
          "Llevarlo a ferias vocacionales o universitarias",
          "Seguir los consejos de los profesores del colegio o academia",
          "Seguir recomendaciones de alg\xfan referente o mentor",
          "Acompa\xf1arlo a buscar informaci\xf3n sobre carreras o universidades",
          "Alentarlo en momentos dificiles",
          "Hablar sobre la importancia de la educaci\xf3n en familia",
          "Otras",
        ],
        ge = {
          deporte: "Deporte",
          baile: "Baile",
          comunidad: "Comunidad religiosa",
          voluntariado: "Voluntariado",
          club: "Club",
          talleres: "Talleres de desarrollo personal",
          musica: "M\xfasica",
          arte: "Arte",
          otros: "Otros (especificar)",
        },
        lt = [...Object.values(ge)],
        ct = [
          "Diariamente",
          "Interdiario",
          "M\xe1s de 3 d\xedas a la semana",
          "Quincenalmente ",
          "Ocasionalmente",
        ],
        ut = [
          "Ha iniciado recientemente - hace menos de 3 meses",
          "Entre 3 y 6 meses atr\xe1s",
          "Entre 6 meses y 1 a\xf1o atr\xe1s",
          "Hace m\xe1s de 1 a\xf1o",
        ],
        pt = [
          ...Object.values({
            padres: "Financiadas por padres",
            postulante: "Financiadas por el postulante",
            beca: "El postulante obtuvo una beca",
            otros: "Otros (especificar)",
          }),
        ],
        dt = [
          "Menos de 30 minutos",
          "Entre 30 minutos y 1 hora",
          "Entre 1 hora y 1.5 horas",
          "EnTre 1.5 horas  y 2 horas",
          "M\xe1s de 2 horas",
        ],
        _e = { si: "Si", no: "No" },
        gt = [...Object.values(_e)],
        _t = [
          "Soltero(a)",
          "Conviviente",
          "Casado(a)",
          "Viudo(a)",
          "Divorciado(a)",
        ],
        mt = [
          "Primaria incompleta",
          "Primaria completa",
          "Secundaria incompleta",
          "Secundaria completa",
          "T\xe9cnico incompleta",
          "T\xe9cnico completa",
          "Universitario incompleta",
          "Universitario completa",
        ],
        ht = ["Vive", "Falleci\xf3"],
        ft = [
          "Independiente",
          "Dependiente",
          "Eventual",
          "Desempleo",
          "Ama de casa",
        ],
        vt = [
          { style: { minWidth: 200 }, value: "Parentesco" },
          { style: { minWidth: 250 }, value: "Nombres" },
          { style: { minWidth: 250 }, value: "Apellidos" },
          { style: { minWidth: 100 }, value: "Edad" },
          { style: { minWidth: 200 }, value: "Estado Civil" },
          { style: { minWidth: 200 }, value: "Nivel de educaci\xf3n" },
          {
            style: { minWidth: 260 },
            value: "Indicar si la persona vive o falleci\xf3",
          },
          { style: { minWidth: 250 }, value: "Vive con el/la postulante" },
          { style: { minWidth: 250 }, value: "Situaci\xf3n laboral" },
        ],
        yt = [
          { style: { minWidth: 200 }, value: "Parentesco" },
          { style: { minWidth: 250 }, value: "Nombres" },
          { style: { minWidth: 250 }, value: "Apellidos" },
          { style: { minWidth: 100 }, value: "Edad" },
          { style: { minWidth: 200 }, value: "Estado Civil" },
          { style: { minWidth: 200 }, value: "Nivel de educaci\xf3n" },
          { style: { minWidth: 200 }, value: "Situaci\xf3n laboral" },
        ],
        me = {
          prepararDesayuno: "Preparar desayuno",
          prepararAlmuerzo: "Preparar Almuerzo",
          prepararCena: "Preparar Cena",
          limpiezaGeneral: "Limpieza general",
          apoyarCuidadoHermanos: "Apoyar con cuidado de hermanos menores",
          apoyarCuidadoAbuelos: "Apoyar con cuidado de abuelos",
          realizarCompras: "Realizar compras",
          recogerHermanosColegio: "Recoger hermanos del colegio",
          apoyarTrabajoPadresNegocio:
            "Apoyar en el trabajo de los padres / negocio familiar",
          cuidodoMascota: "Cuidado de mascota/s",
          lavarRopa: "avar de ropa",
          sacarBasura: "Sacar la basura",
          ordenarCuarto: "Ordenar su cuarto",
          ponerLaMesa: "Poner/Recoger la mesa",
          trabajosEventuales: 'Trabajos eventuales/"cachuelos"',
          sinResponsabilidadesDomésticas: "Sin responsabilidades dom\xe9sticas",
          otros: "Otros (especificar)",
        },
        Ct = [...Object.values(me)],
        bt = [
          "15 minutos o menos",
          "Entre 15 y 30 minutos",
          "Entre 30 minutos y 1 hora",
          "Entre 1 hora y 1.5 horas",
          "M\xe1s de 1.5 horas",
        ],
        Tt = [
          "Diariamente",
          "Interdiario",
          "M\xe1s de 3 veces a la semana",
          "Quincenalmente",
          "Ocasionalmente",
        ],
        he = {
          papa: "Pap\xe1",
          mama: "Mam\xe1",
          postulante: "Postulante",
          abuelos: "Abuelos",
          hermanos: "Hermanos",
          otros: "Otros (especificar)",
        },
        At = [...Object.values(he)],
        xt = ["0-33%", "33%-66%", "66% a m\xe1s"],
        Et = ["Actividad", "Apoyo Si/No"],
        It = [
          ...Object.values({
            pasajes: "Pasajes",
            alimentación: "Alimentaci\xf3n",
            academiaRefuerzo: "Academia de refuerzo acad\xe9mico",
            mudarseDecasa: "Mudarse fuera de casa",
            clasesParticulares: "Clases particulares",
            materialEstudio: "Material de estudio",
            laptopTecnología: "Laptop o tecnolog\xeda",
            salud: "Salud",
            actividadesGrupales: "Actividades grupales",
            salidasRecreacionales: "Salidas recreacionales",
          }),
        ],
        Mt = [
          "S/. 10.00  a  S/. 25.00",
          "S/. 25.00  a  S/. 50.00",
          "S/. 50.00  a  S/. 75.00",
          "S/. 75.00  a  S/. 100.00",
          "M\xe1s de S/. 100.00",
        ],
        fe = {
          mejoresRecursos: "Mejores recursos econ\xf3micos",
          primerProfesional: "Primer profesional en la familia",
          cumplirVisión: "Cumplir con su visi\xf3n de vida",
          serAgenteCambio: "Ser un agente de cambio para el pa\xeds",
          tenerCarrera: "Tener una carrera profesional",
          accederTrabajo: "Acceder a un trabajo bien remunerado",
          esCorresponde: "Es lo que le corresponde",
          noConversamos:
            "No conversamos sobre esto. Es decisi\xf3n de mi hijo.",
          otros: "Otros (especificar)",
        },
        wt = [...Object.values(fe)],
        Zt = ["Menos de 1 hora", "Entre 1 y 2 horas", "M\xe1s de 2 horas"],
        Qt = {
          uno: {
            nro: "1",
            descripcion: "Indicar su lengua materna",
            datoAdicional: "",
            for: "lengMat",
          },
          unoUno: {
            nro: '<i class="mdi mdi-map-marker"></i>',
            descripcion:
              "Vive en provincia(persona respondiendo el cuestionario)",
            datoAdicional: "",
            for: "",
          },
          dos: {
            nro: "2",
            descripcion:
              "Nombres y Apellidos (persona respondiendo el cuestionario)",
            datoAdicional: "",
            for: "nombApeResponsable",
          },
          tres: {
            nro: "3",
            descripcion: "DNI (persona respondiendo el cuestionario)",
            datoAdicional: "",
            for: "dniResponsable",
          },
          cuatro: {
            nro: "4",
            descripcion: "Parentesco con el o la postulante.",
            datoAdicional: "",
            for: "",
          },
          cinco: {
            nro: "5",
            descripcion: "Nombres y apellidos del/la postulante.",
            datoAdicional: "",
            for: "nombApePostulante",
          },
          seis: {
            nro: "6",
            descripcion: "DNI del/la postulante.",
            datoAdicional: "",
            for: "dniPostulante",
          },
          siete: {
            nro: "7",
            descripcion:
              "\xbfA qu\xe9 universidad est\xe1 postulando el/la postulante?",
            datoAdicional: "",
            for: "",
          },
          sieteUno: {
            nro: "7.1",
            descripcion:
              "\xbfA qu\xe9 carrera est\xe1 postulando el/la postulante?:",
            datoAdicional: "",
            for: "",
          },
          ocho: {
            nro: "8",
            descripcion:
              "Considerando el primer d\xeda de clases de su hijo \xbfpodr\xeda describirnos brevemente cu\xe1les son las principales fortalezas y cualidades que su hijo/a demostrar\xeda desde el primer d\xeda de clases? \xbfQu\xe9 recursos o soportes necesitar\xeda para enfrentar ese primer d\xeda?",
            datoAdicional: "",
            for: "",
          },
          nueve: {
            nro: "9",
            descripcion:
              "Usted como padre de familia, \xbfc\xf3mo considera que lo ayud\xf3 en el proceso de postulaci\xf3n a la beca?",
            datoAdicional: "",
            for: "",
          },
          diez: {
            nro: "10",
            descripcion:
              "\xbfQu\xe9 acciones realizaron como padres para que su hijo/a estuviera preparado para la postulaci\xf3n? (puede seleccionar m\xe1s de una)",
            datoAdicional: "",
            for: "",
          },
          once: {
            nro: "11",
            descripcion:
              "\xbfPor qu\xe9 cree que el/la postulante eligi\xf3 esa universidad y carrera?",
            datoAdicional: "",
            for: "",
          },
          onceUno: {
            nro: "11.1",
            descripcion: "\xbfEst\xe1 de acuerdo con su elecci\xf3n?",
            datoAdicional: "",
            for: "",
          },
          doce: {
            nro: "12",
            descripcion:
              "En el colegio, \xbfel/la postulante fue acreedor(a) a alg\xfan tipo de beneficio econ\xf3mico (beca/descuento en pensi\xf3n)?",
            datoAdicional: "",
            for: "",
          },
          trece: {
            nro: "13",
            descripcion:
              "\xbfEl/la postulante tuvo preparaci\xf3n preuniversitaria?",
            datoAdicional: "",
            for: "",
          },
          catorce: {
            nro: "14",
            descripcion:
              "\xbfEl/la postulante realiza o ha realizado actividades extracad\xe9micas y/o de desarrollo personal? (Ej: practica alg\xfan deporte, toca alg\xfan instrumento musical, pertenece a alguna selecci\xf3n/club/comunidad religiosa, realiza alg\xfan voluntariado).",
            datoAdicional:
              "Marque la/s actividad/es que realiza o ha realizado. Indicar la frecuencia / indicar en meses y/o a\xf1os el tiempo que las ha practicado / Indicar si son financiadas por la familia con recursos propios, son becados, pagado por el postulante, pagado por la familia, otros.",
            for: "",
          },
          quince: {
            nro: '<i class="mdi mdi-map-marker"></i>',
            descripcion:
              "Detallar su lugar de vivienda (direcci\xf3n exacta que incluya calle, distrito y referencia).",
            datoAdicional:
              "Ejemplo: Av. Javier Prado Oeste N\xb0 1455, Dpto. 303, Madgalena del Mar.",
            for: "",
          },
          dieciseis: {
            nro: '<i class="mdi mdi-map-marker"></i>',
            descripcion:
              "\xbfSaben cu\xe1nto tiempo le tomar\xe1 a el/la postulante llegar a su centro de estudios? (solo para lima)",
            datoAdicional: "",
            for: "",
          },
          diecisiete: {
            nro: "15",
            descripcion:
              "\xbfEstar\xeda dispuesto que el/la postulante se mude fuera del hogar (m\xe1s cerca del centro de estudios)?",
            datoAdicional: "",
            for: "",
          },
          dieciocho: {
            nro: "16",
            descripcion:
              "Detalle la composici\xf3n familiar seg\xfan el parentesco con el/la postulante (familia nuclear: padres e hijos):",
            datoAdicional: "",
            for: "",
          },
          diecinueve: {
            nro: "17",
            descripcion:
              "\xbfExisten miembros fuera de la familia nuclear mencionada que vivan con el/la postulante? Por favor detallarlos e indicar su parentesco con el postulante.",
            datoAdicional: "",
            for: "",
          },
          veinte: {
            nro: "18",
            descripcion: "\xbfEn qu\xe9 tareas apoya el/la postulante en casa?",
            datoAdicional:
              "Marque la/s tarea/as que realiza. Indique adem\xe1s el tiempo de cada tarea y la frecuencia semanal con la cual la realiza.",
            for: "",
          },
          veinteUno: {
            nro: "18.1",
            descripcion:
              "En l\xedneas generales, \xbfcu\xe1ntas horas diarias el/la postulante destina a tareas del hogar?",
            datoAdicional: "",
            for: "",
          },
          veintiuno: {
            nro: "19",
            descripcion:
              "\xbfQui\xe9n o qui\xe9nes son los encargados principales de las tareas del hogar? Indicar el % de responsabilidad de cada miembro de la familia",
            datoAdicional:
              "Marque los responsables. Indicar el % de responsabilidad de cada miembro de la familia.",
            for: "",
          },
          veintidos: {
            nro: "20",
            descripcion: "\xbfTienen antecedentes policiales?",
            datoAdicional: "",
            for: "",
          },
          veintitres: {
            nro: "21",
            descripcion: "\xbfTienen antecedentes penales?",
            datoAdicional: "",
            for: "",
          },
          veinticuatro: {
            nro: "22",
            descripcion:
              "\xbfPara qu\xe9 actividades cree que el/la postulante va a necesitar apoyo econ\xf3mico por parte de ustedes mientras se mantenga estudiando en la universidad?",
            datoAdicional: "",
            for: "",
          },
          veinticinco: {
            nro: "23",
            descripcion:
              "\xbfCu\xe1les son sus principales reglas en casa? \xbfQu\xe9 sucede cu\xe1ndo el/la postulante no las cumple?",
            datoAdicional: "",
            for: "",
          },
          veintiseis: {
            nro: "24",
            descripcion:
              "\xbfQu\xe9 significa para ustedes que el/la postulante puedan tener acceso a educaci\xf3n superior de calidad?",
            datoAdicional: "",
            for: "",
          },
          veintisiete: {
            nro: "25",
            descripcion:
              "\xbfCu\xe1l ha sido la situaci\xf3n m\xe1s complicada o problema que ha tenido que enfrentar el/la postulante? \xbfC\xf3mo lo/la ayudaron en ese momento?",
            datoAdicional: "",
            for: "",
          },
          veintiocho: {
            nro: "26",
            descripcion:
              "\xbfQu\xe9 cosas/eventos han tenido que superar como familia? \xbfC\xf3mo los intentaron superar? Descr\xedbalos.",
            datoAdicional: "",
            for: "",
          },
          veintinueve: {
            nro: "27",
            descripcion:
              "\xbfQu\xe9 momentos comparten en familia? \xbfQu\xe9 actividades realizan juntos? \xbfCon qu\xe9 frecuencia realizan este tipo de actividades? Com\xe9ntenos sobre algunas tradiciones/celebraciones familiares?",
            datoAdicional: "",
            for: "",
          },
        };
      var ve = g(8799),
        kt = g(3601),
        Nt = g(8675),
        Ot = g(8372),
        Bt = g(9300),
        Pt = g(6406),
        Ft = g(3101),
        L = g(4968),
        ee = g(6451);
      const St = ["content"],
        qt = ["scroll"],
        Dt = ["padding"],
        S = function (i) {
          return { searchTerm: i };
        };
      function Lt(i, o) {
        if ((1 & i && (e.TgZ(0, "div", 6), e.GkF(1, 7), e.qZA()), 2 & i)) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngTemplateOutlet", t.headerTemplate)(
              "ngTemplateOutletContext",
              e.VKq(2, S, t.filterValue)
            );
        }
      }
      function zt(i, o) {
        if ((1 & i && (e.TgZ(0, "div", 8), e.GkF(1, 7), e.qZA()), 2 & i)) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngTemplateOutlet", t.footerTemplate)(
              "ngTemplateOutletContext",
              e.VKq(2, S, t.filterValue)
            );
        }
      }
      const ye = ["*"],
        Ut = ["searchInput"];
      function Jt(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "span", 15),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw().$implicit,
                r = e.oxw(2);
              return e.KtG(r.unselect(a));
            }),
            e._uU(1, "\xd7"),
            e.qZA(),
            e._UZ(2, "span", 16);
        }
        if (2 & i) {
          const t = e.oxw().$implicit,
            n = e.oxw(2);
          e.xp6(2), e.Q6J("ngItemLabel", t.label)("escape", n.escapeHTML);
        }
      }
      function Yt(i, o) {}
      const jt = function (i, o, t) {
        return { item: i, clear: o, label: t };
      };
      function Rt(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 12),
            e.YNc(1, Jt, 3, 2, "ng-template", null, 13, e.W1O),
            e.YNc(3, Yt, 0, 0, "ng-template", 14),
            e.qZA()),
          2 & i)
        ) {
          const t = o.$implicit,
            n = e.MAs(2),
            a = e.oxw(2);
          e.ekj("ng-value-disabled", t.disabled),
            e.xp6(3),
            e.Q6J("ngTemplateOutlet", a.labelTemplate || n)(
              "ngTemplateOutletContext",
              e.kEZ(4, jt, t.value, a.clearItem, t.label)
            );
        }
      }
      function Vt(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Rt, 4, 8, "div", 11), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", t.selectedItems)("ngForTrackBy", t.trackByOption);
        }
      }
      function Gt(i, o) {}
      const Ht = function (i, o) {
        return { items: i, clear: o };
      };
      function $t(i, o) {
        if ((1 & i && e.YNc(0, Gt, 0, 0, "ng-template", 14), 2 & i)) {
          const t = e.oxw();
          e.Q6J("ngTemplateOutlet", t.multiLabelTemplate)(
            "ngTemplateOutletContext",
            e.WLB(2, Ht, t.selectedValues, t.clearItem)
          );
        }
      }
      function Wt(i, o) {
        1 & i && e._UZ(0, "div", 19);
      }
      function Kt(i, o) {}
      function Xt(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.YNc(1, Wt, 1, 0, "ng-template", null, 17, e.W1O),
            e.YNc(3, Kt, 0, 0, "ng-template", 18),
            e.BQk()),
          2 & i)
        ) {
          const t = e.MAs(2),
            n = e.oxw();
          e.xp6(3), e.Q6J("ngTemplateOutlet", n.loadingSpinnerTemplate || t);
        }
      }
      function en(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "span", 20)(1, "span", 21), e._uU(2, "\xd7"), e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw();
          e.s9C("title", t.clearAllText);
        }
      }
      function tn(i, o) {
        if ((1 & i && e._UZ(0, "span", 27), 2 & i)) {
          const t = e.oxw().$implicit,
            n = e.oxw(2);
          e.Q6J("ngItemLabel", t.label)("escape", n.escapeHTML);
        }
      }
      function nn(i, o) {}
      const on = function (i, o, t, n) {
        return { item: i, item$: o, index: t, searchTerm: n };
      };
      function an(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 25),
            e.NdJ("click", function () {
              const r = e.CHM(t).$implicit,
                s = e.oxw(2);
              return e.KtG(s.toggleItem(r));
            })("mouseover", function () {
              const r = e.CHM(t).$implicit,
                s = e.oxw(2);
              return e.KtG(s.onItemHover(r));
            }),
            e.YNc(1, tn, 1, 2, "ng-template", null, 26, e.W1O),
            e.YNc(3, nn, 0, 0, "ng-template", 14),
            e.qZA();
        }
        if (2 & i) {
          const t = o.$implicit,
            n = e.MAs(2),
            a = e.oxw(2);
          e.ekj("ng-option-disabled", t.disabled)(
            "ng-option-selected",
            t.selected
          )("ng-optgroup", t.children)("ng-option", !t.children)(
            "ng-option-child",
            !!t.parent
          )("ng-option-marked", t === a.itemsList.markedItem),
            e.uIk("role", t.children ? "group" : "option")(
              "aria-selected",
              t.selected
            )("id", null == t ? null : t.htmlId),
            e.xp6(3),
            e.Q6J(
              "ngTemplateOutlet",
              t.children ? a.optgroupTemplate || n : a.optionTemplate || n
            )(
              "ngTemplateOutletContext",
              e.l5B(17, on, t.value, t, t.index, a.searchTerm)
            );
        }
      }
      function rn(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "span")(1, "span", 30),
            e._uU(2),
            e.qZA(),
            e._uU(3),
            e.qZA()),
          2 & i)
        ) {
          const t = e.oxw(3);
          e.xp6(2),
            e.Oqu(t.addTagText),
            e.xp6(1),
            e.hij('"', t.searchTerm, '"');
        }
      }
      function sn(i, o) {}
      function ln(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 28),
            e.NdJ("mouseover", function () {
              e.CHM(t);
              const a = e.oxw(2);
              return e.KtG(a.itemsList.unmarkItem());
            })("click", function () {
              e.CHM(t);
              const a = e.oxw(2);
              return e.KtG(a.selectTag());
            }),
            e.YNc(1, rn, 4, 2, "ng-template", null, 29, e.W1O),
            e.YNc(3, sn, 0, 0, "ng-template", 14),
            e.qZA();
        }
        if (2 & i) {
          const t = e.MAs(2),
            n = e.oxw(2);
          e.ekj("ng-option-marked", !n.itemsList.markedItem),
            e.xp6(3),
            e.Q6J("ngTemplateOutlet", n.tagTemplate || t)(
              "ngTemplateOutletContext",
              e.VKq(4, S, n.searchTerm)
            );
        }
      }
      function cn(i, o) {
        if ((1 & i && (e.TgZ(0, "div", 32), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw(3);
          e.xp6(1), e.Oqu(t.notFoundText);
        }
      }
      function un(i, o) {}
      function pn(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.YNc(1, cn, 2, 1, "ng-template", null, 31, e.W1O),
            e.YNc(3, un, 0, 0, "ng-template", 14),
            e.BQk()),
          2 & i)
        ) {
          const t = e.MAs(2),
            n = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngTemplateOutlet", n.notFoundTemplate || t)(
              "ngTemplateOutletContext",
              e.VKq(2, S, n.searchTerm)
            );
        }
      }
      function dn(i, o) {
        if ((1 & i && (e.TgZ(0, "div", 32), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw(3);
          e.xp6(1), e.Oqu(t.typeToSearchText);
        }
      }
      function gn(i, o) {}
      function _n(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.YNc(1, dn, 2, 1, "ng-template", null, 33, e.W1O),
            e.YNc(3, gn, 0, 0, "ng-template", 18),
            e.BQk()),
          2 & i)
        ) {
          const t = e.MAs(2),
            n = e.oxw(2);
          e.xp6(3), e.Q6J("ngTemplateOutlet", n.typeToSearchTemplate || t);
        }
      }
      function mn(i, o) {
        if ((1 & i && (e.TgZ(0, "div", 32), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw(3);
          e.xp6(1), e.Oqu(t.loadingText);
        }
      }
      function hn(i, o) {}
      function fn(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.YNc(1, mn, 2, 1, "ng-template", null, 34, e.W1O),
            e.YNc(3, hn, 0, 0, "ng-template", 14),
            e.BQk()),
          2 & i)
        ) {
          const t = e.MAs(2),
            n = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngTemplateOutlet", n.loadingTextTemplate || t)(
              "ngTemplateOutletContext",
              e.VKq(2, S, n.searchTerm)
            );
        }
      }
      function vn(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "ng-dropdown-panel", 22),
            e.NdJ("update", function (a) {
              e.CHM(t);
              const r = e.oxw();
              return e.KtG((r.viewPortItems = a));
            })("scroll", function (a) {
              e.CHM(t);
              const r = e.oxw();
              return e.KtG(r.scroll.emit(a));
            })("scrollToEnd", function (a) {
              e.CHM(t);
              const r = e.oxw();
              return e.KtG(r.scrollToEnd.emit(a));
            })("outsideClick", function () {
              e.CHM(t);
              const a = e.oxw();
              return e.KtG(a.close());
            }),
            e.ynx(1),
            e.YNc(2, an, 4, 22, "div", 23),
            e.YNc(3, ln, 4, 6, "div", 24),
            e.BQk(),
            e.YNc(4, pn, 4, 4, "ng-container", 3),
            e.YNc(5, _n, 4, 1, "ng-container", 3),
            e.YNc(6, fn, 4, 4, "ng-container", 3),
            e.qZA();
        }
        if (2 & i) {
          const t = e.oxw();
          e.ekj("ng-select-multiple", t.multiple),
            e.Q6J("virtualScroll", t.virtualScroll)(
              "bufferAmount",
              t.bufferAmount
            )("appendTo", t.appendTo)("position", t.dropdownPosition)(
              "headerTemplate",
              t.headerTemplate
            )("footerTemplate", t.footerTemplate)("filterValue", t.searchTerm)(
              "items",
              t.itemsList.filteredItems
            )("markedItem", t.itemsList.markedItem)(
              "ngClass",
              t.appendTo ? t.classes : null
            )("id", t.dropdownId),
            e.xp6(2),
            e.Q6J("ngForOf", t.viewPortItems)("ngForTrackBy", t.trackByOption),
            e.xp6(1),
            e.Q6J("ngIf", t.showAddTag),
            e.xp6(1),
            e.Q6J("ngIf", t.showNoItemsFound()),
            e.xp6(1),
            e.Q6J("ngIf", t.showTypeToSearch()),
            e.xp6(1),
            e.Q6J("ngIf", t.loading && 0 === t.itemsList.filteredItems.length);
        }
      }
      const Ce = /[&<>"']/g,
        yn = RegExp(Ce.source),
        Cn = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
      function f(i) {
        return null != i;
      }
      function q(i) {
        return "object" == typeof i && f(i);
      }
      function z(i) {
        return i instanceof Function;
      }
      let An = (() => {
          class i {
            constructor(t) {
              (this.element = t), (this.escape = !0);
            }
            ngOnChanges(t) {
              this.element.nativeElement.innerHTML = this.escape
                ? (function bn(i) {
                    return i && yn.test(i) ? i.replace(Ce, (o) => Cn[o]) : i;
                  })(this.ngItemLabel)
                : this.ngItemLabel;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.SBq));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ngItemLabel", ""]],
              inputs: { ngItemLabel: "ngItemLabel", escape: "escape" },
              features: [e.TTD],
            })),
            i
          );
        })(),
        xn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-option-tmp", ""]],
            })),
            i
          );
        })(),
        En = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-optgroup-tmp", ""]],
            })),
            i
          );
        })(),
        In = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-label-tmp", ""]],
            })),
            i
          );
        })(),
        Mn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-multi-label-tmp", ""]],
            })),
            i
          );
        })(),
        wn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-header-tmp", ""]],
            })),
            i
          );
        })(),
        Zn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-footer-tmp", ""]],
            })),
            i
          );
        })(),
        Qn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-notfound-tmp", ""]],
            })),
            i
          );
        })(),
        kn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-typetosearch-tmp", ""]],
            })),
            i
          );
        })(),
        Nn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-loadingtext-tmp", ""]],
            })),
            i
          );
        })(),
        On = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({ type: i, selectors: [["", "ng-tag-tmp", ""]] })),
            i
          );
        })(),
        Bn = (() => {
          class i {
            constructor(t) {
              this.template = t;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.Rgc));
            }),
            (i.ɵdir = e.lG2({
              type: i,
              selectors: [["", "ng-loadingspinner-tmp", ""]],
            })),
            i
          );
        })();
      function be() {
        return "axxxxxxxxxxx".replace(/[x]/g, () =>
          ((16 * Math.random()) | 0).toString(16)
        );
      }
      const Pn = {
        "\u24b6": "A",
        Ａ: "A",
        À: "A",
        Á: "A",
        Â: "A",
        Ầ: "A",
        Ấ: "A",
        Ẫ: "A",
        Ẩ: "A",
        Ã: "A",
        Ā: "A",
        Ă: "A",
        Ằ: "A",
        Ắ: "A",
        Ẵ: "A",
        Ẳ: "A",
        Ȧ: "A",
        Ǡ: "A",
        Ä: "A",
        Ǟ: "A",
        Ả: "A",
        Å: "A",
        Ǻ: "A",
        Ǎ: "A",
        Ȁ: "A",
        Ȃ: "A",
        Ạ: "A",
        Ậ: "A",
        Ặ: "A",
        Ḁ: "A",
        Ą: "A",
        Ⱥ: "A",
        Ɐ: "A",
        Ꜳ: "AA",
        Æ: "AE",
        Ǽ: "AE",
        Ǣ: "AE",
        Ꜵ: "AO",
        Ꜷ: "AU",
        Ꜹ: "AV",
        Ꜻ: "AV",
        Ꜽ: "AY",
        "\u24b7": "B",
        Ｂ: "B",
        Ḃ: "B",
        Ḅ: "B",
        Ḇ: "B",
        Ƀ: "B",
        Ƃ: "B",
        Ɓ: "B",
        "\u24b8": "C",
        Ｃ: "C",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        Ç: "C",
        Ḉ: "C",
        Ƈ: "C",
        Ȼ: "C",
        Ꜿ: "C",
        "\u24b9": "D",
        Ｄ: "D",
        Ḋ: "D",
        Ď: "D",
        Ḍ: "D",
        Ḑ: "D",
        Ḓ: "D",
        Ḏ: "D",
        Đ: "D",
        Ƌ: "D",
        Ɗ: "D",
        Ɖ: "D",
        Ꝺ: "D",
        Ǳ: "DZ",
        Ǆ: "DZ",
        ǲ: "Dz",
        ǅ: "Dz",
        "\u24ba": "E",
        Ｅ: "E",
        È: "E",
        É: "E",
        Ê: "E",
        Ề: "E",
        Ế: "E",
        Ễ: "E",
        Ể: "E",
        Ẽ: "E",
        Ē: "E",
        Ḕ: "E",
        Ḗ: "E",
        Ĕ: "E",
        Ė: "E",
        Ë: "E",
        Ẻ: "E",
        Ě: "E",
        Ȅ: "E",
        Ȇ: "E",
        Ẹ: "E",
        Ệ: "E",
        Ȩ: "E",
        Ḝ: "E",
        Ę: "E",
        Ḙ: "E",
        Ḛ: "E",
        Ɛ: "E",
        Ǝ: "E",
        "\u24bb": "F",
        Ｆ: "F",
        Ḟ: "F",
        Ƒ: "F",
        Ꝼ: "F",
        "\u24bc": "G",
        Ｇ: "G",
        Ǵ: "G",
        Ĝ: "G",
        Ḡ: "G",
        Ğ: "G",
        Ġ: "G",
        Ǧ: "G",
        Ģ: "G",
        Ǥ: "G",
        Ɠ: "G",
        Ꞡ: "G",
        Ᵹ: "G",
        Ꝿ: "G",
        "\u24bd": "H",
        Ｈ: "H",
        Ĥ: "H",
        Ḣ: "H",
        Ḧ: "H",
        Ȟ: "H",
        Ḥ: "H",
        Ḩ: "H",
        Ḫ: "H",
        Ħ: "H",
        Ⱨ: "H",
        Ⱶ: "H",
        Ɥ: "H",
        "\u24be": "I",
        Ｉ: "I",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        İ: "I",
        Ï: "I",
        Ḯ: "I",
        Ỉ: "I",
        Ǐ: "I",
        Ȉ: "I",
        Ȋ: "I",
        Ị: "I",
        Į: "I",
        Ḭ: "I",
        Ɨ: "I",
        "\u24bf": "J",
        Ｊ: "J",
        Ĵ: "J",
        Ɉ: "J",
        "\u24c0": "K",
        Ｋ: "K",
        Ḱ: "K",
        Ǩ: "K",
        Ḳ: "K",
        Ķ: "K",
        Ḵ: "K",
        Ƙ: "K",
        Ⱪ: "K",
        Ꝁ: "K",
        Ꝃ: "K",
        Ꝅ: "K",
        Ꞣ: "K",
        "\u24c1": "L",
        Ｌ: "L",
        Ŀ: "L",
        Ĺ: "L",
        Ľ: "L",
        Ḷ: "L",
        Ḹ: "L",
        Ļ: "L",
        Ḽ: "L",
        Ḻ: "L",
        Ł: "L",
        Ƚ: "L",
        Ɫ: "L",
        Ⱡ: "L",
        Ꝉ: "L",
        Ꝇ: "L",
        Ꞁ: "L",
        Ǉ: "LJ",
        ǈ: "Lj",
        "\u24c2": "M",
        Ｍ: "M",
        Ḿ: "M",
        Ṁ: "M",
        Ṃ: "M",
        Ɱ: "M",
        Ɯ: "M",
        "\u24c3": "N",
        Ｎ: "N",
        Ǹ: "N",
        Ń: "N",
        Ñ: "N",
        Ṅ: "N",
        Ň: "N",
        Ṇ: "N",
        Ņ: "N",
        Ṋ: "N",
        Ṉ: "N",
        Ƞ: "N",
        Ɲ: "N",
        Ꞑ: "N",
        Ꞥ: "N",
        Ǌ: "NJ",
        ǋ: "Nj",
        "\u24c4": "O",
        Ｏ: "O",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Ồ: "O",
        Ố: "O",
        Ỗ: "O",
        Ổ: "O",
        Õ: "O",
        Ṍ: "O",
        Ȭ: "O",
        Ṏ: "O",
        Ō: "O",
        Ṑ: "O",
        Ṓ: "O",
        Ŏ: "O",
        Ȯ: "O",
        Ȱ: "O",
        Ö: "O",
        Ȫ: "O",
        Ỏ: "O",
        Ő: "O",
        Ǒ: "O",
        Ȍ: "O",
        Ȏ: "O",
        Ơ: "O",
        Ờ: "O",
        Ớ: "O",
        Ỡ: "O",
        Ở: "O",
        Ợ: "O",
        Ọ: "O",
        Ộ: "O",
        Ǫ: "O",
        Ǭ: "O",
        Ø: "O",
        Ǿ: "O",
        Ɔ: "O",
        Ɵ: "O",
        Ꝋ: "O",
        Ꝍ: "O",
        Ƣ: "OI",
        Ꝏ: "OO",
        Ȣ: "OU",
        "\u24c5": "P",
        Ｐ: "P",
        Ṕ: "P",
        Ṗ: "P",
        Ƥ: "P",
        Ᵽ: "P",
        Ꝑ: "P",
        Ꝓ: "P",
        Ꝕ: "P",
        "\u24c6": "Q",
        Ｑ: "Q",
        Ꝗ: "Q",
        Ꝙ: "Q",
        Ɋ: "Q",
        "\u24c7": "R",
        Ｒ: "R",
        Ŕ: "R",
        Ṙ: "R",
        Ř: "R",
        Ȑ: "R",
        Ȓ: "R",
        Ṛ: "R",
        Ṝ: "R",
        Ŗ: "R",
        Ṟ: "R",
        Ɍ: "R",
        Ɽ: "R",
        Ꝛ: "R",
        Ꞧ: "R",
        Ꞃ: "R",
        "\u24c8": "S",
        Ｓ: "S",
        ẞ: "S",
        Ś: "S",
        Ṥ: "S",
        Ŝ: "S",
        Ṡ: "S",
        Š: "S",
        Ṧ: "S",
        Ṣ: "S",
        Ṩ: "S",
        Ș: "S",
        Ş: "S",
        Ȿ: "S",
        Ꞩ: "S",
        Ꞅ: "S",
        "\u24c9": "T",
        Ｔ: "T",
        Ṫ: "T",
        Ť: "T",
        Ṭ: "T",
        Ț: "T",
        Ţ: "T",
        Ṱ: "T",
        Ṯ: "T",
        Ŧ: "T",
        Ƭ: "T",
        Ʈ: "T",
        Ⱦ: "T",
        Ꞇ: "T",
        Ꜩ: "TZ",
        "\u24ca": "U",
        Ｕ: "U",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ũ: "U",
        Ṹ: "U",
        Ū: "U",
        Ṻ: "U",
        Ŭ: "U",
        Ü: "U",
        Ǜ: "U",
        Ǘ: "U",
        Ǖ: "U",
        Ǚ: "U",
        Ủ: "U",
        Ů: "U",
        Ű: "U",
        Ǔ: "U",
        Ȕ: "U",
        Ȗ: "U",
        Ư: "U",
        Ừ: "U",
        Ứ: "U",
        Ữ: "U",
        Ử: "U",
        Ự: "U",
        Ụ: "U",
        Ṳ: "U",
        Ų: "U",
        Ṷ: "U",
        Ṵ: "U",
        Ʉ: "U",
        "\u24cb": "V",
        Ｖ: "V",
        Ṽ: "V",
        Ṿ: "V",
        Ʋ: "V",
        Ꝟ: "V",
        Ʌ: "V",
        Ꝡ: "VY",
        "\u24cc": "W",
        Ｗ: "W",
        Ẁ: "W",
        Ẃ: "W",
        Ŵ: "W",
        Ẇ: "W",
        Ẅ: "W",
        Ẉ: "W",
        Ⱳ: "W",
        "\u24cd": "X",
        Ｘ: "X",
        Ẋ: "X",
        Ẍ: "X",
        "\u24ce": "Y",
        Ｙ: "Y",
        Ỳ: "Y",
        Ý: "Y",
        Ŷ: "Y",
        Ỹ: "Y",
        Ȳ: "Y",
        Ẏ: "Y",
        Ÿ: "Y",
        Ỷ: "Y",
        Ỵ: "Y",
        Ƴ: "Y",
        Ɏ: "Y",
        Ỿ: "Y",
        "\u24cf": "Z",
        Ｚ: "Z",
        Ź: "Z",
        Ẑ: "Z",
        Ż: "Z",
        Ž: "Z",
        Ẓ: "Z",
        Ẕ: "Z",
        Ƶ: "Z",
        Ȥ: "Z",
        Ɀ: "Z",
        Ⱬ: "Z",
        Ꝣ: "Z",
        "\u24d0": "a",
        ａ: "a",
        ẚ: "a",
        à: "a",
        á: "a",
        â: "a",
        ầ: "a",
        ấ: "a",
        ẫ: "a",
        ẩ: "a",
        ã: "a",
        ā: "a",
        ă: "a",
        ằ: "a",
        ắ: "a",
        ẵ: "a",
        ẳ: "a",
        ȧ: "a",
        ǡ: "a",
        ä: "a",
        ǟ: "a",
        ả: "a",
        å: "a",
        ǻ: "a",
        ǎ: "a",
        ȁ: "a",
        ȃ: "a",
        ạ: "a",
        ậ: "a",
        ặ: "a",
        ḁ: "a",
        ą: "a",
        ⱥ: "a",
        ɐ: "a",
        ꜳ: "aa",
        æ: "ae",
        ǽ: "ae",
        ǣ: "ae",
        ꜵ: "ao",
        ꜷ: "au",
        ꜹ: "av",
        ꜻ: "av",
        ꜽ: "ay",
        "\u24d1": "b",
        ｂ: "b",
        ḃ: "b",
        ḅ: "b",
        ḇ: "b",
        ƀ: "b",
        ƃ: "b",
        ɓ: "b",
        "\u24d2": "c",
        ｃ: "c",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        ç: "c",
        ḉ: "c",
        ƈ: "c",
        ȼ: "c",
        ꜿ: "c",
        ↄ: "c",
        "\u24d3": "d",
        ｄ: "d",
        ḋ: "d",
        ď: "d",
        ḍ: "d",
        ḑ: "d",
        ḓ: "d",
        ḏ: "d",
        đ: "d",
        ƌ: "d",
        ɖ: "d",
        ɗ: "d",
        ꝺ: "d",
        ǳ: "dz",
        ǆ: "dz",
        "\u24d4": "e",
        ｅ: "e",
        è: "e",
        é: "e",
        ê: "e",
        ề: "e",
        ế: "e",
        ễ: "e",
        ể: "e",
        ẽ: "e",
        ē: "e",
        ḕ: "e",
        ḗ: "e",
        ĕ: "e",
        ė: "e",
        ë: "e",
        ẻ: "e",
        ě: "e",
        ȅ: "e",
        ȇ: "e",
        ẹ: "e",
        ệ: "e",
        ȩ: "e",
        ḝ: "e",
        ę: "e",
        ḙ: "e",
        ḛ: "e",
        ɇ: "e",
        ɛ: "e",
        ǝ: "e",
        "\u24d5": "f",
        ｆ: "f",
        ḟ: "f",
        ƒ: "f",
        ꝼ: "f",
        "\u24d6": "g",
        ｇ: "g",
        ǵ: "g",
        ĝ: "g",
        ḡ: "g",
        ğ: "g",
        ġ: "g",
        ǧ: "g",
        ģ: "g",
        ǥ: "g",
        ɠ: "g",
        ꞡ: "g",
        ᵹ: "g",
        ꝿ: "g",
        "\u24d7": "h",
        ｈ: "h",
        ĥ: "h",
        ḣ: "h",
        ḧ: "h",
        ȟ: "h",
        ḥ: "h",
        ḩ: "h",
        ḫ: "h",
        ẖ: "h",
        ħ: "h",
        ⱨ: "h",
        ⱶ: "h",
        ɥ: "h",
        ƕ: "hv",
        "\u24d8": "i",
        ｉ: "i",
        ì: "i",
        í: "i",
        î: "i",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        ï: "i",
        ḯ: "i",
        ỉ: "i",
        ǐ: "i",
        ȉ: "i",
        ȋ: "i",
        ị: "i",
        į: "i",
        ḭ: "i",
        ɨ: "i",
        ı: "i",
        "\u24d9": "j",
        ｊ: "j",
        ĵ: "j",
        ǰ: "j",
        ɉ: "j",
        "\u24da": "k",
        ｋ: "k",
        ḱ: "k",
        ǩ: "k",
        ḳ: "k",
        ķ: "k",
        ḵ: "k",
        ƙ: "k",
        ⱪ: "k",
        ꝁ: "k",
        ꝃ: "k",
        ꝅ: "k",
        ꞣ: "k",
        "\u24db": "l",
        ｌ: "l",
        ŀ: "l",
        ĺ: "l",
        ľ: "l",
        ḷ: "l",
        ḹ: "l",
        ļ: "l",
        ḽ: "l",
        ḻ: "l",
        ſ: "l",
        ł: "l",
        ƚ: "l",
        ɫ: "l",
        ⱡ: "l",
        ꝉ: "l",
        ꞁ: "l",
        ꝇ: "l",
        ǉ: "lj",
        "\u24dc": "m",
        ｍ: "m",
        ḿ: "m",
        ṁ: "m",
        ṃ: "m",
        ɱ: "m",
        ɯ: "m",
        "\u24dd": "n",
        ｎ: "n",
        ǹ: "n",
        ń: "n",
        ñ: "n",
        ṅ: "n",
        ň: "n",
        ṇ: "n",
        ņ: "n",
        ṋ: "n",
        ṉ: "n",
        ƞ: "n",
        ɲ: "n",
        ŉ: "n",
        ꞑ: "n",
        ꞥ: "n",
        ǌ: "nj",
        "\u24de": "o",
        ｏ: "o",
        ò: "o",
        ó: "o",
        ô: "o",
        ồ: "o",
        ố: "o",
        ỗ: "o",
        ổ: "o",
        õ: "o",
        ṍ: "o",
        ȭ: "o",
        ṏ: "o",
        ō: "o",
        ṑ: "o",
        ṓ: "o",
        ŏ: "o",
        ȯ: "o",
        ȱ: "o",
        ö: "o",
        ȫ: "o",
        ỏ: "o",
        ő: "o",
        ǒ: "o",
        ȍ: "o",
        ȏ: "o",
        ơ: "o",
        ờ: "o",
        ớ: "o",
        ỡ: "o",
        ở: "o",
        ợ: "o",
        ọ: "o",
        ộ: "o",
        ǫ: "o",
        ǭ: "o",
        ø: "o",
        ǿ: "o",
        ɔ: "o",
        ꝋ: "o",
        ꝍ: "o",
        ɵ: "o",
        ƣ: "oi",
        ȣ: "ou",
        ꝏ: "oo",
        "\u24df": "p",
        ｐ: "p",
        ṕ: "p",
        ṗ: "p",
        ƥ: "p",
        ᵽ: "p",
        ꝑ: "p",
        ꝓ: "p",
        ꝕ: "p",
        "\u24e0": "q",
        ｑ: "q",
        ɋ: "q",
        ꝗ: "q",
        ꝙ: "q",
        "\u24e1": "r",
        ｒ: "r",
        ŕ: "r",
        ṙ: "r",
        ř: "r",
        ȑ: "r",
        ȓ: "r",
        ṛ: "r",
        ṝ: "r",
        ŗ: "r",
        ṟ: "r",
        ɍ: "r",
        ɽ: "r",
        ꝛ: "r",
        ꞧ: "r",
        ꞃ: "r",
        "\u24e2": "s",
        ｓ: "s",
        ß: "s",
        ś: "s",
        ṥ: "s",
        ŝ: "s",
        ṡ: "s",
        š: "s",
        ṧ: "s",
        ṣ: "s",
        ṩ: "s",
        ș: "s",
        ş: "s",
        ȿ: "s",
        ꞩ: "s",
        ꞅ: "s",
        ẛ: "s",
        "\u24e3": "t",
        ｔ: "t",
        ṫ: "t",
        ẗ: "t",
        ť: "t",
        ṭ: "t",
        ț: "t",
        ţ: "t",
        ṱ: "t",
        ṯ: "t",
        ŧ: "t",
        ƭ: "t",
        ʈ: "t",
        ⱦ: "t",
        ꞇ: "t",
        ꜩ: "tz",
        "\u24e4": "u",
        ｕ: "u",
        ù: "u",
        ú: "u",
        û: "u",
        ũ: "u",
        ṹ: "u",
        ū: "u",
        ṻ: "u",
        ŭ: "u",
        ü: "u",
        ǜ: "u",
        ǘ: "u",
        ǖ: "u",
        ǚ: "u",
        ủ: "u",
        ů: "u",
        ű: "u",
        ǔ: "u",
        ȕ: "u",
        ȗ: "u",
        ư: "u",
        ừ: "u",
        ứ: "u",
        ữ: "u",
        ử: "u",
        ự: "u",
        ụ: "u",
        ṳ: "u",
        ų: "u",
        ṷ: "u",
        ṵ: "u",
        ʉ: "u",
        "\u24e5": "v",
        ｖ: "v",
        ṽ: "v",
        ṿ: "v",
        ʋ: "v",
        ꝟ: "v",
        ʌ: "v",
        ꝡ: "vy",
        "\u24e6": "w",
        ｗ: "w",
        ẁ: "w",
        ẃ: "w",
        ŵ: "w",
        ẇ: "w",
        ẅ: "w",
        ẘ: "w",
        ẉ: "w",
        ⱳ: "w",
        "\u24e7": "x",
        ｘ: "x",
        ẋ: "x",
        ẍ: "x",
        "\u24e8": "y",
        ｙ: "y",
        ỳ: "y",
        ý: "y",
        ŷ: "y",
        ỹ: "y",
        ȳ: "y",
        ẏ: "y",
        ÿ: "y",
        ỷ: "y",
        ẙ: "y",
        ỵ: "y",
        ƴ: "y",
        ɏ: "y",
        ỿ: "y",
        "\u24e9": "z",
        ｚ: "z",
        ź: "z",
        ẑ: "z",
        ż: "z",
        ž: "z",
        ẓ: "z",
        ẕ: "z",
        ƶ: "z",
        ȥ: "z",
        ɀ: "z",
        ⱬ: "z",
        ꝣ: "z",
        Ά: "\u0391",
        Έ: "\u0395",
        Ή: "\u0397",
        Ί: "\u0399",
        Ϊ: "\u0399",
        Ό: "\u039f",
        Ύ: "\u03a5",
        Ϋ: "\u03a5",
        Ώ: "\u03a9",
        ά: "\u03b1",
        έ: "\u03b5",
        ή: "\u03b7",
        ί: "\u03b9",
        ϊ: "\u03b9",
        ΐ: "\u03b9",
        ό: "\u03bf",
        ύ: "\u03c5",
        ϋ: "\u03c5",
        ΰ: "\u03c5",
        ω: "\u03c9",
        ς: "\u03c3",
      };
      function U(i) {
        return i.replace(/[^\u0000-\u007E]/g, (t) => Pn[t] || t);
      }
      class Fn {
        constructor(o, t) {
          (this._ngSelect = o),
            (this._selectionModel = t),
            (this._items = []),
            (this._filteredItems = []),
            (this._markedIndex = -1);
        }
        get items() {
          return this._items;
        }
        get filteredItems() {
          return this._filteredItems;
        }
        get markedIndex() {
          return this._markedIndex;
        }
        get selectedItems() {
          return this._selectionModel.value;
        }
        get markedItem() {
          return this._filteredItems[this._markedIndex];
        }
        get noItemsToSelect() {
          return (
            this._ngSelect.hideSelected &&
            this._items.length === this.selectedItems.length
          );
        }
        get maxItemsSelected() {
          return (
            this._ngSelect.multiple &&
            this._ngSelect.maxSelectedItems <= this.selectedItems.length
          );
        }
        get lastSelectedItem() {
          let o = this.selectedItems.length - 1;
          for (; o >= 0; o--) {
            const t = this.selectedItems[o];
            if (!t.disabled) return t;
          }
          return null;
        }
        setItems(o) {
          (this._items = o.map((t, n) => this.mapItem(t, n))),
            this._ngSelect.groupBy
              ? ((this._groups = this._groupBy(
                  this._items,
                  this._ngSelect.groupBy
                )),
                (this._items = this._flatten(this._groups)))
              : ((this._groups = new Map()),
                this._groups.set(void 0, this._items)),
            (this._filteredItems = [...this._items]);
        }
        select(o) {
          if (o.selected || this.maxItemsSelected) return;
          const t = this._ngSelect.multiple;
          t || this.clearSelected(),
            this._selectionModel.select(
              o,
              t,
              this._ngSelect.selectableGroupAsModel
            ),
            this._ngSelect.hideSelected && this._hideSelected(o);
        }
        unselect(o) {
          !o.selected ||
            (this._selectionModel.unselect(o, this._ngSelect.multiple),
            this._ngSelect.hideSelected &&
              f(o.index) &&
              this._ngSelect.multiple &&
              this._showSelected(o));
        }
        findItem(o) {
          let t;
          return (
            (t = this._ngSelect.compareWith
              ? (n) => this._ngSelect.compareWith(n.value, o)
              : this._ngSelect.bindValue
              ? (n) =>
                  !n.children &&
                  this.resolveNested(n.value, this._ngSelect.bindValue) === o
              : (n) =>
                  n.value === o ||
                  (!n.children &&
                    n.label &&
                    n.label ===
                      this.resolveNested(o, this._ngSelect.bindLabel))),
            this._items.find((n) => t(n))
          );
        }
        addItem(o) {
          const t = this.mapItem(o, this._items.length);
          return this._items.push(t), this._filteredItems.push(t), t;
        }
        clearSelected(o = !1) {
          this._selectionModel.clear(o),
            this._items.forEach((t) => {
              (t.selected = o && t.selected && t.disabled), (t.marked = !1);
            }),
            this._ngSelect.hideSelected && this.resetFilteredItems();
        }
        findByLabel(o) {
          return (
            (o = U(o).toLocaleLowerCase()),
            this.filteredItems.find(
              (t) => U(t.label).toLocaleLowerCase().substr(0, o.length) === o
            )
          );
        }
        filter(o) {
          if (!o) return void this.resetFilteredItems();
          (this._filteredItems = []),
            (o = this._ngSelect.searchFn ? o : U(o).toLocaleLowerCase());
          const t = this._ngSelect.searchFn || this._defaultSearchFn,
            n = this._ngSelect.hideSelected;
          for (const a of Array.from(this._groups.keys())) {
            const r = [];
            for (const s of this._groups.get(a))
              (n && ((s.parent && s.parent.selected) || s.selected)) ||
                (t(o, this._ngSelect.searchFn ? s.value : s) && r.push(s));
            if (r.length > 0) {
              const [s] = r.slice(-1);
              if (s.parent) {
                const c = this._items.find((u) => u === s.parent);
                this._filteredItems.push(c);
              }
              this._filteredItems.push(...r);
            }
          }
        }
        resetFilteredItems() {
          this._filteredItems.length !== this._items.length &&
            (this._filteredItems =
              this._ngSelect.hideSelected && this.selectedItems.length > 0
                ? this._items.filter((o) => !o.selected)
                : this._items);
        }
        unmarkItem() {
          this._markedIndex = -1;
        }
        markNextItem() {
          this._stepToItem(1);
        }
        markPreviousItem() {
          this._stepToItem(-1);
        }
        markItem(o) {
          this._markedIndex = this._filteredItems.indexOf(o);
        }
        markSelectedOrDefault(o) {
          if (0 === this._filteredItems.length) return;
          const t = this._getLastMarkedIndex();
          this._markedIndex =
            t > -1
              ? t
              : o
              ? this.filteredItems.findIndex((n) => !n.disabled)
              : -1;
        }
        resolveNested(o, t) {
          if (!q(o)) return o;
          if (-1 === t.indexOf(".")) return o[t];
          {
            const n = t.split(".");
            let a = o;
            for (let r = 0, s = n.length; r < s; ++r) {
              if (null == a) return null;
              a = a[n[r]];
            }
            return a;
          }
        }
        mapItem(o, t) {
          const n = f(o.$ngOptionLabel)
              ? o.$ngOptionLabel
              : this.resolveNested(o, this._ngSelect.bindLabel),
            a = f(o.$ngOptionValue) ? o.$ngOptionValue : o;
          return {
            index: t,
            label: f(n) ? n.toString() : "",
            value: a,
            disabled: o.disabled,
            htmlId: `${this._ngSelect.dropdownId}-${t}`,
          };
        }
        mapSelectedItems() {
          const o = this._ngSelect.multiple;
          for (const t of this.selectedItems) {
            const n = this._ngSelect.bindValue
                ? this.resolveNested(t.value, this._ngSelect.bindValue)
                : t.value,
              a = f(n) ? this.findItem(n) : null;
            this._selectionModel.unselect(t, o),
              this._selectionModel.select(
                a || t,
                o,
                this._ngSelect.selectableGroupAsModel
              );
          }
          this._ngSelect.hideSelected &&
            (this._filteredItems = this.filteredItems.filter(
              (t) => -1 === this.selectedItems.indexOf(t)
            ));
        }
        _showSelected(o) {
          if ((this._filteredItems.push(o), o.parent)) {
            const t = o.parent;
            this._filteredItems.find((a) => a === t) ||
              this._filteredItems.push(t);
          } else if (o.children)
            for (const t of o.children)
              (t.selected = !1), this._filteredItems.push(t);
          this._filteredItems = [
            ...this._filteredItems.sort((t, n) => t.index - n.index),
          ];
        }
        _hideSelected(o) {
          (this._filteredItems = this._filteredItems.filter((t) => t !== o)),
            o.parent
              ? o.parent.children.every((n) => n.selected) &&
                (this._filteredItems = this._filteredItems.filter(
                  (n) => n !== o.parent
                ))
              : o.children &&
                (this._filteredItems = this.filteredItems.filter(
                  (t) => t.parent !== o
                ));
        }
        _defaultSearchFn(o, t) {
          return U(t.label).toLocaleLowerCase().indexOf(o) > -1;
        }
        _getNextItemIndex(o) {
          return o > 0
            ? this._markedIndex >= this._filteredItems.length - 1
              ? 0
              : this._markedIndex + 1
            : this._markedIndex <= 0
            ? this._filteredItems.length - 1
            : this._markedIndex - 1;
        }
        _stepToItem(o) {
          0 === this._filteredItems.length ||
            this._filteredItems.every((t) => t.disabled) ||
            ((this._markedIndex = this._getNextItemIndex(o)),
            this.markedItem.disabled && this._stepToItem(o));
        }
        _getLastMarkedIndex() {
          if (
            this._ngSelect.hideSelected ||
            (this._markedIndex > -1 && void 0 === this.markedItem)
          )
            return -1;
          const o = this._filteredItems.indexOf(this.lastSelectedItem);
          return this.lastSelectedItem && o < 0
            ? -1
            : Math.max(this.markedIndex, o);
        }
        _groupBy(o, t) {
          const n = new Map();
          if (0 === o.length) return n;
          if (Array.isArray(o[0].value[t])) {
            for (const s of o) {
              const c = (s.value[t] || []).map((u, p) => this.mapItem(u, p));
              n.set(s, c);
            }
            return n;
          }
          const a = z(this._ngSelect.groupBy),
            r = (s) => {
              const c = a ? t(s.value) : s.value[t];
              return f(c) ? c : void 0;
            };
          for (const s of o) {
            const c = r(s),
              u = n.get(c);
            u ? u.push(s) : n.set(c, [s]);
          }
          return n;
        }
        _flatten(o) {
          const t = z(this._ngSelect.groupBy),
            n = [];
          for (const a of Array.from(o.keys())) {
            let r = n.length;
            if (void 0 === a) {
              const _ = o.get(void 0) || [];
              n.push(..._.map((m) => ((m.index = r++), m)));
              continue;
            }
            const s = q(a),
              c = {
                label: s ? "" : String(a),
                children: void 0,
                parent: null,
                index: r++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: be(),
              },
              u = t ? this._ngSelect.bindLabel : this._ngSelect.groupBy,
              p =
                this._ngSelect.groupValue || (() => (s ? a.value : { [u]: a })),
              d = o
                .get(a)
                .map(
                  (_) => (
                    (_.parent = c), (_.children = void 0), (_.index = r++), _
                  )
                );
            (c.children = d),
              (c.value = p(
                a,
                d.map((_) => _.value)
              )),
              n.push(c),
              n.push(...d);
          }
          return n;
        }
      }
      var E = (() => {
        return (
          ((i = E || (E = {}))[(i.Tab = 9)] = "Tab"),
          (i[(i.Enter = 13)] = "Enter"),
          (i[(i.Esc = 27)] = "Esc"),
          (i[(i.Space = 32)] = "Space"),
          (i[(i.ArrowUp = 38)] = "ArrowUp"),
          (i[(i.ArrowDown = 40)] = "ArrowDown"),
          (i[(i.Backspace = 8)] = "Backspace"),
          E
        );
        var i;
      })();
      let Te = (() => {
        class i {
          constructor() {
            this._dimensions = {
              itemHeight: 0,
              panelHeight: 0,
              itemsPerViewport: 0,
            };
          }
          get dimensions() {
            return this._dimensions;
          }
          calculateItems(t, n, a) {
            const r = this._dimensions,
              s = r.itemHeight * n,
              u = (Math.max(0, t) / s) * n;
            let p = Math.min(n, Math.ceil(u) + (r.itemsPerViewport + 1));
            const _ = Math.max(0, p - r.itemsPerViewport);
            let m = Math.min(_, Math.floor(u)),
              y = r.itemHeight * Math.ceil(m) - r.itemHeight * Math.min(m, a);
            return (
              (y = isNaN(y) ? 0 : y),
              (m = isNaN(m) ? -1 : m),
              (p = isNaN(p) ? -1 : p),
              (m -= a),
              (m = Math.max(0, m)),
              (p += a),
              (p = Math.min(n, p)),
              { topPadding: y, scrollHeight: s, start: m, end: p }
            );
          }
          setDimensions(t, n) {
            const a = Math.max(1, Math.floor(n / t));
            this._dimensions = {
              itemHeight: t,
              panelHeight: n,
              itemsPerViewport: a,
            };
          }
          getScrollTo(t, n, a) {
            const { panelHeight: r } = this.dimensions,
              s = t + n,
              u = a + r;
            return r >= s && a === t
              ? null
              : s > u
              ? a + s - u
              : t <= a
              ? t
              : null;
          }
        }
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵprov = e.Yz7({ token: i, factory: i.ɵfac })),
          i
        );
      })();
      const Ae = ["top", "right", "bottom", "left"],
        Sn = typeof requestAnimationFrame < "u" ? Pt.Z : Ft.E;
      let xe = (() => {
          class i {
            constructor(t, n, a, r, s) {
              (this._renderer = t),
                (this._zone = n),
                (this._panelService = a),
                (this._document = s),
                (this.items = []),
                (this.position = "auto"),
                (this.virtualScroll = !1),
                (this.filterValue = null),
                (this.update = new e.vpe()),
                (this.scroll = new e.vpe()),
                (this.scrollToEnd = new e.vpe()),
                (this.outsideClick = new e.vpe()),
                (this._destroy$ = new T.x()),
                (this._scrollToEndFired = !1),
                (this._updateScrollHeight = !1),
                (this._lastScrollPosition = 0),
                (this._dropdown = r.nativeElement);
            }
            get currentPosition() {
              return this._currentPosition;
            }
            get itemsLength() {
              return this._itemsLength;
            }
            set itemsLength(t) {
              t !== this._itemsLength &&
                ((this._itemsLength = t), this._onItemsLengthChanged());
            }
            get _startOffset() {
              if (this.markedItem) {
                const { itemHeight: t, panelHeight: n } =
                    this._panelService.dimensions,
                  a = this.markedItem.index * t;
                return n > a ? 0 : a;
              }
              return 0;
            }
            ngOnInit() {
              (this._select = this._dropdown.parentElement),
                (this._virtualPadding = this.paddingElementRef.nativeElement),
                (this._scrollablePanel = this.scrollElementRef.nativeElement),
                (this._contentPanel = this.contentElementRef.nativeElement),
                this._handleScroll(),
                this._handleOutsideClick(),
                this._appendDropdown(),
                this._setupMousedownListener();
            }
            ngOnChanges(t) {
              if (t.items) {
                const n = t.items;
                this._onItemsChange(n.currentValue, n.firstChange);
              }
            }
            ngOnDestroy() {
              this._destroy$.next(),
                this._destroy$.complete(),
                this._destroy$.unsubscribe(),
                this.appendTo &&
                  this._renderer.removeChild(
                    this._dropdown.parentNode,
                    this._dropdown
                  );
            }
            scrollTo(t, n = !1) {
              if (!t) return;
              const a = this.items.indexOf(t);
              if (a < 0 || a >= this.itemsLength) return;
              let r;
              if (this.virtualScroll) {
                const s = this._panelService.dimensions.itemHeight;
                r = this._panelService.getScrollTo(
                  a * s,
                  s,
                  this._lastScrollPosition
                );
              } else {
                const s = this._dropdown.querySelector(`#${t.htmlId}`);
                r = this._panelService.getScrollTo(
                  s.offsetTop,
                  s.clientHeight,
                  n ? s.offsetTop : this._lastScrollPosition
                );
              }
              f(r) && (this._scrollablePanel.scrollTop = r);
            }
            scrollToTag() {
              const t = this._scrollablePanel;
              t.scrollTop = t.scrollHeight - t.clientHeight;
            }
            adjustPosition() {
              this._updateYPosition();
            }
            _handleDropdownPosition() {
              (this._currentPosition = this._calculateCurrentPosition(
                this._dropdown
              )),
                Ae.includes(this._currentPosition)
                  ? this._updateDropdownClass(this._currentPosition)
                  : this._updateDropdownClass("bottom"),
                this.appendTo && this._updateYPosition(),
                (this._dropdown.style.opacity = "1");
            }
            _updateDropdownClass(t) {
              Ae.forEach((a) => {
                const r = `ng-select-${a}`;
                this._renderer.removeClass(this._dropdown, r),
                  this._renderer.removeClass(this._select, r);
              });
              const n = `ng-select-${t}`;
              this._renderer.addClass(this._dropdown, n),
                this._renderer.addClass(this._select, n);
            }
            _handleScroll() {
              this._zone.runOutsideAngular(() => {
                (0, L.R)(this.scrollElementRef.nativeElement, "scroll")
                  .pipe((0, h.R)(this._destroy$), (0, kt.e)(0, Sn))
                  .subscribe((t) => {
                    const n = t.path || (t.composedPath && t.composedPath());
                    this._onContentScrolled(
                      n && 0 !== n.length ? n[0].scrollTop : t.target.scrollTop
                    );
                  });
              });
            }
            _handleOutsideClick() {
              !this._document ||
                this._zone.runOutsideAngular(() => {
                  (0, ee.T)(
                    (0, L.R)(this._document, "touchstart", { capture: !0 }),
                    (0, L.R)(this._document, "mousedown", { capture: !0 })
                  )
                    .pipe((0, h.R)(this._destroy$))
                    .subscribe((t) => this._checkToClose(t));
                });
            }
            _checkToClose(t) {
              if (
                this._select.contains(t.target) ||
                this._dropdown.contains(t.target)
              )
                return;
              const n = t.path || (t.composedPath && t.composedPath());
              (t.target &&
                t.target.shadowRoot &&
                n &&
                n[0] &&
                this._select.contains(n[0])) ||
                this._zone.run(() => this.outsideClick.emit());
            }
            _onItemsChange(t, n) {
              (this.items = t || []),
                (this._scrollToEndFired = !1),
                (this.itemsLength = t.length),
                this.virtualScroll
                  ? this._updateItemsRange(n)
                  : (this._setVirtualHeight(), this._updateItems(n));
            }
            _updateItems(t) {
              this.update.emit(this.items),
                !1 !== t &&
                  this._zone.runOutsideAngular(() => {
                    Promise.resolve().then(() => {
                      this._panelService.setDimensions(
                        0,
                        this._scrollablePanel.clientHeight
                      ),
                        this._handleDropdownPosition(),
                        this.scrollTo(this.markedItem, t);
                    });
                  });
            }
            _updateItemsRange(t) {
              this._zone.runOutsideAngular(() => {
                this._measureDimensions().then(() => {
                  t
                    ? (this._renderItemsRange(this._startOffset),
                      this._handleDropdownPosition())
                    : this._renderItemsRange();
                });
              });
            }
            _onContentScrolled(t) {
              this.virtualScroll && this._renderItemsRange(t),
                (this._lastScrollPosition = t),
                this._fireScrollToEnd(t);
            }
            _updateVirtualHeight(t) {
              this._updateScrollHeight &&
                ((this._virtualPadding.style.height = `${t}px`),
                (this._updateScrollHeight = !1));
            }
            _setVirtualHeight() {
              !this._virtualPadding ||
                (this._virtualPadding.style.height = "0px");
            }
            _onItemsLengthChanged() {
              this._updateScrollHeight = !0;
            }
            _renderItemsRange(t = null) {
              if (t && this._lastScrollPosition === t) return;
              const n = this._panelService.calculateItems(
                (t = t || this._scrollablePanel.scrollTop),
                this.itemsLength,
                this.bufferAmount
              );
              this._updateVirtualHeight(n.scrollHeight),
                (this._contentPanel.style.transform = `translateY(${n.topPadding}px)`),
                this._zone.run(() => {
                  this.update.emit(this.items.slice(n.start, n.end)),
                    this.scroll.emit({ start: n.start, end: n.end });
                }),
                f(t) &&
                  0 === this._lastScrollPosition &&
                  ((this._scrollablePanel.scrollTop = t),
                  (this._lastScrollPosition = t));
            }
            _measureDimensions() {
              if (
                this._panelService.dimensions.itemHeight > 0 ||
                0 === this.itemsLength
              )
                return Promise.resolve(this._panelService.dimensions);
              const [t] = this.items;
              return (
                this.update.emit([t]),
                Promise.resolve().then(() => {
                  const a = this._dropdown.querySelector(
                    `#${t.htmlId}`
                  ).clientHeight;
                  return (
                    (this._virtualPadding.style.height =
                      a * this.itemsLength + "px"),
                    this._panelService.setDimensions(
                      a,
                      this._scrollablePanel.clientHeight
                    ),
                    this._panelService.dimensions
                  );
                })
              );
            }
            _fireScrollToEnd(t) {
              this._scrollToEndFired ||
                0 === t ||
                (t + this._dropdown.clientHeight >=
                  (this.virtualScroll
                    ? this._virtualPadding
                    : this._contentPanel
                  ).clientHeight -
                    1 &&
                  (this._zone.run(() => this.scrollToEnd.emit()),
                  (this._scrollToEndFired = !0)));
            }
            _calculateCurrentPosition(t) {
              if ("auto" !== this.position) return this.position;
              const n = this._select.getBoundingClientRect(),
                a =
                  document.documentElement.scrollTop || document.body.scrollTop;
              return n.top +
                window.pageYOffset +
                n.height +
                t.getBoundingClientRect().height >
                a + document.documentElement.clientHeight
                ? "top"
                : "bottom";
            }
            _appendDropdown() {
              if (this.appendTo) {
                if (
                  ((this._parent = document.querySelector(this.appendTo)),
                  !this._parent)
                )
                  throw new Error(
                    `appendTo selector ${this.appendTo} did not found any parent element`
                  );
                this._updateXPosition(),
                  this._parent.appendChild(this._dropdown);
              }
            }
            _updateXPosition() {
              const t = this._select.getBoundingClientRect(),
                n = this._parent.getBoundingClientRect();
              (this._dropdown.style.left = t.left - n.left + "px"),
                (this._dropdown.style.width = t.width + "px"),
                (this._dropdown.style.minWidth = t.width + "px");
            }
            _updateYPosition() {
              const t = this._select.getBoundingClientRect(),
                n = this._parent.getBoundingClientRect(),
                a = t.height;
              "top" === this._currentPosition
                ? ((this._dropdown.style.bottom =
                    n.bottom - t.bottom + a + "px"),
                  (this._dropdown.style.top = "auto"))
                : "bottom" === this._currentPosition &&
                  ((this._dropdown.style.top = t.top - n.top + a + "px"),
                  (this._dropdown.style.bottom = "auto"));
            }
            _setupMousedownListener() {
              this._zone.runOutsideAngular(() => {
                (0, L.R)(this._dropdown, "mousedown")
                  .pipe((0, h.R)(this._destroy$))
                  .subscribe((t) => {
                    "INPUT" !== t.target.tagName && t.preventDefault();
                  });
              });
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(
                e.Y36(e.Qsj),
                e.Y36(e.R0b),
                e.Y36(Te),
                e.Y36(e.SBq),
                e.Y36(C.K0, 8)
              );
            }),
            (i.ɵcmp = e.Xpm({
              type: i,
              selectors: [["ng-dropdown-panel"]],
              viewQuery: function (t, n) {
                if (
                  (1 & t &&
                    (e.Gf(St, 7, e.SBq),
                    e.Gf(qt, 7, e.SBq),
                    e.Gf(Dt, 7, e.SBq)),
                  2 & t)
                ) {
                  let a;
                  e.iGM((a = e.CRH())) && (n.contentElementRef = a.first),
                    e.iGM((a = e.CRH())) && (n.scrollElementRef = a.first),
                    e.iGM((a = e.CRH())) && (n.paddingElementRef = a.first);
                }
              },
              inputs: {
                items: "items",
                markedItem: "markedItem",
                position: "position",
                appendTo: "appendTo",
                bufferAmount: "bufferAmount",
                virtualScroll: "virtualScroll",
                headerTemplate: "headerTemplate",
                footerTemplate: "footerTemplate",
                filterValue: "filterValue",
              },
              outputs: {
                update: "update",
                scroll: "scroll",
                scrollToEnd: "scrollToEnd",
                outsideClick: "outsideClick",
              },
              features: [e.TTD],
              ngContentSelectors: ye,
              decls: 9,
              vars: 6,
              consts: [
                ["class", "ng-dropdown-header", 4, "ngIf"],
                [1, "ng-dropdown-panel-items", "scroll-host"],
                ["scroll", ""],
                ["padding", ""],
                ["content", ""],
                ["class", "ng-dropdown-footer", 4, "ngIf"],
                [1, "ng-dropdown-header"],
                [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
                [1, "ng-dropdown-footer"],
              ],
              template: function (t, n) {
                1 & t &&
                  (e.F$t(),
                  e.YNc(0, Lt, 2, 4, "div", 0),
                  e.TgZ(1, "div", 1, 2),
                  e._UZ(3, "div", null, 3),
                  e.TgZ(5, "div", null, 4),
                  e.Hsn(7),
                  e.qZA()(),
                  e.YNc(8, zt, 2, 4, "div", 5)),
                  2 & t &&
                    (e.Q6J("ngIf", n.headerTemplate),
                    e.xp6(3),
                    e.ekj("total-padding", n.virtualScroll),
                    e.xp6(2),
                    e.ekj(
                      "scrollable-content",
                      n.virtualScroll && n.items.length
                    ),
                    e.xp6(3),
                    e.Q6J("ngIf", n.footerTemplate));
              },
              dependencies: [C.O5, C.tP],
              encapsulation: 2,
              changeDetection: 0,
            })),
            i
          );
        })(),
        Ee = (() => {
          class i {
            constructor(t) {
              (this.elementRef = t),
                (this.stateChange$ = new T.x()),
                (this._disabled = !1);
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(t) {
              this._disabled = this._isDisabled(t);
            }
            get label() {
              return (this.elementRef.nativeElement.textContent || "").trim();
            }
            ngOnChanges(t) {
              t.disabled &&
                this.stateChange$.next({
                  value: this.value,
                  disabled: this._disabled,
                });
            }
            ngAfterViewChecked() {
              this.label !== this._previousLabel &&
                ((this._previousLabel = this.label),
                this.stateChange$.next({
                  value: this.value,
                  disabled: this._disabled,
                  label: this.elementRef.nativeElement.innerHTML,
                }));
            }
            ngOnDestroy() {
              this.stateChange$.complete();
            }
            _isDisabled(t) {
              return null != t && "false" != `${t}`;
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)(e.Y36(e.SBq));
            }),
            (i.ɵcmp = e.Xpm({
              type: i,
              selectors: [["ng-option"]],
              inputs: { value: "value", disabled: "disabled" },
              features: [e.TTD],
              ngContentSelectors: ye,
              decls: 1,
              vars: 0,
              template: function (t, n) {
                1 & t && (e.F$t(), e.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            i
          );
        })(),
        qn = (() => {
          class i {
            constructor() {
              (this.notFoundText = "No items found"),
                (this.typeToSearchText = "Type to search"),
                (this.addTagText = "Add item"),
                (this.loadingText = "Loading..."),
                (this.clearAllText = "Clear all"),
                (this.disableVirtualScroll = !0),
                (this.openOnEnter = !0),
                (this.appearance = "underline");
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })(),
        Dn = (() => {
          class i {
            warn(t) {
              console.warn(t);
            }
          }
          return (
            (i.ɵfac = function (t) {
              return new (t || i)();
            }),
            (i.ɵprov = e.Yz7({
              token: i,
              factory: i.ɵfac,
              providedIn: "root",
            })),
            i
          );
        })();
      const Ie = new e.OlP("ng-select-selection-model");
      let Ln = (() => {
        class i {
          constructor(t, n, a, r, s, c, u) {
            (this.classes = t),
              (this.autoFocus = n),
              (this.config = a),
              (this._cd = c),
              (this._console = u),
              (this.markFirst = !0),
              (this.dropdownPosition = "auto"),
              (this.loading = !1),
              (this.closeOnSelect = !0),
              (this.hideSelected = !1),
              (this.selectOnTab = !1),
              (this.bufferAmount = 4),
              (this.selectableGroup = !1),
              (this.selectableGroupAsModel = !0),
              (this.searchFn = null),
              (this.trackByFn = null),
              (this.clearOnBackspace = !0),
              (this.labelForId = null),
              (this.inputAttrs = {}),
              (this.readonly = !1),
              (this.searchWhileComposing = !0),
              (this.minTermLength = 0),
              (this.editableSearchTerm = !1),
              (this.keyDownFn = (p) => !0),
              (this.multiple = !1),
              (this.addTag = !1),
              (this.searchable = !0),
              (this.clearable = !0),
              (this.isOpen = !1),
              (this.blurEvent = new e.vpe()),
              (this.focusEvent = new e.vpe()),
              (this.changeEvent = new e.vpe()),
              (this.openEvent = new e.vpe()),
              (this.closeEvent = new e.vpe()),
              (this.searchEvent = new e.vpe()),
              (this.clearEvent = new e.vpe()),
              (this.addEvent = new e.vpe()),
              (this.removeEvent = new e.vpe()),
              (this.scroll = new e.vpe()),
              (this.scrollToEnd = new e.vpe()),
              (this.useDefaultClass = !0),
              (this.viewPortItems = []),
              (this.searchTerm = null),
              (this.dropdownId = be()),
              (this.escapeHTML = !0),
              (this._items = []),
              (this._defaultLabel = "label"),
              (this._pressedKeys = []),
              (this._isComposing = !1),
              (this._destroy$ = new T.x()),
              (this._keyPress$ = new T.x()),
              (this._onChange = (p) => {}),
              (this._onTouched = () => {}),
              (this.clearItem = (p) => {
                const d = this.selectedItems.find((_) => _.value === p);
                this.unselect(d);
              }),
              (this.trackByOption = (p, d) =>
                this.trackByFn ? this.trackByFn(d.value) : d),
              this._mergeGlobalConfig(a),
              (this.itemsList = new Fn(this, r())),
              (this.element = s.nativeElement);
          }
          get items() {
            return this._items;
          }
          set items(t) {
            null === t && (t = []),
              (this._itemsAreUsed = !0),
              (this._items = t);
          }
          get compareWith() {
            return this._compareWith;
          }
          set compareWith(t) {
            if (null != t && !z(t))
              throw Error("`compareWith` must be a function.");
            this._compareWith = t;
          }
          get clearSearchOnAdd() {
            return f(this._clearSearchOnAdd)
              ? this._clearSearchOnAdd
              : f(this.config.clearSearchOnAdd)
              ? this.config.clearSearchOnAdd
              : this.closeOnSelect;
          }
          set clearSearchOnAdd(t) {
            this._clearSearchOnAdd = t;
          }
          get disabled() {
            return this.readonly || this._disabled;
          }
          get filtered() {
            return (!!this.searchTerm && this.searchable) || this._isComposing;
          }
          get single() {
            return !this.multiple;
          }
          get _editableSearchTerm() {
            return this.editableSearchTerm && !this.multiple;
          }
          get selectedItems() {
            return this.itemsList.selectedItems;
          }
          get selectedValues() {
            return this.selectedItems.map((t) => t.value);
          }
          get hasValue() {
            return this.selectedItems.length > 0;
          }
          get currentPanelPosition() {
            if (this.dropdownPanel) return this.dropdownPanel.currentPosition;
          }
          ngOnInit() {
            this._handleKeyPresses(), this._setInputAttributes();
          }
          ngOnChanges(t) {
            t.multiple && this.itemsList.clearSelected(),
              t.items && this._setItems(t.items.currentValue || []),
              t.isOpen && (this._manualOpen = f(t.isOpen.currentValue));
          }
          ngAfterViewInit() {
            this._itemsAreUsed ||
              ((this.escapeHTML = !1), this._setItemsFromNgOptions()),
              f(this.autoFocus) && this.focus();
          }
          ngOnDestroy() {
            this._destroy$.next(), this._destroy$.complete();
          }
          handleKeyDown(t) {
            if (E[t.which]) {
              if (!1 === this.keyDownFn(t)) return;
              this.handleKeyCode(t);
            } else
              t.key &&
                1 === t.key.length &&
                this._keyPress$.next(t.key.toLocaleLowerCase());
          }
          handleKeyCode(t) {
            switch (t.which) {
              case E.ArrowDown:
                this._handleArrowDown(t);
                break;
              case E.ArrowUp:
                this._handleArrowUp(t);
                break;
              case E.Space:
                this._handleSpace(t);
                break;
              case E.Enter:
                this._handleEnter(t);
                break;
              case E.Tab:
                this._handleTab(t);
                break;
              case E.Esc:
                this.close(), t.preventDefault();
                break;
              case E.Backspace:
                this._handleBackspace();
            }
          }
          handleMousedown(t) {
            const n = t.target;
            "INPUT" !== n.tagName && t.preventDefault(),
              n.classList.contains("ng-clear-wrapper")
                ? this.handleClearClick()
                : n.classList.contains("ng-arrow-wrapper")
                ? this.handleArrowClick()
                : n.classList.contains("ng-value-icon") ||
                  (this.focused || this.focus(),
                  this.searchable ? this.open() : this.toggle());
          }
          handleArrowClick() {
            this.isOpen ? this.close() : this.open();
          }
          handleClearClick() {
            this.hasValue &&
              (this.itemsList.clearSelected(!0), this._updateNgModel()),
              this._clearSearch(),
              this.focus(),
              this.clearEvent.emit(),
              this._onSelectionChanged();
          }
          clearModel() {
            !this.clearable ||
              (this.itemsList.clearSelected(), this._updateNgModel());
          }
          writeValue(t) {
            this.itemsList.clearSelected(),
              this._handleWriteValue(t),
              this._cd.markForCheck();
          }
          registerOnChange(t) {
            this._onChange = t;
          }
          registerOnTouched(t) {
            this._onTouched = t;
          }
          setDisabledState(t) {
            (this._disabled = t), this._cd.markForCheck();
          }
          toggle() {
            this.isOpen ? this.close() : this.open();
          }
          open() {
            this.disabled ||
              this.isOpen ||
              this._manualOpen ||
              (!this._isTypeahead &&
                !this.addTag &&
                this.itemsList.noItemsToSelect) ||
              ((this.isOpen = !0),
              this.itemsList.markSelectedOrDefault(this.markFirst),
              this.openEvent.emit(),
              this.searchTerm || this.focus(),
              this.detectChanges());
          }
          close() {
            !this.isOpen ||
              this._manualOpen ||
              ((this.isOpen = !1),
              (this._isComposing = !1),
              this._editableSearchTerm
                ? this.itemsList.resetFilteredItems()
                : this._clearSearch(),
              this.itemsList.unmarkItem(),
              this._onTouched(),
              this.closeEvent.emit(),
              this._cd.markForCheck());
          }
          toggleItem(t) {
            !t ||
              t.disabled ||
              this.disabled ||
              (this.multiple && t.selected ? this.unselect(t) : this.select(t),
              this._editableSearchTerm && this._setSearchTermFromItems(),
              this._onSelectionChanged());
          }
          select(t) {
            t.selected ||
              (this.itemsList.select(t),
              this.clearSearchOnAdd &&
                !this._editableSearchTerm &&
                this._clearSearch(),
              this._updateNgModel(),
              this.multiple && this.addEvent.emit(t.value)),
              (this.closeOnSelect || this.itemsList.noItemsToSelect) &&
                this.close();
          }
          focus() {
            this.searchInput.nativeElement.focus();
          }
          blur() {
            this.searchInput.nativeElement.blur();
          }
          unselect(t) {
            !t ||
              (this.itemsList.unselect(t),
              this.focus(),
              this._updateNgModel(),
              this.removeEvent.emit(t));
          }
          selectTag() {
            let t;
            t = z(this.addTag)
              ? this.addTag(this.searchTerm)
              : this._primitive
              ? this.searchTerm
              : { [this.bindLabel]: this.searchTerm };
            const n = (a) =>
              this._isTypeahead || !this.isOpen
                ? this.itemsList.mapItem(a, null)
                : this.itemsList.addItem(a);
            !(function Tn(i) {
              return i instanceof Promise;
            })(t)
              ? t && this.select(n(t))
              : t.then((a) => this.select(n(a))).catch(() => {});
          }
          showClear() {
            return (
              this.clearable &&
              (this.hasValue || this.searchTerm) &&
              !this.disabled
            );
          }
          get showAddTag() {
            if (!this._validTerm) return !1;
            const t = this.searchTerm.toLowerCase().trim();
            return (
              this.addTag &&
              !this.itemsList.filteredItems.some(
                (n) => n.label.toLowerCase() === t
              ) &&
              ((!this.hideSelected && this.isOpen) ||
                !this.selectedItems.some((n) => n.label.toLowerCase() === t)) &&
              !this.loading
            );
          }
          showNoItemsFound() {
            const t = 0 === this.itemsList.filteredItems.length;
            return (
              ((t && !this._isTypeahead && !this.loading) ||
                (t && this._isTypeahead && this._validTerm && !this.loading)) &&
              !this.showAddTag
            );
          }
          showTypeToSearch() {
            return (
              0 === this.itemsList.filteredItems.length &&
              this._isTypeahead &&
              !this._validTerm &&
              !this.loading
            );
          }
          onCompositionStart() {
            this._isComposing = !0;
          }
          onCompositionEnd(t) {
            (this._isComposing = !1),
              !this.searchWhileComposing && this.filter(t);
          }
          filter(t) {
            (this._isComposing && !this.searchWhileComposing) ||
              ((this.searchTerm = t),
              this._isTypeahead &&
                (this._validTerm || 0 === this.minTermLength) &&
                this.typeahead.next(t),
              this._isTypeahead ||
                (this.itemsList.filter(this.searchTerm),
                this.isOpen &&
                  this.itemsList.markSelectedOrDefault(this.markFirst)),
              this.searchEvent.emit({
                term: t,
                items: this.itemsList.filteredItems.map((n) => n.value),
              }),
              this.open());
          }
          onInputFocus(t) {
            this.focused ||
              (this._editableSearchTerm && this._setSearchTermFromItems(),
              this.element.classList.add("ng-select-focused"),
              this.focusEvent.emit(t),
              (this.focused = !0));
          }
          onInputBlur(t) {
            this.element.classList.remove("ng-select-focused"),
              this.blurEvent.emit(t),
              !this.isOpen && !this.disabled && this._onTouched(),
              this._editableSearchTerm && this._setSearchTermFromItems(),
              (this.focused = !1);
          }
          onItemHover(t) {
            t.disabled || this.itemsList.markItem(t);
          }
          detectChanges() {
            this._cd.destroyed || this._cd.detectChanges();
          }
          _setSearchTermFromItems() {
            const t = this.selectedItems && this.selectedItems[0];
            this.searchTerm = (t && t.label) || null;
          }
          _setItems(t) {
            const n = t[0];
            (this.bindLabel = this.bindLabel || this._defaultLabel),
              (this._primitive = f(n)
                ? !q(n)
                : this._primitive || this.bindLabel === this._defaultLabel),
              this.itemsList.setItems(t),
              t.length > 0 &&
                this.hasValue &&
                this.itemsList.mapSelectedItems(),
              this.isOpen &&
                f(this.searchTerm) &&
                !this._isTypeahead &&
                this.itemsList.filter(this.searchTerm),
              (this._isTypeahead || this.isOpen) &&
                this.itemsList.markSelectedOrDefault(this.markFirst);
          }
          _setItemsFromNgOptions() {
            const t = (a) => {
                (this.items = a.map((r) => ({
                  $ngOptionValue: r.value,
                  $ngOptionLabel: r.elementRef.nativeElement.innerHTML,
                  disabled: r.disabled,
                }))),
                  this.itemsList.setItems(this.items),
                  this.hasValue && this.itemsList.mapSelectedItems(),
                  this.detectChanges();
              },
              n = () => {
                const a = (0, ee.T)(this.ngOptions.changes, this._destroy$);
                (0, ee.T)(...this.ngOptions.map((r) => r.stateChange$))
                  .pipe((0, h.R)(a))
                  .subscribe((r) => {
                    const s = this.itemsList.findItem(r.value);
                    (s.disabled = r.disabled),
                      (s.label = r.label || s.label),
                      this._cd.detectChanges();
                  });
              };
            this.ngOptions.changes
              .pipe((0, Nt.O)(this.ngOptions), (0, h.R)(this._destroy$))
              .subscribe((a) => {
                (this.bindLabel = this._defaultLabel), t(a), n();
              });
          }
          _isValidWriteValue(t) {
            if (
              !f(t) ||
              (this.multiple && "" === t) ||
              (Array.isArray(t) && 0 === t.length)
            )
              return !1;
            const n = (a) =>
              !(
                !f(this.compareWith) &&
                q(a) &&
                this.bindValue &&
                (this._console.warn(
                  `Setting object(${JSON.stringify(
                    a
                  )}) as your model with bindValue is not allowed unless [compareWith] is used.`
                ),
                1)
              );
            return this.multiple
              ? Array.isArray(t)
                ? t.every((a) => n(a))
                : (this._console.warn(
                    "Multiple select ngModel should be array."
                  ),
                  !1)
              : n(t);
          }
          _handleWriteValue(t) {
            if (!this._isValidWriteValue(t)) return;
            const n = (a) => {
              let r = this.itemsList.findItem(a);
              if (r) this.itemsList.select(r);
              else {
                const s = q(a),
                  c = !s && !this.bindValue;
                s || c
                  ? this.itemsList.select(this.itemsList.mapItem(a, null))
                  : this.bindValue &&
                    ((r = { [this.bindLabel]: null, [this.bindValue]: a }),
                    this.itemsList.select(this.itemsList.mapItem(r, null)));
              }
            };
            this.multiple ? t.forEach((a) => n(a)) : n(t);
          }
          _handleKeyPresses() {
            this.searchable ||
              this._keyPress$
                .pipe(
                  (0, h.R)(this._destroy$),
                  (0, X.b)((t) => this._pressedKeys.push(t)),
                  (0, Ot.b)(200),
                  (0, Bt.h)(() => this._pressedKeys.length > 0),
                  (0, I.U)(() => this._pressedKeys.join(""))
                )
                .subscribe((t) => {
                  const n = this.itemsList.findByLabel(t);
                  n &&
                    (this.isOpen
                      ? (this.itemsList.markItem(n),
                        this._scrollToMarked(),
                        this._cd.markForCheck())
                      : this.select(n)),
                    (this._pressedKeys = []);
                });
          }
          _setInputAttributes() {
            const t = this.searchInput.nativeElement,
              n = {
                type: "text",
                autocorrect: "off",
                autocapitalize: "off",
                autocomplete: this.labelForId ? "off" : this.dropdownId,
                ...this.inputAttrs,
              };
            for (const a of Object.keys(n)) t.setAttribute(a, n[a]);
          }
          _updateNgModel() {
            const t = [];
            for (const a of this.selectedItems)
              if (this.bindValue) {
                let r = null;
                (r = a.children
                  ? a.value[
                      (this.groupValue ? this.bindValue : this.groupBy) ||
                        this.groupBy
                    ]
                  : this.itemsList.resolveNested(a.value, this.bindValue)),
                  t.push(r);
              } else t.push(a.value);
            const n = this.selectedItems.map((a) => a.value);
            this.multiple
              ? (this._onChange(t), this.changeEvent.emit(n))
              : (this._onChange(f(t[0]) ? t[0] : null),
                this.changeEvent.emit(n[0])),
              this._cd.markForCheck();
          }
          _clearSearch() {
            !this.searchTerm ||
              (this._changeSearch(null), this.itemsList.resetFilteredItems());
          }
          _changeSearch(t) {
            (this.searchTerm = t), this._isTypeahead && this.typeahead.next(t);
          }
          _scrollToMarked() {
            !this.isOpen ||
              !this.dropdownPanel ||
              this.dropdownPanel.scrollTo(this.itemsList.markedItem);
          }
          _scrollToTag() {
            !this.isOpen ||
              !this.dropdownPanel ||
              this.dropdownPanel.scrollToTag();
          }
          _onSelectionChanged() {
            this.isOpen &&
              this.multiple &&
              this.appendTo &&
              (this._cd.detectChanges(), this.dropdownPanel.adjustPosition());
          }
          _handleTab(t) {
            (!1 === this.isOpen && !this.addTag) ||
              (this.selectOnTab
                ? this.itemsList.markedItem
                  ? (this.toggleItem(this.itemsList.markedItem),
                    t.preventDefault())
                  : this.showAddTag
                  ? (this.selectTag(), t.preventDefault())
                  : this.close()
                : this.close());
          }
          _handleEnter(t) {
            if (this.isOpen || this._manualOpen)
              this.itemsList.markedItem
                ? this.toggleItem(this.itemsList.markedItem)
                : this.showAddTag && this.selectTag();
            else {
              if (!this.openOnEnter) return;
              this.open();
            }
            t.preventDefault();
          }
          _handleSpace(t) {
            this.isOpen ||
              this._manualOpen ||
              (this.open(), t.preventDefault());
          }
          _handleArrowDown(t) {
            this._nextItemIsTag(1)
              ? (this.itemsList.unmarkItem(), this._scrollToTag())
              : (this.itemsList.markNextItem(), this._scrollToMarked()),
              this.open(),
              t.preventDefault();
          }
          _handleArrowUp(t) {
            !this.isOpen ||
              (this._nextItemIsTag(-1)
                ? (this.itemsList.unmarkItem(), this._scrollToTag())
                : (this.itemsList.markPreviousItem(), this._scrollToMarked()),
              t.preventDefault());
          }
          _nextItemIsTag(t) {
            const n = this.itemsList.markedIndex + t;
            return (
              this.addTag &&
              this.searchTerm &&
              this.itemsList.markedItem &&
              (n < 0 || n === this.itemsList.filteredItems.length)
            );
          }
          _handleBackspace() {
            this.searchTerm ||
              !this.clearable ||
              !this.clearOnBackspace ||
              !this.hasValue ||
              (this.multiple
                ? this.unselect(this.itemsList.lastSelectedItem)
                : this.clearModel());
          }
          get _isTypeahead() {
            return this.typeahead && this.typeahead.observers.length > 0;
          }
          get _validTerm() {
            const t = this.searchTerm && this.searchTerm.trim();
            return t && t.length >= this.minTermLength;
          }
          _mergeGlobalConfig(t) {
            (this.placeholder = this.placeholder || t.placeholder),
              (this.notFoundText = this.notFoundText || t.notFoundText),
              (this.typeToSearchText =
                this.typeToSearchText || t.typeToSearchText),
              (this.addTagText = this.addTagText || t.addTagText),
              (this.loadingText = this.loadingText || t.loadingText),
              (this.clearAllText = this.clearAllText || t.clearAllText),
              (this.virtualScroll = f(this.virtualScroll)
                ? this.virtualScroll
                : !!f(t.disableVirtualScroll) && !t.disableVirtualScroll),
              (this.openOnEnter = f(this.openOnEnter)
                ? this.openOnEnter
                : t.openOnEnter),
              (this.appendTo = this.appendTo || t.appendTo),
              (this.bindValue = this.bindValue || t.bindValue),
              (this.bindLabel = this.bindLabel || t.bindLabel),
              (this.appearance = this.appearance || t.appearance);
          }
        }
        return (
          (i.ɵfac = function (t) {
            return new (t || i)(
              e.$8M("class"),
              e.$8M("autofocus"),
              e.Y36(qn),
              e.Y36(Ie),
              e.Y36(e.SBq),
              e.Y36(e.sBO),
              e.Y36(Dn)
            );
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["ng-select"]],
            contentQueries: function (t, n, a) {
              if (
                (1 & t &&
                  (e.Suo(a, xn, 5, e.Rgc),
                  e.Suo(a, En, 5, e.Rgc),
                  e.Suo(a, In, 5, e.Rgc),
                  e.Suo(a, Mn, 5, e.Rgc),
                  e.Suo(a, wn, 5, e.Rgc),
                  e.Suo(a, Zn, 5, e.Rgc),
                  e.Suo(a, Qn, 5, e.Rgc),
                  e.Suo(a, kn, 5, e.Rgc),
                  e.Suo(a, Nn, 5, e.Rgc),
                  e.Suo(a, On, 5, e.Rgc),
                  e.Suo(a, Bn, 5, e.Rgc),
                  e.Suo(a, Ee, 5)),
                2 & t)
              ) {
                let r;
                e.iGM((r = e.CRH())) && (n.optionTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.optgroupTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.labelTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.multiLabelTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.headerTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.footerTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.notFoundTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.typeToSearchTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.loadingTextTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.tagTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.loadingSpinnerTemplate = r.first),
                  e.iGM((r = e.CRH())) && (n.ngOptions = r);
              }
            },
            viewQuery: function (t, n) {
              if ((1 & t && (e.Gf(xe, 5), e.Gf(Ut, 7)), 2 & t)) {
                let a;
                e.iGM((a = e.CRH())) && (n.dropdownPanel = a.first),
                  e.iGM((a = e.CRH())) && (n.searchInput = a.first);
              }
            },
            hostVars: 20,
            hostBindings: function (t, n) {
              1 & t &&
                e.NdJ("keydown", function (r) {
                  return n.handleKeyDown(r);
                }),
                2 & t &&
                  e.ekj("ng-select-typeahead", n.typeahead)(
                    "ng-select-multiple",
                    n.multiple
                  )("ng-select-taggable", n.addTag)(
                    "ng-select-searchable",
                    n.searchable
                  )("ng-select-clearable", n.clearable)(
                    "ng-select-opened",
                    n.isOpen
                  )("ng-select", n.useDefaultClass)(
                    "ng-select-disabled",
                    n.disabled
                  )("ng-select-filtered", n.filtered)(
                    "ng-select-single",
                    n.single
                  );
            },
            inputs: {
              bindLabel: "bindLabel",
              bindValue: "bindValue",
              markFirst: "markFirst",
              placeholder: "placeholder",
              notFoundText: "notFoundText",
              typeToSearchText: "typeToSearchText",
              addTagText: "addTagText",
              loadingText: "loadingText",
              clearAllText: "clearAllText",
              appearance: "appearance",
              dropdownPosition: "dropdownPosition",
              appendTo: "appendTo",
              loading: "loading",
              closeOnSelect: "closeOnSelect",
              hideSelected: "hideSelected",
              selectOnTab: "selectOnTab",
              openOnEnter: "openOnEnter",
              maxSelectedItems: "maxSelectedItems",
              groupBy: "groupBy",
              groupValue: "groupValue",
              bufferAmount: "bufferAmount",
              virtualScroll: "virtualScroll",
              selectableGroup: "selectableGroup",
              selectableGroupAsModel: "selectableGroupAsModel",
              searchFn: "searchFn",
              trackByFn: "trackByFn",
              clearOnBackspace: "clearOnBackspace",
              labelForId: "labelForId",
              inputAttrs: "inputAttrs",
              tabIndex: "tabIndex",
              readonly: "readonly",
              searchWhileComposing: "searchWhileComposing",
              minTermLength: "minTermLength",
              editableSearchTerm: "editableSearchTerm",
              keyDownFn: "keyDownFn",
              typeahead: "typeahead",
              multiple: "multiple",
              addTag: "addTag",
              searchable: "searchable",
              clearable: "clearable",
              isOpen: "isOpen",
              items: "items",
              compareWith: "compareWith",
              clearSearchOnAdd: "clearSearchOnAdd",
            },
            outputs: {
              blurEvent: "blur",
              focusEvent: "focus",
              changeEvent: "change",
              openEvent: "open",
              closeEvent: "close",
              searchEvent: "search",
              clearEvent: "clear",
              addEvent: "add",
              removeEvent: "remove",
              scroll: "scroll",
              scrollToEnd: "scrollToEnd",
            },
            features: [
              e._Bn([
                { provide: l.JU, useExisting: (0, e.Gpc)(() => i), multi: !0 },
                Te,
              ]),
              e.TTD,
            ],
            decls: 14,
            vars: 19,
            consts: [
              [1, "ng-select-container", 3, "mousedown"],
              [1, "ng-value-container"],
              [1, "ng-placeholder"],
              [4, "ngIf"],
              ["role", "combobox", "aria-haspopup", "listbox", 1, "ng-input"],
              [
                "aria-autocomplete",
                "list",
                3,
                "readOnly",
                "disabled",
                "value",
                "input",
                "compositionstart",
                "compositionend",
                "focus",
                "blur",
                "change",
              ],
              ["searchInput", ""],
              ["class", "ng-clear-wrapper", 3, "title", 4, "ngIf"],
              [1, "ng-arrow-wrapper"],
              [1, "ng-arrow"],
              [
                "class",
                "ng-dropdown-panel",
                "role",
                "listbox",
                "aria-label",
                "Options list",
                3,
                "virtualScroll",
                "bufferAmount",
                "appendTo",
                "position",
                "headerTemplate",
                "footerTemplate",
                "filterValue",
                "items",
                "markedItem",
                "ng-select-multiple",
                "ngClass",
                "id",
                "update",
                "scroll",
                "scrollToEnd",
                "outsideClick",
                4,
                "ngIf",
              ],
              [
                "class",
                "ng-value",
                3,
                "ng-value-disabled",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [1, "ng-value"],
              ["defaultLabelTemplate", ""],
              [3, "ngTemplateOutlet", "ngTemplateOutletContext"],
              ["aria-hidden", "true", 1, "ng-value-icon", "left", 3, "click"],
              [1, "ng-value-label", 3, "ngItemLabel", "escape"],
              ["defaultLoadingSpinnerTemplate", ""],
              [3, "ngTemplateOutlet"],
              [1, "ng-spinner-loader"],
              [1, "ng-clear-wrapper", 3, "title"],
              ["aria-hidden", "true", 1, "ng-clear"],
              [
                "role",
                "listbox",
                "aria-label",
                "Options list",
                1,
                "ng-dropdown-panel",
                3,
                "virtualScroll",
                "bufferAmount",
                "appendTo",
                "position",
                "headerTemplate",
                "footerTemplate",
                "filterValue",
                "items",
                "markedItem",
                "ngClass",
                "id",
                "update",
                "scroll",
                "scrollToEnd",
                "outsideClick",
              ],
              [
                "class",
                "ng-option",
                3,
                "ng-option-disabled",
                "ng-option-selected",
                "ng-optgroup",
                "ng-option",
                "ng-option-child",
                "ng-option-marked",
                "click",
                "mouseover",
                4,
                "ngFor",
                "ngForOf",
                "ngForTrackBy",
              ],
              [
                "class",
                "ng-option",
                "role",
                "option",
                3,
                "ng-option-marked",
                "mouseover",
                "click",
                4,
                "ngIf",
              ],
              [1, "ng-option", 3, "click", "mouseover"],
              ["defaultOptionTemplate", ""],
              [1, "ng-option-label", 3, "ngItemLabel", "escape"],
              ["role", "option", 1, "ng-option", 3, "mouseover", "click"],
              ["defaultTagTemplate", ""],
              [1, "ng-tag-label"],
              ["defaultNotFoundTemplate", ""],
              [1, "ng-option", "ng-option-disabled"],
              ["defaultTypeToSearchTemplate", ""],
              ["defaultLoadingTextTemplate", ""],
            ],
            template: function (t, n) {
              if (1 & t) {
                const a = e.EpF();
                e.TgZ(0, "div", 0),
                  e.NdJ("mousedown", function (s) {
                    return n.handleMousedown(s);
                  }),
                  e.TgZ(1, "div", 1)(2, "div", 2),
                  e._uU(3),
                  e.qZA(),
                  e.YNc(4, Vt, 2, 2, "ng-container", 3),
                  e.YNc(5, $t, 1, 5, null, 3),
                  e.TgZ(6, "div", 4)(7, "input", 5, 6),
                  e.NdJ("input", function () {
                    e.CHM(a);
                    const s = e.MAs(8);
                    return e.KtG(n.filter(s.value));
                  })("compositionstart", function () {
                    return n.onCompositionStart();
                  })("compositionend", function () {
                    e.CHM(a);
                    const s = e.MAs(8);
                    return e.KtG(n.onCompositionEnd(s.value));
                  })("focus", function (s) {
                    return n.onInputFocus(s);
                  })("blur", function (s) {
                    return n.onInputBlur(s);
                  })("change", function (s) {
                    return s.stopPropagation();
                  }),
                  e.qZA()()(),
                  e.YNc(9, Xt, 4, 1, "ng-container", 3),
                  e.YNc(10, en, 3, 1, "span", 7),
                  e.TgZ(11, "span", 8),
                  e._UZ(12, "span", 9),
                  e.qZA()(),
                  e.YNc(13, vn, 7, 19, "ng-dropdown-panel", 10);
              }
              2 & t &&
                (e.ekj("ng-appearance-outline", "outline" === n.appearance)(
                  "ng-has-value",
                  n.hasValue
                ),
                e.xp6(3),
                e.Oqu(n.placeholder),
                e.xp6(1),
                e.Q6J(
                  "ngIf",
                  (!n.multiLabelTemplate || !n.multiple) &&
                    n.selectedItems.length > 0
                ),
                e.xp6(1),
                e.Q6J(
                  "ngIf",
                  n.multiple &&
                    n.multiLabelTemplate &&
                    n.selectedValues.length > 0
                ),
                e.xp6(1),
                e.uIk("aria-expanded", n.isOpen)(
                  "aria-owns",
                  n.isOpen ? n.dropdownId : null
                ),
                e.xp6(1),
                e.Q6J(
                  "readOnly",
                  !n.searchable || n.itemsList.maxItemsSelected
                )("disabled", n.disabled)(
                  "value",
                  n.searchTerm ? n.searchTerm : ""
                ),
                e.uIk("id", n.labelForId)("tabindex", n.tabIndex)(
                  "aria-activedescendant",
                  n.isOpen
                    ? null == n.itemsList || null == n.itemsList.markedItem
                      ? null
                      : n.itemsList.markedItem.htmlId
                    : null
                )("aria-controls", n.isOpen ? n.dropdownId : null),
                e.xp6(2),
                e.Q6J("ngIf", n.loading),
                e.xp6(1),
                e.Q6J("ngIf", n.showClear()),
                e.xp6(3),
                e.Q6J("ngIf", n.isOpen));
            },
            dependencies: [C.mk, C.sg, C.O5, C.tP, xe, An],
            styles: [
              '@charset "UTF-8";.ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n',
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          i
        );
      })();
      function zn() {
        return new Un();
      }
      class Un {
        constructor() {
          this._selected = [];
        }
        get value() {
          return this._selected;
        }
        select(o, t, n) {
          if (
            ((o.selected = !0),
            (!o.children || (!t && n)) && this._selected.push(o),
            t)
          )
            if (o.parent) {
              const a = o.parent.children.length,
                r = o.parent.children.filter((s) => s.selected).length;
              o.parent.selected = a === r;
            } else
              o.children &&
                (this._setChildrenSelectedState(o.children, !0),
                this._removeChildren(o),
                (this._selected =
                  n && this._activeChildren(o)
                    ? [...this._selected.filter((a) => a.parent !== o), o]
                    : [
                        ...this._selected,
                        ...o.children.filter((a) => !a.disabled),
                      ]));
        }
        unselect(o, t) {
          if (
            ((this._selected = this._selected.filter((n) => n !== o)),
            (o.selected = !1),
            t)
          )
            if (o.parent && o.parent.selected) {
              const n = o.parent.children;
              this._removeParent(o.parent),
                this._removeChildren(o.parent),
                this._selected.push(...n.filter((a) => a !== o && !a.disabled)),
                (o.parent.selected = !1);
            } else
              o.children &&
                (this._setChildrenSelectedState(o.children, !1),
                this._removeChildren(o));
        }
        clear(o) {
          this._selected = o ? this._selected.filter((t) => t.disabled) : [];
        }
        _setChildrenSelectedState(o, t) {
          for (const n of o) n.disabled || (n.selected = t);
        }
        _removeChildren(o) {
          this._selected = [
            ...this._selected.filter((t) => t.parent !== o),
            ...o.children.filter(
              (t) => t.parent === o && t.disabled && t.selected
            ),
          ];
        }
        _removeParent(o) {
          this._selected = this._selected.filter((t) => t !== o);
        }
        _activeChildren(o) {
          return o.children.every((t) => !t.disabled || t.selected);
        }
      }
      let Jn = (() => {
        class i {}
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({
            providers: [{ provide: Ie, useValue: zn }],
            imports: [C.ez],
          })),
          i
        );
      })();
      var Yn = g(3117);
      let jn = (() => {
        class i {
          constructor() {
            (this.numero = ""),
              (this.descripcion = ""),
              (this.for = ""),
              (this.textoAdicional = "");
          }
          ngOnInit() {}
        }
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵcmp = e.Xpm({
            type: i,
            selectors: [["app-label-form"]],
            inputs: {
              numero: "numero",
              descripcion: "descripcion",
              for: "for",
              textoAdicional: "textoAdicional",
            },
            decls: 7,
            vars: 4,
            consts: [
              [1, "d-flex", "gap-2", "mb-3"],
              [1, "numeracion", 3, "innerHTML"],
              [1, "align-self-center", 3, "for"],
              [1, "text-muted", "text-secondary-question"],
            ],
            template: function (t, n) {
              1 & t &&
                (e.TgZ(0, "div", 0)(1, "div"),
                e._UZ(2, "span", 1),
                e.qZA(),
                e.TgZ(3, "label", 2),
                e._uU(4),
                e.qZA()(),
                e.TgZ(5, "p", 3),
                e._uU(6),
                e.qZA()),
                2 & t &&
                  (e.xp6(2),
                  e.Q6J("innerHTML", n.numero, e.oJD),
                  e.xp6(1),
                  e.Q6J("for", n.for),
                  e.xp6(1),
                  e.Oqu(n.descripcion),
                  e.xp6(2),
                  e.hij(" ", n.textoAdicional, "\n"));
            },
            styles: [
              "label[_ngcontent-%COMP%]{color:#000;font-family:Flexo-regular,sans-serif}.numeracion[_ngcontent-%COMP%]{background:url(./assets/images/cuestionario/bg-numeracion.svg);background-repeat:no-repeat;background-size:contain;display:inline-block;font-size:12px;width:22px;height:19px;text-align:center;color:#fff;font-family:Flexo-bold,sans-serif}.text-secondary-question[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:12px}",
            ],
          })),
          i
        );
      })();
      function Rn(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Vn(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Gn(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Vn, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("lenguaMaterna.lengua")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Hn(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function $n(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Hn, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("lenguaMaterna.detalle")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Wn(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, "div", 21)(2, "div", 16)(3, "label", 93),
            e._uU(4, "Especifique la lengua:"),
            e.qZA(),
            e._UZ(5, "input", 94),
            e.YNc(6, $n, 2, 1, "ng-container", 20),
            e.qZA()(),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(6),
            e.Q6J(
              "ngIf",
              (null == (n = t.getControl("lenguaMaterna.detalle"))
                ? null
                : n.invalid) &&
                (null == (n = t.getControl("lenguaMaterna.detalle"))
                  ? null
                  : n.touched)
            );
        }
      }
      function Kn(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function Xn(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Kn, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("viveEnLima")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function ei(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function ti(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ei, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("responsable.nombresApellidos")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function ni(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function ii(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " M\xednimo 8 digitos "), e.qZA());
      }
      function oi(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " M\xe1ximo 8 digitos "), e.qZA());
      }
      function ai(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.YNc(1, ni, 2, 0, "p", 91),
            e.YNc(2, ii, 2, 0, "p", 91),
            e.YNc(3, oi, 2, 0, "p", 91),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw();
          let n, a, r;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("responsable.dni")) || null == n.errors
                ? null
                : n.errors.required
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (a = t.getControl("responsable.dni")) || null == a.errors
                ? null
                : a.errors.minlength
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (r = t.getControl("responsable.dni")) || null == r.errors
                ? null
                : r.errors.maxlength
            );
        }
      }
      function ri(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function si(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function li(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, si, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("responsable.parentesco.tipo")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function ci(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function ui(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ci, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("responsable.parentesco.detalle")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function pi(i, o) {
        if (
          (1 & i &&
            (e.ynx(0, 21),
            e.TgZ(1, "div", 16),
            e._UZ(2, "app-label-form", 17)(3, "input", 95),
            e.YNc(4, ui, 2, 1, "ng-container", 20),
            e.qZA(),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(2),
            e.Q6J("numero", "4.1")("descripcion", "Especifique parentesco:")(
              "for",
              "detalleParentesco"
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.getControl("responsable.parentesco.detalle"))
                ? null
                : n.invalid) &&
                (null == (n = t.getControl("responsable.parentesco.detalle"))
                  ? null
                  : n.touched)
            );
        }
      }
      function di(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function gi(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, di, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("postulante.nombresApellidos")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function _i(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function mi(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " M\xednimo 8 digitos "), e.qZA());
      }
      function hi(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " M\xe1ximo 8 digitos "), e.qZA());
      }
      function fi(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.YNc(1, _i, 2, 0, "p", 91),
            e.YNc(2, mi, 2, 0, "p", 91),
            e.YNc(3, hi, 2, 0, "p", 91),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw();
          let n, a, r;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("postulante.dni")) || null == n.errors
                ? null
                : n.errors.required
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (a = t.getControl("postulante.dni")) || null == a.errors
                ? null
                : a.errors.minlength
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (r = t.getControl("postulante.dni")) || null == r.errors
                ? null
                : r.errors.maxlength
            );
        }
      }
      function vi(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function yi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ci(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, yi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl("universidadAlaQuePostula.universidad")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function bi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ti(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, bi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("universidadAlaQuePostula.carrera")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ai(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function xi(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ai, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("fortalezasCualidadesPostulante")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ei(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ii(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ei, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("ayudaProcesoPostulaci\xf3n")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Mi(i, o) {
        if ((1 & i && (e.TgZ(0, "ng-option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function wi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Zi(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, wi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("accionesApoyo")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Qi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function ki(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Qi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("eleccionUniCarrera.motivo")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ni(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione el tipo "), e.qZA());
      }
      function Oi(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ni, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("eleccionUniCarrera.estaDeAcuerdo")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Bi(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Pi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Fi(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Pi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("beneficioEconomico.fueAcreedor")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Si(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function qi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Di(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, qi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl(
                  "beneficioEconomico.tipoBeneficio.beneficio"
                )) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Li(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function zi(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Li, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(3);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl(
                  "beneficioEconomico.tipoBeneficio.detalle"
                )) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ui(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div")(1, "label", 99),
            e._uU(2, "12.3 Especificar beneficio:"),
            e.qZA(),
            e._UZ(3, "input", 100),
            e.YNc(4, zi, 2, 1, "ng-container", 20),
            e.qZA()),
          2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(4),
            e.Q6J(
              "ngIf",
              (null ==
              (n = t.getControl("beneficioEconomico.tipoBeneficio.detalle"))
                ? null
                : n.invalid) &&
                (null ==
                (n = t.getControl("beneficioEconomico.tipoBeneficio.detalle"))
                  ? null
                  : n.touched)
            );
        }
      }
      function Ji(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 96)(1, "div", 16)(2, "label", 97),
            e._uU(3, "12.1 En caso haya marcado S\xed, Este beneficio fue:"),
            e.qZA(),
            e.TgZ(4, "select", 98),
            e.YNc(5, Si, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(6, Di, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(7, "div", 16),
            e.YNc(8, Ui, 5, 1, "div", 20),
            e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(5),
            e.Q6J("ngForOf", t.listBeneficio),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null ==
              (n = t.getControl("beneficioEconomico.tipoBeneficio.beneficio"))
                ? null
                : n.invalid) &&
                (null ==
                (n = t.getControl("beneficioEconomico.tipoBeneficio.beneficio"))
                  ? null
                  : n.touched)
            ),
            e.xp6(2),
            e.Q6J("ngIf", t.hasOtroBeneficio);
        }
      }
      function Yi(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function ji(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ri(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ji, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("preparacionPreUniversitaria.tuvo")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Vi(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Gi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Hi(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Gi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl(
                  "preparacionPreUniversitaria.aCargo.periodo"
                )) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function $i(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Wi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ki(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Wi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl(
                  "preparacionPreUniversitaria.aCargo.pagadoPor"
                )) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Xi(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function eo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Xi, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(3);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl(
                  "preparacionPreUniversitaria.aCargo.detalle"
                )) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function to(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div")(1, "label", 99),
            e._uU(2, "13.3 Especificar detalle:"),
            e.qZA(),
            e._UZ(3, "input", 104),
            e.YNc(4, eo, 2, 1, "ng-container", 20),
            e.qZA()),
          2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(4),
            e.Q6J(
              "ngIf",
              (null ==
              (n = t.getControl("preparacionPreUniversitaria.aCargo.detalle"))
                ? null
                : n.invalid) &&
                (null ==
                (n = t.getControl("preparacionPreUniversitaria.aCargo.detalle"))
                  ? null
                  : n.touched)
            );
        }
      }
      function no(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 101)(1, "div", 16)(2, "label", 99),
            e._uU(
              3,
              "13.1 Indicar el tiempo de preparaci\xf3n preuniversitaria:"
            ),
            e.qZA(),
            e.TgZ(4, "select", 102),
            e.YNc(5, Vi, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(6, Hi, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(7, "div", 16)(8, "label", 97),
            e._uU(
              9,
              "13.2 En caso haya marcado S\xed, esta preparaci\xf3n preuniversitaria fue:"
            ),
            e.qZA(),
            e.TgZ(10, "select", 103),
            e.YNc(11, $i, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(12, Ki, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(13, "div", 16),
            e.YNc(14, to, 5, 1, "div", 20),
            e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw();
          let n, a;
          e.xp6(5),
            e.Q6J("ngForOf", t.rangosPreparacion),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null ==
              (n = t.getControl("preparacionPreUniversitaria.aCargo.periodo"))
                ? null
                : n.invalid) &&
                (null ==
                (n = t.getControl("preparacionPreUniversitaria.aCargo.periodo"))
                  ? null
                  : n.touched)
            ),
            e.xp6(5),
            e.Q6J("ngForOf", t.listPagoPreparacion),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null ==
              (a = t.getControl("preparacionPreUniversitaria.aCargo.pagadoPor"))
                ? null
                : a.invalid) &&
                (null ==
                (a = t.getControl(
                  "preparacionPreUniversitaria.aCargo.pagadoPor"
                ))
                  ? null
                  : a.touched)
            ),
            e.xp6(2),
            e.Q6J("ngIf", t.hasOtroPago);
        }
      }
      function io(i, o) {
        if ((1 & i && (e.TgZ(0, "ng-option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function oo(i, o) {
        1 & i &&
          (e.ynx(0),
          e.TgZ(1, "p", 92),
          e._uU(2, "Campo requerido"),
          e.qZA(),
          e.BQk());
      }
      function ao(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function ro(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ao, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("tipoActividad.detalle")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function so(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e._UZ(1, "input", 116),
            e.YNc(2, ro, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.get("tipoActividad.detalle"))
                ? null
                : n.invalid) &&
                (null == (n = t.get("tipoActividad.detalle"))
                  ? null
                  : n.touched)
            );
        }
      }
      function lo(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function co(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " Seleccione frecuencia "), e.qZA());
      }
      function uo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, co, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("frecuencia")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function po(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function go(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione tiempo "), e.qZA());
      }
      function _o(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, go, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("tiempo")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function mo(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function ho(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " Seleccione financiamiento "), e.qZA());
      }
      function fo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ho, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("financiado.financiadoPor")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function vo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function yo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, vo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("financiado.detalle")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Co(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, "label", 99),
            e._uU(2, "Especificar:"),
            e.qZA(),
            e._UZ(3, "input", 117),
            e.YNc(4, yo, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(4),
            e.Q6J(
              "ngIf",
              (null == (n = t.get("financiado.detalle")) ? null : n.invalid) &&
                (null == (n = t.get("financiado.detalle")) ? null : n.touched)
            );
        }
      }
      function bo(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 105)(1, "div", 106)(2, "div", 107)(3, "p"),
            e._uU(4, " Actividad: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e.YNc(7, so, 3, 1, "ng-container", 20),
            e.qZA()(),
            e.TgZ(8, "div", 106)(9, "div", 16)(10, "label", 108),
            e._uU(11, "Frecuencia:"),
            e.qZA(),
            e.TgZ(12, "select", 109),
            e.YNc(13, lo, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(14, uo, 2, 1, "ng-container", 20),
            e.qZA()(),
            e.TgZ(15, "div", 106)(16, "div", 16)(17, "label", 110),
            e._uU(18, "Tiempo:"),
            e.qZA(),
            e.TgZ(19, "select", 111),
            e.YNc(20, po, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(21, _o, 2, 1, "ng-container", 20),
            e.qZA()(),
            e.TgZ(22, "div", 106)(23, "div", 112)(24, "label", 113),
            e._uU(25, "Financiamiento"),
            e.qZA(),
            e.TgZ(26, "select", 114, 115),
            e.NdJ("change", function (a) {
              const s = e.CHM(t).index,
                c = e.oxw();
              return e.KtG(c.changeFinanciadoPor(a, s));
            }),
            e.YNc(28, mo, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(29, fo, 2, 1, "ng-container", 20),
            e.YNc(30, Co, 5, 1, "ng-container", 20),
            e.qZA()()();
        }
        if (2 & i) {
          const t = o.$implicit,
            n = o.index,
            a = e.MAs(27),
            r = e.oxw();
          let s, c, u, p, d;
          e.Q6J("formGroupName", n),
            e.xp6(6),
            e.hij(
              " ",
              null == (s = t.get("tipoActividad.actividad")) ? null : s.value,
              " "
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (c = t.get("tipoActividad.actividad"))
                ? null
                : c.value) === r.objActividades.otros
            ),
            e.xp6(6),
            e.Q6J("ngForOf", r.frecuenciaActividades),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (u = t.get("frecuencia")) ? null : u.invalid) &&
                (null == (u = t.get("frecuencia")) ? null : u.touched)
            ),
            e.xp6(6),
            e.Q6J("ngForOf", r.tiempoActividades),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (p = t.get("tiempo")) ? null : p.invalid) &&
                (null == (p = t.get("tiempo")) ? null : p.touched)
            ),
            e.xp6(7),
            e.Q6J("ngForOf", r.listTipoFinanciamiento),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (d = t.get("financiado.financiadoPor"))
                ? null
                : d.invalid) &&
                (null == (d = t.get("financiado.financiadoPor"))
                  ? null
                  : d.touched)
            ),
            e.xp6(1),
            e.Q6J("ngIf", a.value === r.objActividades.otros);
        }
      }
      function To(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ao(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, To, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("direccionVivienda")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function xo(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 6)(1, "div", 118)(2, "div", 16),
            e._UZ(3, "app-label-form", 55)(4, "input", 119),
            e.YNc(5, Ao, 2, 1, "ng-container", 20),
            e.qZA()()()),
          2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(3),
            e.Q6J("numero", t.objPregunta.quince.nro)(
              "descripcion",
              t.objPregunta.quince.descripcion
            )("textoAdicional", t.objPregunta.quince.datoAdicional)(
              "for",
              t.objPregunta.quince.for
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.getControl("direccionVivienda"))
                ? null
                : n.invalid) &&
                (null == (n = t.getControl("direccionVivienda"))
                  ? null
                  : n.touched)
            );
        }
      }
      function Eo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Io(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Eo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("coordenadasVivienda")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Mo(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 6)(1, "div", 120)(2, "div", 16)(3, "label", 121),
            e._uU(4, "indicar direcci\xf3n en mapa:"),
            e.qZA(),
            e._UZ(5, "input", 122),
            e.YNc(6, Io, 2, 1, "ng-container", 20),
            e.qZA()(),
            e.TgZ(7, "div", 123)(8, "button", 124),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw();
              return e.KtG(a.openMaps());
            }),
            e._UZ(9, "i", 125),
            e._uU(10, " Indicar en mapa "),
            e.qZA()()();
        }
        if (2 & i) {
          const t = e.oxw();
          let n;
          e.xp6(5),
            e.Q6J("readonly", !0),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (n = t.getControl("coordenadasVivienda"))
                ? null
                : n.invalid) &&
                (null == (n = t.getControl("coordenadasVivienda"))
                  ? null
                  : n.touched)
            );
        }
      }
      function wo(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Zo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Qo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Zo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("tiempoTraslado")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function ko(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 6)(1, "div", 21)(2, "div", 16),
            e._UZ(3, "app-label-form", 17),
            e.TgZ(4, "select", 126),
            e.YNc(5, wo, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(6, Qo, 2, 1, "ng-container", 20),
            e.qZA()()()),
          2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(3),
            e.Q6J("numero", t.objPregunta.dieciseis.nro)(
              "descripcion",
              t.objPregunta.dieciseis.descripcion
            )("for", t.objPregunta.dieciseis.for),
            e.xp6(2),
            e.Q6J("ngForOf", t.listTiempoTraslado),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (n = t.getControl("tiempoTraslado"))
                ? null
                : n.invalid) &&
                (null == (n = t.getControl("tiempoTraslado"))
                  ? null
                  : n.touched)
            );
        }
      }
      function No(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Oo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Bo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Oo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("mudarse.acepta")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Po(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Fo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Po, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("mudarse.detalle")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function So(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 30)(1, "div", 16)(2, "label", 127),
            e._uU(3, "Especifique el motivo:"),
            e.qZA(),
            e._UZ(4, "textarea", 128),
            e.YNc(5, Fo, 2, 1, "ng-container", 20),
            e.qZA()()),
          2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(5),
            e.Q6J(
              "ngIf",
              (null == (n = t.getControl("mudarse.detalle"))
                ? null
                : n.invalid) &&
                (null == (n = t.getControl("mudarse.detalle"))
                  ? null
                  : n.touched)
            );
        }
      }
      function qo(i, o) {
        if ((1 & i && (e.TgZ(0, "th", 129), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Udp("min-width", t.style.minWidth, "px"),
            e.xp6(1),
            e.hij(" ", t.value, " ");
        }
      }
      function Do(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese parentesco "), e.qZA());
      }
      function Lo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Do, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("parentesco")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function zo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese nombres "), e.qZA());
      }
      function Uo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, zo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("nombres")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Jo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese apellidos "), e.qZA());
      }
      function Yo(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Jo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("apellidos")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function jo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese edad "), e.qZA());
      }
      function Ro(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, jo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("edad")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Vo(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Go(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function Ho(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Go, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("estadoCivil")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function $o(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Wo(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function Ko(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Wo, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("nivelEducacion")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Xo(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function ea(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function ta(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ea, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("viveoFallecido")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function na(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function ia(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function oa(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ia, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("viveConElPostulante")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function aa(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function ra(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function sa(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ra, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("situacionLaboral")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function la(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "td")(1, "button", 141),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw().index,
                r = e.oxw();
              return e.KtG(r.deleteFamiliarNuclear(a));
            }),
            e._UZ(2, "i", 142),
            e.qZA()();
        }
      }
      function ca(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "tr", 130)(1, "td"),
            e._UZ(2, "input", 131),
            e.YNc(3, Lo, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(4, "td"),
            e._UZ(5, "input", 132),
            e.YNc(6, Uo, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(7, "td"),
            e._UZ(8, "input", 133),
            e.YNc(9, Yo, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(10, "td"),
            e._UZ(11, "input", 134),
            e.YNc(12, Ro, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(13, "td")(14, "select", 135),
            e.YNc(15, Vo, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(16, Ho, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(17, "td")(18, "select", 136),
            e.YNc(19, $o, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(20, Ko, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(21, "td", 137)(22, "select", 138),
            e.YNc(23, Xo, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(24, ta, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(25, "td")(26, "select", 139),
            e.YNc(27, na, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(28, oa, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(29, "td")(30, "select", 140),
            e.YNc(31, aa, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(32, sa, 2, 1, "ng-container", 20),
            e.qZA(),
            e.YNc(33, la, 3, 0, "td", 20),
            e.qZA()),
          2 & i)
        ) {
          const t = o.$implicit,
            n = o.index,
            a = o.first,
            r = e.oxw();
          let s, c, u, p, d, _, m, y, A;
          e.Q6J("formGroupName", n),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (s = t.get("parentesco")) ? null : s.invalid) &&
                (null == (s = t.get("parentesco")) ? null : s.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (c = t.get("nombres")) ? null : c.invalid) &&
                (null == (c = t.get("nombres")) ? null : c.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (u = t.get("apellidos")) ? null : u.invalid) &&
                (null == (u = t.get("apellidos")) ? null : u.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (p = t.get("edad")) ? null : p.invalid) &&
                (null == (p = t.get("edad")) ? null : p.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", r.listEstadoCivil),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (d = t.get("estadoCivil")) ? null : d.invalid) &&
                (null == (d = t.get("estadoCivil")) ? null : d.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", r.listNivelEducacion),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (_ = t.get("nivelEducacion")) ? null : _.invalid) &&
                (null == (_ = t.get("nivelEducacion")) ? null : _.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", r.listEstadoPersona),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (m = t.get("viveoFallecido")) ? null : m.invalid) &&
                (null == (m = t.get("viveoFallecido")) ? null : m.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", r.listSiNo),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (y = t.get("viveConElPostulante")) ? null : y.invalid) &&
                (null == (y = t.get("viveConElPostulante")) ? null : y.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", r.listSituacionLaboral),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (A = t.get("situacionLaboral")) ? null : A.invalid) &&
                (null == (A = t.get("situacionLaboral")) ? null : A.touched)
            ),
            e.xp6(1),
            e.Q6J("ngIf", !a);
        }
      }
      function ua(i, o) {
        if ((1 & i && (e.TgZ(0, "th", 129), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Udp("min-width", t.style.minWidth, "px"),
            e.xp6(1),
            e.hij(" ", t.value, " ");
        }
      }
      function pa(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese parentesco "), e.qZA());
      }
      function da(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, pa, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("parentesco")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function ga(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese nombres "), e.qZA());
      }
      function _a(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ga, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("nombres")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function ma(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese apellidos "), e.qZA());
      }
      function ha(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ma, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("apellidos")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function fa(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese edad "), e.qZA());
      }
      function va(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, fa, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("edad")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function ya(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Ca(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function ba(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ca, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("estadoCivil")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ta(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Aa(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function xa(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Aa, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("nivelEducacion")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ea(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Ia(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function Ma(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ia, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("situacionLaboral")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function wa(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "tr", 130)(1, "td"),
            e._UZ(2, "input", 131),
            e.YNc(3, da, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(4, "td"),
            e._UZ(5, "input", 132),
            e.YNc(6, _a, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(7, "td"),
            e._UZ(8, "input", 133),
            e.YNc(9, ha, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(10, "td"),
            e._UZ(11, "input", 134),
            e.YNc(12, va, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(13, "td")(14, "select", 135),
            e.YNc(15, ya, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(16, ba, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(17, "td")(18, "select", 136),
            e.YNc(19, Ta, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(20, xa, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(21, "td")(22, "select", 140),
            e.YNc(23, Ea, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(24, Ma, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(25, "td")(26, "button", 141),
            e.NdJ("click", function () {
              const r = e.CHM(t).index,
                s = e.oxw();
              return e.KtG(s.deleteOtrosFamiliar(r));
            }),
            e._UZ(27, "i", 142),
            e.qZA()()();
        }
        if (2 & i) {
          const t = o.$implicit,
            n = o.index,
            a = e.oxw();
          let r, s, c, u, p, d, _;
          e.Q6J("formGroupName", n),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (r = t.get("parentesco")) ? null : r.invalid) &&
                (null == (r = t.get("parentesco")) ? null : r.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (s = t.get("nombres")) ? null : s.invalid) &&
                (null == (s = t.get("nombres")) ? null : s.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (c = t.get("apellidos")) ? null : c.invalid) &&
                (null == (c = t.get("apellidos")) ? null : c.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (u = t.get("edad")) ? null : u.invalid) &&
                (null == (u = t.get("edad")) ? null : u.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", a.listEstadoCivil),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (p = t.get("estadoCivil")) ? null : p.invalid) &&
                (null == (p = t.get("estadoCivil")) ? null : p.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", a.listNivelEducacion),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (d = t.get("nivelEducacion")) ? null : d.invalid) &&
                (null == (d = t.get("nivelEducacion")) ? null : d.touched)
            ),
            e.xp6(3),
            e.Q6J("ngForOf", a.listSituacionLaboral),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (_ = t.get("situacionLaboral")) ? null : _.invalid) &&
                (null == (_ = t.get("situacionLaboral")) ? null : _.touched)
            );
        }
      }
      function Za(i, o) {
        if ((1 & i && (e.TgZ(0, "ng-option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Qa(i, o) {
        1 & i &&
          (e.ynx(0),
          e.TgZ(1, "p", 92),
          e._uU(2, "Campo requerido"),
          e.qZA(),
          e.BQk());
      }
      function ka(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function Na(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, ka, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("tipoTarea.detalle")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Oa(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e._UZ(1, "input", 148),
            e.YNc(2, Na, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.get("tipoTarea.detalle")) ? null : n.invalid) &&
                (null == (n = t.get("tipoTarea.detalle")) ? null : n.touched)
            );
        }
      }
      function Ba(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Pa(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " Seleccione duraci\xf3n "), e.qZA());
      }
      function Fa(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Pa, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("duracion")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Sa(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function qa(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione tiempo "), e.qZA());
      }
      function Da(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, qa, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("frecuencia")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function La(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 105)(1, "div", 106)(2, "div", 143)(3, "p"),
            e._uU(4, " Tarea: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e.YNc(7, Oa, 3, 1, "ng-container", 20),
            e.qZA()(),
            e.TgZ(8, "div", 106)(9, "div", 16)(10, "label", 144),
            e._uU(11, "Duraci\xf3n:"),
            e.qZA(),
            e.TgZ(12, "select", 145),
            e.YNc(13, Ba, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(14, Fa, 2, 1, "ng-container", 20),
            e.qZA()(),
            e.TgZ(15, "div", 106)(16, "div", 16)(17, "label", 146),
            e._uU(18, "Frecuencia:"),
            e.qZA(),
            e.TgZ(19, "select", 147),
            e.YNc(20, Sa, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(21, Da, 2, 1, "ng-container", 20),
            e.qZA()()()),
          2 & i)
        ) {
          const t = o.$implicit,
            n = o.index,
            a = e.oxw();
          let r, s, c, u;
          e.Q6J("formGroupName", n),
            e.xp6(6),
            e.hij(
              " ",
              null == (r = t.get("tipoTarea.tarea")) ? null : r.value,
              " "
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (s = t.get("tipoTarea.tarea")) ? null : s.value) ===
                a.objTareaHogar.otros
            ),
            e.xp6(6),
            e.Q6J("ngForOf", a.listDuracionTarea),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (c = t.get("duracion")) ? null : c.invalid) &&
                (null == (c = t.get("duracion")) ? null : c.touched)
            ),
            e.xp6(6),
            e.Q6J("ngForOf", a.listFrecuenciaTarea),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (u = t.get("frecuencia")) ? null : u.invalid) &&
                (null == (u = t.get("frecuencia")) ? null : u.touched)
            );
        }
      }
      function za(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Ua(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ja(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ua, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl(
                  "horasDiariasApoyoTareasDelHogarPostulante"
                )) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ya(i, o) {
        if ((1 & i && (e.TgZ(0, "ng-option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function ja(i, o) {
        1 & i &&
          (e.ynx(0),
          e.TgZ(1, "p", 92),
          e._uU(2, "Campo requerido"),
          e.qZA(),
          e.BQk());
      }
      function Ra(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function Va(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ra, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("encargado.detalle")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ga(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e._UZ(1, "input", 152),
            e.YNc(2, Va, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.get("encargado.detalle")) ? null : n.invalid) &&
                (null == (n = t.get("encargado.detalle")) ? null : n.touched)
            );
        }
      }
      function Ha(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function $a(i, o) {
        1 & i &&
          (e.TgZ(0, "p", 92), e._uU(1, " Seleccione duraci\xf3n "), e.qZA());
      }
      function Wa(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, $a, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("porcentaje")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Ka(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 105)(1, "div", 106)(2, "div", 149)(3, "p"),
            e._uU(4, " Encargado: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e.YNc(7, Ga, 3, 1, "ng-container", 20),
            e.qZA()(),
            e.TgZ(8, "div", 106)(9, "div", 16)(10, "label", 150),
            e._uU(11, "Porcentaje responsabilidad:"),
            e.qZA(),
            e.TgZ(12, "select", 151),
            e.YNc(13, Ha, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(14, Wa, 2, 1, "ng-container", 20),
            e.qZA()()()),
          2 & i)
        ) {
          const t = o.$implicit,
            n = o.index,
            a = e.oxw();
          let r, s, c;
          e.Q6J("formGroupName", n),
            e.xp6(6),
            e.hij(
              " ",
              null == (r = t.get("encargado.miembro")) ? null : r.value,
              " "
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (s = t.get("encargado.miembro")) ? null : s.value) ===
                a.objEncargado.otros
            ),
            e.xp6(6),
            e.Q6J("ngForOf", a.listPorcentajesResponsabilidad),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (c = t.get("porcentaje")) ? null : c.invalid) &&
                (null == (c = t.get("porcentaje")) ? null : c.touched)
            );
        }
      }
      function Xa(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function er(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Xa, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("familiar")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function tr(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e._UZ(1, "input", 159),
            e.YNc(2, er, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.get("familiar")) ? null : n.invalid) &&
                (null == (n = t.get("familiar")) ? null : n.touched)
            );
        }
      }
      function nr(i, o) {
        if ((1 & i && (e.TgZ(0, "p"), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1), e.Oqu(null == (n = t.get("familiar")) ? null : n.value);
        }
      }
      function ir(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 22)(1, "button", 141),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw().index,
                r = e.oxw();
              return e.KtG(r.deleteAntecedentePolicial(a));
            }),
            e._UZ(2, "i", 142),
            e.qZA()();
        }
      }
      function or(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function ar(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, or, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("tiene")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function rr(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 105)(1, "div", 106)(2, "div", 16),
            e.YNc(3, tr, 3, 1, "ng-container", 153),
            e.YNc(4, nr, 2, 1, "ng-template", null, 154, e.W1O),
            e.qZA()(),
            e.TgZ(6, "div", 106)(7, "div", 22),
            e._UZ(8, "input", 155),
            e.TgZ(9, "label", 156),
            e._uU(10, " Si "),
            e.qZA()(),
            e.TgZ(11, "div", 22),
            e._UZ(12, "input", 157),
            e.TgZ(13, "label", 156),
            e._uU(14, " No "),
            e.qZA()(),
            e.YNc(15, ir, 3, 0, "div", 158),
            e.YNc(16, ar, 2, 1, "ng-container", 20),
            e.qZA()()),
          2 & i)
        ) {
          const t = o.$implicit,
            n = o.index,
            a = e.MAs(5);
          let r;
          e.Q6J("formGroupName", n),
            e.xp6(3),
            e.Q6J("ngIf", n > 1)("ngIfElse", a),
            e.xp6(5),
            e.MGl("id", "siPoli", n, ""),
            e.xp6(1),
            e.MGl("for", "siPoli", n, ""),
            e.xp6(3),
            e.MGl("id", "noPoli", n, ""),
            e.xp6(1),
            e.MGl("for", "noPoli", n, ""),
            e.xp6(2),
            e.Q6J("ngIf", n > 1),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (r = t.get("tiene")) ? null : r.invalid) &&
                (null == (r = t.get("tiene")) ? null : r.touched)
            );
        }
      }
      function sr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function lr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, sr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("familiar")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function cr(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e._UZ(1, "input", 159),
            e.YNc(2, lr, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.get("familiar")) ? null : n.invalid) &&
                (null == (n = t.get("familiar")) ? null : n.touched)
            );
        }
      }
      function ur(i, o) {
        if ((1 & i && (e.TgZ(0, "p"), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1), e.Oqu(null == (n = t.get("familiar")) ? null : n.value);
        }
      }
      function pr(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "div", 22)(1, "button", 141),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw().index,
                r = e.oxw();
              return e.KtG(r.deleteAntecedentePenal(a));
            }),
            e._UZ(2, "i", 142),
            e.qZA()();
        }
      }
      function dr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function gr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, dr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("tiene")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function _r(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 105)(1, "div", 106)(2, "div", 16),
            e.YNc(3, cr, 3, 1, "ng-container", 153),
            e.YNc(4, ur, 2, 1, "ng-template", null, 160, e.W1O),
            e.qZA()(),
            e.TgZ(6, "div", 106)(7, "div", 22),
            e._UZ(8, "input", 155),
            e.TgZ(9, "label", 156),
            e._uU(10, " Si "),
            e.qZA()(),
            e.TgZ(11, "div", 22),
            e._UZ(12, "input", 157),
            e.TgZ(13, "label", 156),
            e._uU(14, " No "),
            e.qZA()(),
            e.YNc(15, pr, 3, 0, "div", 158),
            e.YNc(16, gr, 2, 1, "ng-container", 20),
            e.qZA()()),
          2 & i)
        ) {
          const t = o.$implicit,
            n = o.index,
            a = e.MAs(5);
          let r;
          e.Q6J("formGroupName", n),
            e.xp6(3),
            e.Q6J("ngIf", n > 1)("ngIfElse", a),
            e.xp6(5),
            e.MGl("id", "siPenales", n, ""),
            e.xp6(1),
            e.MGl("for", "siPenales", n, ""),
            e.xp6(3),
            e.MGl("id", "noPenales", n, ""),
            e.xp6(1),
            e.MGl("for", "noPenales", n, ""),
            e.xp6(2),
            e.Q6J("ngIf", n > 1),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (r = t.get("tiene")) ? null : r.invalid) &&
                (null == (r = t.get("tiene")) ? null : r.touched)
            );
        }
      }
      function mr(i, o) {
        if ((1 & i && (e.TgZ(0, "th", 129), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function hr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function fr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, hr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("actividad")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function vr(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e._UZ(1, "input", 164),
            e.YNc(2, fr, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (n = t.get("actividad")) ? null : n.invalid) &&
                (null == (n = t.get("actividad")) ? null : n.touched)
            );
        }
      }
      function yr(i, o) {
        if ((1 & i && (e.TgZ(0, "p"), e._uU(1), e.qZA()), 2 & i)) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1), e.Oqu(null == (n = t.get("actividad")) ? null : n.value);
        }
      }
      function Cr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function br(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Cr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw().$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("necesita")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Tr(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function Ar(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Seleccione "), e.qZA());
      }
      function xr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Ar, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2).$implicit;
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.get("monto")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Er(i, o) {
        if (
          (1 & i &&
            (e.ynx(0),
            e.TgZ(1, "p", 165),
            e._uU(2, " Monto estimado Mensual (S/.) "),
            e.qZA(),
            e.TgZ(3, "select", 166),
            e.YNc(4, Tr, 2, 2, "option", 19),
            e.qZA(),
            e.YNc(5, xr, 2, 1, "ng-container", 20),
            e.BQk()),
          2 & i)
        ) {
          const t = e.oxw().$implicit,
            n = e.oxw();
          let a;
          e.xp6(4),
            e.Q6J("ngForOf", n.listMontoEstimado),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (a = t.get("monto")) ? null : a.invalid) &&
                (null == (a = t.get("monto")) ? null : a.touched)
            );
        }
      }
      function Ir(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.ynx(0),
            e.TgZ(1, "button", 141),
            e.NdJ("click", function () {
              e.CHM(t);
              const a = e.oxw().index,
                r = e.oxw();
              return e.KtG(r.deletActiviadaApoyo(a));
            }),
            e._UZ(2, "i", 142),
            e.qZA(),
            e.BQk();
        }
      }
      function Mr(i, o) {
        if (1 & i) {
          const t = e.EpF();
          e.TgZ(0, "tr", 130)(1, "td"),
            e.YNc(2, vr, 3, 1, "ng-container", 153),
            e.YNc(3, yr, 2, 1, "ng-template", null, 161, e.W1O),
            e.qZA(),
            e.TgZ(5, "td")(6, "div", 22)(7, "input", 162),
            e.NdJ("change", function (a) {
              const s = e.CHM(t).index,
                c = e.oxw();
              return e.KtG(c.changeNecesitaApoyo(a, s));
            }),
            e.qZA(),
            e.TgZ(8, "label", 156),
            e._uU(9, " Si "),
            e.qZA()(),
            e.TgZ(10, "div", 22)(11, "input", 163),
            e.NdJ("change", function (a) {
              const s = e.CHM(t).index,
                c = e.oxw();
              return e.KtG(c.changeNecesitaApoyo(a, s));
            }),
            e.qZA(),
            e.TgZ(12, "label", 156),
            e._uU(13, " No "),
            e.qZA()(),
            e.YNc(14, br, 2, 1, "ng-container", 20),
            e.qZA(),
            e.TgZ(15, "td"),
            e.YNc(16, Er, 6, 2, "ng-container", 20),
            e.qZA(),
            e.TgZ(17, "td"),
            e.YNc(18, Ir, 3, 0, "ng-container", 20),
            e.qZA()();
        }
        if (2 & i) {
          const t = o.$implicit,
            n = o.index,
            a = e.MAs(4),
            r = e.oxw();
          let s, c;
          e.Q6J("formGroupName", n),
            e.xp6(2),
            e.Q6J("ngIf", n > r.listTipoApoyoEconomico.length - 1)(
              "ngIfElse",
              a
            ),
            e.xp6(5),
            e.MGl("id", "si", n, ""),
            e.xp6(1),
            e.MGl("for", "si", n, ""),
            e.xp6(3),
            e.MGl("id", "no", n, ""),
            e.xp6(1),
            e.MGl("for", "no", n, ""),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (s = t.get("necesita")) ? null : s.invalid) &&
                (null == (s = t.get("necesita")) ? null : s.touched)
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              "si" === (null == (c = t.get("necesita")) ? null : c.value)
            ),
            e.xp6(2),
            e.Q6J("ngIf", n > r.listTipoApoyoEconomico.length - 1);
        }
      }
      function wr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Zr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, wr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("principalesReglasCasa")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Qr(i, o) {
        if ((1 & i && (e.TgZ(0, "option", 90), e._uU(1), e.qZA()), 2 & i)) {
          const t = o.$implicit;
          e.Q6J("value", t), e.xp6(1), e.hij(" ", t, " ");
        }
      }
      function kr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Nr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, kr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl("queSignificaAccesoEducacion.significado")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Or(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Br(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Or, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw(2);
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (n = t.getControl("queSignificaAccesoEducacion.detalle")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Pr(i, o) {
        if (
          (1 & i &&
            (e.TgZ(0, "div", 6)(1, "div", 21)(2, "div", 16)(3, "label", 167),
            e._uU(4, "26.1 Especifique:"),
            e.qZA(),
            e._UZ(5, "input", 168),
            e.YNc(6, Br, 2, 1, "ng-container", 20),
            e.qZA()()()),
          2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(6),
            e.Q6J(
              "ngIf",
              (null == (n = t.getControl("queSignificaAccesoEducacion.detalle"))
                ? null
                : n.invalid) &&
                (null ==
                (n = t.getControl("queSignificaAccesoEducacion.detalle"))
                  ? null
                  : n.touched)
            );
        }
      }
      function Fr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Sr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Fr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("situacionComplicada")) ||
                null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function qr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Dr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, qr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("eventosSuperados")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      function Lr(i, o) {
        1 & i && (e.TgZ(0, "p", 92), e._uU(1, " Campo requerido "), e.qZA());
      }
      function zr(i, o) {
        if (
          (1 & i && (e.ynx(0), e.YNc(1, Lr, 2, 0, "p", 91), e.BQk()), 2 & i)
        ) {
          const t = e.oxw();
          let n;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (n = t.getControl("momentoEnfamilia")) || null == n.errors
                ? null
                : n.errors.required
            );
        }
      }
      const Ur = [
        {
          path: "cuestionario",
          component: (() => {
            class i {
              constructor(t, n) {
                (this.fb = t),
                  (this.modalService = n),
                  (this.title = "Cuestionario de padres de familia"),
                  (this.lenguajes = Xe),
                  (this.listParentesco = et),
                  (this.universidades = rt),
                  (this.listApoyo = st),
                  (this.beneficios = tt),
                  (this.listBeneficio = nt),
                  (this.rangosPreparacion = ot),
                  (this.frecuenciaActividades = ct),
                  (this.tiempoActividades = ut),
                  (this.listTipoFinanciamiento = pt),
                  (this.listTiempoTraslado = dt),
                  (this.listSiNo = gt),
                  (this.siNoObj = _e),
                  (this.displayedColumns = vt),
                  (this.listEstadoCivil = _t),
                  (this.listNivelEducacion = mt),
                  (this.listEstadoPersona = ht),
                  (this.listSituacionLaboral = ft),
                  (this.displayedColumnsOtrosFam = yt),
                  (this.listTareaHogar = Ct),
                  (this.objTareaHogar = me),
                  (this.listDuracionTarea = bt),
                  (this.listFrecuenciaTarea = Tt),
                  (this.listEncargados = At),
                  (this.objEncargado = he),
                  (this.listPorcentajesResponsabilidad = xt),
                  (this.listTipoApoyoEconomico = It),
                  (this.displayedColumnsApoyoEcon = Et),
                  (this.listMontoEstimado = Mt),
                  (this.listSignificaEducacion = wt),
                  (this.listNroHorasDeApoyo = Zt),
                  (this.objPregunta = Qt),
                  (this.listPreparacion = it),
                  (this.listPagoPreparacion = at),
                  (this.actividadesExtracademicas = lt),
                  (this.objActividades = ge),
                  (this.hasLenguaje = !1),
                  (this.hasParentesco = !1),
                  (this.hasBeneficio = !1),
                  (this.hasOtroBeneficio = !1),
                  (this.hasPreparacion = !1),
                  (this.hasOtroPago = !1),
                  (this.hasSignificado = !1),
                  (this.hasDetalleViaje = !1),
                  (this.isFromLima = !1),
                  this.initForm();
              }
              ngOnInit() {
                this.initAntecedentesPoliciales(),
                  this.initAntecedentesPenales(),
                  this.initActividadesApoyoEconomico(),
                  this.changeLengua(),
                  this.changeParentesco(),
                  this.changeBeneficio(),
                  this.changeTipoBeneficio(),
                  this.changePreUniversitario(),
                  this.changeTipoPago(),
                  this.changeMotivoViaje(),
                  this.changeSignificado();
              }
              addValidatorRequired(t) {
                this.getControl(t)?.addValidators(l.kI.required),
                  this.getControl(t)?.updateValueAndValidity({ emitEvent: !1 });
              }
              clearValidatorRequired(t) {
                this.getControl(t)?.clearValidators(),
                  this.getControl(t)?.updateValueAndValidity({ emitEvent: !1 }),
                  this.getControl(t)?.setValue("", { emitEvent: !1 });
              }
              changeLengua() {
                const t =
                  this.cuestionarioForm.controls.lenguaMaterna.valueChanges.subscribe(
                    ({ lengua: n }) => {
                      if (n === se.Otra)
                        return (
                          (this.hasLenguaje = !0),
                          void this.addValidatorRequired(
                            "lenguaMaterna.detalle"
                          )
                        );
                      this.clearValidatorRequired("lenguaMaterna.detalle"),
                        (this.hasLenguaje = !1);
                    }
                  );
                t || this.subscriptions.push(t);
              }
              changeParentesco() {
                const t =
                  this.cuestionarioForm
                    .get("responsable.parentesco")
                    ?.valueChanges.subscribe(({ tipo: n }) => {
                      if (n === le.Otro)
                        return (
                          (this.hasParentesco = !0),
                          void this.addValidatorRequired(
                            "responsable.parentesco.detalle"
                          )
                        );
                      this.clearValidatorRequired(
                        "responsable.parentesco.detalle"
                      ),
                        (this.hasParentesco = !1);
                    }) || new F.w0();
                t || this.subscriptions.push(t);
              }
              changeBeneficio() {
                const t =
                  this.cuestionarioForm
                    .get("beneficioEconomico")
                    ?.valueChanges.subscribe(({ fueAcreedor: n }) => {
                      if (n === ce.si)
                        return (
                          (this.hasBeneficio = !0),
                          this.getControl(
                            "beneficioEconomico.tipoBeneficio.beneficio"
                          )?.addValidators(l.kI.required),
                          void this.getControl(
                            "beneficioEconomico.tipoBeneficio.beneficio"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "beneficioEconomico.tipoBeneficio.beneficio"
                      )?.clearValidators(),
                        this.getControl(
                          "beneficioEconomico.tipoBeneficio.beneficio"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "beneficioEconomico.tipoBeneficio.beneficio"
                        )?.setValue("", { emitEvent: !1 }),
                        this.getControl(
                          "beneficioEconomico.tipoBeneficio.detalle"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasBeneficio = !1);
                    }) || new F.w0();
                t || this.subscriptions.push(t);
              }
              changeTipoBeneficio() {
                const t =
                  this.cuestionarioForm
                    .get("beneficioEconomico.tipoBeneficio")
                    ?.valueChanges.pipe((0, X.b)((n) => console.log(n)))
                    .subscribe(({ beneficio: n }) => {
                      if (n === ue.otros)
                        return (
                          (this.hasOtroBeneficio = !0),
                          this.getControl(
                            "beneficioEconomico.tipoBeneficio.detalle"
                          )?.addValidators(l.kI.required),
                          void this.getControl(
                            "beneficioEconomico.tipoBeneficio.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "beneficioEconomico.tipoBeneficio.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "beneficioEconomico.tipoBeneficio.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "beneficioEconomico.tipoBeneficio.detalle"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasOtroBeneficio = !1);
                    }) || new F.w0();
                t || this.subscriptions.push(t);
              }
              changePreUniversitario() {
                const t =
                  this.cuestionarioForm
                    .get("preparacionPreUniversitaria")
                    ?.valueChanges.subscribe(({ tuvo: n }) => {
                      if (n === pe.si)
                        return (
                          (this.hasPreparacion = !0),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.periodo"
                          )?.addValidators(l.kI.required),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.periodo"
                          )?.updateValueAndValidity({ emitEvent: !1 }),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.pagadoPor"
                          )?.addValidators(l.kI.required),
                          void this.getControl(
                            "preparacionPreUniversitaria.aCargo.pagadoPor"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "preparacionPreUniversitaria.aCargo.periodo"
                      )?.clearValidators(),
                        this.getControl(
                          "preparacionPreUniversitaria.aCargo.periodo"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "preparacionPreUniversitaria.aCargo.periodo"
                        )?.setValue("", { emitEvent: !1 }),
                        this.getControl(
                          "preparacionPreUniversitaria.aCargo.pagadoPor"
                        )?.clearValidators(),
                        this.getControl(
                          "preparacionPreUniversitaria.aCargo.pagadoPor"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "preparacionPreUniversitaria.aCargo.pagadoPor"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasPreparacion = !1);
                    }) || new F.w0();
                t || this.subscriptions.push(t);
              }
              changeTipoPago() {
                const t =
                  this.cuestionarioForm
                    .get("preparacionPreUniversitaria.aCargo")
                    ?.valueChanges.pipe((0, X.b)((n) => console.log(n)))
                    .subscribe(({ pagadoPor: n }) => {
                      if (n === de.otros)
                        return (
                          (this.hasOtroPago = !0),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.detalle"
                          )?.addValidators(l.kI.required),
                          void this.getControl(
                            "preparacionPreUniversitaria.aCargo.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "preparacionPreUniversitaria.aCargo.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "preparacionPreUniversitaria.aCargo.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "preparacionPreUniversitaria.aCargo.detalle"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasOtroPago = !1);
                    }) || new F.w0();
                t || this.subscriptions.push(t);
              }
              changeMotivoViaje() {
                const t =
                  this.cuestionarioForm.controls.mudarse.valueChanges.subscribe(
                    ({ acepta: n }) => {
                      if (n === this.siNoObj.no)
                        return (
                          (this.hasDetalleViaje = !0),
                          this.getControl("mudarse.detalle")?.addValidators(
                            l.kI.required
                          ),
                          void this.getControl(
                            "mudarse.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl("mudarse.detalle")?.clearValidators(),
                        this.getControl(
                          "mudarse.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl("mudarse.detalle")?.setValue("", {
                          emitEvent: !1,
                        }),
                        (this.hasDetalleViaje = !1);
                    }
                  );
                t || this.subscriptions.push(t);
              }
              changeSignificado() {
                const t =
                  this.cuestionarioForm.controls.queSignificaAccesoEducacion.valueChanges.subscribe(
                    ({ significado: n }) => {
                      if (n === fe.otros)
                        return (
                          (this.hasSignificado = !0),
                          this.getControl(
                            "queSignificaAccesoEducacion.detalle"
                          )?.addValidators(l.kI.required),
                          void this.getControl(
                            "queSignificaAccesoEducacion.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "queSignificaAccesoEducacion.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "queSignificaAccesoEducacion.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "queSignificaAccesoEducacion.detalle"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasSignificado = !1);
                    }
                  );
                t || this.subscriptions.push(t);
              }
              initForm() {
                this.cuestionarioForm = this.fb.group({
                  lenguaMaterna: this.fb.group({
                    lengua: ["", [l.kI.required]],
                    detalle: [""],
                  }),
                  viveEnLima: ["", [l.kI.required]],
                  responsable: this.fb.group({
                    nombresApellidos: ["", [l.kI.required]],
                    dni: [
                      "",
                      [l.kI.required, l.kI.minLength(8), l.kI.maxLength(8)],
                    ],
                    parentesco: this.fb.group({
                      tipo: ["", [l.kI.required]],
                      detalle: [""],
                    }),
                  }),
                  postulante: this.fb.group({
                    nombresApellidos: ["", [l.kI.required]],
                    dni: [
                      "",
                      [l.kI.required, l.kI.minLength(8), l.kI.maxLength(8)],
                    ],
                  }),
                  universidadAlaQuePostula: this.fb.group({
                    universidad: ["", [l.kI.required]],
                    carrera: ["", [l.kI.required]],
                  }),
                  fortalezasCualidadesPostulante: ["", [l.kI.required]],
                  ayudaProcesoPostulación: ["", [l.kI.required]],
                  accionesApoyo: ["", [l.kI.required]],
                  eleccionUniCarrera: this.fb.group({
                    motivo: ["", [l.kI.required]],
                    estaDeAcuerdo: [null, [l.kI.required]],
                  }),
                  beneficioEconomico: this.fb.group({
                    fueAcreedor: ["", [l.kI.required]],
                    tipoBeneficio: this.fb.group({
                      beneficio: [""],
                      detalle: [""],
                    }),
                  }),
                  preparacionPreUniversitaria: this.fb.group({
                    tuvo: ["", [l.kI.required]],
                    aCargo: this.fb.group({
                      pagadoPor: [""],
                      periodo: [""],
                      detalle: [""],
                    }),
                  }),
                  actividadesExtracademicas: this.fb.array([], l.kI.required),
                  direccionVivienda: [""],
                  coordenadasVivienda: [{ value: "", disabled: !1 }],
                  tiempoTraslado: [""],
                  mudarse: this.fb.group({
                    acepta: ["", [l.kI.required]],
                    detalle: [""],
                  }),
                  familiaNuclear: this.fb.array([this.initFamiliaNuclear()]),
                  otrosFamiliares: this.fb.array([]),
                  tareasQueApoyaElPostulante: this.fb.array([], l.kI.required),
                  horasDiariasApoyoTareasDelHogarPostulante: [
                    "",
                    [l.kI.required],
                  ],
                  encargadosTareasDelHogar: this.fb.array([], l.kI.required),
                  antecedentesPoliciales: this.fb.array([]),
                  antecedentesPenales: this.fb.array([]),
                  actividadesApoyoEconomico: this.fb.array([]),
                  principalesReglasCasa: ["", [l.kI.required]],
                  queSignificaAccesoEducacion: this.fb.group({
                    significado: ["", [l.kI.required]],
                    detalle: [""],
                  }),
                  situacionComplicada: ["", [l.kI.required]],
                  eventosSuperados: ["", [l.kI.required]],
                  momentoEnfamilia: ["", [l.kI.required]],
                });
              }
              addActividad(t) {
                console.log(t),
                  this.arrayActividades.push(
                    this.initActividadExtracademica(t)
                  );
              }
              addTareaHogar(t) {
                console.log(t),
                  this.arrayTareasHogar.push(this.initTareasDelHogar(t));
              }
              addEncargadoTarea(t) {
                console.log(t),
                  this.arrayEncargadoTarea.push(
                    this.initEncargadosTareasDelHogar(t)
                  );
              }
              addAntecedentePolicial() {
                this.arrayAntecedentesPoliciales.push(this.initAntecedentesX());
              }
              deleteAntecedentePolicial(t) {
                this.arrayAntecedentesPoliciales.removeAt(t);
              }
              addAntecedentePenal() {
                this.arrayAntecedentesPenales.push(this.initAntecedentesX());
              }
              deleteAntecedentePenal(t) {
                this.arrayAntecedentesPenales.removeAt(t);
              }
              deleteActividad(t) {
                const n = this.arrayActividades.value.findIndex(
                  (a) => a.tipoActividad.actividad === t.value
                );
                n >= 0 && this.arrayActividades.removeAt(n);
              }
              deleteTareaHogar(t) {
                const n = this.arrayTareasHogar.value.findIndex(
                  (a) => a.tipoTarea.tarea === t.value
                );
                n >= 0 && this.arrayTareasHogar.removeAt(n);
              }
              deleteEncargadoTarea(t) {
                const n = this.arrayEncargadoTarea.value.findIndex(
                  (a) => a.encargado.miembro === t.value
                );
                n >= 0 && this.arrayEncargadoTarea.removeAt(n);
              }
              clearActividades() {
                this.arrayActividades.value.forEach(() =>
                  this.arrayActividades.removeAt(0)
                );
              }
              clearTareasHogar() {
                this.arrayTareasHogar.value.forEach(() =>
                  this.arrayTareasHogar.removeAt(0)
                );
              }
              clearResponsablesTarea() {
                this.arrayEncargadoTarea.value.forEach(() =>
                  this.arrayEncargadoTarea.removeAt(0)
                );
              }
              initActividadExtracademica(t = "") {
                return this.fb.group({
                  tipoActividad: this.fb.group({
                    actividad: [t, [l.kI.required]],
                    detalle: this.getValidatorsRequired(t),
                  }),
                  frecuencia: ["", [l.kI.required]],
                  tiempo: ["", [l.kI.required]],
                  financiado: this.fb.group({
                    financiadoPor: ["", [l.kI.required]],
                    detalle: ["", []],
                  }),
                });
              }
              initTareasDelHogar(t = "") {
                return this.fb.group({
                  tipoTarea: this.fb.group({
                    tarea: [t, [l.kI.required]],
                    detalle: [""],
                  }),
                  duracion: ["", [l.kI.required]],
                  frecuencia: ["", [l.kI.required]],
                });
              }
              initEncargadosTareasDelHogar(t = "") {
                return this.fb.group({
                  encargado: this.fb.group({
                    miembro: [t, [l.kI.required]],
                    detalle: [""],
                  }),
                  porcentaje: ["", [l.kI.required]],
                });
              }
              initFamiliaNuclear() {
                return this.fb.group({
                  parentesco: ["", [l.kI.required]],
                  nombres: ["", [l.kI.required]],
                  apellidos: ["", [l.kI.required]],
                  edad: ["", [l.kI.required]],
                  estadoCivil: ["", [l.kI.required]],
                  nivelEducacion: ["", [l.kI.required]],
                  viveoFallecido: ["", [l.kI.required]],
                  viveConElPostulante: ["", [l.kI.required]],
                  situacionLaboral: ["", [l.kI.required]],
                });
              }
              initOtrosMiembrosFamilia() {
                return this.fb.group({
                  parentesco: ["", [l.kI.required]],
                  nombres: ["", [l.kI.required]],
                  apellidos: ["", [l.kI.required]],
                  edad: ["", [l.kI.required]],
                  estadoCivil: ["", [l.kI.required]],
                  nivelEducacion: ["", [l.kI.required]],
                  situacionLaboral: ["", [l.kI.required]],
                });
              }
              initAntecedentesX(t = "") {
                return this.fb.group({
                  familiar: [t, [l.kI.required]],
                  tiene: [null, [l.kI.required]],
                });
              }
              initAntecedentesPoliciales() {
                ["Padre", "Madre"].forEach((n) =>
                  this.arrayAntecedentesPoliciales.push(
                    this.initAntecedentesX(n)
                  )
                );
              }
              initAntecedentesPenales() {
                ["Padre", "Madre"].forEach((n) =>
                  this.arrayAntecedentesPenales.push(this.initAntecedentesX(n))
                );
              }
              initActividadX(t = "") {
                return this.fb.group({
                  actividad: [t, [l.kI.required]],
                  necesita: [null, [l.kI.required]],
                  monto: [""],
                });
              }
              initActividadesApoyoEconomico() {
                this.listTipoApoyoEconomico.forEach((t) =>
                  this.arrayActividadesApoyoEconomico.push(
                    this.initActividadX(t)
                  )
                );
              }
              addActividadApoyo() {
                this.arrayActividadesApoyoEconomico.push(this.initActividadX());
              }
              deletActiviadaApoyo(t) {
                this.arrayActividadesApoyoEconomico.removeAt(t);
              }
              addFamiliarNuclear() {
                this.arrayFamiliaNuclear.push(this.initFamiliaNuclear());
              }
              addOtrosFamiliar() {
                this.arrayOtrosFamiliares.push(this.initOtrosMiembrosFamilia());
              }
              deleteFamiliarNuclear(t) {
                this.arrayFamiliaNuclear.removeAt(t);
              }
              deleteOtrosFamiliar(t) {
                this.arrayOtrosFamiliares.removeAt(t);
              }
              changeFinanciadoPor(t, n = 0) {
                if (
                  (console.log(
                    this.arrayActividades.controls[n].get("financiado.detalle")
                  ),
                  console.log(t),
                  this.objActividades.otros === t.target.value)
                )
                  return (
                    this.arrayActividades.controls[n]
                      .get("financiado.detalle")
                      ?.addValidators(l.kI.required),
                    void this.arrayActividades.controls[n]
                      .get("financiado.detalle")
                      ?.updateValueAndValidity({ emitEvent: !1 })
                  );
                this.arrayActividades.controls[n]
                  .get("financiado.detalle")
                  ?.clearValidators(),
                  this.arrayActividades.controls[n]
                    .get("financiado.detalle")
                    ?.updateValueAndValidity({ emitEvent: !1 }),
                  this.arrayActividades.controls[n]
                    .get("financiado.detalle")
                    ?.setValue("", { emitEvent: !1 }),
                  console.log(
                    this.arrayActividades.controls[n].get("financiado.detalle")
                  );
              }
              changeViveEnLima(t) {
                const n = t.target.value.toLowerCase(),
                  r = [
                    "direccionVivienda",
                    "coordenadasVivienda",
                    "tiempoTraslado",
                  ];
                if (this.siNoObj.si.toLocaleLowerCase() === n)
                  return (
                    r.forEach((s) => {
                      this.getControl(s)?.addValidators(l.kI.required),
                        this.getControl(s)?.updateValueAndValidity({
                          emitEvent: !1,
                        });
                    }),
                    void (this.isFromLima = !0)
                  );
                r.forEach((s) => {
                  this.getControl(s)?.clearValidators(),
                    this.getControl(s)?.updateValueAndValidity({
                      emitEvent: !1,
                    }),
                    this.getControl(s)?.setValue("", { emitEvent: !1 });
                }),
                  (this.isFromLima = !1);
              }
              changeNecesitaApoyo(t, n = 0) {
                console.log({ value: t.target.value, idx: n });
                const a = t.target.value.toLowerCase();
                if (this.siNoObj.si.toLowerCase() === a)
                  return (
                    this.arrayActividadesApoyoEconomico.controls[n]
                      .get("monto")
                      ?.addValidators(l.kI.required),
                    void this.arrayActividadesApoyoEconomico.controls[n]
                      .get("monto")
                      ?.updateValueAndValidity({ emitEvent: !1 })
                  );
                this.arrayActividadesApoyoEconomico.controls[n]
                  .get("monto")
                  ?.clearValidators(),
                  this.arrayActividadesApoyoEconomico.controls[n]
                    .get("monto")
                    ?.updateValueAndValidity({ emitEvent: !1 }),
                  this.arrayActividadesApoyoEconomico.controls[n]
                    .get("monto")
                    ?.setValue("", { emitEvent: !1 });
              }
              getValidatorsRequired(t = "") {
                return this.objActividades.otros === t
                  ? ["", [l.kI.required]]
                  : [""];
              }
              get arrayActividades() {
                return this.cuestionarioForm.get("actividadesExtracademicas");
              }
              get arrayFamiliaNuclear() {
                return this.cuestionarioForm.get("familiaNuclear");
              }
              get arrayOtrosFamiliares() {
                return this.cuestionarioForm.get("otrosFamiliares");
              }
              get arrayTareasHogar() {
                return this.cuestionarioForm.get("tareasQueApoyaElPostulante");
              }
              get arrayEncargadoTarea() {
                return this.cuestionarioForm.get("encargadosTareasDelHogar");
              }
              get arrayAntecedentesPoliciales() {
                return this.cuestionarioForm.get("antecedentesPoliciales");
              }
              get arrayAntecedentesPenales() {
                return this.cuestionarioForm.get("antecedentesPenales");
              }
              get arrayActividadesApoyoEconomico() {
                return this.cuestionarioForm.get("actividadesApoyoEconomico");
              }
              getControl(t) {
                return this.cuestionarioForm.get(t);
              }
              openDialogErrorform() {
                const t = this.modalService.open(ve.b, { backdrop: "static" });
                (t.componentInstance.title = "IMPORTANTE!!! Campos Requeridos"),
                  (t.componentInstance.message =
                    "Por favor, ingresar todos campos requeridos"),
                  (t.componentInstance.icon = "warning"),
                  (t.componentInstance.showBtnCancel = !1),
                  (t.componentInstance.textBtnSuccess = "Aceptar"),
                  t.result.then((n) => {
                    console.log(n);
                  });
              }
              openMaps() {
                this.modalService
                  .open(Ke, { backdrop: "static", keyboard: !1 })
                  .result.then((n) => {
                    console.log(n);
                    const a = n[0];
                    this.getControl("coordenadasVivienda")?.setValue(
                      JSON.stringify(a)
                    );
                  });
              }
              submitForm() {
                if (this.cuestionarioForm.invalid)
                  this.openDialogErrorform(),
                    this.cuestionarioForm.markAllAsTouched();
                else {
                  const t = this.modalService.open(ve.b, {
                    backdrop: "static",
                  });
                  (t.componentInstance.message = `Excelente <b>${
                    this.getControl("responsable.nombresApellidos")?.value
                  }</b>, los datos del cuestionario fueron registrados con \xe9xito`),
                    (t.componentInstance.showBtnCancel = !1),
                    t.result.then((n) => {
                      console.log(n);
                    });
                }
              }
            }
            return (
              (i.ɵfac = function (t) {
                return new (t || i)(e.Y36(l.qu), e.Y36(D.FF));
              }),
              (i.ɵcmp = e.Xpm({
                type: i,
                selectors: [["app-questionary-bcp"]],
                decls: 300,
                vars: 172,
                consts: [
                  [1, "container"],
                  [1, "card", "mt-3"],
                  [1, "head-cuestionario"],
                  [1, "head-cuestionario__title"],
                  [
                    "src",
                    "assets/images/cuestionario/head-bcp.svg",
                    "alt",
                    "",
                    "srcset",
                    "",
                    1,
                    "head-cuestionario__img",
                  ],
                  [1, "card-body"],
                  [1, "row"],
                  [1, "col", "mb-3", "p-3", "hero-cuestionario"],
                  [1, "color-orange"],
                  [1, "d-flex", "flex-disposicion"],
                  [1, "bloq-text"],
                  [1, "textLightIt", "cursiva", "color-azul"],
                  [
                    "src",
                    "assets/images/cuestionario/descrip-img.svg",
                    "alt",
                    "",
                    "srcset",
                    "",
                    1,
                    "right-img",
                  ],
                  ["autocomplete", "off", 3, "formGroup"],
                  ["formCuestionario", "ngForm"],
                  [
                    "formGroupName",
                    "lenguaMaterna",
                    1,
                    "col-sm-12",
                    "col-md-6",
                  ],
                  [1, "mb-3"],
                  [3, "numero", "descripcion", "for"],
                  [
                    "formControlName",
                    "lengua",
                    "id",
                    "lengMat",
                    1,
                    "form-select",
                  ],
                  [3, "value", 4, "ngFor", "ngForOf"],
                  [4, "ngIf"],
                  [1, "col-sm-12", "col-md-6"],
                  [1, "form-check", "form-check-inline"],
                  [
                    "formControlName",
                    "viveEnLima",
                    "type",
                    "radio",
                    "value",
                    "si",
                    "id",
                    "siLima",
                    1,
                    "form-check-input",
                    3,
                    "change",
                  ],
                  ["for", "siLima", 1, "form-check-label"],
                  [
                    "formControlName",
                    "viveEnLima",
                    "type",
                    "radio",
                    "value",
                    "no",
                    "id",
                    "noLima",
                    1,
                    "form-check-input",
                    3,
                    "change",
                  ],
                  ["for", "noLima", 1, "form-check-label"],
                  ["formGroupName", "responsable", 1, "row"],
                  [
                    "formControlName",
                    "nombresApellidos",
                    "type",
                    "text",
                    "id",
                    "nombApeResponsable",
                    "placeholder",
                    "Nombres y apellidos completos",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "dni",
                    "numbersOnly",
                    "",
                    "type",
                    "text",
                    "id",
                    "dniResponsable",
                    "placeholder",
                    "Nro. DNI",
                    1,
                    "form-control",
                  ],
                  [1, "col-sm-12", "col-md-12"],
                  ["formGroupName", "parentesco", 1, "row"],
                  [
                    "formControlName",
                    "tipo",
                    "id",
                    "parentesco",
                    1,
                    "form-select",
                  ],
                  ["class", "col-sm-12 col-md-6", 4, "ngIf"],
                  ["formGroupName", "postulante", 1, "row"],
                  [
                    "formControlName",
                    "nombresApellidos",
                    "type",
                    "text",
                    "id",
                    "nombApePostulante",
                    "placeholder",
                    "Nombres y apellidos completos",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "dni",
                    "numbersOnly",
                    "",
                    "type",
                    "text",
                    "id",
                    "dniPostulante",
                    "placeholder",
                    "Nro. DNI",
                    1,
                    "form-control",
                  ],
                  ["formGroupName", "universidadAlaQuePostula", 1, "row"],
                  [
                    "formControlName",
                    "universidad",
                    "id",
                    "universidad",
                    1,
                    "form-select",
                  ],
                  [
                    "formControlName",
                    "carrera",
                    "type",
                    "text",
                    "id",
                    "carrera",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "fortalezasCualidadesPostulante",
                    "id",
                    "fortalezasCualidadesPostulante",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "ayudaProcesoPostulaci\xf3n",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "accionesApoyo",
                    "id",
                    "accionesApoyo",
                    3,
                    "multiple",
                    "closeOnSelect",
                  ],
                  ["formGroupName", "eleccionUniCarrera", 1, "row"],
                  ["formControlName", "motivo", "rows", "5", 1, "form-control"],
                  ["formControlName", "estaDeAcuerdo", 1, "form-select"],
                  ["value", "si"],
                  ["value", "no"],
                  ["value", "no-precisa"],
                  ["formGroupName", "beneficioEconomico", 1, "row"],
                  ["formControlName", "fueAcreedor", 1, "form-select"],
                  [
                    "formGroupName",
                    "tipoBeneficio",
                    "class",
                    "col-sm-12 col-md-12",
                    4,
                    "ngIf",
                  ],
                  ["formGroupName", "preparacionPreUniversitaria", 1, "row"],
                  ["formControlName", "tuvo", 1, "form-select"],
                  [
                    "formGroupName",
                    "aCargo",
                    "class",
                    "col-sm-12 col-md-12",
                    4,
                    "ngIf",
                  ],
                  [3, "numero", "descripcion", "textoAdicional", "for"],
                  [3, "multiple", "closeOnSelect", "add", "remove", "clear"],
                  ["formArrayName", "actividadesExtracademicas"],
                  ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"],
                  ["class", "row", 4, "ngIf"],
                  ["formGroupName", "mudarse", 1, "row"],
                  ["formControlName", "acepta", 1, "form-select"],
                  ["class", "col-sm-12 col-md-12", 4, "ngIf"],
                  ["formArrayName", "familiaNuclear"],
                  [1, "table-responsive", "col-sm-12", "col-md", "12", "mb-3"],
                  [1, "table"],
                  ["scope", "col", 3, "min-width", 4, "ngFor", "ngForOf"],
                  [3, "formGroupName", 4, "ngFor", "ngForOf"],
                  [1, "col-sm-12"],
                  [1, "btn", "btn-outline-success", "mt-1", "mb-3", 3, "click"],
                  [1, "mdi", "mdi-plus"],
                  ["formArrayName", "otrosFamiliares"],
                  ["formArrayName", "tareasQueApoyaElPostulante"],
                  [
                    "formControlName",
                    "horasDiariasApoyoTareasDelHogarPostulante",
                    "id",
                    "horasHogar",
                    1,
                    "form-select",
                  ],
                  ["formArrayName", "encargadosTareasDelHogar"],
                  ["formArrayName", "antecedentesPoliciales"],
                  ["formArrayName", "antecedentesPenales"],
                  [1, "col-sm-12", "col-md-12", "mb-3"],
                  ["formArrayName", "actividadesApoyoEconomico"],
                  [1, "table-responsive", "col-sm-12", "col-md-12", "mb-3"],
                  ["scope", "col", 4, "ngFor", "ngForOf"],
                  [
                    "formControlName",
                    "principalesReglasCasa",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  ["formGroupName", "queSignificaAccesoEducacion"],
                  ["formControlName", "significado", 1, "form-select"],
                  [
                    "formControlName",
                    "situacionComplicada",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "eventosSuperados",
                    "id",
                    "eventSuperados",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "momentoEnfamilia",
                    "id",
                    "momentFamilia",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  [1, "btn-cuestionario", 3, "click"],
                  [1, "text-submit"],
                  [
                    "width",
                    "24px",
                    "src",
                    "assets/images/cuestionario/arrow-btn.svg",
                  ],
                  [3, "value"],
                  ["class", "text-danger mt-1", 4, "ngIf"],
                  [1, "text-danger", "mt-1"],
                  ["for", "detalle"],
                  [
                    "formControlName",
                    "detalle",
                    "type",
                    "text",
                    "id",
                    "detalle",
                    "placeholder",
                    "Especificar lengua",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "detalle",
                    "type",
                    "text",
                    "id",
                    "detalleParentesco",
                    "placeholder",
                    "Especificar parentesco",
                    1,
                    "form-control",
                  ],
                  [
                    "formGroupName",
                    "tipoBeneficio",
                    1,
                    "col-sm-12",
                    "col-md-12",
                  ],
                  ["for", "selecBene"],
                  [
                    "formControlName",
                    "beneficio",
                    "id",
                    "selecBene",
                    1,
                    "form-select",
                  ],
                  ["for", ""],
                  [
                    "formControlName",
                    "detalle",
                    "type",
                    "text",
                    "id",
                    "detalle",
                    "placeholder",
                    "Especificar beneficio",
                    1,
                    "form-control",
                  ],
                  ["formGroupName", "aCargo", 1, "col-sm-12", "col-md-12"],
                  ["formControlName", "periodo", 1, "form-select"],
                  [
                    "formControlName",
                    "pagadoPor",
                    "id",
                    "selecBene",
                    1,
                    "form-select",
                  ],
                  [
                    "formControlName",
                    "detalle",
                    "type",
                    "text",
                    "id",
                    "detalle",
                    "placeholder",
                    "Especificar detalle",
                    1,
                    "form-control",
                  ],
                  [1, "row", 3, "formGroupName"],
                  [1, "col-sm-3", "col-md-3"],
                  ["formGroupName", "tipoActividad", 1, "mb-3"],
                  ["for", "frecuencia"],
                  [
                    "formControlName",
                    "frecuencia",
                    "id",
                    "frecuencia",
                    1,
                    "form-select",
                  ],
                  ["for", "tiempo"],
                  [
                    "formControlName",
                    "tiempo",
                    "id",
                    "tiempo",
                    1,
                    "form-select",
                  ],
                  ["formGroupName", "financiado", 1, "mb-3"],
                  ["for", "financiado"],
                  [
                    "formControlName",
                    "financiadoPor",
                    "id",
                    "financiado",
                    1,
                    "form-select",
                    3,
                    "change",
                  ],
                  ["tipoFinancimiento", ""],
                  [
                    "type",
                    "text",
                    "formControlName",
                    "detalle",
                    "placeholder",
                    "especificar actividad",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "detalle",
                    "type",
                    "text",
                    1,
                    "form-control",
                  ],
                  [1, "col-sm-12", "col-md-8"],
                  [
                    "formControlName",
                    "direccionVivienda",
                    "type",
                    "text",
                    "placeholder",
                    "direcci\xf3n completa de vivienda",
                    1,
                    "form-control",
                  ],
                  [1, "col-sm-12", "col-md-4"],
                  ["for", "mapa"],
                  [
                    "formControlName",
                    "coordenadasVivienda",
                    "type",
                    "text",
                    "id",
                    "mapa",
                    "placeholder",
                    "coordenadas",
                    1,
                    "form-control",
                    3,
                    "readonly",
                  ],
                  [1, "col-sm-12", "col-md-4", "align-self-end", "mb-3"],
                  [
                    "type",
                    "button",
                    1,
                    "btn",
                    "btn-outline-success",
                    3,
                    "click",
                  ],
                  [1, "mdi", "mdi-map-marker"],
                  ["formControlName", "tiempoTraslado", 1, "form-select"],
                  ["for", "detalleMotivo"],
                  [
                    "formControlName",
                    "detalle",
                    "id",
                    "detalleMotivo",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  ["scope", "col"],
                  [3, "formGroupName"],
                  [
                    "formControlName",
                    "parentesco",
                    "placeholder",
                    "Parentesco",
                    "type",
                    "text",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "nombres",
                    "placeholder",
                    "Nombres",
                    "type",
                    "text",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "apellidos",
                    "placeholder",
                    "Apellidos",
                    "type",
                    "text",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "edad",
                    "numbersOnly",
                    "",
                    "placeholder",
                    "Edad",
                    "type",
                    "text",
                    1,
                    "form-control",
                  ],
                  ["formControlName", "estadoCivil", 1, "form-select"],
                  ["formControlName", "nivelEducacion", 1, "form-select"],
                  [2, "max-width", "200px"],
                  ["formControlName", "viveoFallecido", 1, "form-select"],
                  ["formControlName", "viveConElPostulante", 1, "form-select"],
                  ["formControlName", "situacionLaboral", 1, "form-select"],
                  [1, "btn", "btn-outline-danger", "btn-icon", 3, "click"],
                  [1, "btn-icon-prepend", "feather", "icon-trash-2"],
                  ["formGroupName", "tipoTarea", 1, "mb-3"],
                  ["for", "duracion"],
                  [
                    "formControlName",
                    "duracion",
                    "id",
                    "duracion",
                    1,
                    "form-select",
                  ],
                  ["for", "frecuenciaTarea"],
                  [
                    "formControlName",
                    "frecuencia",
                    "id",
                    "frecuenciaTarea",
                    1,
                    "form-select",
                  ],
                  [
                    "type",
                    "text",
                    "formControlName",
                    "detalle",
                    "placeholder",
                    "especificar tarea",
                    1,
                    "form-control",
                  ],
                  ["formGroupName", "encargado", 1, "mb-3"],
                  ["for", "porcResp"],
                  [
                    "formControlName",
                    "porcentaje",
                    "id",
                    "porcResp",
                    1,
                    "form-select",
                  ],
                  [
                    "type",
                    "text",
                    "formControlName",
                    "detalle",
                    "placeholder",
                    "especificar responsable",
                    1,
                    "form-control",
                  ],
                  [4, "ngIf", "ngIfElse"],
                  ["lblFamiliarPolicial", ""],
                  [
                    "formControlName",
                    "tiene",
                    "type",
                    "radio",
                    "value",
                    "si",
                    1,
                    "form-check-input",
                    3,
                    "id",
                  ],
                  [1, "form-check-label", 3, "for"],
                  [
                    "formControlName",
                    "tiene",
                    "type",
                    "radio",
                    "value",
                    "no",
                    1,
                    "form-check-input",
                    3,
                    "id",
                  ],
                  ["class", "form-check form-check-inline", 4, "ngIf"],
                  [
                    "formControlName",
                    "familiar",
                    "type",
                    "text",
                    "placeholder",
                    "Especificar familiar",
                    1,
                    "form-control",
                  ],
                  ["lblFamiliarPenal", ""],
                  ["lblAntecedente", ""],
                  [
                    "formControlName",
                    "necesita",
                    "type",
                    "radio",
                    "value",
                    "si",
                    1,
                    "form-check-input",
                    3,
                    "id",
                    "change",
                  ],
                  [
                    "formControlName",
                    "necesita",
                    "type",
                    "radio",
                    "value",
                    "no",
                    1,
                    "form-check-input",
                    3,
                    "id",
                    "change",
                  ],
                  [
                    "formControlName",
                    "actividad",
                    "type",
                    "text",
                    "placeholder",
                    "Especificar actividad",
                    1,
                    "form-control",
                  ],
                  [1, "tx-12", "text-muted"],
                  ["formControlName", "monto", 1, "form-select"],
                  ["for", "detalleSig"],
                  [
                    "formControlName",
                    "detalle",
                    "type",
                    "text",
                    "id",
                    "detalleSig",
                    "placeholder",
                    "Especificar significado",
                    1,
                    "form-control",
                  ],
                ],
                template: function (t, n) {
                  if (
                    (1 & t &&
                      (e.TgZ(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3),
                      e._uU(4),
                      e.qZA(),
                      e._UZ(5, "img", 4),
                      e.qZA(),
                      e.TgZ(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "h2", 8),
                      e._uU(
                        10,
                        " Estimado padre/madre de familia y/o apoderado(a) "
                      ),
                      e.qZA(),
                      e.TgZ(11, "p"),
                      e._uU(
                        12,
                        " A continuaci\xf3n encontrar\xe1n una serie de preguntas que requerimos respondan con total transparencia y sinceridad. Estas preguntas tienen car\xe1cter de declaraci\xf3n jurada. El objetivo de las mismas es poder recabar informaci\xf3n de variables familiares importantes para el proceso de adaptaci\xf3n a la vida universitaria del/la postulante. "
                      ),
                      e.qZA(),
                      e.TgZ(13, "div", 9)(14, "div", 10)(15, "p"),
                      e._uU(
                        16,
                        " Si tuvieran alguna dificultad para la comprensi\xf3n o redacci\xf3n de sus ideas por escrito, le recomendamos pedirle ayuda a un familiar o postulante para que les ayude a poder transmitir sus ideas de la manera m\xe1s honesta y completa posible. "
                      ),
                      e.qZA(),
                      e.TgZ(17, "p"),
                      e._uU(
                        18,
                        " Las respuestas a estas preguntas no influyen de ninguna manera en el proceso de selecci\xf3n o posible asignaci\xf3n del beneficio. "
                      ),
                      e.qZA(),
                      e.TgZ(19, "p"),
                      e._uU(
                        20,
                        " Esta informaci\xf3n ser\xe1 tratada con total confidencialidad de acuerdo a "
                      ),
                      e.TgZ(21, "b"),
                      e._uU(
                        22,
                        "la Ley de Protecci\xf3n de Datos Personales N\xb0 29733."
                      ),
                      e.qZA()(),
                      e.TgZ(23, "p"),
                      e._uU(
                        24,
                        " Les agradecemos de antemano por el tiempo y honestidad brindada. "
                      ),
                      e.qZA(),
                      e._UZ(25, "br"),
                      e.TgZ(26, "p"),
                      e._uU(27, "Atentamente,"),
                      e.qZA(),
                      e.TgZ(28, "p", 11)(29, "b"),
                      e._uU(30, "Programa de Becas BCP"),
                      e.qZA()(),
                      e._UZ(31, "br"),
                      e.TgZ(32, "p", 8)(33, "b"),
                      e._uU(34, "(*) Importante:"),
                      e.qZA(),
                      e._uU(
                        35,
                        " Es necesario que la persona que responda el cuestionario sea el/la principal cuidador(a) del/la postulante. "
                      ),
                      e.qZA()(),
                      e._UZ(36, "img", 12),
                      e.qZA()()(),
                      e.TgZ(37, "div", 6)(38, "form", 13, 14)(40, "div", 6)(
                        41,
                        "div",
                        15
                      )(42, "div", 16),
                      e._UZ(43, "app-label-form", 17),
                      e.TgZ(44, "select", 18),
                      e.YNc(45, Rn, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(46, Gn, 2, 1, "ng-container", 20),
                      e.qZA(),
                      e.YNc(47, Wn, 7, 1, "ng-container", 20),
                      e.qZA(),
                      e.TgZ(48, "div", 21)(49, "div", 16),
                      e._UZ(50, "app-label-form", 17),
                      e.TgZ(51, "div", 22)(52, "input", 23),
                      e.NdJ("change", function (r) {
                        return n.changeViveEnLima(r);
                      }),
                      e.qZA(),
                      e.TgZ(53, "label", 24),
                      e._uU(54, " Si "),
                      e.qZA()(),
                      e.TgZ(55, "div", 22)(56, "input", 25),
                      e.NdJ("change", function (r) {
                        return n.changeViveEnLima(r);
                      }),
                      e.qZA(),
                      e.TgZ(57, "label", 26),
                      e._uU(58, " No "),
                      e.qZA()(),
                      e.YNc(59, Xn, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(60, "div", 27)(61, "div", 21)(62, "div", 16),
                      e._UZ(63, "app-label-form", 17)(64, "input", 28),
                      e.YNc(65, ti, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.TgZ(66, "div", 21)(67, "div", 16),
                      e._UZ(68, "app-label-form", 17)(69, "input", 29),
                      e.YNc(70, ai, 4, 3, "ng-container", 20),
                      e.qZA()(),
                      e.TgZ(71, "div", 30)(72, "div", 31)(73, "div", 21)(
                        74,
                        "div",
                        16
                      ),
                      e._UZ(75, "app-label-form", 17),
                      e.TgZ(76, "select", 32),
                      e.YNc(77, ri, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(78, li, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.TgZ(79, "div", 21),
                      e.YNc(80, pi, 5, 4, "ng-container", 33),
                      e.qZA()()()(),
                      e.TgZ(81, "div", 34)(82, "div", 21)(83, "div", 16),
                      e._UZ(84, "app-label-form", 17)(85, "input", 35),
                      e.YNc(86, gi, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.TgZ(87, "div", 21)(88, "div", 16),
                      e._UZ(89, "app-label-form", 17)(90, "input", 36),
                      e.YNc(91, fi, 4, 3, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(92, "div", 37)(93, "div", 21)(94, "div", 16),
                      e._UZ(95, "app-label-form", 17),
                      e.TgZ(96, "select", 38),
                      e.YNc(97, vi, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(98, Ci, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.TgZ(99, "div", 21)(100, "div", 16),
                      e._UZ(101, "app-label-form", 17)(102, "input", 39),
                      e.YNc(103, Ti, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(104, "div", 6)(105, "div", 30)(106, "div", 16),
                      e._UZ(107, "app-label-form", 17)(108, "textarea", 40),
                      e.YNc(109, xi, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(110, "div", 6)(111, "div", 30)(112, "div", 16),
                      e._UZ(113, "app-label-form", 17)(114, "textarea", 41),
                      e.YNc(115, Ii, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(116, "div", 6)(117, "div", 21)(118, "div", 16),
                      e._UZ(119, "app-label-form", 17),
                      e.TgZ(120, "ng-select", 42),
                      e.YNc(121, Mi, 2, 2, "ng-option", 19),
                      e.qZA(),
                      e.YNc(122, Zi, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(123, "div", 43)(124, "div", 21)(125, "div", 16),
                      e._UZ(126, "app-label-form", 17)(127, "textarea", 44),
                      e.YNc(128, ki, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.TgZ(129, "div", 21)(130, "div", 16),
                      e._UZ(131, "app-label-form", 17),
                      e.TgZ(132, "select", 45)(133, "option", 46),
                      e._uU(134, "Si"),
                      e.qZA(),
                      e.TgZ(135, "option", 47),
                      e._uU(136, "No"),
                      e.qZA(),
                      e.TgZ(137, "option", 48),
                      e._uU(138, "No precisa"),
                      e.qZA()(),
                      e.YNc(139, Oi, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(140, "div", 49)(141, "div", 21)(142, "div", 16),
                      e._UZ(143, "app-label-form", 17),
                      e.TgZ(144, "select", 50),
                      e.YNc(145, Bi, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(146, Fi, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.YNc(147, Ji, 9, 3, "div", 51),
                      e.qZA(),
                      e.TgZ(148, "div", 52)(149, "div", 21)(150, "div", 16),
                      e._UZ(151, "app-label-form", 17),
                      e.TgZ(152, "select", 53),
                      e.YNc(153, Yi, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(154, Ri, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.YNc(155, no, 15, 5, "div", 54),
                      e.qZA(),
                      e.TgZ(156, "div", 6)(157, "div", 30)(158, "div", 16),
                      e._UZ(159, "app-label-form", 55),
                      e.TgZ(160, "ng-select", 56),
                      e.NdJ("add", function (r) {
                        return n.addActividad(r);
                      })("remove", function (r) {
                        return n.deleteActividad(r);
                      })("clear", function () {
                        return n.clearActividades();
                      }),
                      e.YNc(161, io, 2, 2, "ng-option", 19),
                      e.qZA(),
                      e.YNc(162, oo, 3, 0, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(163, "div", 57),
                      e.YNc(164, bo, 31, 10, "div", 58),
                      e.qZA(),
                      e.YNc(165, xo, 6, 5, "div", 59),
                      e.YNc(166, Mo, 11, 2, "div", 59),
                      e.YNc(167, ko, 7, 5, "div", 59),
                      e.TgZ(168, "div", 60)(169, "div", 21)(170, "div", 16),
                      e._UZ(171, "app-label-form", 17),
                      e.TgZ(172, "select", 61),
                      e.YNc(173, No, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(174, Bo, 2, 1, "ng-container", 20),
                      e.qZA()(),
                      e.YNc(175, So, 6, 1, "div", 62),
                      e.qZA(),
                      e.TgZ(176, "div", 16),
                      e._UZ(177, "app-label-form", 17),
                      e.qZA(),
                      e.ynx(178, 63),
                      e.TgZ(179, "div", 64)(180, "table", 65)(181, "thead")(
                        182,
                        "tr"
                      ),
                      e.YNc(183, qo, 2, 3, "th", 66),
                      e._UZ(184, "th"),
                      e.qZA()(),
                      e.TgZ(185, "tbody"),
                      e.YNc(186, ca, 34, 16, "tr", 67),
                      e.qZA()()(),
                      e.TgZ(187, "div", 6)(188, "div", 68)(189, "button", 69),
                      e.NdJ("click", function () {
                        return n.addFamiliarNuclear();
                      }),
                      e._UZ(190, "i", 70),
                      e._uU(191, " Agregar familiar "),
                      e.qZA()()(),
                      e.BQk(),
                      e.TgZ(192, "div", 16),
                      e._UZ(193, "app-label-form", 17),
                      e.qZA(),
                      e.ynx(194, 71),
                      e.TgZ(195, "div", 64)(196, "table", 65)(197, "thead")(
                        198,
                        "tr"
                      ),
                      e.YNc(199, ua, 2, 3, "th", 66),
                      e._UZ(200, "th"),
                      e.qZA()(),
                      e.TgZ(201, "tbody"),
                      e.YNc(202, wa, 28, 11, "tr", 67),
                      e.qZA()()(),
                      e.TgZ(203, "button", 69),
                      e.NdJ("click", function () {
                        return n.addOtrosFamiliar();
                      }),
                      e._UZ(204, "i", 70),
                      e._uU(205, " Agregar familiar fuera de familia nuclear "),
                      e.qZA(),
                      e.BQk(),
                      e.TgZ(206, "div", 6)(207, "div", 30)(208, "div", 16),
                      e._UZ(209, "app-label-form", 55),
                      e.TgZ(210, "ng-select", 56),
                      e.NdJ("add", function (r) {
                        return n.addTareaHogar(r);
                      })("remove", function (r) {
                        return n.deleteTareaHogar(r);
                      })("clear", function () {
                        return n.clearTareasHogar();
                      }),
                      e.YNc(211, Za, 2, 2, "ng-option", 19),
                      e.qZA(),
                      e.YNc(212, Qa, 3, 0, "ng-container", 20),
                      e.qZA()()(),
                      e.ynx(213, 72),
                      e.YNc(214, La, 22, 7, "div", 58),
                      e.BQk(),
                      e.TgZ(215, "div", 6)(216, "div", 30)(217, "div", 16),
                      e._UZ(218, "app-label-form", 17),
                      e.TgZ(219, "select", 73),
                      e.YNc(220, za, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(221, Ja, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(222, "div", 6)(223, "div", 30)(224, "div", 16),
                      e._UZ(225, "app-label-form", 55),
                      e.TgZ(226, "ng-select", 56),
                      e.NdJ("add", function (r) {
                        return n.addEncargadoTarea(r);
                      })("remove", function (r) {
                        return n.deleteEncargadoTarea(r);
                      })("clear", function () {
                        return n.clearResponsablesTarea();
                      }),
                      e.YNc(227, Ya, 2, 2, "ng-option", 19),
                      e.qZA(),
                      e.YNc(228, ja, 3, 0, "ng-container", 20),
                      e.qZA()()(),
                      e.ynx(229, 74),
                      e.YNc(230, Ka, 15, 5, "div", 58),
                      e.BQk(),
                      e.TgZ(231, "div", 6)(232, "div", 30),
                      e._UZ(233, "app-label-form", 55),
                      e.qZA()(),
                      e.ynx(234, 75),
                      e.YNc(235, rr, 17, 9, "div", 58),
                      e.TgZ(236, "button", 69),
                      e.NdJ("click", function () {
                        return n.addAntecedentePolicial();
                      }),
                      e._UZ(237, "i", 70),
                      e._uU(
                        238,
                        " Agregar otro familiar que viva en la misma casa con el postulante "
                      ),
                      e.qZA(),
                      e.BQk(),
                      e.TgZ(239, "div", 6)(240, "div", 30),
                      e._UZ(241, "app-label-form", 55),
                      e.qZA()(),
                      e.ynx(242, 76),
                      e.YNc(243, _r, 17, 9, "div", 58),
                      e.TgZ(244, "button", 69),
                      e.NdJ("click", function () {
                        return n.addAntecedentePenal();
                      }),
                      e._UZ(245, "i", 70),
                      e._uU(
                        246,
                        " Agregar otro familiar que viva en la misma casa con el postulante "
                      ),
                      e.qZA(),
                      e.BQk(),
                      e.TgZ(247, "div", 6)(248, "div", 77),
                      e._UZ(249, "app-label-form", 55),
                      e.qZA()(),
                      e.ynx(250, 78),
                      e.TgZ(251, "div", 79)(252, "table", 65)(253, "thead")(
                        254,
                        "tr"
                      ),
                      e.YNc(255, mr, 2, 1, "th", 80),
                      e._UZ(256, "th")(257, "th"),
                      e.qZA()(),
                      e.TgZ(258, "tbody"),
                      e.YNc(259, Mr, 19, 10, "tr", 67),
                      e.qZA()(),
                      e.TgZ(260, "button", 69),
                      e.NdJ("click", function () {
                        return n.addActividadApoyo();
                      }),
                      e._UZ(261, "i", 70),
                      e._uU(262, " Agregar otra actividad "),
                      e.qZA()(),
                      e.BQk(),
                      e.TgZ(263, "div", 6)(264, "div", 30)(265, "div", 16),
                      e._UZ(266, "app-label-form", 55)(267, "textarea", 81),
                      e.YNc(268, Zr, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.ynx(269, 82),
                      e.TgZ(270, "div", 6)(271, "div", 30)(272, "div", 16),
                      e._UZ(273, "app-label-form", 55),
                      e.TgZ(274, "select", 83),
                      e.YNc(275, Qr, 2, 2, "option", 19),
                      e.qZA(),
                      e.YNc(276, Nr, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.YNc(277, Pr, 7, 1, "div", 59),
                      e.BQk(),
                      e.TgZ(278, "div", 6)(279, "div", 30)(280, "div", 16),
                      e._UZ(281, "app-label-form", 55)(282, "textarea", 84),
                      e.YNc(283, Sr, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(284, "div", 6)(285, "div", 30)(286, "div", 16),
                      e._UZ(287, "app-label-form", 55)(288, "textarea", 85),
                      e.YNc(289, Dr, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(290, "div", 6)(291, "div", 30)(292, "div", 16),
                      e._UZ(293, "app-label-form", 55)(294, "textarea", 86),
                      e.YNc(295, zr, 2, 1, "ng-container", 20),
                      e.qZA()()(),
                      e.TgZ(296, "button", 87),
                      e.NdJ("click", function () {
                        return n.submitForm();
                      }),
                      e.TgZ(297, "span", 88),
                      e._uU(298, "ENVIAR"),
                      e.qZA(),
                      e._UZ(299, "img", 89),
                      e.qZA()()()()()()),
                    2 & t)
                  ) {
                    const a = e.MAs(39);
                    let r,
                      s,
                      c,
                      u,
                      p,
                      d,
                      _,
                      m,
                      y,
                      A,
                      w,
                      Z,
                      Q,
                      k,
                      N,
                      O,
                      J,
                      Y,
                      j,
                      R,
                      V,
                      G,
                      H;
                    e.xp6(4),
                      e.Oqu(n.title),
                      e.xp6(34),
                      e.Q6J("formGroup", n.cuestionarioForm),
                      e.xp6(5),
                      e.Q6J("numero", n.objPregunta.uno.nro)(
                        "descripcion",
                        n.objPregunta.uno.descripcion
                      )("for", n.objPregunta.uno.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.lenguajes),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (r = n.getControl("lenguaMaterna.lengua"))
                          ? null
                          : r.invalid) &&
                          (null == (r = n.getControl("lenguaMaterna.lengua"))
                            ? null
                            : r.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", n.hasLenguaje),
                      e.xp6(3),
                      e.Q6J("numero", n.objPregunta.unoUno.nro)(
                        "descripcion",
                        n.objPregunta.unoUno.descripcion
                      )("for", n.objPregunta.unoUno.for),
                      e.xp6(9),
                      e.Q6J(
                        "ngIf",
                        (null == (s = n.getControl("viveEnLima"))
                          ? null
                          : s.invalid) &&
                          (null == (s = n.getControl("viveEnLima"))
                            ? null
                            : s.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.dos.nro)(
                        "descripcion",
                        n.objPregunta.dos.descripcion
                      )("for", n.objPregunta.dos.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (c = n.getControl("responsable.nombresApellidos"))
                          ? null
                          : c.invalid) &&
                          (null ==
                          (c = n.getControl("responsable.nombresApellidos"))
                            ? null
                            : c.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", n.objPregunta.tres.nro)(
                        "descripcion",
                        n.objPregunta.tres.descripcion
                      )("for", n.objPregunta.tres.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (u = n.getControl("responsable.dni"))
                          ? null
                          : u.invalid) &&
                          (null == (u = n.getControl("responsable.dni"))
                            ? null
                            : u.touched)
                      ),
                      e.xp6(5),
                      e.Q6J("numero", n.objPregunta.cuatro.nro)(
                        "descripcion",
                        n.objPregunta.cuatro.descripcion
                      )("for", n.objPregunta.cuatro.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.listParentesco),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (p = n.getControl("responsable.parentesco.tipo"))
                          ? null
                          : p.invalid) &&
                          (null ==
                          (p = n.getControl("responsable.parentesco.tipo"))
                            ? null
                            : p.touched)
                      ),
                      e.xp6(2),
                      e.Q6J("ngIf", n.hasParentesco),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.cinco.nro)(
                        "descripcion",
                        n.objPregunta.cinco.descripcion
                      )("for", n.objPregunta.cinco.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (d = n.getControl("postulante.nombresApellidos"))
                          ? null
                          : d.invalid) &&
                          (null ==
                          (d = n.getControl("postulante.nombresApellidos"))
                            ? null
                            : d.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", n.objPregunta.seis.nro)(
                        "descripcion",
                        n.objPregunta.seis.descripcion
                      )("for", n.objPregunta.seis.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (_ = n.getControl("postulante.dni"))
                          ? null
                          : _.invalid) &&
                          (null == (_ = n.getControl("postulante.dni"))
                            ? null
                            : _.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.siete.nro)(
                        "descripcion",
                        n.objPregunta.siete.descripcion
                      )("for", n.objPregunta.siete.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.universidades),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (m = n.getControl(
                          "universidadAlaQuePostula.universidad"
                        ))
                          ? null
                          : m.invalid) &&
                          (null ==
                          (m = n.getControl(
                            "universidadAlaQuePostula.universidad"
                          ))
                            ? null
                            : m.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", n.objPregunta.sieteUno.nro)(
                        "descripcion",
                        n.objPregunta.sieteUno.descripcion
                      )("for", n.objPregunta.sieteUno.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (y = n.getControl("universidadAlaQuePostula.carrera"))
                          ? null
                          : y.invalid) &&
                          (null ==
                          (y = n.getControl("universidadAlaQuePostula.carrera"))
                            ? null
                            : y.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.ocho.nro)(
                        "descripcion",
                        n.objPregunta.ocho.descripcion
                      )("for", n.objPregunta.ocho.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (A = n.getControl("fortalezasCualidadesPostulante"))
                          ? null
                          : A.invalid) &&
                          (null ==
                          (A = n.getControl("fortalezasCualidadesPostulante"))
                            ? null
                            : A.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.nueve.nro)(
                        "descripcion",
                        n.objPregunta.nueve.descripcion
                      )("for", n.objPregunta.nueve.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (w = n.getControl("ayudaProcesoPostulaci\xf3n"))
                          ? null
                          : w.invalid) &&
                          (null ==
                          (w = n.getControl("ayudaProcesoPostulaci\xf3n"))
                            ? null
                            : w.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.diez.nro)(
                        "descripcion",
                        n.objPregunta.diez.descripcion
                      )("for", n.objPregunta.diez.for),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", n.listApoyo),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (Z = n.getControl("accionesApoyo"))
                          ? null
                          : Z.invalid) &&
                          (null == (Z = n.getControl("accionesApoyo"))
                            ? null
                            : Z.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.once.nro)(
                        "descripcion",
                        n.objPregunta.once.descripcion
                      )("for", n.objPregunta.once.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (Q = n.getControl("eleccionUniCarrera.motivo"))
                          ? null
                          : Q.invalid) &&
                          (null ==
                          (Q = n.getControl("eleccionUniCarrera.motivo"))
                            ? null
                            : Q.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", n.objPregunta.onceUno.nro)(
                        "descripcion",
                        n.objPregunta.onceUno.descripcion
                      )("for", n.objPregunta.onceUno.for),
                      e.xp6(8),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (k = n.getControl("eleccionUniCarrera.estaDeAcuerdo"))
                          ? null
                          : k.invalid) &&
                          (null ==
                          (k = n.getControl("eleccionUniCarrera.estaDeAcuerdo"))
                            ? null
                            : k.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.doce.nro)(
                        "descripcion",
                        n.objPregunta.doce.descripcion
                      )("for", n.objPregunta.doce.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.beneficios),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (N = n.getControl("beneficioEconomico.fueAcreedor"))
                          ? null
                          : N.invalid) &&
                          (null ==
                          (N = n.getControl("beneficioEconomico.fueAcreedor"))
                            ? null
                            : N.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", n.hasBeneficio),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.trece.nro)(
                        "descripcion",
                        n.objPregunta.trece.descripcion
                      )("for", n.objPregunta.trece.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.listPreparacion),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (O = n.getControl("preparacionPreUniversitaria.tuvo"))
                          ? null
                          : O.invalid) &&
                          (null ==
                          (O = n.getControl("preparacionPreUniversitaria.tuvo"))
                            ? null
                            : O.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", n.hasPreparacion),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.catorce.nro)(
                        "descripcion",
                        n.objPregunta.catorce.descripcion
                      )("textoAdicional", n.objPregunta.catorce.datoAdicional)(
                        "for",
                        n.objPregunta.catorce.for
                      ),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", n.actividadesExtracademicas),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        n.arrayActividades.controls.length < 1 && a.submitted
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.arrayActividades.controls),
                      e.xp6(1),
                      e.Q6J("ngIf", n.isFromLima),
                      e.xp6(1),
                      e.Q6J("ngIf", n.isFromLima),
                      e.xp6(1),
                      e.Q6J("ngIf", n.isFromLima),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.diecisiete.nro)(
                        "descripcion",
                        n.objPregunta.diecisiete.descripcion
                      )("for", n.objPregunta.diecisiete.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.listSiNo),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (J = n.getControl("mudarse.acepta"))
                          ? null
                          : J.invalid) &&
                          (null == (J = n.getControl("mudarse.acepta"))
                            ? null
                            : J.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", n.hasDetalleViaje),
                      e.xp6(2),
                      e.Q6J("numero", n.objPregunta.dieciocho.nro)(
                        "descripcion",
                        n.objPregunta.dieciocho.descripcion
                      )("for", n.objPregunta.dieciocho.for),
                      e.xp6(6),
                      e.Q6J("ngForOf", n.displayedColumns),
                      e.xp6(3),
                      e.Q6J("ngForOf", n.arrayFamiliaNuclear.controls),
                      e.xp6(7),
                      e.Q6J("numero", n.objPregunta.diecinueve.nro)(
                        "descripcion",
                        n.objPregunta.diecinueve.descripcion
                      )("for", n.objPregunta.diecinueve.for),
                      e.xp6(6),
                      e.Q6J("ngForOf", n.displayedColumnsOtrosFam),
                      e.xp6(3),
                      e.Q6J("ngForOf", n.arrayOtrosFamiliares.controls),
                      e.xp6(7),
                      e.Q6J("numero", n.objPregunta.veinte.nro)(
                        "descripcion",
                        n.objPregunta.veinte.descripcion
                      )("textoAdicional", n.objPregunta.veinte.datoAdicional)(
                        "for",
                        n.objPregunta.veinte.for
                      ),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", n.listTareaHogar),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        n.arrayTareasHogar.controls.length < 1 && a.submitted
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.arrayTareasHogar.controls),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.veinteUno.nro)(
                        "descripcion",
                        n.objPregunta.veinteUno.descripcion
                      )("for", n.objPregunta.veinteUno.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.listNroHorasDeApoyo),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (Y = n.getControl(
                          "horasDiariasApoyoTareasDelHogarPostulante"
                        ))
                          ? null
                          : Y.invalid) &&
                          (null ==
                          (Y = n.getControl(
                            "horasDiariasApoyoTareasDelHogarPostulante"
                          ))
                            ? null
                            : Y.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.veintiuno.nro)(
                        "descripcion",
                        n.objPregunta.veintiuno.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veintiuno.datoAdicional
                      )("for", n.objPregunta.veintiuno.for),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", n.listEncargados),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        n.arrayEncargadoTarea.controls.length < 1 && a.submitted
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.arrayEncargadoTarea.controls),
                      e.xp6(3),
                      e.Q6J("numero", n.objPregunta.veintidos.nro)(
                        "descripcion",
                        n.objPregunta.veintidos.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veintidos.datoAdicional
                      )("for", n.objPregunta.veintidos.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.arrayAntecedentesPoliciales.controls),
                      e.xp6(6),
                      e.Q6J("numero", n.objPregunta.veintitres.nro)(
                        "descripcion",
                        n.objPregunta.veintitres.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veintitres.datoAdicional
                      )("for", n.objPregunta.veintitres.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.arrayAntecedentesPenales.controls),
                      e.xp6(6),
                      e.Q6J("numero", n.objPregunta.veinticuatro.nro)(
                        "descripcion",
                        n.objPregunta.veinticuatro.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veinticuatro.datoAdicional
                      )("for", n.objPregunta.veinticuatro.for),
                      e.xp6(6),
                      e.Q6J("ngForOf", n.displayedColumnsApoyoEcon),
                      e.xp6(4),
                      e.Q6J(
                        "ngForOf",
                        n.arrayActividadesApoyoEconomico.controls
                      ),
                      e.xp6(7),
                      e.Q6J("numero", n.objPregunta.veinticinco.nro)(
                        "descripcion",
                        n.objPregunta.veinticinco.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veinticinco.datoAdicional
                      )("for", n.objPregunta.veinticinco.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (j = n.getControl("principalesReglasCasa"))
                          ? null
                          : j.invalid) &&
                          (null == (j = n.getControl("principalesReglasCasa"))
                            ? null
                            : j.touched)
                      ),
                      e.xp6(5),
                      e.Q6J("numero", n.objPregunta.veintiseis.nro)(
                        "descripcion",
                        n.objPregunta.veintiseis.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veintiseis.datoAdicional
                      )("for", n.objPregunta.veintiseis.for),
                      e.xp6(2),
                      e.Q6J("ngForOf", n.listSignificaEducacion),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (R = n.getControl(
                          "queSignificaAccesoEducacion.significado"
                        ))
                          ? null
                          : R.invalid) &&
                          (null ==
                          (R = n.getControl(
                            "queSignificaAccesoEducacion.significado"
                          ))
                            ? null
                            : R.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", n.hasSignificado),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.veintisiete.nro)(
                        "descripcion",
                        n.objPregunta.veintisiete.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veintisiete.datoAdicional
                      )("for", n.objPregunta.veintisiete.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (V = n.getControl("situacionComplicada"))
                          ? null
                          : V.invalid) &&
                          (null == (V = n.getControl("situacionComplicada"))
                            ? null
                            : V.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.veintiocho.nro)(
                        "descripcion",
                        n.objPregunta.veintiocho.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veintiocho.datoAdicional
                      )("for", n.objPregunta.veintiocho.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (G = n.getControl("eventosSuperados"))
                          ? null
                          : G.invalid) &&
                          (null == (G = n.getControl("eventosSuperados"))
                            ? null
                            : G.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", n.objPregunta.veintinueve.nro)(
                        "descripcion",
                        n.objPregunta.veintinueve.descripcion
                      )(
                        "textoAdicional",
                        n.objPregunta.veintinueve.datoAdicional
                      )("for", n.objPregunta.veintinueve.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (H = n.getControl("momentoEnfamilia"))
                          ? null
                          : H.invalid) &&
                          (null == (H = n.getControl("momentoEnfamilia"))
                            ? null
                            : H.touched)
                      );
                  }
                },
                dependencies: [
                  C.sg,
                  C.O5,
                  l._Y,
                  l.YN,
                  l.Kr,
                  l.Fj,
                  l.EJ,
                  l._,
                  l.JJ,
                  l.JL,
                  l.sg,
                  l.u,
                  l.x0,
                  l.CE,
                  Ln,
                  Ee,
                  Yn.X,
                  jn,
                ],
                styles: [
                  '@import"https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@300;400&display=swap";[_nghost-%COMP%]{font-family:Flexo-regular,sans-serif}.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%], .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{border:1px solid black}label[_ngcontent-%COMP%]{color:#000;font-weight:500}.hero-cuestionario[_ngcontent-%COMP%]{line-height:1.2}.hero-cuestionario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:18px}.hero-cuestionario[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3125rem;margin-bottom:1rem;font-family:Flexo-light,sans-serif}.color-orange[_ngcontent-%COMP%]{color:#ff4d00}.color-azul[_ngcontent-%COMP%]{color:#002d74}.cursiva[_ngcontent-%COMP%]{font-style:italic}.textLightIt[_ngcontent-%COMP%]{font-family:Flexo-lightIt,sans-serif}.head-cuestionario[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;color:#fff;background-color:#002d74;flex-direction:column}@media (min-width: 48rem){.head-cuestionario[_ngcontent-%COMP%]{flex-direction:row}}.head-cuestionario__title[_ngcontent-%COMP%]{font-style:italic;font-size:2.25rem;font-family:Flexo-mediumit,sans-serif;margin-left:1.5rem;order:1;margin-bottom:1rem}@media (min-width: 48rem){.head-cuestionario__title[_ngcontent-%COMP%]{order:0;margin-bottom:0}}.head-cuestionario__img[_ngcontent-%COMP%]{max-width:416px;max-height:136px;margin:2rem 0;order:0}@media (min-width: 48rem){.head-cuestionario__img[_ngcontent-%COMP%]{order:1}}.flex-disposicion[_ngcontent-%COMP%]{flex-direction:column}@media (min-width: 48rem){.flex-disposicion[_ngcontent-%COMP%]{flex-direction:row}}.bloq-text[_ngcontent-%COMP%]{margin-top:1rem}.right-img[_ngcontent-%COMP%]{max-width:151px;max-height:297px;align-self:center;justify-self:center}@media (min-width: 48rem){.right-img[_ngcontent-%COMP%]{max-width:251px}}@media (min-width: 62rem){.right-img[_ngcontent-%COMP%]{max-width:351px}}.btn-cuestionario[_ngcontent-%COMP%]{background:url(./assets/images/cuestionario/btn-bg.svg) no-repeat;background-position:center;color:#fff;font-family:Flexo-bold,sans-serif;font-size:1.125rem;display:inline-block;padding:2rem;border:none}.text-submit[_ngcontent-%COMP%]{margin-right:.5rem}',
                ],
              })),
              i
            );
          })(),
        },
        { path: "", redirectTo: "cuestionario", pathMatch: "full" },
      ];
      let Jr = (() => {
        class i {}
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({ imports: [ne.Bz.forChild(Ur), ne.Bz] })),
          i
        );
      })();
      var Yr = g(2276);
      let jr = (() => {
        class i {}
        return (
          (i.ɵfac = function (t) {
            return new (t || i)();
          }),
          (i.ɵmod = e.oAB({ type: i })),
          (i.ɵinj = e.cJS({
            imports: [C.ez, l.u5, l.UX, Ge, $.JF, $.Ed, Jn, D.IJ, Yr.m, Jr],
          })),
          i
        );
      })();
    },
  },
]);
