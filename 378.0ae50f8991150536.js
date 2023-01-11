"use strict";
(self.webpackChunktest_theme_noble =
  self.webpackChunktest_theme_noble || []).push([
  [378],
  {
    6378: (Or, _e, b) => {
      b.r(_e), b.d(_e, { PublicModule: () => Br });
      var K = b(529),
        t = b(433),
        C = b(6895),
        ae = b(8176),
        de = b(5353),
        M = b(4004),
        Ee = b(262),
        xe = b(9646),
        e = b(1571),
        F = b(2953),
        v = b(1135),
        qe = b(9751),
        A = b(7579),
        ze = (b(9841), b(3900)),
        l = (b(5698), b(2722));
      const re = ["*"];
      class P {
        constructor(a) {
          (this._ngZone = a),
            (this._pending = []),
            (this._listeners = []),
            (this._targetStream = new v.X(void 0));
        }
        _clearListeners() {
          for (const a of this._listeners) a.remove();
          this._listeners = [];
        }
        getLazyEmitter(a) {
          return this._targetStream.pipe(
            (0, ze.w)((i) => {
              const o = new qe.y((d) => {
                if (!i)
                  return void this._pending.push({
                    observable: o,
                    observer: d,
                  });
                const r = i.addListener(a, (u) => {
                  this._ngZone.run(() => d.next(u));
                });
                return this._listeners.push(r), () => r.remove();
              });
              return o;
            })
          );
        }
        setTarget(a) {
          const i = this._targetStream.value;
          a !== i &&
            (i && (this._clearListeners(), (this._pending = [])),
            this._targetStream.next(a),
            this._pending.forEach((o) => o.observable.subscribe(o.observer)),
            (this._pending = []));
        }
        destroy() {
          this._clearListeners(),
            (this._pending = []),
            this._targetStream.complete();
        }
      }
      const H = {
        center: { lat: 37.421995, lng: -122.084092 },
        zoom: 17,
        mapTypeId: "roadmap",
      };
      let y = (() => {
        class _ {
          constructor(i, o, d) {
            if (
              ((this._elementRef = i),
              (this._ngZone = o),
              (this._eventManager = new P(this._ngZone)),
              (this.height = "500px"),
              (this.width = "500px"),
              (this._options = H),
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
              (this._isBrowser = (0, C.NF)(d)),
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
          set center(i) {
            this._center = i;
          }
          set zoom(i) {
            this._zoom = i;
          }
          set options(i) {
            this._options = i || H;
          }
          ngOnChanges(i) {
            (i.height || i.width) && this._setSize();
            const o = this.googleMap;
            o &&
              (i.options && o.setOptions(this._combineOptions()),
              i.center && this._center && o.setCenter(this._center),
              i.zoom && null != this._zoom && o.setZoom(this._zoom),
              i.mapTypeId && this.mapTypeId && o.setMapTypeId(this.mapTypeId));
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
          fitBounds(i, o) {
            this._assertInitialized(), this.googleMap.fitBounds(i, o);
          }
          panBy(i, o) {
            this._assertInitialized(), this.googleMap.panBy(i, o);
          }
          panTo(i) {
            this._assertInitialized(), this.googleMap.panTo(i);
          }
          panToBounds(i, o) {
            this._assertInitialized(), this.googleMap.panToBounds(i, o);
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
              const i = this._mapEl.style;
              (i.height =
                null === this.height ? "" : ge(this.height) || "500px"),
                (i.width =
                  null === this.width ? "" : ge(this.width) || "500px");
            }
          }
          _combineOptions() {
            const i = this._options || {};
            return {
              ...i,
              center: this._center || i.center || H.center,
              zoom: this._zoom ?? i.zoom ?? H.zoom,
              mapTypeId: this.mapTypeId || i.mapTypeId || H.mapTypeId,
            };
          }
          _assertInitialized() {}
        }
        return (
          (_.ɵfac = function (i) {
            return new (i || _)(e.Y36(e.SBq), e.Y36(e.R0b), e.Y36(e.Lbi));
          }),
          (_.ɵcmp = e.Xpm({
            type: _,
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
            ngContentSelectors: re,
            decls: 2,
            vars: 0,
            consts: [[1, "map-container"]],
            template: function (i, o) {
              1 & i && (e.F$t(), e._UZ(0, "div", 0), e.Hsn(1));
            },
            encapsulation: 2,
            changeDetection: 0,
          })),
          _
        );
      })();
      const we = /([A-Za-z%]+)$/;
      function ge(_) {
        return null == _ ? "" : we.test(_) ? _ : `${_}px`;
      }
      const ke = { position: { lat: 37.421995, lng: -122.084092 } };
      let ee = (() => {
          class _ {
            constructor(i, o) {
              (this._googleMap = i),
                (this._ngZone = o),
                (this._eventManager = new P(this._ngZone)),
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
            set title(i) {
              this._title = i;
            }
            set position(i) {
              this._position = i;
            }
            set label(i) {
              this._label = i;
            }
            set clickable(i) {
              this._clickable = i;
            }
            set options(i) {
              this._options = i;
            }
            set icon(i) {
              this._icon = i;
            }
            set visible(i) {
              this._visible = i;
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
            ngOnChanges(i) {
              const {
                marker: o,
                _title: d,
                _position: r,
                _label: u,
                _clickable: g,
                _icon: n,
                _visible: p,
              } = this;
              o &&
                (i.options && o.setOptions(this._combineOptions()),
                i.title && void 0 !== d && o.setTitle(d),
                i.position && r && o.setPosition(r),
                i.label && void 0 !== u && o.setLabel(u),
                i.clickable && void 0 !== g && o.setClickable(g),
                i.icon && n && o.setIcon(n),
                i.visible && void 0 !== p && o.setVisible(p));
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
              const i = this._options || ke;
              return {
                ...i,
                title: this._title || i.title,
                position: this._position || i.position,
                label: this._label || i.label,
                clickable: this._clickable ?? i.clickable,
                map: this._googleMap.googleMap,
                icon: this._icon || i.icon,
                visible: this._visible ?? i.visible,
              };
            }
            _assertInitialized() {}
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(y), e.Y36(e.R0b));
            }),
            (_.ɵdir = e.lG2({
              type: _,
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
            _
          );
        })(),
        $e = (() => {
          class _ {}
          return (
            (_.ɵfac = function (i) {
              return new (i || _)();
            }),
            (_.ɵmod = e.oAB({ type: _ })),
            (_.ɵinj = e.cJS({})),
            _
          );
        })();
      function We(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "map-marker", 8),
            e.NdJ("mapDragend", function (d) {
              const u = e.CHM(i).$implicit,
                g = e.oxw(2);
              return e.KtG(g.markerDragEnd(u, d));
            }),
            e.qZA();
        }
        if (2 & _) {
          const i = a.$implicit,
            o = e.oxw(2);
          e.Q6J("position", i)("options", o.markerOptions);
        }
      }
      function Ke(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "div")(1, "google-map", 6),
            e.NdJ("mapClick", function (d) {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.addMarker(d));
            }),
            e.YNc(2, We, 1, 2, "map-marker", 7),
            e.qZA()();
        }
        if (2 & _) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J("options", i.options),
            e.xp6(1),
            e.Q6J("ngForOf", i.markerPositions);
        }
      }
      function Xe(_, a) {
        1 & _ &&
          (e.TgZ(0, "ngb-alert", 9),
          e._UZ(1, "i", 10),
          e._uU(2, " Debe indicar una ubicaci\xf3n "),
          e.qZA()),
          2 & _ && e.Q6J("dismissible", !1)("type", "danger");
      }
      let ei = (() => {
        class _ {
          constructor(i, o) {
            (this.activeModal = o),
              (this.options = {
                center: { lat: -12.044471659367696, lng: -77.04298671991893 },
                zoom: 12,
              }),
              (this.markerPositions = []),
              (this.markerOptions = { draggable: !0 }),
              (this.showWarning = !1),
              (this.disableBtn = !1),
              (this.apiLoaded = i
                .jsonp(
                  "https://maps.googleapis.com/maps/api/js?key=AIzaSyBlzcI7vJjWhU0s6HkcXx9CeIKPvIkg8uY",
                  "callback"
                )
                .pipe(
                  (0, M.U)(() => !0),
                  (0, Ee.K)(() => (0, xe.of)(!1))
                ));
          }
          ngOnDestroy() {
            clearTimeout(this.timeOut);
          }
          ngOnInit() {}
          addMarker(i) {
            this.markerPositions.length < 1 &&
              this.markerPositions.push(i.latLng.toJSON());
          }
          markerDragEnd(i, o) {
            const d = this.markerPositions[0];
            (d.lat = o.latLng.lat()), (d.lng = o.latLng.lng());
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
          (_.ɵfac = function (i) {
            return new (i || _)(e.Y36(K.eN), e.Y36(F.Kz));
          }),
          (_.ɵcmp = e.Xpm({
            type: _,
            selectors: [["app-map"]],
            decls: 10,
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
            template: function (i, o) {
              1 & i &&
                (e.TgZ(0, "div", 0),
                e.YNc(1, Ke, 3, 2, "div", 1),
                e.ALo(2, "async"),
                e.qZA(),
                e.TgZ(3, "div", 2)(4, "p"),
                e._uU(5, "Haga click en la ubicaci\xf3n correspondiente"),
                e.qZA(),
                e.YNc(6, Xe, 3, 2, "ngb-alert", 3),
                e.TgZ(7, "button", 4),
                e.NdJ("click", function () {
                  return o.close();
                }),
                e._UZ(8, "i", 5),
                e._uU(9, " Aceptar Ubicaci\xf3n "),
                e.qZA()()),
                2 & i &&
                  (e.xp6(1),
                  e.Q6J("ngIf", e.lcZ(2, 3, o.apiLoaded)),
                  e.xp6(5),
                  e.Q6J("ngIf", o.showWarning),
                  e.xp6(1),
                  e.Q6J("disabled", o.disableBtn));
            },
            dependencies: [C.sg, C.O5, y, ee, F.xm, C.Ov],
          })),
          _
        );
      })();
      var Z = b(727),
        ie = b(8505);
      const ne = {
          Castellano: "Castellano",
          Quechua: "Quechua",
          Aymara: "Aymara",
          Ashaninca: "Ash\xe1ninca",
          Awajun: "Awaj\xfan",
          Otra: "Otra",
        },
        ii = [...Object.values(ne)],
        pe = {
          Padre: "Padre",
          Madre: "Madre",
          Hermano: "Hermano/Hermana",
          Apoderado: "Apoderado/Apoderada",
          Otro: "Otro",
        },
        oi = [...Object.values(pe)],
        be = { si: "S\xed", no: "No" },
        _i = [...Object.values(be)],
        se = {
          beca: "Beca",
          credito: "Cr\xe9dito",
          otros: "Otras formas de financiamiento (especificar)",
        },
        ai = [...Object.values(se)],
        ce = { si: "S\xed", no: "No" },
        di = [...Object.values(ce)],
        le = {
          padres: "Pagada por padres",
          postulante: "Pagada por el mismo postulante",
          academia: "Becado por centro de estudios preuniversitarios",
          familiar: "Pagado por un familiar o amigo",
          otros: "Otros (especificar)",
        },
        ri = ["Menos de 6 meses", "6 meses a 1 a\xf1o", "M\xe1s de 1 a\xf1o"],
        ui = [...Object.values(le)],
        ti = [
          "Universidad del Pac\xedfico - UP (Lima)",
          "Universidad de Piura - UDEP (Sede Lima)",
          "Universidad de Piura - UDEP (Sede Piura)",
          "Universidad Peruana de Ciencias Aplicadas - UPC (Lima)",
          "Universidad de Ingenier\xeda y Tecnolog\xeda - UTEC (Lima)",
          "Universidad de Lima - UL (Lima)",
          "Pontificia Universidad Cat\xf3lica del Per\xfa - PUCP (Lima)",
        ],
        gi = [
          "Matricularlo en una academia",
          "Contratar profesores si requer\xeda la ayuda",
          "Ayudarlo a estudiar",
          "Conf\xedo en sus decisiones y lo apoyo ",
          "Hablar con \xe9l para saber que le interesa y darle mi aprobaci\xf3n",
          "Seguir recomendaciones de alg\xfan referente, profesor o mentor",
          "Acompa\xf1arlo a buscar informaci\xf3n sobre carreras o universidades",
          "Alentarlo en momentos dificiles conversando",
          "Preguntarle sobre como va en el proceso",
          "Hablar sobre la importancia de la educaci\xf3n en familia",
          "Otros (especificar)",
        ],
        me = {
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
        ni = [...Object.values(me)],
        pi = [
          "Diariamente",
          "Interdiario",
          "M\xe1s de 3 d\xedas a la semana",
          "Quincenalmente ",
          "Ocasionalmente",
        ],
        bi = [
          "Ha iniciado recientemente - hace menos de 3 meses",
          "Entre 3 y 6 meses atr\xe1s",
          "Entre 6 meses y 1 a\xf1o atr\xe1s",
          "Hace m\xe1s de 1 a\xf1o",
        ],
        si = [
          ...Object.values({
            padres: "Financiadas por padres",
            postulante: "Financiadas por el postulante",
            beca: "El postulante obtuvo una beca",
            otros: "Otros (especificar)",
          }),
        ],
        ci = [
          "Menos de 30 minutos",
          "Entre 30 minutos y 1 hora",
          "Entre 1 hora y 1.5 horas",
          "Entre 1.5 horas  y 2 horas",
          "M\xe1s de 2 horas",
        ],
        he = { si: "S\xed", no: "No" },
        li = [...Object.values(he)],
        mi = [
          "Soltero(a)",
          "Conviviente",
          "Casado(a)",
          "Viudo(a)",
          "Divorciado(a)",
        ],
        hi = [
          "Primaria incompleta",
          "Primaria completa",
          "Secundaria incompleta",
          "Secundaria completa",
          "T\xe9cnico incompleta",
          "T\xe9cnico completa",
          "Universitario incompleta",
          "Universitario completa",
        ],
        vi = ["Vive", "Falleci\xf3"],
        fi = [
          "Independiente",
          "Dependiente",
          "Eventual",
          "Desempleo",
          "Ama de casa",
        ],
        Ci = [
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
        yi = [
          { style: { minWidth: 200 }, value: "Parentesco" },
          { style: { minWidth: 250 }, value: "Nombres" },
          { style: { minWidth: 250 }, value: "Apellidos" },
          { style: { minWidth: 100 }, value: "Edad" },
          { style: { minWidth: 200 }, value: "Estado Civil" },
          { style: { minWidth: 200 }, value: "Nivel de educaci\xf3n" },
          { style: { minWidth: 200 }, value: "Situaci\xf3n laboral" },
        ],
        ve = {
          sinResponsabilidadesDomésticas: "Sin responsabilidades dom\xe9sticas",
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
          lavarRopa: "Lavar la ropa",
          sacarBasura: "Sacar la basura",
          ordenarCuarto: "Ordenar su cuarto",
          ponerLaMesa: "Poner/Recoger la mesa",
          trabajosEventuales: 'Trabajos eventuales/"cachuelos"',
          otros: "Otros (especificar)",
        },
        Ai = [...Object.values(ve)],
        Ti = [
          "15 minutos o menos",
          "Entre 15 y 30 minutos",
          "Entre 30 minutos y 1 hora",
          "Entre 1 hora y 1.5 horas",
          "M\xe1s de 1.5 horas",
        ],
        Pi = [
          "Diariamente",
          "Interdiario",
          "M\xe1s de 3 veces a la semana",
          "Quincenalmente",
          "Ocasionalmente",
        ],
        fe = {
          papa: "Pap\xe1",
          mama: "Mam\xe1",
          postulante: "Postulante",
          abuelos: "Abuelos",
          hermanos: "Hermanos",
          otros: "Otros (especificar)",
        },
        Li = [...Object.values(fe)],
        Mi = ["0-33%", "33%-66%", "66% a m\xe1s"],
        Si = ["Actividad", "S\xed/No"],
        Ii = [
          ...Object.values({
            pasajes: "Pasajes",
            alimentación: "Alimentaci\xf3n",
            academiaRefuerzo: "Academia de refuerzo acad\xe9mico",
            clasesParticulares: "Clases con profesores particulares",
            materialEstudio: "Material de estudio",
            laptopTecnología: "Laptop o tecnolog\xeda",
            salud: "Salud",
            grupo: "Trabajos en grupo",
            salidas: "Salidas con amigos",
          }),
        ],
        Ei = [
          "S/. 10.00  a  S/. 25.00",
          "S/. 25.00  a  S/. 50.00",
          "S/. 50.00  a  S/. 75.00",
          "S/. 75.00  a  S/. 100.00",
          "M\xe1s de S/. 100.00",
        ],
        xi = [
          ...Object.values({
            mejoresRecursos: "Mejores recursos econ\xf3micos",
            primerProfesional: "Primer profesional en la familia",
            cumplirVisión: "Cumplir con su visi\xf3n de vida",
            serAgenteCambio: "Ser un agente de cambio para el pa\xeds",
            tenerCarrera:
              "Tener una carrera profesional de la que se siente orgulloso/a",
            accederTrabajo: "Acceder a un trabajo bien remunerado",
            esCorresponde: "Es lo que le corresponde",
            noConversamos:
              "No conversamos sobre esto. Es decisi\xf3n de mi hijo/a",
            otros: "Otros (especificar)",
          }),
        ],
        qi = ["Menos de 1 hora", "Entre 1 y 2 horas", "M\xe1s de 2 horas"],
        zi = ["Detallar", "No precisa"],
        wi = [
          "Problemas econ\xf3micos",
          "Problemas de salud",
          "Conflictos dentro de la familia cercana",
          "Conflictos con otros familiares",
          "Problemas por temas laborales",
          "Tensi\xf3n entre los miembros de la familia",
          "Problemas legales",
          "Otros (especificar)",
        ],
        Qi = [
          "No hay necesidad de reorganizarnos",
          "Las tareas se mantendr\xe1n iguales",
          "No precisa",
          "Otros (especificar)",
        ],
        Hi = {
          uno: {
            nro: "1",
            descripcion: "Indicar su lengua materna",
            datoAdicional: "",
            for: "lengMat",
          },
          unoUno: {
            nro: '<i class="mdi mdi-map-marker"></i>',
            descripcion: "Seleccione el lugar de residencia del/la postulante:",
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
            nro: "6",
            descripcion: "Parentesco con el o la postulante.",
            datoAdicional: "",
            for: "",
          },
          cinco: {
            nro: "4",
            descripcion: "Nombres y apellidos del/la postulante.",
            datoAdicional: "",
            for: "nombApePostulante",
          },
          seis: {
            nro: "5",
            descripcion: "DNI del/la postulante.",
            datoAdicional: "",
            for: "dniPostulante",
          },
          siete: {
            nro: "7",
            descripcion:
              "\xbfA qu\xe9 universidad est\xe1 postulando el/la candidato/a?",
            datoAdicional: "",
            for: "",
          },
          sieteUno: {
            nro: "7.1",
            descripcion:
              "\xbfA qu\xe9 carrera est\xe1 postulando el/la candidato/a?:",
            datoAdicional: "",
            for: "",
          },
          ocho: {
            nro: "8",
            descripcion:
              "Considerando el inicio de la vida universitaria del postulante, describa brevemente cu\xe1les son sus principales fortalezas y cualidades. \xbfQu\xe9 recursos o soportes necesitar\xeda para adaptarse a esta nueva etapa y con cu\xe1les ya cuenta?",
            datoAdicional: "",
            for: "",
          },
          nueve: {
            nro: "9",
            descripcion:
              "\xbfC\xf3mo considera que usted ayud\xf3 al/la candidato/a en su proceso de postulaci\xf3n a la beca?",
            datoAdicional: "",
            for: "",
          },
          diez: {
            nro: "10",
            descripcion:
              "\xbfQu\xe9 acciones realiz\xf3 usted para que el/la candidato/a estuviera preparado/a para postular a la universidad a la que quiere acudir?",
            datoAdicional: "Puede seleccionar m\xe1ximo 3",
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
              "En los \xfaltimos tres a\xf1os, \xbfel/la postulante realiza o ha realizado actividades extracad\xe9micas y/o de desarrollo personal? Marque la/s actividad/es que realiza o ha realizado. ",
            datoAdicional:
              "Marque la/s actividad/es que realiza o ha realizado. Indicar si son financiadas por la familia con recursos propios, son becados, pagado por el postulante, pagado por la familia, otros.",
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
              "\xbfCu\xe1nto tiempo le tomar\xe1 a el/la postulante llegar a su centro de estudios? Indique el tiempo (en minutos).",
            datoAdicional: "",
            for: "",
          },
          diecisiete: {
            nro: "",
            descripcion:
              "\xbfEstar\xeda dispuesto que el/la postulante se mude fuera del hogar (m\xe1s cerca del centro de estudios)?",
            datoAdicional: "",
            for: "",
          },
          dieciocho: {
            nro: "15",
            descripcion:
              "Detalle la composici\xf3n familiar seg\xfan el parentesco con el/la postulante. Incluir a todos los que consideran dentro de la familia cercana del postulante. Incluir adem\xe1s si tienen medios hermanos.",
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
            nro: "16",
            descripcion:
              "\xbfEn qu\xe9 tareas apoya el/la postulante en casa? Marcar todas las tareas en las que apoya el/la postulante en casa. En caso el/la postulante no tenga responsabilidades marcar la opci\xf3n: Sin responsabilidades dom\xe9sticas.",
            datoAdicional: "",
            for: "",
          },
          veinteUno: {
            nro: "16.1",
            descripcion:
              "En l\xedneas generales, \xbfcu\xe1ntas horas diarias el/la postulante destina a tareas del hogar?",
            datoAdicional: "",
            for: "",
          },
          veintiuno: {
            nro: "17",
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
            nro: "18",
            descripcion:
              "\xbfEn qu\xe9 actividades o gastos ha tenido que apoyar al/la postulante en los \xfaltimos tres a\xf1os?",
            datoAdicional: "",
            for: "",
          },
          veinticinco: {
            nro: "19",
            descripcion:
              "\xbfCu\xe1les son sus principales reglas en casa? \xbfC\xf3mo se implementaron? \xbfQu\xe9 sucede cu\xe1ndo el/la postulante no las cumple?",
            datoAdicional: "",
            for: "",
          },
          veintiseis: {
            nro: "20",
            descripcion:
              "\xbfQu\xe9 significa para usted que el/la postulante pueda tener acceso a educaci\xf3n superior de calidad?",
            datoAdicional: "Puede seleccionar m\xe1ximo 2 opciones",
            for: "",
          },
          veintisiete: {
            nro: "22",
            descripcion:
              "\xbfCu\xe1l ha sido la situaci\xf3n m\xe1s complicada o problema que ha tenido que enfrentar el/la postulante? Presente un ejemplo. \xbfC\xf3mo lo/la ayud\xf3 en ese momento? \xbfQui\xe9nes se involucraron y c\xf3mo? \xbfLa soluci\xf3n fue efectiva? \xbfPor qu\xe9?",
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
            nro: "25",
            descripcion:
              "\xbfQu\xe9 momentos comparten en familia? \xbfQu\xe9 actividades realizan juntos? \xbfCon qu\xe9 frecuencia realizan este tipo de actividades? Com\xe9ntenos sobre algunas tradiciones/celebraciones familiares.",
            datoAdicional: "",
            for: "",
          },
          treinta: {
            nro: "21",
            descripcion:
              "A lo largo de la educaci\xf3n del/la postulante, \xbfQu\xe9 acciones concretas ha realizado para que el/la postulante pueda tener una carrera universitaria?",
            datoAdicional:
              "(Por ejemplo: lo matricul\xe9 en una academia; segu\xed las recomendaciones de los profesores, averigu\xe9 sobre universidades en las que mi hijo/a podr\xeda estudiar, le coment\xe9 sobre sus t\xedos que estudiaron) ",
            for: "",
          },
          treintayUno: {
            nro: "23",
            descripcion:
              "\xbfQu\xe9 problemas suelen presentarse en la familia con frecuencia? ",
            datoAdicional:
              "Marcar todas las opciones que consideren pertinentes.",
            for: "",
          },
          treintayDos: {
            nro: "24",
            descripcion:
              "\xbfCu\xe1les creen que son las principales fortalezas familiares para afrontar los problemas que seleccionaron previamente? (Econ\xf3micos, salud, conflictos familiares, temas laborales, etc.) \xbfC\xf3mo creen que estos problemas afectan al/la postulante y c\xf3mo los manejan?",
            datoAdicional: "",
            for: "",
          },
          treintayTres: {
            nro: "26",
            descripcion:
              "En caso el/la postulante logre ingresar al programa, \xbfc\xf3mo se reorganizar\xedan las tareas en el hogar que se\xf1al\xf3 previamente eran parte de sus deberes en casa? \xbfcu\xe1ntas horas cree que el/la postulante dedicar\xe1 a estas tareas luego de la reorganizaci\xf3n?",
            datoAdicional: "",
            for: "",
          },
          treintayCuatro: {
            nro: "23.1",
            descripcion: "\xbfQu\xe9 estrategias suelen usar para resolverlos?",
            datoAdicional: "",
            for: "",
          },
        };
      var Ce = b(8799);
      const Zi = [
        {
          id_ubigeo: "2534-2557-2559",
          nombre_ubigeo: "Amazonas - Bagua - Aramango",
          codigo_ubigeo: "010202",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2557",
          id_padre_ubigeo_dst: "2559",
        },
        {
          id_ubigeo: "2534-2557-2560",
          nombre_ubigeo: "Amazonas - Bagua - Copallin",
          codigo_ubigeo: "010203",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2557",
          id_padre_ubigeo_dst: "2560",
        },
        {
          id_ubigeo: "2534-2557-2561",
          nombre_ubigeo: "Amazonas - Bagua - El Parco",
          codigo_ubigeo: "010204",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2557",
          id_padre_ubigeo_dst: "2561",
        },
        {
          id_ubigeo: "2534-2557-2562",
          nombre_ubigeo: "Amazonas - Bagua - Imaza",
          codigo_ubigeo: "010205",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2557",
          id_padre_ubigeo_dst: "2562",
        },
        {
          id_ubigeo: "2534-2557-2558",
          nombre_ubigeo: "Amazonas - Bagua - La Peca",
          codigo_ubigeo: "010201",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2557",
          id_padre_ubigeo_dst: "2558",
        },
        {
          id_ubigeo: "2534-2563-2567",
          nombre_ubigeo: "Amazonas - Bongara - Chisquilla",
          codigo_ubigeo: "010304",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2567",
        },
        {
          id_ubigeo: "2534-2563-2568",
          nombre_ubigeo: "Amazonas - Bongara - Churuja",
          codigo_ubigeo: "010305",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2568",
        },
        {
          id_ubigeo: "2534-2563-2565",
          nombre_ubigeo: "Amazonas - Bongara - Corosha",
          codigo_ubigeo: "010302",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2565",
        },
        {
          id_ubigeo: "2534-2563-2566",
          nombre_ubigeo: "Amazonas - Bongara - Cuispes",
          codigo_ubigeo: "010303",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2566",
        },
        {
          id_ubigeo: "2534-2563-2569",
          nombre_ubigeo: "Amazonas - Bongara - Florida",
          codigo_ubigeo: "010306",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2569",
        },
        {
          id_ubigeo: "2534-2563-2575",
          nombre_ubigeo: "Amazonas - Bongara - Jazan",
          codigo_ubigeo: "010312",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2575",
        },
        {
          id_ubigeo: "2534-2563-2564",
          nombre_ubigeo: "Amazonas - Bongara - Jumbilla",
          codigo_ubigeo: "010301",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2564",
        },
        {
          id_ubigeo: "2534-2563-2570",
          nombre_ubigeo: "Amazonas - Bongara - Recta",
          codigo_ubigeo: "010307",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2570",
        },
        {
          id_ubigeo: "2534-2563-2571",
          nombre_ubigeo: "Amazonas - Bongara - San Carlos",
          codigo_ubigeo: "010308",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2571",
        },
        {
          id_ubigeo: "2534-2563-2572",
          nombre_ubigeo: "Amazonas - Bongara - Shipasbamba",
          codigo_ubigeo: "010309",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2572",
        },
        {
          id_ubigeo: "2534-2563-2573",
          nombre_ubigeo: "Amazonas - Bongara - Valera",
          codigo_ubigeo: "010310",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2573",
        },
        {
          id_ubigeo: "2534-2563-2574",
          nombre_ubigeo: "Amazonas - Bongara - Yambrasbamba",
          codigo_ubigeo: "010311",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2563",
          id_padre_ubigeo_dst: "2574",
        },
        {
          id_ubigeo: "2534-2535-2537",
          nombre_ubigeo: "Amazonas - Chachapoyas - Asuncion",
          codigo_ubigeo: "010102",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2537",
        },
        {
          id_ubigeo: "2534-2535-2538",
          nombre_ubigeo: "Amazonas - Chachapoyas - Balsas",
          codigo_ubigeo: "010103",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2538",
        },
        {
          id_ubigeo: "2534-2535-2536",
          nombre_ubigeo: "Amazonas - Chachapoyas - Chachapoyas",
          codigo_ubigeo: "010101",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2536",
        },
        {
          id_ubigeo: "2534-2535-2539",
          nombre_ubigeo: "Amazonas - Chachapoyas - Cheto",
          codigo_ubigeo: "010104",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2539",
        },
        {
          id_ubigeo: "2534-2535-2540",
          nombre_ubigeo: "Amazonas - Chachapoyas - Chiliquin",
          codigo_ubigeo: "010105",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2540",
        },
        {
          id_ubigeo: "2534-2535-2541",
          nombre_ubigeo: "Amazonas - Chachapoyas - Chuquibamba",
          codigo_ubigeo: "010106",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2541",
        },
        {
          id_ubigeo: "2534-2535-2542",
          nombre_ubigeo: "Amazonas - Chachapoyas - Granada",
          codigo_ubigeo: "010107",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2542",
        },
        {
          id_ubigeo: "2534-2535-2543",
          nombre_ubigeo: "Amazonas - Chachapoyas - Huancas",
          codigo_ubigeo: "010108",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2543",
        },
        {
          id_ubigeo: "2534-2535-2544",
          nombre_ubigeo: "Amazonas - Chachapoyas - La Jalca",
          codigo_ubigeo: "010109",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2544",
        },
        {
          id_ubigeo: "2534-2535-2545",
          nombre_ubigeo: "Amazonas - Chachapoyas - Leimebamba",
          codigo_ubigeo: "010110",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2545",
        },
        {
          id_ubigeo: "2534-2535-2546",
          nombre_ubigeo: "Amazonas - Chachapoyas - Levanto",
          codigo_ubigeo: "010111",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2546",
        },
        {
          id_ubigeo: "2534-2535-2547",
          nombre_ubigeo: "Amazonas - Chachapoyas - Magdalena",
          codigo_ubigeo: "010112",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2547",
        },
        {
          id_ubigeo: "2534-2535-2548",
          nombre_ubigeo: "Amazonas - Chachapoyas - Mariscal Castilla",
          codigo_ubigeo: "010113",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2548",
        },
        {
          id_ubigeo: "2534-2535-2549",
          nombre_ubigeo: "Amazonas - Chachapoyas - Molinopampa",
          codigo_ubigeo: "010114",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2549",
        },
        {
          id_ubigeo: "2534-2535-2550",
          nombre_ubigeo: "Amazonas - Chachapoyas - Montevideo",
          codigo_ubigeo: "010115",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2550",
        },
        {
          id_ubigeo: "2534-2535-2551",
          nombre_ubigeo: "Amazonas - Chachapoyas - Olleros",
          codigo_ubigeo: "010116",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2551",
        },
        {
          id_ubigeo: "2534-2535-2552",
          nombre_ubigeo: "Amazonas - Chachapoyas - Quinjalca",
          codigo_ubigeo: "010117",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2552",
        },
        {
          id_ubigeo: "2534-2535-2553",
          nombre_ubigeo: "Amazonas - Chachapoyas - San Francisco de Daguas",
          codigo_ubigeo: "010118",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2553",
        },
        {
          id_ubigeo: "2534-2535-2554",
          nombre_ubigeo: "Amazonas - Chachapoyas - San Isidro de Maino",
          codigo_ubigeo: "010119",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2554",
        },
        {
          id_ubigeo: "2534-2535-2555",
          nombre_ubigeo: "Amazonas - Chachapoyas - Soloco",
          codigo_ubigeo: "010120",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2555",
        },
        {
          id_ubigeo: "2534-2535-2556",
          nombre_ubigeo: "Amazonas - Chachapoyas - Sonche",
          codigo_ubigeo: "010121",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2535",
          id_padre_ubigeo_dst: "2556",
        },
        {
          id_ubigeo: "2534-2576-2578",
          nombre_ubigeo: "Amazonas - Condorcanqui - El Cenepa",
          codigo_ubigeo: "010402",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2576",
          id_padre_ubigeo_dst: "2578",
        },
        {
          id_ubigeo: "2534-2576-2577",
          nombre_ubigeo: "Amazonas - Condorcanqui - Nieva",
          codigo_ubigeo: "010401",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2576",
          id_padre_ubigeo_dst: "2577",
        },
        {
          id_ubigeo: "2534-2576-2579",
          nombre_ubigeo: "Amazonas - Condorcanqui - Rio Santiago",
          codigo_ubigeo: "010403",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2576",
          id_padre_ubigeo_dst: "2579",
        },
        {
          id_ubigeo: "2534-2580-2582",
          nombre_ubigeo: "Amazonas - Luya - Camporredondo",
          codigo_ubigeo: "010502",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2582",
        },
        {
          id_ubigeo: "2534-2580-2583",
          nombre_ubigeo: "Amazonas - Luya - Cocabamba",
          codigo_ubigeo: "010503",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2583",
        },
        {
          id_ubigeo: "2534-2580-2584",
          nombre_ubigeo: "Amazonas - Luya - Colcamar",
          codigo_ubigeo: "010504",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2584",
        },
        {
          id_ubigeo: "2534-2580-2585",
          nombre_ubigeo: "Amazonas - Luya - Conila",
          codigo_ubigeo: "010505",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2585",
        },
        {
          id_ubigeo: "2534-2580-2586",
          nombre_ubigeo: "Amazonas - Luya - Inguilpata",
          codigo_ubigeo: "010506",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2586",
        },
        {
          id_ubigeo: "2534-2580-2581",
          nombre_ubigeo: "Amazonas - Luya - Lamud",
          codigo_ubigeo: "010501",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2581",
        },
        {
          id_ubigeo: "2534-2580-2587",
          nombre_ubigeo: "Amazonas - Luya - Longuita",
          codigo_ubigeo: "010507",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2587",
        },
        {
          id_ubigeo: "2534-2580-2588",
          nombre_ubigeo: "Amazonas - Luya - Lonya Chico",
          codigo_ubigeo: "010508",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2588",
        },
        {
          id_ubigeo: "2534-2580-2589",
          nombre_ubigeo: "Amazonas - Luya - Luya",
          codigo_ubigeo: "010509",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2589",
        },
        {
          id_ubigeo: "2534-2580-2590",
          nombre_ubigeo: "Amazonas - Luya - Luya Viejo",
          codigo_ubigeo: "010510",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2590",
        },
        {
          id_ubigeo: "2534-2580-2591",
          nombre_ubigeo: "Amazonas - Luya - Maria",
          codigo_ubigeo: "010511",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2591",
        },
        {
          id_ubigeo: "2534-2580-2592",
          nombre_ubigeo: "Amazonas - Luya - Ocalli",
          codigo_ubigeo: "010512",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2592",
        },
        {
          id_ubigeo: "2534-2580-2593",
          nombre_ubigeo: "Amazonas - Luya - Ocumal",
          codigo_ubigeo: "010513",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2593",
        },
        {
          id_ubigeo: "2534-2580-2594",
          nombre_ubigeo: "Amazonas - Luya - Pisuquia",
          codigo_ubigeo: "010514",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2594",
        },
        {
          id_ubigeo: "2534-2580-2595",
          nombre_ubigeo: "Amazonas - Luya - Providencia",
          codigo_ubigeo: "010515",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2595",
        },
        {
          id_ubigeo: "2534-2580-2596",
          nombre_ubigeo: "Amazonas - Luya - San Cristobal",
          codigo_ubigeo: "010516",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2596",
        },
        {
          id_ubigeo: "2534-2580-2597",
          nombre_ubigeo: "Amazonas - Luya - San Francisco del Yeso",
          codigo_ubigeo: "010517",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2597",
        },
        {
          id_ubigeo: "2534-2580-2598",
          nombre_ubigeo: "Amazonas - Luya - San Jeronimo",
          codigo_ubigeo: "010518",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2598",
        },
        {
          id_ubigeo: "2534-2580-2599",
          nombre_ubigeo: "Amazonas - Luya - San Juan de Lopecancha",
          codigo_ubigeo: "010519",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2599",
        },
        {
          id_ubigeo: "2534-2580-2600",
          nombre_ubigeo: "Amazonas - Luya - Santa Catalina",
          codigo_ubigeo: "010520",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2600",
        },
        {
          id_ubigeo: "2534-2580-2601",
          nombre_ubigeo: "Amazonas - Luya - Santo Tomas",
          codigo_ubigeo: "010521",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2601",
        },
        {
          id_ubigeo: "2534-2580-2602",
          nombre_ubigeo: "Amazonas - Luya - Tingo",
          codigo_ubigeo: "010522",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2602",
        },
        {
          id_ubigeo: "2534-2580-2603",
          nombre_ubigeo: "Amazonas - Luya - Trita",
          codigo_ubigeo: "010523",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2580",
          id_padre_ubigeo_dst: "2603",
        },
        {
          id_ubigeo: "2534-2604-2606",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Chirimoto",
          codigo_ubigeo: "010602",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2606",
        },
        {
          id_ubigeo: "2534-2604-2607",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Cochamal",
          codigo_ubigeo: "010603",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2607",
        },
        {
          id_ubigeo: "2534-2604-2608",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Huambo",
          codigo_ubigeo: "010604",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2608",
        },
        {
          id_ubigeo: "2534-2604-2609",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Limabamba",
          codigo_ubigeo: "010605",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2609",
        },
        {
          id_ubigeo: "2534-2604-2610",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Longar",
          codigo_ubigeo: "010606",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2610",
        },
        {
          id_ubigeo: "2534-2604-2611",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Mariscal Benavides",
          codigo_ubigeo: "010607",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2611",
        },
        {
          id_ubigeo: "2534-2604-2612",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Milpuc",
          codigo_ubigeo: "010608",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2612",
        },
        {
          id_ubigeo: "2534-2604-2613",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Omia",
          codigo_ubigeo: "010609",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2613",
        },
        {
          id_ubigeo: "2534-2604-2605",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - San Nicolas",
          codigo_ubigeo: "010601",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2605",
        },
        {
          id_ubigeo: "2534-2604-2614",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Santa Rosa",
          codigo_ubigeo: "010610",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2614",
        },
        {
          id_ubigeo: "2534-2604-2615",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Totora",
          codigo_ubigeo: "010611",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2615",
        },
        {
          id_ubigeo: "2534-2604-2616",
          nombre_ubigeo: "Amazonas - Rodriguez de Mendoza - Vista Alegre",
          codigo_ubigeo: "010612",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2604",
          id_padre_ubigeo_dst: "2616",
        },
        {
          id_ubigeo: "2534-2617-2618",
          nombre_ubigeo: "Amazonas - Utcubamba - Bagua Grande",
          codigo_ubigeo: "010701",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2617",
          id_padre_ubigeo_dst: "2618",
        },
        {
          id_ubigeo: "2534-2617-2619",
          nombre_ubigeo: "Amazonas - Utcubamba - Cajaruro",
          codigo_ubigeo: "010702",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2617",
          id_padre_ubigeo_dst: "2619",
        },
        {
          id_ubigeo: "2534-2617-2620",
          nombre_ubigeo: "Amazonas - Utcubamba - Cumba",
          codigo_ubigeo: "010703",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2617",
          id_padre_ubigeo_dst: "2620",
        },
        {
          id_ubigeo: "2534-2617-2621",
          nombre_ubigeo: "Amazonas - Utcubamba - El Milagro",
          codigo_ubigeo: "010704",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2617",
          id_padre_ubigeo_dst: "2621",
        },
        {
          id_ubigeo: "2534-2617-2622",
          nombre_ubigeo: "Amazonas - Utcubamba - Jamalca",
          codigo_ubigeo: "010705",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2617",
          id_padre_ubigeo_dst: "2622",
        },
        {
          id_ubigeo: "2534-2617-2623",
          nombre_ubigeo: "Amazonas - Utcubamba - Lonya Grande",
          codigo_ubigeo: "010706",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2617",
          id_padre_ubigeo_dst: "2623",
        },
        {
          id_ubigeo: "2534-2617-2624",
          nombre_ubigeo: "Amazonas - Utcubamba - Yamon",
          codigo_ubigeo: "010707",
          id_padre_ubigeo_dpto: "2534",
          id_padre_ubigeo_prov: "2617",
          id_padre_ubigeo_dst: "2624",
        },
        {
          id_ubigeo: "2625-2639-2640",
          nombre_ubigeo: "Ancash - Aija - Aija",
          codigo_ubigeo: "020201",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2639",
          id_padre_ubigeo_dst: "2640",
        },
        {
          id_ubigeo: "2625-2639-2641",
          nombre_ubigeo: "Ancash - Aija - Coris",
          codigo_ubigeo: "020202",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2639",
          id_padre_ubigeo_dst: "2641",
        },
        {
          id_ubigeo: "2625-2639-2642",
          nombre_ubigeo: "Ancash - Aija - Huacllan",
          codigo_ubigeo: "020203",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2639",
          id_padre_ubigeo_dst: "2642",
        },
        {
          id_ubigeo: "2625-2639-2643",
          nombre_ubigeo: "Ancash - Aija - La Merced",
          codigo_ubigeo: "020204",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2639",
          id_padre_ubigeo_dst: "2643",
        },
        {
          id_ubigeo: "2625-2639-2644",
          nombre_ubigeo: "Ancash - Aija - Succha",
          codigo_ubigeo: "020205",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2639",
          id_padre_ubigeo_dst: "2644",
        },
        {
          id_ubigeo: "2625-2645-2647",
          nombre_ubigeo: "Ancash - Antonio Raymondi - Aczo",
          codigo_ubigeo: "020302",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2645",
          id_padre_ubigeo_dst: "2647",
        },
        {
          id_ubigeo: "2625-2645-2648",
          nombre_ubigeo: "Ancash - Antonio Raymondi - Chaccho",
          codigo_ubigeo: "020303",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2645",
          id_padre_ubigeo_dst: "2648",
        },
        {
          id_ubigeo: "2625-2645-2649",
          nombre_ubigeo: "Ancash - Antonio Raymondi - Chingas",
          codigo_ubigeo: "020304",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2645",
          id_padre_ubigeo_dst: "2649",
        },
        {
          id_ubigeo: "2625-2645-2646",
          nombre_ubigeo: "Ancash - Antonio Raymondi - Llamellin",
          codigo_ubigeo: "020301",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2645",
          id_padre_ubigeo_dst: "2646",
        },
        {
          id_ubigeo: "2625-2645-2650",
          nombre_ubigeo: "Ancash - Antonio Raymondi - Mirgas",
          codigo_ubigeo: "020305",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2645",
          id_padre_ubigeo_dst: "2650",
        },
        {
          id_ubigeo: "2625-2645-2651",
          nombre_ubigeo: "Ancash - Antonio Raymondi - San Juan de Rontoy",
          codigo_ubigeo: "020306",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2645",
          id_padre_ubigeo_dst: "2651",
        },
        {
          id_ubigeo: "2625-2652-2654",
          nombre_ubigeo: "Ancash - Asuncion - Acochaca",
          codigo_ubigeo: "020402",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2652",
          id_padre_ubigeo_dst: "2654",
        },
        {
          id_ubigeo: "2625-2652-2653",
          nombre_ubigeo: "Ancash - Asuncion - Chacas",
          codigo_ubigeo: "020401",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2652",
          id_padre_ubigeo_dst: "2653",
        },
        {
          id_ubigeo: "2625-2655-2657",
          nombre_ubigeo: "Ancash - Bolognesi - Abelardo Pardo Lezameta",
          codigo_ubigeo: "020502",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2657",
        },
        {
          id_ubigeo: "2625-2655-2658",
          nombre_ubigeo: "Ancash - Bolognesi - Antonio Raymondi",
          codigo_ubigeo: "020503",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2658",
        },
        {
          id_ubigeo: "2625-2655-2659",
          nombre_ubigeo: "Ancash - Bolognesi - Aquia",
          codigo_ubigeo: "020504",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2659",
        },
        {
          id_ubigeo: "2625-2655-2660",
          nombre_ubigeo: "Ancash - Bolognesi - Cajacay",
          codigo_ubigeo: "020505",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2660",
        },
        {
          id_ubigeo: "2625-2655-2661",
          nombre_ubigeo: "Ancash - Bolognesi - Canis",
          codigo_ubigeo: "020506",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2661",
        },
        {
          id_ubigeo: "2625-2655-2656",
          nombre_ubigeo: "Ancash - Bolognesi - Chiquian",
          codigo_ubigeo: "020501",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2656",
        },
        {
          id_ubigeo: "2625-2655-2662",
          nombre_ubigeo: "Ancash - Bolognesi - Colquioc",
          codigo_ubigeo: "020507",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2662",
        },
        {
          id_ubigeo: "2625-2655-2663",
          nombre_ubigeo: "Ancash - Bolognesi - Huallanca",
          codigo_ubigeo: "020508",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2663",
        },
        {
          id_ubigeo: "2625-2655-2664",
          nombre_ubigeo: "Ancash - Bolognesi - Huasta",
          codigo_ubigeo: "020509",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2664",
        },
        {
          id_ubigeo: "2625-2655-2665",
          nombre_ubigeo: "Ancash - Bolognesi - Huayllacayan",
          codigo_ubigeo: "020510",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2665",
        },
        {
          id_ubigeo: "2625-2655-2666",
          nombre_ubigeo: "Ancash - Bolognesi - La Primavera",
          codigo_ubigeo: "020511",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2666",
        },
        {
          id_ubigeo: "2625-2655-2667",
          nombre_ubigeo: "Ancash - Bolognesi - Mangas",
          codigo_ubigeo: "020512",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2667",
        },
        {
          id_ubigeo: "2625-2655-2668",
          nombre_ubigeo: "Ancash - Bolognesi - Pacllon",
          codigo_ubigeo: "020513",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2668",
        },
        {
          id_ubigeo: "2625-2655-2669",
          nombre_ubigeo: "Ancash - Bolognesi - San Miguel de Corpanqui",
          codigo_ubigeo: "020514",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2669",
        },
        {
          id_ubigeo: "2625-2655-2670",
          nombre_ubigeo: "Ancash - Bolognesi - Ticllos",
          codigo_ubigeo: "020515",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2655",
          id_padre_ubigeo_dst: "2670",
        },
        {
          id_ubigeo: "2625-2671-2673",
          nombre_ubigeo: "Ancash - Carhuaz - Acopampa",
          codigo_ubigeo: "020602",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2673",
        },
        {
          id_ubigeo: "2625-2671-2674",
          nombre_ubigeo: "Ancash - Carhuaz - Amashca",
          codigo_ubigeo: "020603",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2674",
        },
        {
          id_ubigeo: "2625-2671-2675",
          nombre_ubigeo: "Ancash - Carhuaz - Anta",
          codigo_ubigeo: "020604",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2675",
        },
        {
          id_ubigeo: "2625-2671-2676",
          nombre_ubigeo: "Ancash - Carhuaz - Ataquero",
          codigo_ubigeo: "020605",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2676",
        },
        {
          id_ubigeo: "2625-2671-2672",
          nombre_ubigeo: "Ancash - Carhuaz - Carhuaz",
          codigo_ubigeo: "020601",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2672",
        },
        {
          id_ubigeo: "2625-2671-2677",
          nombre_ubigeo: "Ancash - Carhuaz - Marcara",
          codigo_ubigeo: "020606",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2677",
        },
        {
          id_ubigeo: "2625-2671-2678",
          nombre_ubigeo: "Ancash - Carhuaz - Pariahuanca",
          codigo_ubigeo: "020607",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2678",
        },
        {
          id_ubigeo: "2625-2671-2679",
          nombre_ubigeo: "Ancash - Carhuaz - San Miguel de Aco",
          codigo_ubigeo: "020608",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2679",
        },
        {
          id_ubigeo: "2625-2671-2680",
          nombre_ubigeo: "Ancash - Carhuaz - Shilla",
          codigo_ubigeo: "020609",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2680",
        },
        {
          id_ubigeo: "2625-2671-2681",
          nombre_ubigeo: "Ancash - Carhuaz - Tinco",
          codigo_ubigeo: "020610",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2681",
        },
        {
          id_ubigeo: "2625-2671-2682",
          nombre_ubigeo: "Ancash - Carhuaz - Yungar",
          codigo_ubigeo: "020611",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2671",
          id_padre_ubigeo_dst: "2682",
        },
        {
          id_ubigeo: "2625-2683-2684",
          nombre_ubigeo: "Ancash - Carlos Fermin Fitzcarrald - San Luis",
          codigo_ubigeo: "020701",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2683",
          id_padre_ubigeo_dst: "2684",
        },
        {
          id_ubigeo: "2625-2683-2685",
          nombre_ubigeo: "Ancash - Carlos Fermin Fitzcarrald - San Nicolas",
          codigo_ubigeo: "020702",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2683",
          id_padre_ubigeo_dst: "2685",
        },
        {
          id_ubigeo: "2625-2683-2686",
          nombre_ubigeo: "Ancash - Carlos Fermin Fitzcarrald - Yauya",
          codigo_ubigeo: "020703",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2683",
          id_padre_ubigeo_dst: "2686",
        },
        {
          id_ubigeo: "2625-2687-2689",
          nombre_ubigeo: "Ancash - Casma - Buena Vista Alta",
          codigo_ubigeo: "020802",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2687",
          id_padre_ubigeo_dst: "2689",
        },
        {
          id_ubigeo: "2625-2687-2688",
          nombre_ubigeo: "Ancash - Casma - Casma",
          codigo_ubigeo: "020801",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2687",
          id_padre_ubigeo_dst: "2688",
        },
        {
          id_ubigeo: "2625-2687-2690",
          nombre_ubigeo: "Ancash - Casma - Comandante Noel",
          codigo_ubigeo: "020803",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2687",
          id_padre_ubigeo_dst: "2690",
        },
        {
          id_ubigeo: "2625-2687-2691",
          nombre_ubigeo: "Ancash - Casma - Yautan",
          codigo_ubigeo: "020804",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2687",
          id_padre_ubigeo_dst: "2691",
        },
        {
          id_ubigeo: "2625-2692-2694",
          nombre_ubigeo: "Ancash - Corongo - Aco",
          codigo_ubigeo: "020902",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2692",
          id_padre_ubigeo_dst: "2694",
        },
        {
          id_ubigeo: "2625-2692-2695",
          nombre_ubigeo: "Ancash - Corongo - Bambas",
          codigo_ubigeo: "020903",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2692",
          id_padre_ubigeo_dst: "2695",
        },
        {
          id_ubigeo: "2625-2692-2693",
          nombre_ubigeo: "Ancash - Corongo - Corongo",
          codigo_ubigeo: "020901",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2692",
          id_padre_ubigeo_dst: "2693",
        },
        {
          id_ubigeo: "2625-2692-2696",
          nombre_ubigeo: "Ancash - Corongo - Cusca",
          codigo_ubigeo: "020904",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2692",
          id_padre_ubigeo_dst: "2696",
        },
        {
          id_ubigeo: "2625-2692-2697",
          nombre_ubigeo: "Ancash - Corongo - La Pampa",
          codigo_ubigeo: "020905",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2692",
          id_padre_ubigeo_dst: "2697",
        },
        {
          id_ubigeo: "2625-2692-2698",
          nombre_ubigeo: "Ancash - Corongo - Yanac",
          codigo_ubigeo: "020906",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2692",
          id_padre_ubigeo_dst: "2698",
        },
        {
          id_ubigeo: "2625-2692-2699",
          nombre_ubigeo: "Ancash - Corongo - Yupan",
          codigo_ubigeo: "020907",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2692",
          id_padre_ubigeo_dst: "2699",
        },
        {
          id_ubigeo: "2625-2626-2628",
          nombre_ubigeo: "Ancash - Huaraz - Cochabamba",
          codigo_ubigeo: "020102",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2628",
        },
        {
          id_ubigeo: "2625-2626-2629",
          nombre_ubigeo: "Ancash - Huaraz - Colcabamba",
          codigo_ubigeo: "020103",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2629",
        },
        {
          id_ubigeo: "2625-2626-2630",
          nombre_ubigeo: "Ancash - Huaraz - Huanchay",
          codigo_ubigeo: "020104",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2630",
        },
        {
          id_ubigeo: "2625-2626-2627",
          nombre_ubigeo: "Ancash - Huaraz - Huaraz",
          codigo_ubigeo: "020101",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2627",
        },
        {
          id_ubigeo: "2625-2626-2631",
          nombre_ubigeo: "Ancash - Huaraz - Independencia",
          codigo_ubigeo: "020105",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2631",
        },
        {
          id_ubigeo: "2625-2626-2632",
          nombre_ubigeo: "Ancash - Huaraz - Jangas",
          codigo_ubigeo: "020106",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2632",
        },
        {
          id_ubigeo: "2625-2626-2633",
          nombre_ubigeo: "Ancash - Huaraz - La Libertad",
          codigo_ubigeo: "020107",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2633",
        },
        {
          id_ubigeo: "2625-2626-2634",
          nombre_ubigeo: "Ancash - Huaraz - Olleros",
          codigo_ubigeo: "020108",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2634",
        },
        {
          id_ubigeo: "2625-2626-2635",
          nombre_ubigeo: "Ancash - Huaraz - Pampas",
          codigo_ubigeo: "020109",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2635",
        },
        {
          id_ubigeo: "2625-2626-2636",
          nombre_ubigeo: "Ancash - Huaraz - Pariacoto",
          codigo_ubigeo: "020110",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2636",
        },
        {
          id_ubigeo: "2625-2626-2637",
          nombre_ubigeo: "Ancash - Huaraz - Pira",
          codigo_ubigeo: "020111",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2637",
        },
        {
          id_ubigeo: "2625-2626-2638",
          nombre_ubigeo: "Ancash - Huaraz - Tarica",
          codigo_ubigeo: "020112",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2626",
          id_padre_ubigeo_dst: "2638",
        },
        {
          id_ubigeo: "2625-2700-2702",
          nombre_ubigeo: "Ancash - Huari - Anra",
          codigo_ubigeo: "021002",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2702",
        },
        {
          id_ubigeo: "2625-2700-2703",
          nombre_ubigeo: "Ancash - Huari - Cajay",
          codigo_ubigeo: "021003",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2703",
        },
        {
          id_ubigeo: "2625-2700-2704",
          nombre_ubigeo: "Ancash - Huari - Chavin de Huantar",
          codigo_ubigeo: "021004",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2704",
        },
        {
          id_ubigeo: "2625-2700-2705",
          nombre_ubigeo: "Ancash - Huari - Huacachi",
          codigo_ubigeo: "021005",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2705",
        },
        {
          id_ubigeo: "2625-2700-2706",
          nombre_ubigeo: "Ancash - Huari - Huacchis",
          codigo_ubigeo: "021006",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2706",
        },
        {
          id_ubigeo: "2625-2700-2707",
          nombre_ubigeo: "Ancash - Huari - Huachis",
          codigo_ubigeo: "021007",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2707",
        },
        {
          id_ubigeo: "2625-2700-2708",
          nombre_ubigeo: "Ancash - Huari - Huantar",
          codigo_ubigeo: "021008",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2708",
        },
        {
          id_ubigeo: "2625-2700-2701",
          nombre_ubigeo: "Ancash - Huari - Huari",
          codigo_ubigeo: "021001",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2701",
        },
        {
          id_ubigeo: "2625-2700-2709",
          nombre_ubigeo: "Ancash - Huari - Masin",
          codigo_ubigeo: "021009",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2709",
        },
        {
          id_ubigeo: "2625-2700-2710",
          nombre_ubigeo: "Ancash - Huari - Paucas",
          codigo_ubigeo: "021010",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2710",
        },
        {
          id_ubigeo: "2625-2700-2711",
          nombre_ubigeo: "Ancash - Huari - Ponto",
          codigo_ubigeo: "021011",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2711",
        },
        {
          id_ubigeo: "2625-2700-2712",
          nombre_ubigeo: "Ancash - Huari - Rahuapampa",
          codigo_ubigeo: "021012",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2712",
        },
        {
          id_ubigeo: "2625-2700-2713",
          nombre_ubigeo: "Ancash - Huari - Rapayan",
          codigo_ubigeo: "021013",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2713",
        },
        {
          id_ubigeo: "2625-2700-2714",
          nombre_ubigeo: "Ancash - Huari - San Marcos",
          codigo_ubigeo: "021014",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2714",
        },
        {
          id_ubigeo: "2625-2700-2715",
          nombre_ubigeo: "Ancash - Huari - San Pedro de Chana",
          codigo_ubigeo: "021015",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2715",
        },
        {
          id_ubigeo: "2625-2700-2716",
          nombre_ubigeo: "Ancash - Huari - Uco",
          codigo_ubigeo: "021016",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2700",
          id_padre_ubigeo_dst: "2716",
        },
        {
          id_ubigeo: "2625-2717-2719",
          nombre_ubigeo: "Ancash - Huarmey - Cochapeti",
          codigo_ubigeo: "021102",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2717",
          id_padre_ubigeo_dst: "2719",
        },
        {
          id_ubigeo: "2625-2717-2720",
          nombre_ubigeo: "Ancash - Huarmey - Culebras",
          codigo_ubigeo: "021103",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2717",
          id_padre_ubigeo_dst: "2720",
        },
        {
          id_ubigeo: "2625-2717-2718",
          nombre_ubigeo: "Ancash - Huarmey - Huarmey",
          codigo_ubigeo: "021101",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2717",
          id_padre_ubigeo_dst: "2718",
        },
        {
          id_ubigeo: "2625-2717-2721",
          nombre_ubigeo: "Ancash - Huarmey - Huayan",
          codigo_ubigeo: "021104",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2717",
          id_padre_ubigeo_dst: "2721",
        },
        {
          id_ubigeo: "2625-2717-2722",
          nombre_ubigeo: "Ancash - Huarmey - Malvas",
          codigo_ubigeo: "021105",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2717",
          id_padre_ubigeo_dst: "2722",
        },
        {
          id_ubigeo: "2625-2723-2724",
          nombre_ubigeo: "Ancash - Huaylas - Caraz",
          codigo_ubigeo: "021201",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2724",
        },
        {
          id_ubigeo: "2625-2723-2725",
          nombre_ubigeo: "Ancash - Huaylas - Huallanca",
          codigo_ubigeo: "021202",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2725",
        },
        {
          id_ubigeo: "2625-2723-2726",
          nombre_ubigeo: "Ancash - Huaylas - Huata",
          codigo_ubigeo: "021203",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2726",
        },
        {
          id_ubigeo: "2625-2723-2727",
          nombre_ubigeo: "Ancash - Huaylas - Huaylas",
          codigo_ubigeo: "021204",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2727",
        },
        {
          id_ubigeo: "2625-2723-2728",
          nombre_ubigeo: "Ancash - Huaylas - Mato",
          codigo_ubigeo: "021205",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2728",
        },
        {
          id_ubigeo: "2625-2723-2729",
          nombre_ubigeo: "Ancash - Huaylas - Pamparomas",
          codigo_ubigeo: "021206",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2729",
        },
        {
          id_ubigeo: "2625-2723-2730",
          nombre_ubigeo: "Ancash - Huaylas - Pueblo Libre",
          codigo_ubigeo: "021207",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2730",
        },
        {
          id_ubigeo: "2625-2723-2731",
          nombre_ubigeo: "Ancash - Huaylas - Santa Cruz",
          codigo_ubigeo: "021208",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2731",
        },
        {
          id_ubigeo: "2625-2723-2732",
          nombre_ubigeo: "Ancash - Huaylas - Santo Toribio",
          codigo_ubigeo: "021209",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2732",
        },
        {
          id_ubigeo: "2625-2723-2733",
          nombre_ubigeo: "Ancash - Huaylas - Yuracmarca",
          codigo_ubigeo: "021210",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2723",
          id_padre_ubigeo_dst: "2733",
        },
        {
          id_ubigeo: "2625-2734-2736",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Casca",
          codigo_ubigeo: "021302",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2736",
        },
        {
          id_ubigeo: "2625-2734-2737",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Eleazar Guzman Barron",
          codigo_ubigeo: "021303",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2737",
        },
        {
          id_ubigeo: "2625-2734-2738",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Fidel Olivas Escudero",
          codigo_ubigeo: "021304",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2738",
        },
        {
          id_ubigeo: "2625-2734-2739",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Llama",
          codigo_ubigeo: "021305",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2739",
        },
        {
          id_ubigeo: "2625-2734-2740",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Llumpa",
          codigo_ubigeo: "021306",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2740",
        },
        {
          id_ubigeo: "2625-2734-2741",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Lucma",
          codigo_ubigeo: "021307",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2741",
        },
        {
          id_ubigeo: "2625-2734-2742",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Musga",
          codigo_ubigeo: "021308",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2742",
        },
        {
          id_ubigeo: "2625-2734-2735",
          nombre_ubigeo: "Ancash - Mariscal Luzuriaga - Piscobamba",
          codigo_ubigeo: "021301",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2734",
          id_padre_ubigeo_dst: "2735",
        },
        {
          id_ubigeo: "2625-2743-2745",
          nombre_ubigeo: "Ancash - Ocros - Acas",
          codigo_ubigeo: "021402",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2745",
        },
        {
          id_ubigeo: "2625-2743-2746",
          nombre_ubigeo: "Ancash - Ocros - Cajamarquilla",
          codigo_ubigeo: "021403",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2746",
        },
        {
          id_ubigeo: "2625-2743-2747",
          nombre_ubigeo: "Ancash - Ocros - Carhuapampa",
          codigo_ubigeo: "021404",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2747",
        },
        {
          id_ubigeo: "2625-2743-2748",
          nombre_ubigeo: "Ancash - Ocros - Cochas",
          codigo_ubigeo: "021405",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2748",
        },
        {
          id_ubigeo: "2625-2743-2749",
          nombre_ubigeo: "Ancash - Ocros - Congas",
          codigo_ubigeo: "021406",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2749",
        },
        {
          id_ubigeo: "2625-2743-2750",
          nombre_ubigeo: "Ancash - Ocros - Llipa",
          codigo_ubigeo: "021407",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2750",
        },
        {
          id_ubigeo: "2625-2743-2744",
          nombre_ubigeo: "Ancash - Ocros - Ocros",
          codigo_ubigeo: "021401",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2744",
        },
        {
          id_ubigeo: "2625-2743-2751",
          nombre_ubigeo: "Ancash - Ocros - San Cristobal de Rajan",
          codigo_ubigeo: "021408",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2751",
        },
        {
          id_ubigeo: "2625-2743-2752",
          nombre_ubigeo: "Ancash - Ocros - San Pedro",
          codigo_ubigeo: "021409",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2752",
        },
        {
          id_ubigeo: "2625-2743-2753",
          nombre_ubigeo: "Ancash - Ocros - Santiago de Chilcas",
          codigo_ubigeo: "021410",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2743",
          id_padre_ubigeo_dst: "2753",
        },
        {
          id_ubigeo: "2625-2754-2756",
          nombre_ubigeo: "Ancash - Pallasca - Bolognesi",
          codigo_ubigeo: "021502",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2756",
        },
        {
          id_ubigeo: "2625-2754-2755",
          nombre_ubigeo: "Ancash - Pallasca - Cabana",
          codigo_ubigeo: "021501",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2755",
        },
        {
          id_ubigeo: "2625-2754-2757",
          nombre_ubigeo: "Ancash - Pallasca - Conchucos",
          codigo_ubigeo: "021503",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2757",
        },
        {
          id_ubigeo: "2625-2754-2758",
          nombre_ubigeo: "Ancash - Pallasca - Huacaschuque",
          codigo_ubigeo: "021504",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2758",
        },
        {
          id_ubigeo: "2625-2754-2759",
          nombre_ubigeo: "Ancash - Pallasca - Huandoval",
          codigo_ubigeo: "021505",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2759",
        },
        {
          id_ubigeo: "2625-2754-2760",
          nombre_ubigeo: "Ancash - Pallasca - Lacabamba",
          codigo_ubigeo: "021506",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2760",
        },
        {
          id_ubigeo: "2625-2754-2761",
          nombre_ubigeo: "Ancash - Pallasca - Llapo",
          codigo_ubigeo: "021507",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2761",
        },
        {
          id_ubigeo: "2625-2754-2762",
          nombre_ubigeo: "Ancash - Pallasca - Pallasca",
          codigo_ubigeo: "021508",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2762",
        },
        {
          id_ubigeo: "2625-2754-2763",
          nombre_ubigeo: "Ancash - Pallasca - Pampas",
          codigo_ubigeo: "021509",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2763",
        },
        {
          id_ubigeo: "2625-2754-2764",
          nombre_ubigeo: "Ancash - Pallasca - Santa Rosa",
          codigo_ubigeo: "021510",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2764",
        },
        {
          id_ubigeo: "2625-2754-2765",
          nombre_ubigeo: "Ancash - Pallasca - Tauca",
          codigo_ubigeo: "021511",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2754",
          id_padre_ubigeo_dst: "2765",
        },
        {
          id_ubigeo: "2625-2766-2768",
          nombre_ubigeo: "Ancash - Pomabamba - Huayllan",
          codigo_ubigeo: "021602",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2766",
          id_padre_ubigeo_dst: "2768",
        },
        {
          id_ubigeo: "2625-2766-2769",
          nombre_ubigeo: "Ancash - Pomabamba - Parobamba",
          codigo_ubigeo: "021603",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2766",
          id_padre_ubigeo_dst: "2769",
        },
        {
          id_ubigeo: "2625-2766-2767",
          nombre_ubigeo: "Ancash - Pomabamba - Pomabamba",
          codigo_ubigeo: "021601",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2766",
          id_padre_ubigeo_dst: "2767",
        },
        {
          id_ubigeo: "2625-2766-2770",
          nombre_ubigeo: "Ancash - Pomabamba - Quinuabamba",
          codigo_ubigeo: "021604",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2766",
          id_padre_ubigeo_dst: "2770",
        },
        {
          id_ubigeo: "2625-2771-2773",
          nombre_ubigeo: "Ancash - Recuay - Catac",
          codigo_ubigeo: "021702",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2773",
        },
        {
          id_ubigeo: "2625-2771-2774",
          nombre_ubigeo: "Ancash - Recuay - Cotaparaco",
          codigo_ubigeo: "021703",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2774",
        },
        {
          id_ubigeo: "2625-2771-2775",
          nombre_ubigeo: "Ancash - Recuay - Huayllapampa",
          codigo_ubigeo: "021704",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2775",
        },
        {
          id_ubigeo: "2625-2771-2776",
          nombre_ubigeo: "Ancash - Recuay - Llacllin",
          codigo_ubigeo: "021705",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2776",
        },
        {
          id_ubigeo: "2625-2771-2777",
          nombre_ubigeo: "Ancash - Recuay - Marca",
          codigo_ubigeo: "021706",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2777",
        },
        {
          id_ubigeo: "2625-2771-2778",
          nombre_ubigeo: "Ancash - Recuay - Pampas Chico",
          codigo_ubigeo: "021707",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2778",
        },
        {
          id_ubigeo: "2625-2771-2779",
          nombre_ubigeo: "Ancash - Recuay - Pararin",
          codigo_ubigeo: "021708",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2779",
        },
        {
          id_ubigeo: "2625-2771-2772",
          nombre_ubigeo: "Ancash - Recuay - Recuay",
          codigo_ubigeo: "021701",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2772",
        },
        {
          id_ubigeo: "2625-2771-2780",
          nombre_ubigeo: "Ancash - Recuay - Tapacocha",
          codigo_ubigeo: "021709",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2780",
        },
        {
          id_ubigeo: "2625-2771-2781",
          nombre_ubigeo: "Ancash - Recuay - Ticapampa",
          codigo_ubigeo: "021710",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2771",
          id_padre_ubigeo_dst: "2781",
        },
        {
          id_ubigeo: "2625-2782-2784",
          nombre_ubigeo: "Ancash - Santa - Caceres del Peru",
          codigo_ubigeo: "021802",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2784",
        },
        {
          id_ubigeo: "2625-2782-2783",
          nombre_ubigeo: "Ancash - Santa - Chimbote",
          codigo_ubigeo: "021801",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2783",
        },
        {
          id_ubigeo: "2625-2782-2785",
          nombre_ubigeo: "Ancash - Santa - Coishco",
          codigo_ubigeo: "021803",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2785",
        },
        {
          id_ubigeo: "2625-2782-2786",
          nombre_ubigeo: "Ancash - Santa - Macate",
          codigo_ubigeo: "021804",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2786",
        },
        {
          id_ubigeo: "2625-2782-2787",
          nombre_ubigeo: "Ancash - Santa - Moro",
          codigo_ubigeo: "021805",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2787",
        },
        {
          id_ubigeo: "2625-2782-2788",
          nombre_ubigeo: "Ancash - Santa - Nepeqa",
          codigo_ubigeo: "021806",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2788",
        },
        {
          id_ubigeo: "2625-2782-2791",
          nombre_ubigeo: "Ancash - Santa - Nuevo Chimbote",
          codigo_ubigeo: "021809",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2791",
        },
        {
          id_ubigeo: "2625-2782-2789",
          nombre_ubigeo: "Ancash - Santa - Samanco",
          codigo_ubigeo: "021807",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2789",
        },
        {
          id_ubigeo: "2625-2782-2790",
          nombre_ubigeo: "Ancash - Santa - Santa",
          codigo_ubigeo: "021808",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2782",
          id_padre_ubigeo_dst: "2790",
        },
        {
          id_ubigeo: "2625-2792-2794",
          nombre_ubigeo: "Ancash - Sihuas - Acobamba",
          codigo_ubigeo: "021902",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2794",
        },
        {
          id_ubigeo: "2625-2792-2795",
          nombre_ubigeo: "Ancash - Sihuas - Alfonso Ugarte",
          codigo_ubigeo: "021903",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2795",
        },
        {
          id_ubigeo: "2625-2792-2796",
          nombre_ubigeo: "Ancash - Sihuas - Cashapampa",
          codigo_ubigeo: "021904",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2796",
        },
        {
          id_ubigeo: "2625-2792-2797",
          nombre_ubigeo: "Ancash - Sihuas - Chingalpo",
          codigo_ubigeo: "021905",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2797",
        },
        {
          id_ubigeo: "2625-2792-2798",
          nombre_ubigeo: "Ancash - Sihuas - Huayllabamba",
          codigo_ubigeo: "021906",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2798",
        },
        {
          id_ubigeo: "2625-2792-2799",
          nombre_ubigeo: "Ancash - Sihuas - Quiches",
          codigo_ubigeo: "021907",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2799",
        },
        {
          id_ubigeo: "2625-2792-2800",
          nombre_ubigeo: "Ancash - Sihuas - Ragash",
          codigo_ubigeo: "021908",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2800",
        },
        {
          id_ubigeo: "2625-2792-2801",
          nombre_ubigeo: "Ancash - Sihuas - San Juan",
          codigo_ubigeo: "021909",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2801",
        },
        {
          id_ubigeo: "2625-2792-2802",
          nombre_ubigeo: "Ancash - Sihuas - Sicsibamba",
          codigo_ubigeo: "021910",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2802",
        },
        {
          id_ubigeo: "2625-2792-2793",
          nombre_ubigeo: "Ancash - Sihuas - Sihuas",
          codigo_ubigeo: "021901",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2792",
          id_padre_ubigeo_dst: "2793",
        },
        {
          id_ubigeo: "2625-2803-2805",
          nombre_ubigeo: "Ancash - Yungay - Cascapara",
          codigo_ubigeo: "022002",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2805",
        },
        {
          id_ubigeo: "2625-2803-2806",
          nombre_ubigeo: "Ancash - Yungay - Mancos",
          codigo_ubigeo: "022003",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2806",
        },
        {
          id_ubigeo: "2625-2803-2807",
          nombre_ubigeo: "Ancash - Yungay - Matacoto",
          codigo_ubigeo: "022004",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2807",
        },
        {
          id_ubigeo: "2625-2803-2808",
          nombre_ubigeo: "Ancash - Yungay - Quillo",
          codigo_ubigeo: "022005",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2808",
        },
        {
          id_ubigeo: "2625-2803-2809",
          nombre_ubigeo: "Ancash - Yungay - Ranrahirca",
          codigo_ubigeo: "022006",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2809",
        },
        {
          id_ubigeo: "2625-2803-2810",
          nombre_ubigeo: "Ancash - Yungay - Shupluy",
          codigo_ubigeo: "022007",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2810",
        },
        {
          id_ubigeo: "2625-2803-2811",
          nombre_ubigeo: "Ancash - Yungay - Yanama",
          codigo_ubigeo: "022008",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2811",
        },
        {
          id_ubigeo: "2625-2803-2804",
          nombre_ubigeo: "Ancash - Yungay - Yungay",
          codigo_ubigeo: "022001",
          id_padre_ubigeo_dpto: "2625",
          id_padre_ubigeo_prov: "2803",
          id_padre_ubigeo_dst: "2804",
        },
        {
          id_ubigeo: "2812-2813-2814",
          nombre_ubigeo: "Apurimac - Abancay - Abancay",
          codigo_ubigeo: "030101",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2814",
        },
        {
          id_ubigeo: "2812-2813-2815",
          nombre_ubigeo: "Apurimac - Abancay - Chacoche",
          codigo_ubigeo: "030102",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2815",
        },
        {
          id_ubigeo: "2812-2813-2816",
          nombre_ubigeo: "Apurimac - Abancay - Circa",
          codigo_ubigeo: "030103",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2816",
        },
        {
          id_ubigeo: "2812-2813-2817",
          nombre_ubigeo: "Apurimac - Abancay - Curahuasi",
          codigo_ubigeo: "030104",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2817",
        },
        {
          id_ubigeo: "2812-2813-2818",
          nombre_ubigeo: "Apurimac - Abancay - Huanipaca",
          codigo_ubigeo: "030105",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2818",
        },
        {
          id_ubigeo: "2812-2813-2819",
          nombre_ubigeo: "Apurimac - Abancay - Lambrama",
          codigo_ubigeo: "030106",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2819",
        },
        {
          id_ubigeo: "2812-2813-2820",
          nombre_ubigeo: "Apurimac - Abancay - Pichirhua",
          codigo_ubigeo: "030107",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2820",
        },
        {
          id_ubigeo: "2812-2813-2821",
          nombre_ubigeo: "Apurimac - Abancay - San Pedro de Cachora",
          codigo_ubigeo: "030108",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2821",
        },
        {
          id_ubigeo: "2812-2813-2822",
          nombre_ubigeo: "Apurimac - Abancay - Tamburco",
          codigo_ubigeo: "030109",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2813",
          id_padre_ubigeo_dst: "2822",
        },
        {
          id_ubigeo: "2812-2823-2824",
          nombre_ubigeo: "Apurimac - Andahuaylas - Andahuaylas",
          codigo_ubigeo: "030201",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2824",
        },
        {
          id_ubigeo: "2812-2823-2825",
          nombre_ubigeo: "Apurimac - Andahuaylas - Andarapa",
          codigo_ubigeo: "030202",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2825",
        },
        {
          id_ubigeo: "2812-2823-2826",
          nombre_ubigeo: "Apurimac - Andahuaylas - Chiara",
          codigo_ubigeo: "030203",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2826",
        },
        {
          id_ubigeo: "2812-2823-2827",
          nombre_ubigeo: "Apurimac - Andahuaylas - Huancarama",
          codigo_ubigeo: "030204",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2827",
        },
        {
          id_ubigeo: "2812-2823-2828",
          nombre_ubigeo: "Apurimac - Andahuaylas - Huancaray",
          codigo_ubigeo: "030205",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2828",
        },
        {
          id_ubigeo: "2812-2823-2829",
          nombre_ubigeo: "Apurimac - Andahuaylas - Huayana",
          codigo_ubigeo: "030206",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2829",
        },
        {
          id_ubigeo: "2812-2823-2842",
          nombre_ubigeo: "Apurimac - Andahuaylas - Kaquiabamba",
          codigo_ubigeo: "030219",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2842",
        },
        {
          id_ubigeo: "2812-2823-2830",
          nombre_ubigeo: "Apurimac - Andahuaylas - Kishuara",
          codigo_ubigeo: "030207",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2830",
        },
        {
          id_ubigeo: "2812-2823-2831",
          nombre_ubigeo: "Apurimac - Andahuaylas - Pacobamba",
          codigo_ubigeo: "030208",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2831",
        },
        {
          id_ubigeo: "2812-2823-2832",
          nombre_ubigeo: "Apurimac - Andahuaylas - Pacucha",
          codigo_ubigeo: "030209",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2832",
        },
        {
          id_ubigeo: "2812-2823-2833",
          nombre_ubigeo: "Apurimac - Andahuaylas - Pampachiri",
          codigo_ubigeo: "030210",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2833",
        },
        {
          id_ubigeo: "2812-2823-2834",
          nombre_ubigeo: "Apurimac - Andahuaylas - Pomacocha",
          codigo_ubigeo: "030211",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2834",
        },
        {
          id_ubigeo: "2812-2823-2835",
          nombre_ubigeo: "Apurimac - Andahuaylas - San Antonio de Cachi",
          codigo_ubigeo: "030212",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2835",
        },
        {
          id_ubigeo: "2812-2823-2836",
          nombre_ubigeo: "Apurimac - Andahuaylas - San Jeronimo",
          codigo_ubigeo: "030213",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2836",
        },
        {
          id_ubigeo: "2812-2823-2837",
          nombre_ubigeo: "Apurimac - Andahuaylas - San Miguel de Chaccrampa",
          codigo_ubigeo: "030214",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2837",
        },
        {
          id_ubigeo: "2812-2823-2838",
          nombre_ubigeo: "Apurimac - Andahuaylas - Santa Maria de Chicmo",
          codigo_ubigeo: "030215",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2838",
        },
        {
          id_ubigeo: "2812-2823-2839",
          nombre_ubigeo: "Apurimac - Andahuaylas - Talavera",
          codigo_ubigeo: "030216",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2839",
        },
        {
          id_ubigeo: "2812-2823-2840",
          nombre_ubigeo: "Apurimac - Andahuaylas - Tumay Huaraca",
          codigo_ubigeo: "030217",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2840",
        },
        {
          id_ubigeo: "2812-2823-2841",
          nombre_ubigeo: "Apurimac - Andahuaylas - Turpo",
          codigo_ubigeo: "030218",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2823",
          id_padre_ubigeo_dst: "2841",
        },
        {
          id_ubigeo: "2812-2843-2844",
          nombre_ubigeo: "Apurimac - Antabamba - Antabamba",
          codigo_ubigeo: "030301",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2843",
          id_padre_ubigeo_dst: "2844",
        },
        {
          id_ubigeo: "2812-2843-2845",
          nombre_ubigeo: "Apurimac - Antabamba - El Oro",
          codigo_ubigeo: "030302",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2843",
          id_padre_ubigeo_dst: "2845",
        },
        {
          id_ubigeo: "2812-2843-2846",
          nombre_ubigeo: "Apurimac - Antabamba - Huaquirca",
          codigo_ubigeo: "030303",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2843",
          id_padre_ubigeo_dst: "2846",
        },
        {
          id_ubigeo: "2812-2843-2847",
          nombre_ubigeo: "Apurimac - Antabamba - Juan Espinoza Medrano",
          codigo_ubigeo: "030304",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2843",
          id_padre_ubigeo_dst: "2847",
        },
        {
          id_ubigeo: "2812-2843-2848",
          nombre_ubigeo: "Apurimac - Antabamba - Oropesa",
          codigo_ubigeo: "030305",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2843",
          id_padre_ubigeo_dst: "2848",
        },
        {
          id_ubigeo: "2812-2843-2849",
          nombre_ubigeo: "Apurimac - Antabamba - Pachaconas",
          codigo_ubigeo: "030306",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2843",
          id_padre_ubigeo_dst: "2849",
        },
        {
          id_ubigeo: "2812-2843-2850",
          nombre_ubigeo: "Apurimac - Antabamba - Sabaino",
          codigo_ubigeo: "030307",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2843",
          id_padre_ubigeo_dst: "2850",
        },
        {
          id_ubigeo: "2812-2851-2853",
          nombre_ubigeo: "Apurimac - Aymaraes - Capaya",
          codigo_ubigeo: "030402",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2853",
        },
        {
          id_ubigeo: "2812-2851-2854",
          nombre_ubigeo: "Apurimac - Aymaraes - Caraybamba",
          codigo_ubigeo: "030403",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2854",
        },
        {
          id_ubigeo: "2812-2851-2852",
          nombre_ubigeo: "Apurimac - Aymaraes - Chalhuanca",
          codigo_ubigeo: "030401",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2852",
        },
        {
          id_ubigeo: "2812-2851-2855",
          nombre_ubigeo: "Apurimac - Aymaraes - Chapimarca",
          codigo_ubigeo: "030404",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2855",
        },
        {
          id_ubigeo: "2812-2851-2856",
          nombre_ubigeo: "Apurimac - Aymaraes - Colcabamba",
          codigo_ubigeo: "030405",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2856",
        },
        {
          id_ubigeo: "2812-2851-2857",
          nombre_ubigeo: "Apurimac - Aymaraes - Cotaruse",
          codigo_ubigeo: "030406",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2857",
        },
        {
          id_ubigeo: "2812-2851-2858",
          nombre_ubigeo: "Apurimac - Aymaraes - Huayllo",
          codigo_ubigeo: "030407",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2858",
        },
        {
          id_ubigeo: "2812-2851-2859",
          nombre_ubigeo: "Apurimac - Aymaraes - Justo Apu Sahuaraura",
          codigo_ubigeo: "030408",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2859",
        },
        {
          id_ubigeo: "2812-2851-2860",
          nombre_ubigeo: "Apurimac - Aymaraes - Lucre",
          codigo_ubigeo: "030409",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2860",
        },
        {
          id_ubigeo: "2812-2851-2861",
          nombre_ubigeo: "Apurimac - Aymaraes - Pocohuanca",
          codigo_ubigeo: "030410",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2861",
        },
        {
          id_ubigeo: "2812-2851-2862",
          nombre_ubigeo: "Apurimac - Aymaraes - San Juan de Chacqa",
          codigo_ubigeo: "030411",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2862",
        },
        {
          id_ubigeo: "2812-2851-2863",
          nombre_ubigeo: "Apurimac - Aymaraes - Saqayca",
          codigo_ubigeo: "030412",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2863",
        },
        {
          id_ubigeo: "2812-2851-2864",
          nombre_ubigeo: "Apurimac - Aymaraes - Soraya",
          codigo_ubigeo: "030413",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2864",
        },
        {
          id_ubigeo: "2812-2851-2865",
          nombre_ubigeo: "Apurimac - Aymaraes - Tapairihua",
          codigo_ubigeo: "030414",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2865",
        },
        {
          id_ubigeo: "2812-2851-2866",
          nombre_ubigeo: "Apurimac - Aymaraes - Tintay",
          codigo_ubigeo: "030415",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2866",
        },
        {
          id_ubigeo: "2812-2851-2867",
          nombre_ubigeo: "Apurimac - Aymaraes - Toraya",
          codigo_ubigeo: "030416",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2867",
        },
        {
          id_ubigeo: "2812-2851-2868",
          nombre_ubigeo: "Apurimac - Aymaraes - Yanaca",
          codigo_ubigeo: "030417",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2851",
          id_padre_ubigeo_dst: "2868",
        },
        {
          id_ubigeo: "2812-2876-2878",
          nombre_ubigeo: "Apurimac - Chincheros - Anco-Huallo",
          codigo_ubigeo: "030602",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2878",
        },
        {
          id_ubigeo: "2812-2876-2877",
          nombre_ubigeo: "Apurimac - Chincheros - Chincheros",
          codigo_ubigeo: "030601",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2877",
        },
        {
          id_ubigeo: "2812-2876-2879",
          nombre_ubigeo: "Apurimac - Chincheros - Cocharcas",
          codigo_ubigeo: "030603",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2879",
        },
        {
          id_ubigeo: "2812-2876-2880",
          nombre_ubigeo: "Apurimac - Chincheros - Huaccana",
          codigo_ubigeo: "030604",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2880",
        },
        {
          id_ubigeo: "2812-2876-2881",
          nombre_ubigeo: "Apurimac - Chincheros - Ocobamba",
          codigo_ubigeo: "030605",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2881",
        },
        {
          id_ubigeo: "2812-2876-2882",
          nombre_ubigeo: "Apurimac - Chincheros - Ongoy",
          codigo_ubigeo: "030606",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2882",
        },
        {
          id_ubigeo: "2812-2876-2884",
          nombre_ubigeo: "Apurimac - Chincheros - Ranracancha",
          codigo_ubigeo: "030608",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2884",
        },
        {
          id_ubigeo: "2812-2876-2883",
          nombre_ubigeo: "Apurimac - Chincheros - Uranmarca",
          codigo_ubigeo: "030607",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2876",
          id_padre_ubigeo_dst: "2883",
        },
        {
          id_ubigeo: "2812-2869-2875",
          nombre_ubigeo: "Apurimac - Cotabambas - Challhuahuacho",
          codigo_ubigeo: "030506",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2869",
          id_padre_ubigeo_dst: "2875",
        },
        {
          id_ubigeo: "2812-2869-2871",
          nombre_ubigeo: "Apurimac - Cotabambas - Cotabambas",
          codigo_ubigeo: "030502",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2869",
          id_padre_ubigeo_dst: "2871",
        },
        {
          id_ubigeo: "2812-2869-2872",
          nombre_ubigeo: "Apurimac - Cotabambas - Coyllurqui",
          codigo_ubigeo: "030503",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2869",
          id_padre_ubigeo_dst: "2872",
        },
        {
          id_ubigeo: "2812-2869-2873",
          nombre_ubigeo: "Apurimac - Cotabambas - Haquira",
          codigo_ubigeo: "030504",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2869",
          id_padre_ubigeo_dst: "2873",
        },
        {
          id_ubigeo: "2812-2869-2874",
          nombre_ubigeo: "Apurimac - Cotabambas - Mara",
          codigo_ubigeo: "030505",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2869",
          id_padre_ubigeo_dst: "2874",
        },
        {
          id_ubigeo: "2812-2869-2870",
          nombre_ubigeo: "Apurimac - Cotabambas - Tambobamba",
          codigo_ubigeo: "030501",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2869",
          id_padre_ubigeo_dst: "2870",
        },
        {
          id_ubigeo: "2812-2885-2886",
          nombre_ubigeo: "Apurimac - Grau - Chuquibambilla",
          codigo_ubigeo: "030701",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2886",
        },
        {
          id_ubigeo: "2812-2885-2899",
          nombre_ubigeo: "Apurimac - Grau - Curasco",
          codigo_ubigeo: "030714",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2899",
        },
        {
          id_ubigeo: "2812-2885-2887",
          nombre_ubigeo: "Apurimac - Grau - Curpahuasi",
          codigo_ubigeo: "030702",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2887",
        },
        {
          id_ubigeo: "2812-2885-2888",
          nombre_ubigeo: "Apurimac - Grau - Gamarra",
          codigo_ubigeo: "030703",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2888",
        },
        {
          id_ubigeo: "2812-2885-2889",
          nombre_ubigeo: "Apurimac - Grau - Huayllati",
          codigo_ubigeo: "030704",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2889",
        },
        {
          id_ubigeo: "2812-2885-2890",
          nombre_ubigeo: "Apurimac - Grau - Mamara",
          codigo_ubigeo: "030705",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2890",
        },
        {
          id_ubigeo: "2812-2885-2891",
          nombre_ubigeo: "Apurimac - Grau - Micaela Bastidas",
          codigo_ubigeo: "030706",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2891",
        },
        {
          id_ubigeo: "2812-2885-2892",
          nombre_ubigeo: "Apurimac - Grau - Pataypampa",
          codigo_ubigeo: "030707",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2892",
        },
        {
          id_ubigeo: "2812-2885-2893",
          nombre_ubigeo: "Apurimac - Grau - Progreso",
          codigo_ubigeo: "030708",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2893",
        },
        {
          id_ubigeo: "2812-2885-2894",
          nombre_ubigeo: "Apurimac - Grau - San Antonio",
          codigo_ubigeo: "030709",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2894",
        },
        {
          id_ubigeo: "2812-2885-2895",
          nombre_ubigeo: "Apurimac - Grau - Santa Rosa",
          codigo_ubigeo: "030710",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2895",
        },
        {
          id_ubigeo: "2812-2885-2896",
          nombre_ubigeo: "Apurimac - Grau - Turpay",
          codigo_ubigeo: "030711",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2896",
        },
        {
          id_ubigeo: "2812-2885-2897",
          nombre_ubigeo: "Apurimac - Grau - Vilcabamba",
          codigo_ubigeo: "030712",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2897",
        },
        {
          id_ubigeo: "2812-2885-2898",
          nombre_ubigeo: "Apurimac - Grau - Virundo",
          codigo_ubigeo: "030713",
          id_padre_ubigeo_dpto: "2812",
          id_padre_ubigeo_prov: "2885",
          id_padre_ubigeo_dst: "2898",
        },
        {
          id_ubigeo: "2900-2901-2903",
          nombre_ubigeo: "Arequipa - Arequipa - Alto Selva Alegre",
          codigo_ubigeo: "040102",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2903",
        },
        {
          id_ubigeo: "2900-2901-2902",
          nombre_ubigeo: "Arequipa - Arequipa - Arequipa",
          codigo_ubigeo: "040101",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2902",
        },
        {
          id_ubigeo: "2900-2901-2904",
          nombre_ubigeo: "Arequipa - Arequipa - Cayma",
          codigo_ubigeo: "040103",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2904",
        },
        {
          id_ubigeo: "2900-2901-2905",
          nombre_ubigeo: "Arequipa - Arequipa - Cerro Colorado",
          codigo_ubigeo: "040104",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2905",
        },
        {
          id_ubigeo: "2900-2901-2906",
          nombre_ubigeo: "Arequipa - Arequipa - Characato",
          codigo_ubigeo: "040105",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2906",
        },
        {
          id_ubigeo: "2900-2901-2907",
          nombre_ubigeo: "Arequipa - Arequipa - Chiguata",
          codigo_ubigeo: "040106",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2907",
        },
        {
          id_ubigeo: "2900-2901-2908",
          nombre_ubigeo: "Arequipa - Arequipa - Jacobo Hunter",
          codigo_ubigeo: "040107",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2908",
        },
        {
          id_ubigeo: "2900-2901-2930",
          nombre_ubigeo: "Arequipa - Arequipa - Jose Luis Bustamante y Rivero",
          codigo_ubigeo: "040129",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2930",
        },
        {
          id_ubigeo: "2900-2901-2909",
          nombre_ubigeo: "Arequipa - Arequipa - La Joya",
          codigo_ubigeo: "040108",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2909",
        },
        {
          id_ubigeo: "2900-2901-2910",
          nombre_ubigeo: "Arequipa - Arequipa - Mariano Melgar",
          codigo_ubigeo: "040109",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2910",
        },
        {
          id_ubigeo: "2900-2901-2911",
          nombre_ubigeo: "Arequipa - Arequipa - Miraflores",
          codigo_ubigeo: "040110",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2911",
        },
        {
          id_ubigeo: "2900-2901-2912",
          nombre_ubigeo: "Arequipa - Arequipa - Mollebaya",
          codigo_ubigeo: "040111",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2912",
        },
        {
          id_ubigeo: "2900-2901-2913",
          nombre_ubigeo: "Arequipa - Arequipa - Paucarpata",
          codigo_ubigeo: "040112",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2913",
        },
        {
          id_ubigeo: "2900-2901-2914",
          nombre_ubigeo: "Arequipa - Arequipa - Pocsi",
          codigo_ubigeo: "040113",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2914",
        },
        {
          id_ubigeo: "2900-2901-2915",
          nombre_ubigeo: "Arequipa - Arequipa - Polobaya",
          codigo_ubigeo: "040114",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2915",
        },
        {
          id_ubigeo: "2900-2901-2916",
          nombre_ubigeo: "Arequipa - Arequipa - Quequeqa",
          codigo_ubigeo: "040115",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2916",
        },
        {
          id_ubigeo: "2900-2901-2917",
          nombre_ubigeo: "Arequipa - Arequipa - Sabandia",
          codigo_ubigeo: "040116",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2917",
        },
        {
          id_ubigeo: "2900-2901-2918",
          nombre_ubigeo: "Arequipa - Arequipa - Sachaca",
          codigo_ubigeo: "040117",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2918",
        },
        {
          id_ubigeo: "2900-2901-2919",
          nombre_ubigeo: "Arequipa - Arequipa - San Juan de Siguas",
          codigo_ubigeo: "040118",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2919",
        },
        {
          id_ubigeo: "2900-2901-2920",
          nombre_ubigeo: "Arequipa - Arequipa - San Juan de Tarucani",
          codigo_ubigeo: "040119",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2920",
        },
        {
          id_ubigeo: "2900-2901-2921",
          nombre_ubigeo: "Arequipa - Arequipa - Santa Isabel de Siguas",
          codigo_ubigeo: "040120",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2921",
        },
        {
          id_ubigeo: "2900-2901-2922",
          nombre_ubigeo: "Arequipa - Arequipa - Santa Rita de Siguas",
          codigo_ubigeo: "040121",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2922",
        },
        {
          id_ubigeo: "2900-2901-2923",
          nombre_ubigeo: "Arequipa - Arequipa - Socabaya",
          codigo_ubigeo: "040122",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2923",
        },
        {
          id_ubigeo: "2900-2901-2924",
          nombre_ubigeo: "Arequipa - Arequipa - Tiabaya",
          codigo_ubigeo: "040123",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2924",
        },
        {
          id_ubigeo: "2900-2901-2925",
          nombre_ubigeo: "Arequipa - Arequipa - Uchumayo",
          codigo_ubigeo: "040124",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2925",
        },
        {
          id_ubigeo: "2900-2901-2926",
          nombre_ubigeo: "Arequipa - Arequipa - Vitor",
          codigo_ubigeo: "040125",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2926",
        },
        {
          id_ubigeo: "2900-2901-2927",
          nombre_ubigeo: "Arequipa - Arequipa - Yanahuara",
          codigo_ubigeo: "040126",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2927",
        },
        {
          id_ubigeo: "2900-2901-2928",
          nombre_ubigeo: "Arequipa - Arequipa - Yarabamba",
          codigo_ubigeo: "040127",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2928",
        },
        {
          id_ubigeo: "2900-2901-2929",
          nombre_ubigeo: "Arequipa - Arequipa - Yura",
          codigo_ubigeo: "040128",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2901",
          id_padre_ubigeo_dst: "2929",
        },
        {
          id_ubigeo: "2900-2931-2932",
          nombre_ubigeo: "Arequipa - Camana - Camana",
          codigo_ubigeo: "040201",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2932",
        },
        {
          id_ubigeo: "2900-2931-2933",
          nombre_ubigeo: "Arequipa - Camana - Jose Maria Quimper",
          codigo_ubigeo: "040202",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2933",
        },
        {
          id_ubigeo: "2900-2931-2934",
          nombre_ubigeo: "Arequipa - Camana - Mariano Nicolas Valcarcel",
          codigo_ubigeo: "040203",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2934",
        },
        {
          id_ubigeo: "2900-2931-2935",
          nombre_ubigeo: "Arequipa - Camana - Mariscal Caceres",
          codigo_ubigeo: "040204",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2935",
        },
        {
          id_ubigeo: "2900-2931-2936",
          nombre_ubigeo: "Arequipa - Camana - Nicolas de Pierola",
          codigo_ubigeo: "040205",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2936",
        },
        {
          id_ubigeo: "2900-2931-2937",
          nombre_ubigeo: "Arequipa - Camana - Ocoqa",
          codigo_ubigeo: "040206",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2937",
        },
        {
          id_ubigeo: "2900-2931-2938",
          nombre_ubigeo: "Arequipa - Camana - Quilca",
          codigo_ubigeo: "040207",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2938",
        },
        {
          id_ubigeo: "2900-2931-2939",
          nombre_ubigeo: "Arequipa - Camana - Samuel Pastor",
          codigo_ubigeo: "040208",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2931",
          id_padre_ubigeo_dst: "2939",
        },
        {
          id_ubigeo: "2900-2940-2942",
          nombre_ubigeo: "Arequipa - Caraveli - Acari",
          codigo_ubigeo: "040302",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2942",
        },
        {
          id_ubigeo: "2900-2940-2943",
          nombre_ubigeo: "Arequipa - Caraveli - Atico",
          codigo_ubigeo: "040303",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2943",
        },
        {
          id_ubigeo: "2900-2940-2944",
          nombre_ubigeo: "Arequipa - Caraveli - Atiquipa",
          codigo_ubigeo: "040304",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2944",
        },
        {
          id_ubigeo: "2900-2940-2945",
          nombre_ubigeo: "Arequipa - Caraveli - Bella Union",
          codigo_ubigeo: "040305",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2945",
        },
        {
          id_ubigeo: "2900-2940-2946",
          nombre_ubigeo: "Arequipa - Caraveli - Cahuacho",
          codigo_ubigeo: "040306",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2946",
        },
        {
          id_ubigeo: "2900-2940-2941",
          nombre_ubigeo: "Arequipa - Caraveli - Caraveli",
          codigo_ubigeo: "040301",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2941",
        },
        {
          id_ubigeo: "2900-2940-2947",
          nombre_ubigeo: "Arequipa - Caraveli - Chala",
          codigo_ubigeo: "040307",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2947",
        },
        {
          id_ubigeo: "2900-2940-2948",
          nombre_ubigeo: "Arequipa - Caraveli - Chaparra",
          codigo_ubigeo: "040308",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2948",
        },
        {
          id_ubigeo: "2900-2940-2949",
          nombre_ubigeo: "Arequipa - Caraveli - Huanuhuanu",
          codigo_ubigeo: "040309",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2949",
        },
        {
          id_ubigeo: "2900-2940-2950",
          nombre_ubigeo: "Arequipa - Caraveli - Jaqui",
          codigo_ubigeo: "040310",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2950",
        },
        {
          id_ubigeo: "2900-2940-2951",
          nombre_ubigeo: "Arequipa - Caraveli - Lomas",
          codigo_ubigeo: "040311",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2951",
        },
        {
          id_ubigeo: "2900-2940-2952",
          nombre_ubigeo: "Arequipa - Caraveli - Quicacha",
          codigo_ubigeo: "040312",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2952",
        },
        {
          id_ubigeo: "2900-2940-2953",
          nombre_ubigeo: "Arequipa - Caraveli - Yauca",
          codigo_ubigeo: "040313",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2940",
          id_padre_ubigeo_dst: "2953",
        },
        {
          id_ubigeo: "2900-2954-2956",
          nombre_ubigeo: "Arequipa - Castilla - Andagua",
          codigo_ubigeo: "040402",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2956",
        },
        {
          id_ubigeo: "2900-2954-2955",
          nombre_ubigeo: "Arequipa - Castilla - Aplao",
          codigo_ubigeo: "040401",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2955",
        },
        {
          id_ubigeo: "2900-2954-2957",
          nombre_ubigeo: "Arequipa - Castilla - Ayo",
          codigo_ubigeo: "040403",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2957",
        },
        {
          id_ubigeo: "2900-2954-2958",
          nombre_ubigeo: "Arequipa - Castilla - Chachas",
          codigo_ubigeo: "040404",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2958",
        },
        {
          id_ubigeo: "2900-2954-2959",
          nombre_ubigeo: "Arequipa - Castilla - Chilcaymarca",
          codigo_ubigeo: "040405",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2959",
        },
        {
          id_ubigeo: "2900-2954-2960",
          nombre_ubigeo: "Arequipa - Castilla - Choco",
          codigo_ubigeo: "040406",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2960",
        },
        {
          id_ubigeo: "2900-2954-2961",
          nombre_ubigeo: "Arequipa - Castilla - Huancarqui",
          codigo_ubigeo: "040407",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2961",
        },
        {
          id_ubigeo: "2900-2954-2962",
          nombre_ubigeo: "Arequipa - Castilla - Machaguay",
          codigo_ubigeo: "040408",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2962",
        },
        {
          id_ubigeo: "2900-2954-2970",
          nombre_ubigeo: "Arequipa - Castilla - Majes",
          codigo_ubigeo: "040420",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2970",
        },
        {
          id_ubigeo: "2900-2954-2963",
          nombre_ubigeo: "Arequipa - Castilla - Orcopampa",
          codigo_ubigeo: "040409",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2963",
        },
        {
          id_ubigeo: "2900-2954-2964",
          nombre_ubigeo: "Arequipa - Castilla - Pampacolca",
          codigo_ubigeo: "040410",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2964",
        },
        {
          id_ubigeo: "2900-2954-2965",
          nombre_ubigeo: "Arequipa - Castilla - Tipan",
          codigo_ubigeo: "040411",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2965",
        },
        {
          id_ubigeo: "2900-2954-2966",
          nombre_ubigeo: "Arequipa - Castilla - Uqon",
          codigo_ubigeo: "040412",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2966",
        },
        {
          id_ubigeo: "2900-2954-2967",
          nombre_ubigeo: "Arequipa - Castilla - Uraca",
          codigo_ubigeo: "040413",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2967",
        },
        {
          id_ubigeo: "2900-2954-2968",
          nombre_ubigeo: "Arequipa - Castilla - Viraco",
          codigo_ubigeo: "040414",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2968",
        },
        {
          id_ubigeo: "2900-2954-2969",
          nombre_ubigeo: "Arequipa - Castilla - Yanque",
          codigo_ubigeo: "040419",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2954",
          id_padre_ubigeo_dst: "2969",
        },
        {
          id_ubigeo: "2900-2971-2973",
          nombre_ubigeo: "Arequipa - Caylloma - Achoma",
          codigo_ubigeo: "040502",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2973",
        },
        {
          id_ubigeo: "2900-2971-2974",
          nombre_ubigeo: "Arequipa - Caylloma - Cabanaconde",
          codigo_ubigeo: "040503",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2974",
        },
        {
          id_ubigeo: "2900-2971-2975",
          nombre_ubigeo: "Arequipa - Caylloma - Callalli",
          codigo_ubigeo: "040504",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2975",
        },
        {
          id_ubigeo: "2900-2971-2976",
          nombre_ubigeo: "Arequipa - Caylloma - Caylloma",
          codigo_ubigeo: "040505",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2976",
        },
        {
          id_ubigeo: "2900-2971-2972",
          nombre_ubigeo: "Arequipa - Caylloma - Chivay",
          codigo_ubigeo: "040501",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2972",
        },
        {
          id_ubigeo: "2900-2971-2977",
          nombre_ubigeo: "Arequipa - Caylloma - Coporaque",
          codigo_ubigeo: "040506",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2977",
        },
        {
          id_ubigeo: "2900-2971-2978",
          nombre_ubigeo: "Arequipa - Caylloma - Huambo",
          codigo_ubigeo: "040507",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2978",
        },
        {
          id_ubigeo: "2900-2971-2979",
          nombre_ubigeo: "Arequipa - Caylloma - Huanca",
          codigo_ubigeo: "040508",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2979",
        },
        {
          id_ubigeo: "2900-2971-2980",
          nombre_ubigeo: "Arequipa - Caylloma - Ichupampa",
          codigo_ubigeo: "040509",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2980",
        },
        {
          id_ubigeo: "2900-2971-2981",
          nombre_ubigeo: "Arequipa - Caylloma - Lari",
          codigo_ubigeo: "040510",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2981",
        },
        {
          id_ubigeo: "2900-2971-2982",
          nombre_ubigeo: "Arequipa - Caylloma - Lluta",
          codigo_ubigeo: "040511",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2982",
        },
        {
          id_ubigeo: "2900-2971-2983",
          nombre_ubigeo: "Arequipa - Caylloma - Maca",
          codigo_ubigeo: "040512",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2983",
        },
        {
          id_ubigeo: "2900-2971-2984",
          nombre_ubigeo: "Arequipa - Caylloma - Madrigal",
          codigo_ubigeo: "040513",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2984",
        },
        {
          id_ubigeo: "2900-2971-2991",
          nombre_ubigeo: "Arequipa - Caylloma - Majes",
          codigo_ubigeo: "040520",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2991",
        },
        {
          id_ubigeo: "2900-2971-2985",
          nombre_ubigeo: "Arequipa - Caylloma - San Antonio de Chuca",
          codigo_ubigeo: "040514",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2985",
        },
        {
          id_ubigeo: "2900-2971-2986",
          nombre_ubigeo: "Arequipa - Caylloma - Sibayo",
          codigo_ubigeo: "040515",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2986",
        },
        {
          id_ubigeo: "2900-2971-2987",
          nombre_ubigeo: "Arequipa - Caylloma - Tapay",
          codigo_ubigeo: "040516",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2987",
        },
        {
          id_ubigeo: "2900-2971-2988",
          nombre_ubigeo: "Arequipa - Caylloma - Tisco",
          codigo_ubigeo: "040517",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2988",
        },
        {
          id_ubigeo: "2900-2971-2989",
          nombre_ubigeo: "Arequipa - Caylloma - Tuti",
          codigo_ubigeo: "040518",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2989",
        },
        {
          id_ubigeo: "2900-2971-2990",
          nombre_ubigeo: "Arequipa - Caylloma - Yanque",
          codigo_ubigeo: "040519",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2971",
          id_padre_ubigeo_dst: "2990",
        },
        {
          id_ubigeo: "2900-2992-2994",
          nombre_ubigeo: "Arequipa - Condesuyos - Andaray",
          codigo_ubigeo: "040602",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "2994",
        },
        {
          id_ubigeo: "2900-2992-2995",
          nombre_ubigeo: "Arequipa - Condesuyos - Cayarani",
          codigo_ubigeo: "040603",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "2995",
        },
        {
          id_ubigeo: "2900-2992-2996",
          nombre_ubigeo: "Arequipa - Condesuyos - Chichas",
          codigo_ubigeo: "040604",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "2996",
        },
        {
          id_ubigeo: "2900-2992-2993",
          nombre_ubigeo: "Arequipa - Condesuyos - Chuquibamba",
          codigo_ubigeo: "040601",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "2993",
        },
        {
          id_ubigeo: "2900-2992-2997",
          nombre_ubigeo: "Arequipa - Condesuyos - Iray",
          codigo_ubigeo: "040605",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "2997",
        },
        {
          id_ubigeo: "2900-2992-2998",
          nombre_ubigeo: "Arequipa - Condesuyos - Rio Grande",
          codigo_ubigeo: "040606",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "2998",
        },
        {
          id_ubigeo: "2900-2992-2999",
          nombre_ubigeo: "Arequipa - Condesuyos - Salamanca",
          codigo_ubigeo: "040607",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "2999",
        },
        {
          id_ubigeo: "2900-2992-3000",
          nombre_ubigeo: "Arequipa - Condesuyos - Yanaquihua",
          codigo_ubigeo: "040608",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "2992",
          id_padre_ubigeo_dst: "3000",
        },
        {
          id_ubigeo: "2900-3001-3003",
          nombre_ubigeo: "Arequipa - Islay - Cocachacra",
          codigo_ubigeo: "040702",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3001",
          id_padre_ubigeo_dst: "3003",
        },
        {
          id_ubigeo: "2900-3001-3004",
          nombre_ubigeo: "Arequipa - Islay - Dean Valdivia",
          codigo_ubigeo: "040703",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3001",
          id_padre_ubigeo_dst: "3004",
        },
        {
          id_ubigeo: "2900-3001-3005",
          nombre_ubigeo: "Arequipa - Islay - Islay",
          codigo_ubigeo: "040704",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3001",
          id_padre_ubigeo_dst: "3005",
        },
        {
          id_ubigeo: "2900-3001-3006",
          nombre_ubigeo: "Arequipa - Islay - Mejia",
          codigo_ubigeo: "040705",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3001",
          id_padre_ubigeo_dst: "3006",
        },
        {
          id_ubigeo: "2900-3001-3002",
          nombre_ubigeo: "Arequipa - Islay - Mollendo",
          codigo_ubigeo: "040701",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3001",
          id_padre_ubigeo_dst: "3002",
        },
        {
          id_ubigeo: "2900-3001-3007",
          nombre_ubigeo: "Arequipa - Islay - Punta de Bombon",
          codigo_ubigeo: "040706",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3001",
          id_padre_ubigeo_dst: "3007",
        },
        {
          id_ubigeo: "2900-3008-3010",
          nombre_ubigeo: "Arequipa - La Union - Alca",
          codigo_ubigeo: "040802",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3010",
        },
        {
          id_ubigeo: "2900-3008-3011",
          nombre_ubigeo: "Arequipa - La Union - Charcana",
          codigo_ubigeo: "040803",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3011",
        },
        {
          id_ubigeo: "2900-3008-3009",
          nombre_ubigeo: "Arequipa - La Union - Cotahuasi",
          codigo_ubigeo: "040801",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3009",
        },
        {
          id_ubigeo: "2900-3008-3012",
          nombre_ubigeo: "Arequipa - La Union - Huaynacotas",
          codigo_ubigeo: "040804",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3012",
        },
        {
          id_ubigeo: "2900-3008-3013",
          nombre_ubigeo: "Arequipa - La Union - Pampamarca",
          codigo_ubigeo: "040805",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3013",
        },
        {
          id_ubigeo: "2900-3008-3014",
          nombre_ubigeo: "Arequipa - La Union - Puyca",
          codigo_ubigeo: "040806",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3014",
        },
        {
          id_ubigeo: "2900-3008-3015",
          nombre_ubigeo: "Arequipa - La Union - Quechualla",
          codigo_ubigeo: "040807",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3015",
        },
        {
          id_ubigeo: "2900-3008-3016",
          nombre_ubigeo: "Arequipa - La Union - Sayla",
          codigo_ubigeo: "040808",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3016",
        },
        {
          id_ubigeo: "2900-3008-3017",
          nombre_ubigeo: "Arequipa - La Union - Tauria",
          codigo_ubigeo: "040809",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3017",
        },
        {
          id_ubigeo: "2900-3008-3018",
          nombre_ubigeo: "Arequipa - La Union - Tomepampa",
          codigo_ubigeo: "040810",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3018",
        },
        {
          id_ubigeo: "2900-3008-3019",
          nombre_ubigeo: "Arequipa - La Union - Toro",
          codigo_ubigeo: "040811",
          id_padre_ubigeo_dpto: "2900",
          id_padre_ubigeo_prov: "3008",
          id_padre_ubigeo_dst: "3019",
        },
        {
          id_ubigeo: "3020-3037-3038",
          nombre_ubigeo: "Ayacucho - Cangallo - Cangallo",
          codigo_ubigeo: "050201",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3037",
          id_padre_ubigeo_dst: "3038",
        },
        {
          id_ubigeo: "3020-3037-3039",
          nombre_ubigeo: "Ayacucho - Cangallo - Chuschi",
          codigo_ubigeo: "050202",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3037",
          id_padre_ubigeo_dst: "3039",
        },
        {
          id_ubigeo: "3020-3037-3040",
          nombre_ubigeo: "Ayacucho - Cangallo - Los Morochucos",
          codigo_ubigeo: "050203",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3037",
          id_padre_ubigeo_dst: "3040",
        },
        {
          id_ubigeo: "3020-3037-3041",
          nombre_ubigeo: "Ayacucho - Cangallo - Maria Parado de Bellido",
          codigo_ubigeo: "050204",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3037",
          id_padre_ubigeo_dst: "3041",
        },
        {
          id_ubigeo: "3020-3037-3042",
          nombre_ubigeo: "Ayacucho - Cangallo - Paras",
          codigo_ubigeo: "050205",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3037",
          id_padre_ubigeo_dst: "3042",
        },
        {
          id_ubigeo: "3020-3037-3043",
          nombre_ubigeo: "Ayacucho - Cangallo - Totos",
          codigo_ubigeo: "050206",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3037",
          id_padre_ubigeo_dst: "3043",
        },
        {
          id_ubigeo: "3020-3021-3023",
          nombre_ubigeo: "Ayacucho - Huamanga - Acocro",
          codigo_ubigeo: "050102",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3023",
        },
        {
          id_ubigeo: "3020-3021-3024",
          nombre_ubigeo: "Ayacucho - Huamanga - Acos Vinchos",
          codigo_ubigeo: "050103",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3024",
        },
        {
          id_ubigeo: "3020-3021-3022",
          nombre_ubigeo: "Ayacucho - Huamanga - Ayacucho",
          codigo_ubigeo: "050101",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3022",
        },
        {
          id_ubigeo: "3020-3021-3025",
          nombre_ubigeo: "Ayacucho - Huamanga - Carmen Alto",
          codigo_ubigeo: "050104",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3025",
        },
        {
          id_ubigeo: "3020-3021-3026",
          nombre_ubigeo: "Ayacucho - Huamanga - Chiara",
          codigo_ubigeo: "050105",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3026",
        },
        {
          id_ubigeo: "3020-3021-3036",
          nombre_ubigeo: "Ayacucho - Huamanga - Jes\xfas Nazareno",
          codigo_ubigeo: "050115",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3036",
        },
        {
          id_ubigeo: "3020-3021-3027",
          nombre_ubigeo: "Ayacucho - Huamanga - Ocros",
          codigo_ubigeo: "050106",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3027",
        },
        {
          id_ubigeo: "3020-3021-3028",
          nombre_ubigeo: "Ayacucho - Huamanga - Pacaycasa",
          codigo_ubigeo: "050107",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3028",
        },
        {
          id_ubigeo: "3020-3021-3029",
          nombre_ubigeo: "Ayacucho - Huamanga - Quinua",
          codigo_ubigeo: "050108",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3029",
        },
        {
          id_ubigeo: "3020-3021-3030",
          nombre_ubigeo: "Ayacucho - Huamanga - San Jose de Ticllas",
          codigo_ubigeo: "050109",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3030",
        },
        {
          id_ubigeo: "3020-3021-3031",
          nombre_ubigeo: "Ayacucho - Huamanga - San Juan Bautista",
          codigo_ubigeo: "050110",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3031",
        },
        {
          id_ubigeo: "3020-3021-3032",
          nombre_ubigeo: "Ayacucho - Huamanga - Santiago de Pischa",
          codigo_ubigeo: "050111",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3032",
        },
        {
          id_ubigeo: "3020-3021-3033",
          nombre_ubigeo: "Ayacucho - Huamanga - Socos",
          codigo_ubigeo: "050112",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3033",
        },
        {
          id_ubigeo: "3020-3021-3034",
          nombre_ubigeo: "Ayacucho - Huamanga - Tambillo",
          codigo_ubigeo: "050113",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3034",
        },
        {
          id_ubigeo: "3020-3021-3035",
          nombre_ubigeo: "Ayacucho - Huamanga - Vinchos",
          codigo_ubigeo: "050114",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3021",
          id_padre_ubigeo_dst: "3035",
        },
        {
          id_ubigeo: "3020-3044-3046",
          nombre_ubigeo: "Ayacucho - Huanca Sancos - Carapo",
          codigo_ubigeo: "050302",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3044",
          id_padre_ubigeo_dst: "3046",
        },
        {
          id_ubigeo: "3020-3044-3047",
          nombre_ubigeo: "Ayacucho - Huanca Sancos - Sacsamarca",
          codigo_ubigeo: "050303",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3044",
          id_padre_ubigeo_dst: "3047",
        },
        {
          id_ubigeo: "3020-3044-3045",
          nombre_ubigeo: "Ayacucho - Huanca Sancos - Sancos",
          codigo_ubigeo: "050301",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3044",
          id_padre_ubigeo_dst: "3045",
        },
        {
          id_ubigeo: "3020-3044-3048",
          nombre_ubigeo: "Ayacucho - Huanca Sancos - Santiago de Lucanamarca",
          codigo_ubigeo: "050304",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3044",
          id_padre_ubigeo_dst: "3048",
        },
        {
          id_ubigeo: "3020-3049-3051",
          nombre_ubigeo: "Ayacucho - Huanta - Ayahuanco",
          codigo_ubigeo: "050402",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3051",
        },
        {
          id_ubigeo: "3020-3049-3052",
          nombre_ubigeo: "Ayacucho - Huanta - Huamanguilla",
          codigo_ubigeo: "050403",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3052",
        },
        {
          id_ubigeo: "3020-3049-3050",
          nombre_ubigeo: "Ayacucho - Huanta - Huanta",
          codigo_ubigeo: "050401",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3050",
        },
        {
          id_ubigeo: "3020-3049-3053",
          nombre_ubigeo: "Ayacucho - Huanta - Iguain",
          codigo_ubigeo: "050404",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3053",
        },
        {
          id_ubigeo: "3020-3049-3057",
          nombre_ubigeo: "Ayacucho - Huanta - Llochegua",
          codigo_ubigeo: "050408",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3057",
        },
        {
          id_ubigeo: "3020-3049-3054",
          nombre_ubigeo: "Ayacucho - Huanta - Luricocha",
          codigo_ubigeo: "050405",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3054",
        },
        {
          id_ubigeo: "3020-3049-3055",
          nombre_ubigeo: "Ayacucho - Huanta - Santillana",
          codigo_ubigeo: "050406",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3055",
        },
        {
          id_ubigeo: "3020-3049-3056",
          nombre_ubigeo: "Ayacucho - Huanta - Sivia",
          codigo_ubigeo: "050407",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3049",
          id_padre_ubigeo_dst: "3056",
        },
        {
          id_ubigeo: "3020-3058-3060",
          nombre_ubigeo: "Ayacucho - La Mar - Anco",
          codigo_ubigeo: "050502",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3060",
        },
        {
          id_ubigeo: "3020-3058-3061",
          nombre_ubigeo: "Ayacucho - La Mar - Ayna",
          codigo_ubigeo: "050503",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3061",
        },
        {
          id_ubigeo: "3020-3058-3062",
          nombre_ubigeo: "Ayacucho - La Mar - Chilcas",
          codigo_ubigeo: "050504",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3062",
        },
        {
          id_ubigeo: "3020-3058-3063",
          nombre_ubigeo: "Ayacucho - La Mar - Chungui",
          codigo_ubigeo: "050505",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3063",
        },
        {
          id_ubigeo: "3020-3058-3064",
          nombre_ubigeo: "Ayacucho - La Mar - Luis Carranza",
          codigo_ubigeo: "050506",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3064",
        },
        {
          id_ubigeo: "3020-3058-3059",
          nombre_ubigeo: "Ayacucho - La Mar - San Miguel",
          codigo_ubigeo: "050501",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3059",
        },
        {
          id_ubigeo: "3020-3058-3065",
          nombre_ubigeo: "Ayacucho - La Mar - Santa Rosa",
          codigo_ubigeo: "050507",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3065",
        },
        {
          id_ubigeo: "3020-3058-3066",
          nombre_ubigeo: "Ayacucho - La Mar - Tambo",
          codigo_ubigeo: "050508",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3058",
          id_padre_ubigeo_dst: "3066",
        },
        {
          id_ubigeo: "3020-3067-3069",
          nombre_ubigeo: "Ayacucho - Lucanas - Aucara",
          codigo_ubigeo: "050602",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3069",
        },
        {
          id_ubigeo: "3020-3067-3070",
          nombre_ubigeo: "Ayacucho - Lucanas - Cabana",
          codigo_ubigeo: "050603",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3070",
        },
        {
          id_ubigeo: "3020-3067-3071",
          nombre_ubigeo: "Ayacucho - Lucanas - Carmen Salcedo",
          codigo_ubigeo: "050604",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3071",
        },
        {
          id_ubigeo: "3020-3067-3072",
          nombre_ubigeo: "Ayacucho - Lucanas - Chaviqa",
          codigo_ubigeo: "050605",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3072",
        },
        {
          id_ubigeo: "3020-3067-3073",
          nombre_ubigeo: "Ayacucho - Lucanas - Chipao",
          codigo_ubigeo: "050606",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3073",
        },
        {
          id_ubigeo: "3020-3067-3074",
          nombre_ubigeo: "Ayacucho - Lucanas - Huac-Huas",
          codigo_ubigeo: "050607",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3074",
        },
        {
          id_ubigeo: "3020-3067-3075",
          nombre_ubigeo: "Ayacucho - Lucanas - Laramate",
          codigo_ubigeo: "050608",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3075",
        },
        {
          id_ubigeo: "3020-3067-3076",
          nombre_ubigeo: "Ayacucho - Lucanas - Leoncio Prado",
          codigo_ubigeo: "050609",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3076",
        },
        {
          id_ubigeo: "3020-3067-3077",
          nombre_ubigeo: "Ayacucho - Lucanas - Llauta",
          codigo_ubigeo: "050610",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3077",
        },
        {
          id_ubigeo: "3020-3067-3078",
          nombre_ubigeo: "Ayacucho - Lucanas - Lucanas",
          codigo_ubigeo: "050611",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3078",
        },
        {
          id_ubigeo: "3020-3067-3079",
          nombre_ubigeo: "Ayacucho - Lucanas - Ocaqa",
          codigo_ubigeo: "050612",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3079",
        },
        {
          id_ubigeo: "3020-3067-3080",
          nombre_ubigeo: "Ayacucho - Lucanas - Otoca",
          codigo_ubigeo: "050613",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3080",
        },
        {
          id_ubigeo: "3020-3067-3068",
          nombre_ubigeo: "Ayacucho - Lucanas - Puquio",
          codigo_ubigeo: "050601",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3068",
        },
        {
          id_ubigeo: "3020-3067-3081",
          nombre_ubigeo: "Ayacucho - Lucanas - Saisa",
          codigo_ubigeo: "050614",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3081",
        },
        {
          id_ubigeo: "3020-3067-3082",
          nombre_ubigeo: "Ayacucho - Lucanas - San Cristobal",
          codigo_ubigeo: "050615",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3082",
        },
        {
          id_ubigeo: "3020-3067-3083",
          nombre_ubigeo: "Ayacucho - Lucanas - San Juan",
          codigo_ubigeo: "050616",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3083",
        },
        {
          id_ubigeo: "3020-3067-3084",
          nombre_ubigeo: "Ayacucho - Lucanas - San Pedro",
          codigo_ubigeo: "050617",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3084",
        },
        {
          id_ubigeo: "3020-3067-3085",
          nombre_ubigeo: "Ayacucho - Lucanas - San Pedro de Palco",
          codigo_ubigeo: "050618",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3085",
        },
        {
          id_ubigeo: "3020-3067-3086",
          nombre_ubigeo: "Ayacucho - Lucanas - Sancos",
          codigo_ubigeo: "050619",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3086",
        },
        {
          id_ubigeo: "3020-3067-3087",
          nombre_ubigeo: "Ayacucho - Lucanas - Santa Ana de Huaycahuacho",
          codigo_ubigeo: "050620",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3087",
        },
        {
          id_ubigeo: "3020-3067-3088",
          nombre_ubigeo: "Ayacucho - Lucanas - Santa Lucia",
          codigo_ubigeo: "050621",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3067",
          id_padre_ubigeo_dst: "3088",
        },
        {
          id_ubigeo: "3020-3089-3091",
          nombre_ubigeo: "Ayacucho - Parinacochas - Chumpi",
          codigo_ubigeo: "050702",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3091",
        },
        {
          id_ubigeo: "3020-3089-3090",
          nombre_ubigeo: "Ayacucho - Parinacochas - Coracora",
          codigo_ubigeo: "050701",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3090",
        },
        {
          id_ubigeo: "3020-3089-3092",
          nombre_ubigeo: "Ayacucho - Parinacochas - Coronel Castaqeda",
          codigo_ubigeo: "050703",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3092",
        },
        {
          id_ubigeo: "3020-3089-3093",
          nombre_ubigeo: "Ayacucho - Parinacochas - Pacapausa",
          codigo_ubigeo: "050704",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3093",
        },
        {
          id_ubigeo: "3020-3089-3094",
          nombre_ubigeo: "Ayacucho - Parinacochas - Pullo",
          codigo_ubigeo: "050705",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3094",
        },
        {
          id_ubigeo: "3020-3089-3095",
          nombre_ubigeo: "Ayacucho - Parinacochas - Puyusca",
          codigo_ubigeo: "050706",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3095",
        },
        {
          id_ubigeo: "3020-3089-3096",
          nombre_ubigeo: "Ayacucho - Parinacochas - San Francisco de Ravacayco",
          codigo_ubigeo: "050707",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3096",
        },
        {
          id_ubigeo: "3020-3089-3097",
          nombre_ubigeo: "Ayacucho - Parinacochas - Upahuacho",
          codigo_ubigeo: "050708",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3089",
          id_padre_ubigeo_dst: "3097",
        },
        {
          id_ubigeo: "3020-3098-3100",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Colta",
          codigo_ubigeo: "050802",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3100",
        },
        {
          id_ubigeo: "3020-3098-3101",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Corculla",
          codigo_ubigeo: "050803",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3101",
        },
        {
          id_ubigeo: "3020-3098-3102",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Lampa",
          codigo_ubigeo: "050804",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3102",
        },
        {
          id_ubigeo: "3020-3098-3103",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Marcabamba",
          codigo_ubigeo: "050805",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3103",
        },
        {
          id_ubigeo: "3020-3098-3104",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Oyolo",
          codigo_ubigeo: "050806",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3104",
        },
        {
          id_ubigeo: "3020-3098-3105",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Pararca",
          codigo_ubigeo: "050807",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3105",
        },
        {
          id_ubigeo: "3020-3098-3099",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Pausa",
          codigo_ubigeo: "050801",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3099",
        },
        {
          id_ubigeo: "3020-3098-3106",
          nombre_ubigeo:
            "Ayacucho - Paucar del Sara Sara - San Javier de Alpabamba",
          codigo_ubigeo: "050808",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3106",
        },
        {
          id_ubigeo: "3020-3098-3107",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - San Jose de Ushua",
          codigo_ubigeo: "050809",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3107",
        },
        {
          id_ubigeo: "3020-3098-3108",
          nombre_ubigeo: "Ayacucho - Paucar del Sara Sara - Sara Sara",
          codigo_ubigeo: "050810",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3098",
          id_padre_ubigeo_dst: "3108",
        },
        {
          id_ubigeo: "3020-3109-3111",
          nombre_ubigeo: "Ayacucho - Sucre - Belen",
          codigo_ubigeo: "050902",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3111",
        },
        {
          id_ubigeo: "3020-3109-3112",
          nombre_ubigeo: "Ayacucho - Sucre - Chalcos",
          codigo_ubigeo: "050903",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3112",
        },
        {
          id_ubigeo: "3020-3109-3113",
          nombre_ubigeo: "Ayacucho - Sucre - Chilcayoc",
          codigo_ubigeo: "050904",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3113",
        },
        {
          id_ubigeo: "3020-3109-3114",
          nombre_ubigeo: "Ayacucho - Sucre - Huacaqa",
          codigo_ubigeo: "050905",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3114",
        },
        {
          id_ubigeo: "3020-3109-3115",
          nombre_ubigeo: "Ayacucho - Sucre - Morcolla",
          codigo_ubigeo: "050906",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3115",
        },
        {
          id_ubigeo: "3020-3109-3116",
          nombre_ubigeo: "Ayacucho - Sucre - Paico",
          codigo_ubigeo: "050907",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3116",
        },
        {
          id_ubigeo: "3020-3109-3110",
          nombre_ubigeo: "Ayacucho - Sucre - Querobamba",
          codigo_ubigeo: "050901",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3110",
        },
        {
          id_ubigeo: "3020-3109-3117",
          nombre_ubigeo: "Ayacucho - Sucre - San Pedro de Larcay",
          codigo_ubigeo: "050908",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3117",
        },
        {
          id_ubigeo: "3020-3109-3118",
          nombre_ubigeo: "Ayacucho - Sucre - San Salvador de Quije",
          codigo_ubigeo: "050909",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3118",
        },
        {
          id_ubigeo: "3020-3109-3119",
          nombre_ubigeo: "Ayacucho - Sucre - Santiago de Paucaray",
          codigo_ubigeo: "050910",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3119",
        },
        {
          id_ubigeo: "3020-3109-3120",
          nombre_ubigeo: "Ayacucho - Sucre - Soras",
          codigo_ubigeo: "050911",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3109",
          id_padre_ubigeo_dst: "3120",
        },
        {
          id_ubigeo: "3020-3121-3123",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Alcamenca",
          codigo_ubigeo: "051002",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3123",
        },
        {
          id_ubigeo: "3020-3121-3124",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Apongo",
          codigo_ubigeo: "051003",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3124",
        },
        {
          id_ubigeo: "3020-3121-3125",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Asquipata",
          codigo_ubigeo: "051004",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3125",
        },
        {
          id_ubigeo: "3020-3121-3126",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Canaria",
          codigo_ubigeo: "051005",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3126",
        },
        {
          id_ubigeo: "3020-3121-3127",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Cayara",
          codigo_ubigeo: "051006",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3127",
        },
        {
          id_ubigeo: "3020-3121-3128",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Colca",
          codigo_ubigeo: "051007",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3128",
        },
        {
          id_ubigeo: "3020-3121-3129",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Huamanquiquia",
          codigo_ubigeo: "051008",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3129",
        },
        {
          id_ubigeo: "3020-3121-3122",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Huancapi",
          codigo_ubigeo: "051001",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3122",
        },
        {
          id_ubigeo: "3020-3121-3130",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Huancaraylla",
          codigo_ubigeo: "051009",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3130",
        },
        {
          id_ubigeo: "3020-3121-3131",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Huaya",
          codigo_ubigeo: "051010",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3131",
        },
        {
          id_ubigeo: "3020-3121-3132",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Sarhua",
          codigo_ubigeo: "051011",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3132",
        },
        {
          id_ubigeo: "3020-3121-3133",
          nombre_ubigeo: "Ayacucho - Victor Fajardo - Vilcanchos",
          codigo_ubigeo: "051012",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3121",
          id_padre_ubigeo_dst: "3133",
        },
        {
          id_ubigeo: "3020-3134-3136",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Accomarca",
          codigo_ubigeo: "051102",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3136",
        },
        {
          id_ubigeo: "3020-3134-3137",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Carhuanca",
          codigo_ubigeo: "051103",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3137",
        },
        {
          id_ubigeo: "3020-3134-3138",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Concepcion",
          codigo_ubigeo: "051104",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3138",
        },
        {
          id_ubigeo: "3020-3134-3139",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Huambalpa",
          codigo_ubigeo: "051105",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3139",
        },
        {
          id_ubigeo: "3020-3134-3140",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Independencia",
          codigo_ubigeo: "051106",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3140",
        },
        {
          id_ubigeo: "3020-3134-3141",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Saurama",
          codigo_ubigeo: "051107",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3141",
        },
        {
          id_ubigeo: "3020-3134-3135",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Vilcas Huaman",
          codigo_ubigeo: "051101",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3135",
        },
        {
          id_ubigeo: "3020-3134-3142",
          nombre_ubigeo: "Ayacucho - Vilcas Huaman - Vischongo",
          codigo_ubigeo: "051108",
          id_padre_ubigeo_dpto: "3020",
          id_padre_ubigeo_prov: "3134",
          id_padre_ubigeo_dst: "3142",
        },
        {
          id_ubigeo: "3143-3157-3159",
          nombre_ubigeo: "Cajamarca - Cajabamba - Cachachi",
          codigo_ubigeo: "060202",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3157",
          id_padre_ubigeo_dst: "3159",
        },
        {
          id_ubigeo: "3143-3157-3158",
          nombre_ubigeo: "Cajamarca - Cajabamba - Cajabamba",
          codigo_ubigeo: "060201",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3157",
          id_padre_ubigeo_dst: "3158",
        },
        {
          id_ubigeo: "3143-3157-3160",
          nombre_ubigeo: "Cajamarca - Cajabamba - Condebamba",
          codigo_ubigeo: "060203",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3157",
          id_padre_ubigeo_dst: "3160",
        },
        {
          id_ubigeo: "3143-3157-3161",
          nombre_ubigeo: "Cajamarca - Cajabamba - Sitacocha",
          codigo_ubigeo: "060204",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3157",
          id_padre_ubigeo_dst: "3161",
        },
        {
          id_ubigeo: "3143-3144-3146",
          nombre_ubigeo: "Cajamarca - Cajamarca - Asuncion",
          codigo_ubigeo: "060102",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3146",
        },
        {
          id_ubigeo: "3143-3144-3145",
          nombre_ubigeo: "Cajamarca - Cajamarca - Cajamarca",
          codigo_ubigeo: "060101",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3145",
        },
        {
          id_ubigeo: "3143-3144-3147",
          nombre_ubigeo: "Cajamarca - Cajamarca - Chetilla",
          codigo_ubigeo: "060103",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3147",
        },
        {
          id_ubigeo: "3143-3144-3148",
          nombre_ubigeo: "Cajamarca - Cajamarca - Cospan",
          codigo_ubigeo: "060104",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3148",
        },
        {
          id_ubigeo: "3143-3144-3149",
          nombre_ubigeo: "Cajamarca - Cajamarca - Encaqada",
          codigo_ubigeo: "060105",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3149",
        },
        {
          id_ubigeo: "3143-3144-3150",
          nombre_ubigeo: "Cajamarca - Cajamarca - Jesus",
          codigo_ubigeo: "060106",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3150",
        },
        {
          id_ubigeo: "3143-3144-3151",
          nombre_ubigeo: "Cajamarca - Cajamarca - Llacanora",
          codigo_ubigeo: "060107",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3151",
        },
        {
          id_ubigeo: "3143-3144-3152",
          nombre_ubigeo: "Cajamarca - Cajamarca - Los Baqos del Inca",
          codigo_ubigeo: "060108",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3152",
        },
        {
          id_ubigeo: "3143-3144-3153",
          nombre_ubigeo: "Cajamarca - Cajamarca - Magdalena",
          codigo_ubigeo: "060109",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3153",
        },
        {
          id_ubigeo: "3143-3144-3154",
          nombre_ubigeo: "Cajamarca - Cajamarca - Matara",
          codigo_ubigeo: "060110",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3154",
        },
        {
          id_ubigeo: "3143-3144-3155",
          nombre_ubigeo: "Cajamarca - Cajamarca - Namora",
          codigo_ubigeo: "060111",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3155",
        },
        {
          id_ubigeo: "3143-3144-3156",
          nombre_ubigeo: "Cajamarca - Cajamarca - San Juan",
          codigo_ubigeo: "060112",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3144",
          id_padre_ubigeo_dst: "3156",
        },
        {
          id_ubigeo: "3143-3162-3163",
          nombre_ubigeo: "Cajamarca - Celendin - Celendin",
          codigo_ubigeo: "060301",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3163",
        },
        {
          id_ubigeo: "3143-3162-3164",
          nombre_ubigeo: "Cajamarca - Celendin - Chumuch",
          codigo_ubigeo: "060302",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3164",
        },
        {
          id_ubigeo: "3143-3162-3165",
          nombre_ubigeo: "Cajamarca - Celendin - Cortegana",
          codigo_ubigeo: "060303",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3165",
        },
        {
          id_ubigeo: "3143-3162-3166",
          nombre_ubigeo: "Cajamarca - Celendin - Huasmin",
          codigo_ubigeo: "060304",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3166",
        },
        {
          id_ubigeo: "3143-3162-3167",
          nombre_ubigeo: "Cajamarca - Celendin - Jorge Chavez",
          codigo_ubigeo: "060305",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3167",
        },
        {
          id_ubigeo: "3143-3162-3168",
          nombre_ubigeo: "Cajamarca - Celendin - Jose Galvez",
          codigo_ubigeo: "060306",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3168",
        },
        {
          id_ubigeo: "3143-3162-3174",
          nombre_ubigeo: "Cajamarca - Celendin - La Libertad de Pallan",
          codigo_ubigeo: "060312",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3174",
        },
        {
          id_ubigeo: "3143-3162-3169",
          nombre_ubigeo: "Cajamarca - Celendin - Miguel Iglesias",
          codigo_ubigeo: "060307",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3169",
        },
        {
          id_ubigeo: "3143-3162-3170",
          nombre_ubigeo: "Cajamarca - Celendin - Oxamarca",
          codigo_ubigeo: "060308",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3170",
        },
        {
          id_ubigeo: "3143-3162-3171",
          nombre_ubigeo: "Cajamarca - Celendin - Sorochuco",
          codigo_ubigeo: "060309",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3171",
        },
        {
          id_ubigeo: "3143-3162-3172",
          nombre_ubigeo: "Cajamarca - Celendin - Sucre",
          codigo_ubigeo: "060310",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3172",
        },
        {
          id_ubigeo: "3143-3162-3173",
          nombre_ubigeo: "Cajamarca - Celendin - Utco",
          codigo_ubigeo: "060311",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3162",
          id_padre_ubigeo_dst: "3173",
        },
        {
          id_ubigeo: "3143-3175-3177",
          nombre_ubigeo: "Cajamarca - Chota - Anguia",
          codigo_ubigeo: "060402",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3177",
        },
        {
          id_ubigeo: "3143-3175-3178",
          nombre_ubigeo: "Cajamarca - Chota - Chadin",
          codigo_ubigeo: "060403",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3178",
        },
        {
          id_ubigeo: "3143-3175-3194",
          nombre_ubigeo: "Cajamarca - Chota - Chalamarca",
          codigo_ubigeo: "060419",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3194",
        },
        {
          id_ubigeo: "3143-3175-3179",
          nombre_ubigeo: "Cajamarca - Chota - Chiguirip",
          codigo_ubigeo: "060404",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3179",
        },
        {
          id_ubigeo: "3143-3175-3180",
          nombre_ubigeo: "Cajamarca - Chota - Chimban",
          codigo_ubigeo: "060405",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3180",
        },
        {
          id_ubigeo: "3143-3175-3181",
          nombre_ubigeo: "Cajamarca - Chota - Choropampa",
          codigo_ubigeo: "060406",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3181",
        },
        {
          id_ubigeo: "3143-3175-3176",
          nombre_ubigeo: "Cajamarca - Chota - Chota",
          codigo_ubigeo: "060401",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3176",
        },
        {
          id_ubigeo: "3143-3175-3182",
          nombre_ubigeo: "Cajamarca - Chota - Cochabamba",
          codigo_ubigeo: "060407",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3182",
        },
        {
          id_ubigeo: "3143-3175-3183",
          nombre_ubigeo: "Cajamarca - Chota - Conchan",
          codigo_ubigeo: "060408",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3183",
        },
        {
          id_ubigeo: "3143-3175-3184",
          nombre_ubigeo: "Cajamarca - Chota - Huambos",
          codigo_ubigeo: "060409",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3184",
        },
        {
          id_ubigeo: "3143-3175-3185",
          nombre_ubigeo: "Cajamarca - Chota - Lajas",
          codigo_ubigeo: "060410",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3185",
        },
        {
          id_ubigeo: "3143-3175-3186",
          nombre_ubigeo: "Cajamarca - Chota - Llama",
          codigo_ubigeo: "060411",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3186",
        },
        {
          id_ubigeo: "3143-3175-3187",
          nombre_ubigeo: "Cajamarca - Chota - Miracosta",
          codigo_ubigeo: "060412",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3187",
        },
        {
          id_ubigeo: "3143-3175-3188",
          nombre_ubigeo: "Cajamarca - Chota - Paccha",
          codigo_ubigeo: "060413",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3188",
        },
        {
          id_ubigeo: "3143-3175-3189",
          nombre_ubigeo: "Cajamarca - Chota - Pion",
          codigo_ubigeo: "060414",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3189",
        },
        {
          id_ubigeo: "3143-3175-3190",
          nombre_ubigeo: "Cajamarca - Chota - Querocoto",
          codigo_ubigeo: "060415",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3190",
        },
        {
          id_ubigeo: "3143-3175-3191",
          nombre_ubigeo: "Cajamarca - Chota - San Juan de Licupis",
          codigo_ubigeo: "060416",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3191",
        },
        {
          id_ubigeo: "3143-3175-3192",
          nombre_ubigeo: "Cajamarca - Chota - Tacabamba",
          codigo_ubigeo: "060417",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3192",
        },
        {
          id_ubigeo: "3143-3175-3193",
          nombre_ubigeo: "Cajamarca - Chota - Tocmoche",
          codigo_ubigeo: "060418",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3175",
          id_padre_ubigeo_dst: "3193",
        },
        {
          id_ubigeo: "3143-3195-3197",
          nombre_ubigeo: "Cajamarca - Contumaza - Chilete",
          codigo_ubigeo: "060502",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3197",
        },
        {
          id_ubigeo: "3143-3195-3196",
          nombre_ubigeo: "Cajamarca - Contumaza - Contumaza",
          codigo_ubigeo: "060501",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3196",
        },
        {
          id_ubigeo: "3143-3195-3198",
          nombre_ubigeo: "Cajamarca - Contumaza - Cupisnique",
          codigo_ubigeo: "060503",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3198",
        },
        {
          id_ubigeo: "3143-3195-3199",
          nombre_ubigeo: "Cajamarca - Contumaza - Guzmango",
          codigo_ubigeo: "060504",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3199",
        },
        {
          id_ubigeo: "3143-3195-3200",
          nombre_ubigeo: "Cajamarca - Contumaza - San Benito",
          codigo_ubigeo: "060505",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3200",
        },
        {
          id_ubigeo: "3143-3195-3201",
          nombre_ubigeo: "Cajamarca - Contumaza - Santa Cruz de Toled",
          codigo_ubigeo: "060506",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3201",
        },
        {
          id_ubigeo: "3143-3195-3202",
          nombre_ubigeo: "Cajamarca - Contumaza - Tantarica",
          codigo_ubigeo: "060507",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3202",
        },
        {
          id_ubigeo: "3143-3195-3203",
          nombre_ubigeo: "Cajamarca - Contumaza - Yonan",
          codigo_ubigeo: "060508",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3195",
          id_padre_ubigeo_dst: "3203",
        },
        {
          id_ubigeo: "3143-3204-3206",
          nombre_ubigeo: "Cajamarca - Cutervo - Callayuc",
          codigo_ubigeo: "060602",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3206",
        },
        {
          id_ubigeo: "3143-3204-3207",
          nombre_ubigeo: "Cajamarca - Cutervo - Choros",
          codigo_ubigeo: "060603",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3207",
        },
        {
          id_ubigeo: "3143-3204-3208",
          nombre_ubigeo: "Cajamarca - Cutervo - Cujillo",
          codigo_ubigeo: "060604",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3208",
        },
        {
          id_ubigeo: "3143-3204-3205",
          nombre_ubigeo: "Cajamarca - Cutervo - Cutervo",
          codigo_ubigeo: "060601",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3205",
        },
        {
          id_ubigeo: "3143-3204-3209",
          nombre_ubigeo: "Cajamarca - Cutervo - La Ramada",
          codigo_ubigeo: "060605",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3209",
        },
        {
          id_ubigeo: "3143-3204-3210",
          nombre_ubigeo: "Cajamarca - Cutervo - Pimpingos",
          codigo_ubigeo: "060606",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3210",
        },
        {
          id_ubigeo: "3143-3204-3211",
          nombre_ubigeo: "Cajamarca - Cutervo - Querocotillo",
          codigo_ubigeo: "060607",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3211",
        },
        {
          id_ubigeo: "3143-3204-3212",
          nombre_ubigeo: "Cajamarca - Cutervo - San Andres de Cutervo",
          codigo_ubigeo: "060608",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3212",
        },
        {
          id_ubigeo: "3143-3204-3213",
          nombre_ubigeo: "Cajamarca - Cutervo - San Juan de Cutervo",
          codigo_ubigeo: "060609",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3213",
        },
        {
          id_ubigeo: "3143-3204-3214",
          nombre_ubigeo: "Cajamarca - Cutervo - San Luis de Lucma",
          codigo_ubigeo: "060610",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3214",
        },
        {
          id_ubigeo: "3143-3204-3215",
          nombre_ubigeo: "Cajamarca - Cutervo - Santa Cruz",
          codigo_ubigeo: "060611",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3215",
        },
        {
          id_ubigeo: "3143-3204-3216",
          nombre_ubigeo: "Cajamarca - Cutervo - Santo Domingo de la Capilla",
          codigo_ubigeo: "060612",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3216",
        },
        {
          id_ubigeo: "3143-3204-3217",
          nombre_ubigeo: "Cajamarca - Cutervo - Santo Tomas",
          codigo_ubigeo: "060613",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3217",
        },
        {
          id_ubigeo: "3143-3204-3218",
          nombre_ubigeo: "Cajamarca - Cutervo - Socota",
          codigo_ubigeo: "060614",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3218",
        },
        {
          id_ubigeo: "3143-3204-3219",
          nombre_ubigeo: "Cajamarca - Cutervo - Toribio Casanova",
          codigo_ubigeo: "060615",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3204",
          id_padre_ubigeo_dst: "3219",
        },
        {
          id_ubigeo: "3143-3220-3221",
          nombre_ubigeo: "Cajamarca - Hualgayoc - Bambamarca",
          codigo_ubigeo: "060701",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3220",
          id_padre_ubigeo_dst: "3221",
        },
        {
          id_ubigeo: "3143-3220-3222",
          nombre_ubigeo: "Cajamarca - Hualgayoc - Chugur",
          codigo_ubigeo: "060702",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3220",
          id_padre_ubigeo_dst: "3222",
        },
        {
          id_ubigeo: "3143-3220-3223",
          nombre_ubigeo: "Cajamarca - Hualgayoc - Hualgayoc",
          codigo_ubigeo: "060703",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3220",
          id_padre_ubigeo_dst: "3223",
        },
        {
          id_ubigeo: "3143-3224-3226",
          nombre_ubigeo: "Cajamarca - Jaen - Bellavista",
          codigo_ubigeo: "060802",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3226",
        },
        {
          id_ubigeo: "3143-3224-3227",
          nombre_ubigeo: "Cajamarca - Jaen - Chontali",
          codigo_ubigeo: "060803",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3227",
        },
        {
          id_ubigeo: "3143-3224-3228",
          nombre_ubigeo: "Cajamarca - Jaen - Colasay",
          codigo_ubigeo: "060804",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3228",
        },
        {
          id_ubigeo: "3143-3224-3229",
          nombre_ubigeo: "Cajamarca - Jaen - Huabal",
          codigo_ubigeo: "060805",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3229",
        },
        {
          id_ubigeo: "3143-3224-3225",
          nombre_ubigeo: "Cajamarca - Jaen - Jaen",
          codigo_ubigeo: "060801",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3225",
        },
        {
          id_ubigeo: "3143-3224-3230",
          nombre_ubigeo: "Cajamarca - Jaen - Las Pirias",
          codigo_ubigeo: "060806",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3230",
        },
        {
          id_ubigeo: "3143-3224-3231",
          nombre_ubigeo: "Cajamarca - Jaen - Pomahuaca",
          codigo_ubigeo: "060807",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3231",
        },
        {
          id_ubigeo: "3143-3224-3232",
          nombre_ubigeo: "Cajamarca - Jaen - Pucara",
          codigo_ubigeo: "060808",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3232",
        },
        {
          id_ubigeo: "3143-3224-3233",
          nombre_ubigeo: "Cajamarca - Jaen - Sallique",
          codigo_ubigeo: "060809",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3233",
        },
        {
          id_ubigeo: "3143-3224-3234",
          nombre_ubigeo: "Cajamarca - Jaen - San Felipe",
          codigo_ubigeo: "060810",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3234",
        },
        {
          id_ubigeo: "3143-3224-3235",
          nombre_ubigeo: "Cajamarca - Jaen - San Jose del Alto",
          codigo_ubigeo: "060811",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3235",
        },
        {
          id_ubigeo: "3143-3224-3236",
          nombre_ubigeo: "Cajamarca - Jaen - Santa Rosa",
          codigo_ubigeo: "060812",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3224",
          id_padre_ubigeo_dst: "3236",
        },
        {
          id_ubigeo: "3143-3237-3239",
          nombre_ubigeo: "Cajamarca - San Ignacio - Chirinos",
          codigo_ubigeo: "060902",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3237",
          id_padre_ubigeo_dst: "3239",
        },
        {
          id_ubigeo: "3143-3237-3240",
          nombre_ubigeo: "Cajamarca - San Ignacio - Huarango",
          codigo_ubigeo: "060903",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3237",
          id_padre_ubigeo_dst: "3240",
        },
        {
          id_ubigeo: "3143-3237-3241",
          nombre_ubigeo: "Cajamarca - San Ignacio - La Coipa",
          codigo_ubigeo: "060904",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3237",
          id_padre_ubigeo_dst: "3241",
        },
        {
          id_ubigeo: "3143-3237-3242",
          nombre_ubigeo: "Cajamarca - San Ignacio - Namballe",
          codigo_ubigeo: "060905",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3237",
          id_padre_ubigeo_dst: "3242",
        },
        {
          id_ubigeo: "3143-3237-3238",
          nombre_ubigeo: "Cajamarca - San Ignacio - San Ignacio",
          codigo_ubigeo: "060901",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3237",
          id_padre_ubigeo_dst: "3238",
        },
        {
          id_ubigeo: "3143-3237-3243",
          nombre_ubigeo: "Cajamarca - San Ignacio - San Jose de Lourdes",
          codigo_ubigeo: "060906",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3237",
          id_padre_ubigeo_dst: "3243",
        },
        {
          id_ubigeo: "3143-3237-3244",
          nombre_ubigeo: "Cajamarca - San Ignacio - Tabaconas",
          codigo_ubigeo: "060907",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3237",
          id_padre_ubigeo_dst: "3244",
        },
        {
          id_ubigeo: "3143-3245-3247",
          nombre_ubigeo: "Cajamarca - San Marcos - Chancay",
          codigo_ubigeo: "061002",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3245",
          id_padre_ubigeo_dst: "3247",
        },
        {
          id_ubigeo: "3143-3245-3248",
          nombre_ubigeo: "Cajamarca - San Marcos - Eduardo Villanueva",
          codigo_ubigeo: "061003",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3245",
          id_padre_ubigeo_dst: "3248",
        },
        {
          id_ubigeo: "3143-3245-3249",
          nombre_ubigeo: "Cajamarca - San Marcos - Gregorio Pita",
          codigo_ubigeo: "061004",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3245",
          id_padre_ubigeo_dst: "3249",
        },
        {
          id_ubigeo: "3143-3245-3250",
          nombre_ubigeo: "Cajamarca - San Marcos - Ichocan",
          codigo_ubigeo: "061005",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3245",
          id_padre_ubigeo_dst: "3250",
        },
        {
          id_ubigeo: "3143-3245-3251",
          nombre_ubigeo: "Cajamarca - San Marcos - Jose Manuel Quiroz",
          codigo_ubigeo: "061006",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3245",
          id_padre_ubigeo_dst: "3251",
        },
        {
          id_ubigeo: "3143-3245-3252",
          nombre_ubigeo: "Cajamarca - San Marcos - Jose Sabogal",
          codigo_ubigeo: "061007",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3245",
          id_padre_ubigeo_dst: "3252",
        },
        {
          id_ubigeo: "3143-3245-3246",
          nombre_ubigeo: "Cajamarca - San Marcos - Pedro Galvez",
          codigo_ubigeo: "061001",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3245",
          id_padre_ubigeo_dst: "3246",
        },
        {
          id_ubigeo: "3143-3253-3255",
          nombre_ubigeo: "Cajamarca - San Miguel - Bolivar",
          codigo_ubigeo: "061102",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3255",
        },
        {
          id_ubigeo: "3143-3253-3256",
          nombre_ubigeo: "Cajamarca - San Miguel - Calquis",
          codigo_ubigeo: "061103",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3256",
        },
        {
          id_ubigeo: "3143-3253-3257",
          nombre_ubigeo: "Cajamarca - San Miguel - Catilluc",
          codigo_ubigeo: "061104",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3257",
        },
        {
          id_ubigeo: "3143-3253-3258",
          nombre_ubigeo: "Cajamarca - San Miguel - El Prado",
          codigo_ubigeo: "061105",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3258",
        },
        {
          id_ubigeo: "3143-3253-3259",
          nombre_ubigeo: "Cajamarca - San Miguel - La Florida",
          codigo_ubigeo: "061106",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3259",
        },
        {
          id_ubigeo: "3143-3253-3260",
          nombre_ubigeo: "Cajamarca - San Miguel - Llapa",
          codigo_ubigeo: "061107",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3260",
        },
        {
          id_ubigeo: "3143-3253-3261",
          nombre_ubigeo: "Cajamarca - San Miguel - Nanchoc",
          codigo_ubigeo: "061108",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3261",
        },
        {
          id_ubigeo: "3143-3253-3262",
          nombre_ubigeo: "Cajamarca - San Miguel - Niepos",
          codigo_ubigeo: "061109",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3262",
        },
        {
          id_ubigeo: "3143-3253-3263",
          nombre_ubigeo: "Cajamarca - San Miguel - San Gregorio",
          codigo_ubigeo: "061110",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3263",
        },
        {
          id_ubigeo: "3143-3253-3254",
          nombre_ubigeo: "Cajamarca - San Miguel - San Miguel",
          codigo_ubigeo: "061101",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3254",
        },
        {
          id_ubigeo: "3143-3253-3264",
          nombre_ubigeo: "Cajamarca - San Miguel - San Silvestre de Cochan",
          codigo_ubigeo: "061111",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3264",
        },
        {
          id_ubigeo: "3143-3253-3265",
          nombre_ubigeo: "Cajamarca - San Miguel - Tongod",
          codigo_ubigeo: "061112",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3265",
        },
        {
          id_ubigeo: "3143-3253-3266",
          nombre_ubigeo: "Cajamarca - San Miguel - Union Agua Blanca",
          codigo_ubigeo: "061113",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3253",
          id_padre_ubigeo_dst: "3266",
        },
        {
          id_ubigeo: "3143-3267-3269",
          nombre_ubigeo: "Cajamarca - San Pablo - San Bernardino",
          codigo_ubigeo: "061202",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3267",
          id_padre_ubigeo_dst: "3269",
        },
        {
          id_ubigeo: "3143-3267-3270",
          nombre_ubigeo: "Cajamarca - San Pablo - San Luis",
          codigo_ubigeo: "061203",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3267",
          id_padre_ubigeo_dst: "3270",
        },
        {
          id_ubigeo: "3143-3267-3268",
          nombre_ubigeo: "Cajamarca - San Pablo - San Pablo",
          codigo_ubigeo: "061201",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3267",
          id_padre_ubigeo_dst: "3268",
        },
        {
          id_ubigeo: "3143-3267-3271",
          nombre_ubigeo: "Cajamarca - San Pablo - Tumbaden",
          codigo_ubigeo: "061204",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3267",
          id_padre_ubigeo_dst: "3271",
        },
        {
          id_ubigeo: "3143-3272-3274",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Andabamba",
          codigo_ubigeo: "061302",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3274",
        },
        {
          id_ubigeo: "3143-3272-3275",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Catache",
          codigo_ubigeo: "061303",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3275",
        },
        {
          id_ubigeo: "3143-3272-3276",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Chancaybaqos",
          codigo_ubigeo: "061304",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3276",
        },
        {
          id_ubigeo: "3143-3272-3277",
          nombre_ubigeo: "Cajamarca - Santa Cruz - La Esperanza",
          codigo_ubigeo: "061305",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3277",
        },
        {
          id_ubigeo: "3143-3272-3278",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Ninabamba",
          codigo_ubigeo: "061306",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3278",
        },
        {
          id_ubigeo: "3143-3272-3279",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Pulan",
          codigo_ubigeo: "061307",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3279",
        },
        {
          id_ubigeo: "3143-3272-3273",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Santa Cruz",
          codigo_ubigeo: "061301",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3273",
        },
        {
          id_ubigeo: "3143-3272-3280",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Saucepampa",
          codigo_ubigeo: "061308",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3280",
        },
        {
          id_ubigeo: "3143-3272-3281",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Sexi",
          codigo_ubigeo: "061309",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3281",
        },
        {
          id_ubigeo: "3143-3272-3282",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Uticyacu",
          codigo_ubigeo: "061310",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3282",
        },
        {
          id_ubigeo: "3143-3272-3283",
          nombre_ubigeo: "Cajamarca - Santa Cruz - Yauyucan",
          codigo_ubigeo: "061311",
          id_padre_ubigeo_dpto: "3143",
          id_padre_ubigeo_prov: "3272",
          id_padre_ubigeo_dst: "3283",
        },
        {
          id_ubigeo: "3292-3302-3303",
          nombre_ubigeo: "Cusco - Acomayo - Acomayo",
          codigo_ubigeo: "080201",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3302",
          id_padre_ubigeo_dst: "3303",
        },
        {
          id_ubigeo: "3292-3302-3304",
          nombre_ubigeo: "Cusco - Acomayo - Acopia",
          codigo_ubigeo: "080202",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3302",
          id_padre_ubigeo_dst: "3304",
        },
        {
          id_ubigeo: "3292-3302-3305",
          nombre_ubigeo: "Cusco - Acomayo - Acos",
          codigo_ubigeo: "080203",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3302",
          id_padre_ubigeo_dst: "3305",
        },
        {
          id_ubigeo: "3292-3302-3306",
          nombre_ubigeo: "Cusco - Acomayo - Mosoc Llacta",
          codigo_ubigeo: "080204",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3302",
          id_padre_ubigeo_dst: "3306",
        },
        {
          id_ubigeo: "3292-3302-3307",
          nombre_ubigeo: "Cusco - Acomayo - Pomacanchi",
          codigo_ubigeo: "080205",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3302",
          id_padre_ubigeo_dst: "3307",
        },
        {
          id_ubigeo: "3292-3302-3308",
          nombre_ubigeo: "Cusco - Acomayo - Rondocan",
          codigo_ubigeo: "080206",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3302",
          id_padre_ubigeo_dst: "3308",
        },
        {
          id_ubigeo: "3292-3302-3309",
          nombre_ubigeo: "Cusco - Acomayo - Sangarara",
          codigo_ubigeo: "080207",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3302",
          id_padre_ubigeo_dst: "3309",
        },
        {
          id_ubigeo: "3292-3310-3312",
          nombre_ubigeo: "Cusco - Anta - Ancahuasi",
          codigo_ubigeo: "080302",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3312",
        },
        {
          id_ubigeo: "3292-3310-3311",
          nombre_ubigeo: "Cusco - Anta - Anta",
          codigo_ubigeo: "080301",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3311",
        },
        {
          id_ubigeo: "3292-3310-3313",
          nombre_ubigeo: "Cusco - Anta - Cachimayo",
          codigo_ubigeo: "080303",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3313",
        },
        {
          id_ubigeo: "3292-3310-3314",
          nombre_ubigeo: "Cusco - Anta - Chinchaypujio",
          codigo_ubigeo: "080304",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3314",
        },
        {
          id_ubigeo: "3292-3310-3315",
          nombre_ubigeo: "Cusco - Anta - Huarocondo",
          codigo_ubigeo: "080305",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3315",
        },
        {
          id_ubigeo: "3292-3310-3316",
          nombre_ubigeo: "Cusco - Anta - Limatambo",
          codigo_ubigeo: "080306",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3316",
        },
        {
          id_ubigeo: "3292-3310-3317",
          nombre_ubigeo: "Cusco - Anta - Mollepata",
          codigo_ubigeo: "080307",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3317",
        },
        {
          id_ubigeo: "3292-3310-3318",
          nombre_ubigeo: "Cusco - Anta - Pucyura",
          codigo_ubigeo: "080308",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3318",
        },
        {
          id_ubigeo: "3292-3310-3319",
          nombre_ubigeo: "Cusco - Anta - Zurite",
          codigo_ubigeo: "080309",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3310",
          id_padre_ubigeo_dst: "3319",
        },
        {
          id_ubigeo: "3292-3320-3321",
          nombre_ubigeo: "Cusco - Calca - Calca",
          codigo_ubigeo: "080401",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3321",
        },
        {
          id_ubigeo: "3292-3320-3322",
          nombre_ubigeo: "Cusco - Calca - Coya",
          codigo_ubigeo: "080402",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3322",
        },
        {
          id_ubigeo: "3292-3320-3323",
          nombre_ubigeo: "Cusco - Calca - Lamay",
          codigo_ubigeo: "080403",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3323",
        },
        {
          id_ubigeo: "3292-3320-3324",
          nombre_ubigeo: "Cusco - Calca - Lares",
          codigo_ubigeo: "080404",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3324",
        },
        {
          id_ubigeo: "3292-3320-3325",
          nombre_ubigeo: "Cusco - Calca - Pisac",
          codigo_ubigeo: "080405",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3325",
        },
        {
          id_ubigeo: "3292-3320-3326",
          nombre_ubigeo: "Cusco - Calca - San Salvador",
          codigo_ubigeo: "080406",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3326",
        },
        {
          id_ubigeo: "3292-3320-3327",
          nombre_ubigeo: "Cusco - Calca - Taray",
          codigo_ubigeo: "080407",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3327",
        },
        {
          id_ubigeo: "3292-3320-3328",
          nombre_ubigeo: "Cusco - Calca - Yanatile",
          codigo_ubigeo: "080408",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3320",
          id_padre_ubigeo_dst: "3328",
        },
        {
          id_ubigeo: "3292-3329-3331",
          nombre_ubigeo: "Cusco - Canas - Checca",
          codigo_ubigeo: "080502",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3331",
        },
        {
          id_ubigeo: "3292-3329-3332",
          nombre_ubigeo: "Cusco - Canas - Kunturkanki",
          codigo_ubigeo: "080503",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3332",
        },
        {
          id_ubigeo: "3292-3329-3333",
          nombre_ubigeo: "Cusco - Canas - Langui",
          codigo_ubigeo: "080504",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3333",
        },
        {
          id_ubigeo: "3292-3329-3334",
          nombre_ubigeo: "Cusco - Canas - Layo",
          codigo_ubigeo: "080505",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3334",
        },
        {
          id_ubigeo: "3292-3329-3335",
          nombre_ubigeo: "Cusco - Canas - Pampamarca",
          codigo_ubigeo: "080506",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3335",
        },
        {
          id_ubigeo: "3292-3329-3336",
          nombre_ubigeo: "Cusco - Canas - Quehue",
          codigo_ubigeo: "080507",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3336",
        },
        {
          id_ubigeo: "3292-3329-3337",
          nombre_ubigeo: "Cusco - Canas - Tupac Amaru",
          codigo_ubigeo: "080508",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3337",
        },
        {
          id_ubigeo: "3292-3329-3330",
          nombre_ubigeo: "Cusco - Canas - Yanaoca",
          codigo_ubigeo: "080501",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3329",
          id_padre_ubigeo_dst: "3330",
        },
        {
          id_ubigeo: "3292-3338-3340",
          nombre_ubigeo: "Cusco - Canchis - Checacupe",
          codigo_ubigeo: "080602",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3340",
        },
        {
          id_ubigeo: "3292-3338-3341",
          nombre_ubigeo: "Cusco - Canchis - Combapata",
          codigo_ubigeo: "080603",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3341",
        },
        {
          id_ubigeo: "3292-3338-3342",
          nombre_ubigeo: "Cusco - Canchis - Marangani",
          codigo_ubigeo: "080604",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3342",
        },
        {
          id_ubigeo: "3292-3338-3343",
          nombre_ubigeo: "Cusco - Canchis - Pitumarca",
          codigo_ubigeo: "080605",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3343",
        },
        {
          id_ubigeo: "3292-3338-3344",
          nombre_ubigeo: "Cusco - Canchis - San Pablo",
          codigo_ubigeo: "080606",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3344",
        },
        {
          id_ubigeo: "3292-3338-3345",
          nombre_ubigeo: "Cusco - Canchis - San Pedro",
          codigo_ubigeo: "080607",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3345",
        },
        {
          id_ubigeo: "3292-3338-3339",
          nombre_ubigeo: "Cusco - Canchis - Sicuani",
          codigo_ubigeo: "080601",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3339",
        },
        {
          id_ubigeo: "3292-3338-3346",
          nombre_ubigeo: "Cusco - Canchis - Tinta",
          codigo_ubigeo: "080608",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3338",
          id_padre_ubigeo_dst: "3346",
        },
        {
          id_ubigeo: "3292-3347-3349",
          nombre_ubigeo: "Cusco - Chumbivilcas - Capacmarca",
          codigo_ubigeo: "080702",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3349",
        },
        {
          id_ubigeo: "3292-3347-3350",
          nombre_ubigeo: "Cusco - Chumbivilcas - Chamaca",
          codigo_ubigeo: "080703",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3350",
        },
        {
          id_ubigeo: "3292-3347-3351",
          nombre_ubigeo: "Cusco - Chumbivilcas - Colquemarca",
          codigo_ubigeo: "080704",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3351",
        },
        {
          id_ubigeo: "3292-3347-3352",
          nombre_ubigeo: "Cusco - Chumbivilcas - Livitaca",
          codigo_ubigeo: "080705",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3352",
        },
        {
          id_ubigeo: "3292-3347-3353",
          nombre_ubigeo: "Cusco - Chumbivilcas - Llusco",
          codigo_ubigeo: "080706",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3353",
        },
        {
          id_ubigeo: "3292-3347-3354",
          nombre_ubigeo: "Cusco - Chumbivilcas - Quiqota",
          codigo_ubigeo: "080707",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3354",
        },
        {
          id_ubigeo: "3292-3347-3348",
          nombre_ubigeo: "Cusco - Chumbivilcas - Santo Tomas",
          codigo_ubigeo: "080701",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3348",
        },
        {
          id_ubigeo: "3292-3347-3355",
          nombre_ubigeo: "Cusco - Chumbivilcas - Velille",
          codigo_ubigeo: "080708",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3347",
          id_padre_ubigeo_dst: "3355",
        },
        {
          id_ubigeo: "3292-3293-3295",
          nombre_ubigeo: "Cusco - Cusco - Ccorca",
          codigo_ubigeo: "080102",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3295",
        },
        {
          id_ubigeo: "3292-3293-3294",
          nombre_ubigeo: "Cusco - Cusco - Cusco",
          codigo_ubigeo: "080101",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3294",
        },
        {
          id_ubigeo: "3292-3293-3296",
          nombre_ubigeo: "Cusco - Cusco - Poroy",
          codigo_ubigeo: "080103",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3296",
        },
        {
          id_ubigeo: "3292-3293-3297",
          nombre_ubigeo: "Cusco - Cusco - San Jeronimo",
          codigo_ubigeo: "080104",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3297",
        },
        {
          id_ubigeo: "3292-3293-3298",
          nombre_ubigeo: "Cusco - Cusco - San Sebastian",
          codigo_ubigeo: "080105",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3298",
        },
        {
          id_ubigeo: "3292-3293-3299",
          nombre_ubigeo: "Cusco - Cusco - Santiago",
          codigo_ubigeo: "080106",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3299",
        },
        {
          id_ubigeo: "3292-3293-3300",
          nombre_ubigeo: "Cusco - Cusco - Saylla",
          codigo_ubigeo: "080107",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3300",
        },
        {
          id_ubigeo: "3292-3293-3301",
          nombre_ubigeo: "Cusco - Cusco - Wanchaq",
          codigo_ubigeo: "080108",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3293",
          id_padre_ubigeo_dst: "3301",
        },
        {
          id_ubigeo: "3292-3356-3364",
          nombre_ubigeo: "Cusco - Espinar - Alto Pichigua",
          codigo_ubigeo: "080808",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3364",
        },
        {
          id_ubigeo: "3292-3356-3358",
          nombre_ubigeo: "Cusco - Espinar - Condoroma",
          codigo_ubigeo: "080802",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3358",
        },
        {
          id_ubigeo: "3292-3356-3359",
          nombre_ubigeo: "Cusco - Espinar - Coporaque",
          codigo_ubigeo: "080803",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3359",
        },
        {
          id_ubigeo: "3292-3356-3357",
          nombre_ubigeo: "Cusco - Espinar - Espinar",
          codigo_ubigeo: "080801",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3357",
        },
        {
          id_ubigeo: "3292-3356-3360",
          nombre_ubigeo: "Cusco - Espinar - Ocoruro",
          codigo_ubigeo: "080804",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3360",
        },
        {
          id_ubigeo: "3292-3356-3361",
          nombre_ubigeo: "Cusco - Espinar - Pallpata",
          codigo_ubigeo: "080805",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3361",
        },
        {
          id_ubigeo: "3292-3356-3362",
          nombre_ubigeo: "Cusco - Espinar - Pichigua",
          codigo_ubigeo: "080806",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3362",
        },
        {
          id_ubigeo: "3292-3356-3363",
          nombre_ubigeo: "Cusco - Espinar - Suyckutambo",
          codigo_ubigeo: "080807",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3356",
          id_padre_ubigeo_dst: "3363",
        },
        {
          id_ubigeo: "3292-3365-3367",
          nombre_ubigeo: "Cusco - La Convencion - Echarate",
          codigo_ubigeo: "080902",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3367",
        },
        {
          id_ubigeo: "3292-3365-3368",
          nombre_ubigeo: "Cusco - La Convencion - Huayopata",
          codigo_ubigeo: "080903",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3368",
        },
        {
          id_ubigeo: "3292-3365-3369",
          nombre_ubigeo: "Cusco - La Convencion - Maranura",
          codigo_ubigeo: "080904",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3369",
        },
        {
          id_ubigeo: "3292-3365-3370",
          nombre_ubigeo: "Cusco - La Convencion - Ocobamba",
          codigo_ubigeo: "080905",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3370",
        },
        {
          id_ubigeo: "3292-3365-3375",
          nombre_ubigeo: "Cusco - La Convencion - Pichari",
          codigo_ubigeo: "080910",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3375",
        },
        {
          id_ubigeo: "3292-3365-3371",
          nombre_ubigeo: "Cusco - La Convencion - Quellouno",
          codigo_ubigeo: "080906",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3371",
        },
        {
          id_ubigeo: "3292-3365-3372",
          nombre_ubigeo: "Cusco - La Convencion - Quimbiri",
          codigo_ubigeo: "080907",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3372",
        },
        {
          id_ubigeo: "3292-3365-3366",
          nombre_ubigeo: "Cusco - La Convencion - Santa Ana",
          codigo_ubigeo: "080901",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3366",
        },
        {
          id_ubigeo: "3292-3365-3373",
          nombre_ubigeo: "Cusco - La Convencion - Santa Teresa",
          codigo_ubigeo: "080908",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3373",
        },
        {
          id_ubigeo: "3292-3365-3374",
          nombre_ubigeo: "Cusco - La Convencion - Vilcabamba",
          codigo_ubigeo: "080909",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3365",
          id_padre_ubigeo_dst: "3374",
        },
        {
          id_ubigeo: "3292-3376-3378",
          nombre_ubigeo: "Cusco - Paruro - Accha",
          codigo_ubigeo: "081002",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3378",
        },
        {
          id_ubigeo: "3292-3376-3379",
          nombre_ubigeo: "Cusco - Paruro - Ccapi",
          codigo_ubigeo: "081003",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3379",
        },
        {
          id_ubigeo: "3292-3376-3380",
          nombre_ubigeo: "Cusco - Paruro - Colcha",
          codigo_ubigeo: "081004",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3380",
        },
        {
          id_ubigeo: "3292-3376-3381",
          nombre_ubigeo: "Cusco - Paruro - Huanoquite",
          codigo_ubigeo: "081005",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3381",
        },
        {
          id_ubigeo: "3292-3376-3382",
          nombre_ubigeo: "Cusco - Paruro - Omacha",
          codigo_ubigeo: "081006",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3382",
        },
        {
          id_ubigeo: "3292-3376-3383",
          nombre_ubigeo: "Cusco - Paruro - Paccaritambo",
          codigo_ubigeo: "081007",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3383",
        },
        {
          id_ubigeo: "3292-3376-3377",
          nombre_ubigeo: "Cusco - Paruro - Paruro",
          codigo_ubigeo: "081001",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3377",
        },
        {
          id_ubigeo: "3292-3376-3384",
          nombre_ubigeo: "Cusco - Paruro - Pillpinto",
          codigo_ubigeo: "081008",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3384",
        },
        {
          id_ubigeo: "3292-3376-3385",
          nombre_ubigeo: "Cusco - Paruro - Yaurisque",
          codigo_ubigeo: "081009",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3376",
          id_padre_ubigeo_dst: "3385",
        },
        {
          id_ubigeo: "3292-3386-3388",
          nombre_ubigeo: "Cusco - Paucartambo - Caicay",
          codigo_ubigeo: "081102",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3386",
          id_padre_ubigeo_dst: "3388",
        },
        {
          id_ubigeo: "3292-3386-3389",
          nombre_ubigeo: "Cusco - Paucartambo - Challabamba",
          codigo_ubigeo: "081103",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3386",
          id_padre_ubigeo_dst: "3389",
        },
        {
          id_ubigeo: "3292-3386-3390",
          nombre_ubigeo: "Cusco - Paucartambo - Colquepata",
          codigo_ubigeo: "081104",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3386",
          id_padre_ubigeo_dst: "3390",
        },
        {
          id_ubigeo: "3292-3386-3391",
          nombre_ubigeo: "Cusco - Paucartambo - Huancarani",
          codigo_ubigeo: "081105",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3386",
          id_padre_ubigeo_dst: "3391",
        },
        {
          id_ubigeo: "3292-3386-3392",
          nombre_ubigeo: "Cusco - Paucartambo - Kosqipata",
          codigo_ubigeo: "081106",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3386",
          id_padre_ubigeo_dst: "3392",
        },
        {
          id_ubigeo: "3292-3386-3387",
          nombre_ubigeo: "Cusco - Paucartambo - Paucartambo",
          codigo_ubigeo: "081101",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3386",
          id_padre_ubigeo_dst: "3387",
        },
        {
          id_ubigeo: "3292-3393-3395",
          nombre_ubigeo: "Cusco - Quispicanchi - Andahuaylillas",
          codigo_ubigeo: "081202",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3395",
        },
        {
          id_ubigeo: "3292-3393-3396",
          nombre_ubigeo: "Cusco - Quispicanchi - Camanti",
          codigo_ubigeo: "081203",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3396",
        },
        {
          id_ubigeo: "3292-3393-3397",
          nombre_ubigeo: "Cusco - Quispicanchi - Ccarhuayo",
          codigo_ubigeo: "081204",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3397",
        },
        {
          id_ubigeo: "3292-3393-3398",
          nombre_ubigeo: "Cusco - Quispicanchi - Ccatca",
          codigo_ubigeo: "081205",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3398",
        },
        {
          id_ubigeo: "3292-3393-3399",
          nombre_ubigeo: "Cusco - Quispicanchi - Cusipata",
          codigo_ubigeo: "081206",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3399",
        },
        {
          id_ubigeo: "3292-3393-3400",
          nombre_ubigeo: "Cusco - Quispicanchi - Huaro",
          codigo_ubigeo: "081207",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3400",
        },
        {
          id_ubigeo: "3292-3393-3401",
          nombre_ubigeo: "Cusco - Quispicanchi - Lucre",
          codigo_ubigeo: "081208",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3401",
        },
        {
          id_ubigeo: "3292-3393-3402",
          nombre_ubigeo: "Cusco - Quispicanchi - Marcapata",
          codigo_ubigeo: "081209",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3402",
        },
        {
          id_ubigeo: "3292-3393-3403",
          nombre_ubigeo: "Cusco - Quispicanchi - Ocongate",
          codigo_ubigeo: "081210",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3403",
        },
        {
          id_ubigeo: "3292-3393-3404",
          nombre_ubigeo: "Cusco - Quispicanchi - Oropesa",
          codigo_ubigeo: "081211",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3404",
        },
        {
          id_ubigeo: "3292-3393-3405",
          nombre_ubigeo: "Cusco - Quispicanchi - Quiquijana",
          codigo_ubigeo: "081212",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3405",
        },
        {
          id_ubigeo: "3292-3393-3394",
          nombre_ubigeo: "Cusco - Quispicanchi - Urcos",
          codigo_ubigeo: "081201",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3393",
          id_padre_ubigeo_dst: "3394",
        },
        {
          id_ubigeo: "3292-3406-3408",
          nombre_ubigeo: "Cusco - Urubamba - Chinchero",
          codigo_ubigeo: "081302",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3406",
          id_padre_ubigeo_dst: "3408",
        },
        {
          id_ubigeo: "3292-3406-3409",
          nombre_ubigeo: "Cusco - Urubamba - Huayllabamba",
          codigo_ubigeo: "081303",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3406",
          id_padre_ubigeo_dst: "3409",
        },
        {
          id_ubigeo: "3292-3406-3410",
          nombre_ubigeo: "Cusco - Urubamba - Machupicchu",
          codigo_ubigeo: "081304",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3406",
          id_padre_ubigeo_dst: "3410",
        },
        {
          id_ubigeo: "3292-3406-3411",
          nombre_ubigeo: "Cusco - Urubamba - Maras",
          codigo_ubigeo: "081305",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3406",
          id_padre_ubigeo_dst: "3411",
        },
        {
          id_ubigeo: "3292-3406-3412",
          nombre_ubigeo: "Cusco - Urubamba - Ollantaytambo",
          codigo_ubigeo: "081306",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3406",
          id_padre_ubigeo_dst: "3412",
        },
        {
          id_ubigeo: "3292-3406-3407",
          nombre_ubigeo: "Cusco - Urubamba - Urubamba",
          codigo_ubigeo: "081301",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3406",
          id_padre_ubigeo_dst: "3407",
        },
        {
          id_ubigeo: "3292-3406-3413",
          nombre_ubigeo: "Cusco - Urubamba - Yucay",
          codigo_ubigeo: "081307",
          id_padre_ubigeo_dpto: "3292",
          id_padre_ubigeo_prov: "3406",
          id_padre_ubigeo_dst: "3413",
        },
        {
          id_ubigeo: "3414-3435-3436",
          nombre_ubigeo: "Huancavelica - Acobamba - Acobamba",
          codigo_ubigeo: "090201",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3436",
        },
        {
          id_ubigeo: "3414-3435-3437",
          nombre_ubigeo: "Huancavelica - Acobamba - Andabamba",
          codigo_ubigeo: "090202",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3437",
        },
        {
          id_ubigeo: "3414-3435-3438",
          nombre_ubigeo: "Huancavelica - Acobamba - Anta",
          codigo_ubigeo: "090203",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3438",
        },
        {
          id_ubigeo: "3414-3435-3439",
          nombre_ubigeo: "Huancavelica - Acobamba - Caja",
          codigo_ubigeo: "090204",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3439",
        },
        {
          id_ubigeo: "3414-3435-3440",
          nombre_ubigeo: "Huancavelica - Acobamba - Marcas",
          codigo_ubigeo: "090205",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3440",
        },
        {
          id_ubigeo: "3414-3435-3441",
          nombre_ubigeo: "Huancavelica - Acobamba - Paucara",
          codigo_ubigeo: "090206",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3441",
        },
        {
          id_ubigeo: "3414-3435-3442",
          nombre_ubigeo: "Huancavelica - Acobamba - Pomacocha",
          codigo_ubigeo: "090207",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3442",
        },
        {
          id_ubigeo: "3414-3435-3443",
          nombre_ubigeo: "Huancavelica - Acobamba - Rosario",
          codigo_ubigeo: "090208",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3435",
          id_padre_ubigeo_dst: "3443",
        },
        {
          id_ubigeo: "3414-3444-3446",
          nombre_ubigeo: "Huancavelica - Angaraes - Anchonga",
          codigo_ubigeo: "090302",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3446",
        },
        {
          id_ubigeo: "3414-3444-3447",
          nombre_ubigeo: "Huancavelica - Angaraes - Callanmarca",
          codigo_ubigeo: "090303",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3447",
        },
        {
          id_ubigeo: "3414-3444-3448",
          nombre_ubigeo: "Huancavelica - Angaraes - Ccochaccasa",
          codigo_ubigeo: "090304",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3448",
        },
        {
          id_ubigeo: "3414-3444-3449",
          nombre_ubigeo: "Huancavelica - Angaraes - Chincho",
          codigo_ubigeo: "090305",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3449",
        },
        {
          id_ubigeo: "3414-3444-3450",
          nombre_ubigeo: "Huancavelica - Angaraes - Congalla",
          codigo_ubigeo: "090306",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3450",
        },
        {
          id_ubigeo: "3414-3444-3451",
          nombre_ubigeo: "Huancavelica - Angaraes - Huanca-Huanca",
          codigo_ubigeo: "090307",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3451",
        },
        {
          id_ubigeo: "3414-3444-3452",
          nombre_ubigeo: "Huancavelica - Angaraes - Huayllay Grande",
          codigo_ubigeo: "090308",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3452",
        },
        {
          id_ubigeo: "3414-3444-3453",
          nombre_ubigeo: "Huancavelica - Angaraes - Julcamarca",
          codigo_ubigeo: "090309",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3453",
        },
        {
          id_ubigeo: "3414-3444-3445",
          nombre_ubigeo: "Huancavelica - Angaraes - Lircay",
          codigo_ubigeo: "090301",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3445",
        },
        {
          id_ubigeo: "3414-3444-3454",
          nombre_ubigeo: "Huancavelica - Angaraes - San Antonio de Antaparco",
          codigo_ubigeo: "090310",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3454",
        },
        {
          id_ubigeo: "3414-3444-3455",
          nombre_ubigeo: "Huancavelica - Angaraes - Santo Tomas de Pata",
          codigo_ubigeo: "090311",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3455",
        },
        {
          id_ubigeo: "3414-3444-3456",
          nombre_ubigeo: "Huancavelica - Angaraes - Secclla",
          codigo_ubigeo: "090312",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3444",
          id_padre_ubigeo_dst: "3456",
        },
        {
          id_ubigeo: "3414-3457-3459",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Arma",
          codigo_ubigeo: "090402",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3459",
        },
        {
          id_ubigeo: "3414-3457-3460",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Aurahua",
          codigo_ubigeo: "090403",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3460",
        },
        {
          id_ubigeo: "3414-3457-3461",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Capillas",
          codigo_ubigeo: "090404",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3461",
        },
        {
          id_ubigeo: "3414-3457-3458",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Castrovirreyna",
          codigo_ubigeo: "090401",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3458",
        },
        {
          id_ubigeo: "3414-3457-3462",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Chupamarca",
          codigo_ubigeo: "090405",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3462",
        },
        {
          id_ubigeo: "3414-3457-3463",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Cocas",
          codigo_ubigeo: "090406",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3463",
        },
        {
          id_ubigeo: "3414-3457-3464",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Huachos",
          codigo_ubigeo: "090407",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3464",
        },
        {
          id_ubigeo: "3414-3457-3465",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Huamatambo",
          codigo_ubigeo: "090408",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3465",
        },
        {
          id_ubigeo: "3414-3457-3466",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Mollepampa",
          codigo_ubigeo: "090409",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3466",
        },
        {
          id_ubigeo: "3414-3457-3467",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - San Juan",
          codigo_ubigeo: "090410",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3467",
        },
        {
          id_ubigeo: "3414-3457-3468",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Santa Ana",
          codigo_ubigeo: "090411",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3468",
        },
        {
          id_ubigeo: "3414-3457-3469",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Tantara",
          codigo_ubigeo: "090412",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3469",
        },
        {
          id_ubigeo: "3414-3457-3470",
          nombre_ubigeo: "Huancavelica - Castrovirreyna - Ticrapo",
          codigo_ubigeo: "090413",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3457",
          id_padre_ubigeo_dst: "3470",
        },
        {
          id_ubigeo: "3414-3471-3473",
          nombre_ubigeo: "Huancavelica - Churcampa - Anco",
          codigo_ubigeo: "090502",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3473",
        },
        {
          id_ubigeo: "3414-3471-3474",
          nombre_ubigeo: "Huancavelica - Churcampa - Chinchihuasi",
          codigo_ubigeo: "090503",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3474",
        },
        {
          id_ubigeo: "3414-3471-3472",
          nombre_ubigeo: "Huancavelica - Churcampa - Churcampa",
          codigo_ubigeo: "090501",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3472",
        },
        {
          id_ubigeo: "3414-3471-3475",
          nombre_ubigeo: "Huancavelica - Churcampa - El Carmen",
          codigo_ubigeo: "090504",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3475",
        },
        {
          id_ubigeo: "3414-3471-3476",
          nombre_ubigeo: "Huancavelica - Churcampa - La Merced",
          codigo_ubigeo: "090505",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3476",
        },
        {
          id_ubigeo: "3414-3471-3477",
          nombre_ubigeo: "Huancavelica - Churcampa - Locroja",
          codigo_ubigeo: "090506",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3477",
        },
        {
          id_ubigeo: "3414-3471-3481",
          nombre_ubigeo: "Huancavelica - Churcampa - Pachamarca",
          codigo_ubigeo: "090510",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3481",
        },
        {
          id_ubigeo: "3414-3471-3478",
          nombre_ubigeo: "Huancavelica - Churcampa - Paucarbamba",
          codigo_ubigeo: "090507",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3478",
        },
        {
          id_ubigeo: "3414-3471-3479",
          nombre_ubigeo: "Huancavelica - Churcampa - San Miguel de Mayocc",
          codigo_ubigeo: "090508",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3479",
        },
        {
          id_ubigeo: "3414-3471-3480",
          nombre_ubigeo: "Huancavelica - Churcampa - San Pedro de Coris",
          codigo_ubigeo: "090509",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3471",
          id_padre_ubigeo_dst: "3480",
        },
        {
          id_ubigeo: "3414-3415-3417",
          nombre_ubigeo: "Huancavelica - Huancavelica - Acobambilla",
          codigo_ubigeo: "090102",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3417",
        },
        {
          id_ubigeo: "3414-3415-3418",
          nombre_ubigeo: "Huancavelica - Huancavelica - Acoria",
          codigo_ubigeo: "090103",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3418",
        },
        {
          id_ubigeo: "3414-3415-3433",
          nombre_ubigeo: "Huancavelica - Huancavelica - Ascensi\xf3n",
          codigo_ubigeo: "090118",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3433",
        },
        {
          id_ubigeo: "3414-3415-3419",
          nombre_ubigeo: "Huancavelica - Huancavelica - Conayca",
          codigo_ubigeo: "090104",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3419",
        },
        {
          id_ubigeo: "3414-3415-3420",
          nombre_ubigeo: "Huancavelica - Huancavelica - Cuenca",
          codigo_ubigeo: "090105",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3420",
        },
        {
          id_ubigeo: "3414-3415-3421",
          nombre_ubigeo: "Huancavelica - Huancavelica - Huachocolpa",
          codigo_ubigeo: "090106",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3421",
        },
        {
          id_ubigeo: "3414-3415-3416",
          nombre_ubigeo: "Huancavelica - Huancavelica - Huancavelica",
          codigo_ubigeo: "090101",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3416",
        },
        {
          id_ubigeo: "3414-3415-3434",
          nombre_ubigeo: "Huancavelica - Huancavelica - Huando",
          codigo_ubigeo: "090119",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3434",
        },
        {
          id_ubigeo: "3414-3415-3422",
          nombre_ubigeo: "Huancavelica - Huancavelica - Huayllahuara",
          codigo_ubigeo: "090107",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3422",
        },
        {
          id_ubigeo: "3414-3415-3423",
          nombre_ubigeo: "Huancavelica - Huancavelica - Izcuchaca",
          codigo_ubigeo: "090108",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3423",
        },
        {
          id_ubigeo: "3414-3415-3424",
          nombre_ubigeo: "Huancavelica - Huancavelica - Laria",
          codigo_ubigeo: "090109",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3424",
        },
        {
          id_ubigeo: "3414-3415-3425",
          nombre_ubigeo: "Huancavelica - Huancavelica - Manta",
          codigo_ubigeo: "090110",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3425",
        },
        {
          id_ubigeo: "3414-3415-3426",
          nombre_ubigeo: "Huancavelica - Huancavelica - Mariscal Caceres",
          codigo_ubigeo: "090111",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3426",
        },
        {
          id_ubigeo: "3414-3415-3427",
          nombre_ubigeo: "Huancavelica - Huancavelica - Moya",
          codigo_ubigeo: "090112",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3427",
        },
        {
          id_ubigeo: "3414-3415-3428",
          nombre_ubigeo: "Huancavelica - Huancavelica - Nuevo Occoro",
          codigo_ubigeo: "090113",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3428",
        },
        {
          id_ubigeo: "3414-3415-3429",
          nombre_ubigeo: "Huancavelica - Huancavelica - Palca",
          codigo_ubigeo: "090114",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3429",
        },
        {
          id_ubigeo: "3414-3415-3430",
          nombre_ubigeo: "Huancavelica - Huancavelica - Pilchaca",
          codigo_ubigeo: "090115",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3430",
        },
        {
          id_ubigeo: "3414-3415-3431",
          nombre_ubigeo: "Huancavelica - Huancavelica - Vilca",
          codigo_ubigeo: "090116",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3431",
        },
        {
          id_ubigeo: "3414-3415-3432",
          nombre_ubigeo: "Huancavelica - Huancavelica - Yauli",
          codigo_ubigeo: "090117",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3415",
          id_padre_ubigeo_dst: "3432",
        },
        {
          id_ubigeo: "3414-3482-3484",
          nombre_ubigeo: "Huancavelica - Huaytara - Ayavi",
          codigo_ubigeo: "090602",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3484",
        },
        {
          id_ubigeo: "3414-3482-3485",
          nombre_ubigeo: "Huancavelica - Huaytara - Cordova",
          codigo_ubigeo: "090603",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3485",
        },
        {
          id_ubigeo: "3414-3482-3486",
          nombre_ubigeo: "Huancavelica - Huaytara - Huayacundo Arma",
          codigo_ubigeo: "090604",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3486",
        },
        {
          id_ubigeo: "3414-3482-3483",
          nombre_ubigeo: "Huancavelica - Huaytara - Huaytara",
          codigo_ubigeo: "090601",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3483",
        },
        {
          id_ubigeo: "3414-3482-3487",
          nombre_ubigeo: "Huancavelica - Huaytara - Laramarca",
          codigo_ubigeo: "090605",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3487",
        },
        {
          id_ubigeo: "3414-3482-3488",
          nombre_ubigeo: "Huancavelica - Huaytara - Ocoyo",
          codigo_ubigeo: "090606",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3488",
        },
        {
          id_ubigeo: "3414-3482-3489",
          nombre_ubigeo: "Huancavelica - Huaytara - Pilpichaca",
          codigo_ubigeo: "090607",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3489",
        },
        {
          id_ubigeo: "3414-3482-3490",
          nombre_ubigeo: "Huancavelica - Huaytara - Querco",
          codigo_ubigeo: "090608",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3490",
        },
        {
          id_ubigeo: "3414-3482-3491",
          nombre_ubigeo: "Huancavelica - Huaytara - Quito-Arma",
          codigo_ubigeo: "090609",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3491",
        },
        {
          id_ubigeo: "3414-3482-3492",
          nombre_ubigeo: "Huancavelica - Huaytara - San Antonio de Cusicancha",
          codigo_ubigeo: "090610",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3492",
        },
        {
          id_ubigeo: "3414-3482-3493",
          nombre_ubigeo:
            "Huancavelica - Huaytara - San Francisco de Sangayaico",
          codigo_ubigeo: "090611",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3493",
        },
        {
          id_ubigeo: "3414-3482-3494",
          nombre_ubigeo: "Huancavelica - Huaytara - San Isidro",
          codigo_ubigeo: "090612",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3494",
        },
        {
          id_ubigeo: "3414-3482-3495",
          nombre_ubigeo: "Huancavelica - Huaytara - Santiago de Chocorvos",
          codigo_ubigeo: "090613",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3495",
        },
        {
          id_ubigeo: "3414-3482-3496",
          nombre_ubigeo: "Huancavelica - Huaytara - Santiago de Quirahuara",
          codigo_ubigeo: "090614",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3496",
        },
        {
          id_ubigeo: "3414-3482-3497",
          nombre_ubigeo: "Huancavelica - Huaytara - Santo Domingo de Capillas",
          codigo_ubigeo: "090615",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3497",
        },
        {
          id_ubigeo: "3414-3482-3498",
          nombre_ubigeo: "Huancavelica - Huaytara - Tambo",
          codigo_ubigeo: "090616",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3482",
          id_padre_ubigeo_dst: "3498",
        },
        {
          id_ubigeo: "3414-3499-3501",
          nombre_ubigeo: "Huancavelica - Tayacaja - Acostambo",
          codigo_ubigeo: "090702",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3501",
        },
        {
          id_ubigeo: "3414-3499-3502",
          nombre_ubigeo: "Huancavelica - Tayacaja - Acraquia",
          codigo_ubigeo: "090703",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3502",
        },
        {
          id_ubigeo: "3414-3499-3503",
          nombre_ubigeo: "Huancavelica - Tayacaja - Ahuaycha",
          codigo_ubigeo: "090704",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3503",
        },
        {
          id_ubigeo: "3414-3499-3504",
          nombre_ubigeo: "Huancavelica - Tayacaja - Colcabamba",
          codigo_ubigeo: "090705",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3504",
        },
        {
          id_ubigeo: "3414-3499-3505",
          nombre_ubigeo: "Huancavelica - Tayacaja - Daniel Hernandez",
          codigo_ubigeo: "090706",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3505",
        },
        {
          id_ubigeo: "3414-3499-3506",
          nombre_ubigeo: "Huancavelica - Tayacaja - Huachocolpa",
          codigo_ubigeo: "090707",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3506",
        },
        {
          id_ubigeo: "3414-3499-3507",
          nombre_ubigeo: "Huancavelica - Tayacaja - Huando",
          codigo_ubigeo: "090708",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3507",
        },
        {
          id_ubigeo: "3414-3499-3508",
          nombre_ubigeo: "Huancavelica - Tayacaja - Huaribamba",
          codigo_ubigeo: "090709",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3508",
        },
        {
          id_ubigeo: "3414-3499-3511",
          nombre_ubigeo: "Huancavelica - Tayacaja - Pachamarca",
          codigo_ubigeo: "090712",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3511",
        },
        {
          id_ubigeo: "3414-3499-3500",
          nombre_ubigeo: "Huancavelica - Tayacaja - Pampas",
          codigo_ubigeo: "090701",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3500",
        },
        {
          id_ubigeo: "3414-3499-3510",
          nombre_ubigeo: "Huancavelica - Tayacaja - Pazos",
          codigo_ubigeo: "090711",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3510",
        },
        {
          id_ubigeo: "3414-3499-3509",
          nombre_ubigeo: "Huancavelica - Tayacaja - Qahuimpuquio",
          codigo_ubigeo: "090710",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3509",
        },
        {
          id_ubigeo: "3414-3499-3512",
          nombre_ubigeo: "Huancavelica - Tayacaja - Quishuar",
          codigo_ubigeo: "090713",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3512",
        },
        {
          id_ubigeo: "3414-3499-3513",
          nombre_ubigeo: "Huancavelica - Tayacaja - Salcabamba",
          codigo_ubigeo: "090714",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3513",
        },
        {
          id_ubigeo: "3414-3499-3514",
          nombre_ubigeo: "Huancavelica - Tayacaja - Salcahuasi",
          codigo_ubigeo: "090715",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3514",
        },
        {
          id_ubigeo: "3414-3499-3515",
          nombre_ubigeo: "Huancavelica - Tayacaja - San Marcos de Rocchac",
          codigo_ubigeo: "090716",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3515",
        },
        {
          id_ubigeo: "3414-3499-3516",
          nombre_ubigeo: "Huancavelica - Tayacaja - Surcubamba",
          codigo_ubigeo: "090717",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3516",
        },
        {
          id_ubigeo: "3414-3499-3517",
          nombre_ubigeo: "Huancavelica - Tayacaja - Tintay Puncu",
          codigo_ubigeo: "090718",
          id_padre_ubigeo_dpto: "3414",
          id_padre_ubigeo_prov: "3499",
          id_padre_ubigeo_dst: "3517",
        },
        {
          id_ubigeo: "3518-3531-3532",
          nombre_ubigeo: "Huanuco - Ambo - Ambo",
          codigo_ubigeo: "100201",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3532",
        },
        {
          id_ubigeo: "3518-3531-3533",
          nombre_ubigeo: "Huanuco - Ambo - Cayna",
          codigo_ubigeo: "100202",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3533",
        },
        {
          id_ubigeo: "3518-3531-3534",
          nombre_ubigeo: "Huanuco - Ambo - Colpas",
          codigo_ubigeo: "100203",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3534",
        },
        {
          id_ubigeo: "3518-3531-3535",
          nombre_ubigeo: "Huanuco - Ambo - Conchamarca",
          codigo_ubigeo: "100204",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3535",
        },
        {
          id_ubigeo: "3518-3531-3536",
          nombre_ubigeo: "Huanuco - Ambo - Huacar",
          codigo_ubigeo: "100205",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3536",
        },
        {
          id_ubigeo: "3518-3531-3537",
          nombre_ubigeo: "Huanuco - Ambo - San Francisco",
          codigo_ubigeo: "100206",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3537",
        },
        {
          id_ubigeo: "3518-3531-3538",
          nombre_ubigeo: "Huanuco - Ambo - San Rafael",
          codigo_ubigeo: "100207",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3538",
        },
        {
          id_ubigeo: "3518-3531-3539",
          nombre_ubigeo: "Huanuco - Ambo - Tomay Kichwa",
          codigo_ubigeo: "100208",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3531",
          id_padre_ubigeo_dst: "3539",
        },
        {
          id_ubigeo: "3518-3540-3542",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Chuquis",
          codigo_ubigeo: "100307",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3542",
        },
        {
          id_ubigeo: "3518-3540-3541",
          nombre_ubigeo: "Huanuco - Dos de Mayo - La Union",
          codigo_ubigeo: "100301",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3541",
        },
        {
          id_ubigeo: "3518-3540-3543",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Marias",
          codigo_ubigeo: "100311",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3543",
        },
        {
          id_ubigeo: "3518-3540-3544",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Pachas",
          codigo_ubigeo: "100313",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3544",
        },
        {
          id_ubigeo: "3518-3540-3545",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Quivilla",
          codigo_ubigeo: "100316",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3545",
        },
        {
          id_ubigeo: "3518-3540-3546",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Ripan",
          codigo_ubigeo: "100317",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3546",
        },
        {
          id_ubigeo: "3518-3540-3547",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Shunqui",
          codigo_ubigeo: "100321",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3547",
        },
        {
          id_ubigeo: "3518-3540-3548",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Sillapata",
          codigo_ubigeo: "100322",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3548",
        },
        {
          id_ubigeo: "3518-3540-3549",
          nombre_ubigeo: "Huanuco - Dos de Mayo - Yanas",
          codigo_ubigeo: "100323",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3540",
          id_padre_ubigeo_dst: "3549",
        },
        {
          id_ubigeo: "3518-3550-3552",
          nombre_ubigeo: "Huanuco - Huacaybamba - Canchabamba",
          codigo_ubigeo: "100402",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3550",
          id_padre_ubigeo_dst: "3552",
        },
        {
          id_ubigeo: "3518-3550-3553",
          nombre_ubigeo: "Huanuco - Huacaybamba - Cochabamba",
          codigo_ubigeo: "100403",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3550",
          id_padre_ubigeo_dst: "3553",
        },
        {
          id_ubigeo: "3518-3550-3551",
          nombre_ubigeo: "Huanuco - Huacaybamba - Huacaybamba",
          codigo_ubigeo: "100401",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3550",
          id_padre_ubigeo_dst: "3551",
        },
        {
          id_ubigeo: "3518-3550-3554",
          nombre_ubigeo: "Huanuco - Huacaybamba - Pinra",
          codigo_ubigeo: "100404",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3550",
          id_padre_ubigeo_dst: "3554",
        },
        {
          id_ubigeo: "3518-3555-3557",
          nombre_ubigeo: "Huanuco - Huamalies - Arancay",
          codigo_ubigeo: "100502",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3557",
        },
        {
          id_ubigeo: "3518-3555-3558",
          nombre_ubigeo: "Huanuco - Huamalies - Chavin de Pariarca",
          codigo_ubigeo: "100503",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3558",
        },
        {
          id_ubigeo: "3518-3555-3559",
          nombre_ubigeo: "Huanuco - Huamalies - Jacas Grande",
          codigo_ubigeo: "100504",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3559",
        },
        {
          id_ubigeo: "3518-3555-3560",
          nombre_ubigeo: "Huanuco - Huamalies - Jircan",
          codigo_ubigeo: "100505",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3560",
        },
        {
          id_ubigeo: "3518-3555-3556",
          nombre_ubigeo: "Huanuco - Huamalies - Llata",
          codigo_ubigeo: "100501",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3556",
        },
        {
          id_ubigeo: "3518-3555-3561",
          nombre_ubigeo: "Huanuco - Huamalies - Miraflores",
          codigo_ubigeo: "100506",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3561",
        },
        {
          id_ubigeo: "3518-3555-3562",
          nombre_ubigeo: "Huanuco - Huamalies - Monzon",
          codigo_ubigeo: "100507",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3562",
        },
        {
          id_ubigeo: "3518-3555-3563",
          nombre_ubigeo: "Huanuco - Huamalies - Punchao",
          codigo_ubigeo: "100508",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3563",
        },
        {
          id_ubigeo: "3518-3555-3564",
          nombre_ubigeo: "Huanuco - Huamalies - Puqos",
          codigo_ubigeo: "100509",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3564",
        },
        {
          id_ubigeo: "3518-3555-3565",
          nombre_ubigeo: "Huanuco - Huamalies - Singa",
          codigo_ubigeo: "100510",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3565",
        },
        {
          id_ubigeo: "3518-3555-3566",
          nombre_ubigeo: "Huanuco - Huamalies - Tantamayo",
          codigo_ubigeo: "100511",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3555",
          id_padre_ubigeo_dst: "3566",
        },
        {
          id_ubigeo: "3518-3519-3521",
          nombre_ubigeo: "Huanuco - Huanuco - Amarilis",
          codigo_ubigeo: "100102",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3521",
        },
        {
          id_ubigeo: "3518-3519-3522",
          nombre_ubigeo: "Huanuco - Huanuco - Chinchao",
          codigo_ubigeo: "100103",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3522",
        },
        {
          id_ubigeo: "3518-3519-3523",
          nombre_ubigeo: "Huanuco - Huanuco - Churubamba",
          codigo_ubigeo: "100104",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3523",
        },
        {
          id_ubigeo: "3518-3519-3520",
          nombre_ubigeo: "Huanuco - Huanuco - Huanuco",
          codigo_ubigeo: "100101",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3520",
        },
        {
          id_ubigeo: "3518-3519-3524",
          nombre_ubigeo: "Huanuco - Huanuco - Margos",
          codigo_ubigeo: "100105",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3524",
        },
        {
          id_ubigeo: "3518-3519-3530",
          nombre_ubigeo: "Huanuco - Huanuco - Pillcomarca",
          codigo_ubigeo: "100111",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3530",
        },
        {
          id_ubigeo: "3518-3519-3525",
          nombre_ubigeo: "Huanuco - Huanuco - Quisqui",
          codigo_ubigeo: "100106",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3525",
        },
        {
          id_ubigeo: "3518-3519-3526",
          nombre_ubigeo: "Huanuco - Huanuco - San Francisco de Cayran",
          codigo_ubigeo: "100107",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3526",
        },
        {
          id_ubigeo: "3518-3519-3527",
          nombre_ubigeo: "Huanuco - Huanuco - San Pedro de Chaulan",
          codigo_ubigeo: "100108",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3527",
        },
        {
          id_ubigeo: "3518-3519-3528",
          nombre_ubigeo: "Huanuco - Huanuco - Santa Maria del Valle",
          codigo_ubigeo: "100109",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3528",
        },
        {
          id_ubigeo: "3518-3519-3529",
          nombre_ubigeo: "Huanuco - Huanuco - Yarumayo",
          codigo_ubigeo: "100110",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3519",
          id_padre_ubigeo_dst: "3529",
        },
        {
          id_ubigeo: "3518-3589-3591",
          nombre_ubigeo: "Huanuco - Lauricocha - Baqos",
          codigo_ubigeo: "101002",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3589",
          id_padre_ubigeo_dst: "3591",
        },
        {
          id_ubigeo: "3518-3589-3590",
          nombre_ubigeo: "Huanuco - Lauricocha - Jesus",
          codigo_ubigeo: "101001",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3589",
          id_padre_ubigeo_dst: "3590",
        },
        {
          id_ubigeo: "3518-3589-3592",
          nombre_ubigeo: "Huanuco - Lauricocha - Jivia",
          codigo_ubigeo: "101003",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3589",
          id_padre_ubigeo_dst: "3592",
        },
        {
          id_ubigeo: "3518-3589-3593",
          nombre_ubigeo: "Huanuco - Lauricocha - Queropalca",
          codigo_ubigeo: "101004",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3589",
          id_padre_ubigeo_dst: "3593",
        },
        {
          id_ubigeo: "3518-3589-3594",
          nombre_ubigeo: "Huanuco - Lauricocha - Rondos",
          codigo_ubigeo: "101005",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3589",
          id_padre_ubigeo_dst: "3594",
        },
        {
          id_ubigeo: "3518-3589-3595",
          nombre_ubigeo: "Huanuco - Lauricocha - San Francisco de Asis",
          codigo_ubigeo: "101006",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3589",
          id_padre_ubigeo_dst: "3595",
        },
        {
          id_ubigeo: "3518-3589-3596",
          nombre_ubigeo: "Huanuco - Lauricocha - San Miguel de Cauri",
          codigo_ubigeo: "101007",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3589",
          id_padre_ubigeo_dst: "3596",
        },
        {
          id_ubigeo: "3518-3567-3569",
          nombre_ubigeo: "Huanuco - Leoncio Prado - Daniel Alomias Robles",
          codigo_ubigeo: "100602",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3567",
          id_padre_ubigeo_dst: "3569",
        },
        {
          id_ubigeo: "3518-3567-3570",
          nombre_ubigeo: "Huanuco - Leoncio Prado - Hermilio Valdizan",
          codigo_ubigeo: "100603",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3567",
          id_padre_ubigeo_dst: "3570",
        },
        {
          id_ubigeo: "3518-3567-3571",
          nombre_ubigeo: "Huanuco - Leoncio Prado - Jose Crespo y Castillo",
          codigo_ubigeo: "100604",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3567",
          id_padre_ubigeo_dst: "3571",
        },
        {
          id_ubigeo: "3518-3567-3572",
          nombre_ubigeo: "Huanuco - Leoncio Prado - Luyando",
          codigo_ubigeo: "100605",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3567",
          id_padre_ubigeo_dst: "3572",
        },
        {
          id_ubigeo: "3518-3567-3573",
          nombre_ubigeo: "Huanuco - Leoncio Prado - Mariano Damaso Beraun",
          codigo_ubigeo: "100606",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3567",
          id_padre_ubigeo_dst: "3573",
        },
        {
          id_ubigeo: "3518-3567-3568",
          nombre_ubigeo: "Huanuco - Leoncio Prado - Rupa-Rupa",
          codigo_ubigeo: "100601",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3567",
          id_padre_ubigeo_dst: "3568",
        },
        {
          id_ubigeo: "3518-3574-3576",
          nombre_ubigeo: "Huanuco - Maraqon - Cholon",
          codigo_ubigeo: "100702",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3574",
          id_padre_ubigeo_dst: "3576",
        },
        {
          id_ubigeo: "3518-3574-3575",
          nombre_ubigeo: "Huanuco - Maraqon - Huacrachuco",
          codigo_ubigeo: "100701",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3574",
          id_padre_ubigeo_dst: "3575",
        },
        {
          id_ubigeo: "3518-3574-3577",
          nombre_ubigeo: "Huanuco - Maraqon - San Buenaventura",
          codigo_ubigeo: "100703",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3574",
          id_padre_ubigeo_dst: "3577",
        },
        {
          id_ubigeo: "3518-3578-3580",
          nombre_ubigeo: "Huanuco - Pachitea - Chaglla",
          codigo_ubigeo: "100802",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3578",
          id_padre_ubigeo_dst: "3580",
        },
        {
          id_ubigeo: "3518-3578-3581",
          nombre_ubigeo: "Huanuco - Pachitea - Molino",
          codigo_ubigeo: "100803",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3578",
          id_padre_ubigeo_dst: "3581",
        },
        {
          id_ubigeo: "3518-3578-3579",
          nombre_ubigeo: "Huanuco - Pachitea - Panao",
          codigo_ubigeo: "100801",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3578",
          id_padre_ubigeo_dst: "3579",
        },
        {
          id_ubigeo: "3518-3578-3582",
          nombre_ubigeo: "Huanuco - Pachitea - Umari",
          codigo_ubigeo: "100804",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3578",
          id_padre_ubigeo_dst: "3582",
        },
        {
          id_ubigeo: "3518-3583-3585",
          nombre_ubigeo: "Huanuco - Puerto Inca - Codo del Pozuzo",
          codigo_ubigeo: "100902",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3583",
          id_padre_ubigeo_dst: "3585",
        },
        {
          id_ubigeo: "3518-3583-3586",
          nombre_ubigeo: "Huanuco - Puerto Inca - Honoria",
          codigo_ubigeo: "100903",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3583",
          id_padre_ubigeo_dst: "3586",
        },
        {
          id_ubigeo: "3518-3583-3584",
          nombre_ubigeo: "Huanuco - Puerto Inca - Puerto Inca",
          codigo_ubigeo: "100901",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3583",
          id_padre_ubigeo_dst: "3584",
        },
        {
          id_ubigeo: "3518-3583-3587",
          nombre_ubigeo: "Huanuco - Puerto Inca - Tournavista",
          codigo_ubigeo: "100904",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3583",
          id_padre_ubigeo_dst: "3587",
        },
        {
          id_ubigeo: "3518-3583-3588",
          nombre_ubigeo: "Huanuco - Puerto Inca - Yuyapichis",
          codigo_ubigeo: "100905",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3583",
          id_padre_ubigeo_dst: "3588",
        },
        {
          id_ubigeo: "3518-3597-3599",
          nombre_ubigeo: "Huanuco - Yarowilca - Cahuac",
          codigo_ubigeo: "101102",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3599",
        },
        {
          id_ubigeo: "3518-3597-3600",
          nombre_ubigeo: "Huanuco - Yarowilca - Chacabamba",
          codigo_ubigeo: "101103",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3600",
        },
        {
          id_ubigeo: "3518-3597-3598",
          nombre_ubigeo: "Huanuco - Yarowilca - Chavinillo",
          codigo_ubigeo: "101101",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3598",
        },
        {
          id_ubigeo: "3518-3597-3605",
          nombre_ubigeo: "Huanuco - Yarowilca - Choras",
          codigo_ubigeo: "101108",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3605",
        },
        {
          id_ubigeo: "3518-3597-3601",
          nombre_ubigeo: "Huanuco - Yarowilca - Chupan",
          codigo_ubigeo: "101104",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3601",
        },
        {
          id_ubigeo: "3518-3597-3602",
          nombre_ubigeo: "Huanuco - Yarowilca - Jacas Chico",
          codigo_ubigeo: "101105",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3602",
        },
        {
          id_ubigeo: "3518-3597-3603",
          nombre_ubigeo: "Huanuco - Yarowilca - Obas",
          codigo_ubigeo: "101106",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3603",
        },
        {
          id_ubigeo: "3518-3597-3604",
          nombre_ubigeo: "Huanuco - Yarowilca - Pampamarca",
          codigo_ubigeo: "101107",
          id_padre_ubigeo_dpto: "3518",
          id_padre_ubigeo_prov: "3597",
          id_padre_ubigeo_dst: "3604",
        },
        {
          id_ubigeo: "3606-3622-3624",
          nombre_ubigeo: "Ica - Chincha - Alto Laran",
          codigo_ubigeo: "110202",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3624",
        },
        {
          id_ubigeo: "3606-3622-3625",
          nombre_ubigeo: "Ica - Chincha - Chavin",
          codigo_ubigeo: "110203",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3625",
        },
        {
          id_ubigeo: "3606-3622-3623",
          nombre_ubigeo: "Ica - Chincha - Chincha Alta",
          codigo_ubigeo: "110201",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3623",
        },
        {
          id_ubigeo: "3606-3622-3626",
          nombre_ubigeo: "Ica - Chincha - Chincha Baja",
          codigo_ubigeo: "110204",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3626",
        },
        {
          id_ubigeo: "3606-3622-3627",
          nombre_ubigeo: "Ica - Chincha - El Carmen",
          codigo_ubigeo: "110205",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3627",
        },
        {
          id_ubigeo: "3606-3622-3628",
          nombre_ubigeo: "Ica - Chincha - Grocio Prado",
          codigo_ubigeo: "110206",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3628",
        },
        {
          id_ubigeo: "3606-3622-3629",
          nombre_ubigeo: "Ica - Chincha - Pueblo Nuevo",
          codigo_ubigeo: "110207",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3629",
        },
        {
          id_ubigeo: "3606-3622-3630",
          nombre_ubigeo: "Ica - Chincha - San Juan de Yanac",
          codigo_ubigeo: "110208",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3630",
        },
        {
          id_ubigeo: "3606-3622-3631",
          nombre_ubigeo: "Ica - Chincha - San Pedro de Huacarpana",
          codigo_ubigeo: "110209",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3631",
        },
        {
          id_ubigeo: "3606-3622-3632",
          nombre_ubigeo: "Ica - Chincha - Sunampe",
          codigo_ubigeo: "110210",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3632",
        },
        {
          id_ubigeo: "3606-3622-3633",
          nombre_ubigeo: "Ica - Chincha - Tambo de Mora",
          codigo_ubigeo: "110211",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3622",
          id_padre_ubigeo_dst: "3633",
        },
        {
          id_ubigeo: "3606-3607-3608",
          nombre_ubigeo: "Ica - Ica - Ica",
          codigo_ubigeo: "110101",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3608",
        },
        {
          id_ubigeo: "3606-3607-3609",
          nombre_ubigeo: "Ica - Ica - La Tinguiqa",
          codigo_ubigeo: "110102",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3609",
        },
        {
          id_ubigeo: "3606-3607-3610",
          nombre_ubigeo: "Ica - Ica - Los Aquijes",
          codigo_ubigeo: "110103",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3610",
        },
        {
          id_ubigeo: "3606-3607-3611",
          nombre_ubigeo: "Ica - Ica - Ocucaje",
          codigo_ubigeo: "110104",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3611",
        },
        {
          id_ubigeo: "3606-3607-3612",
          nombre_ubigeo: "Ica - Ica - Pachacutec",
          codigo_ubigeo: "110105",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3612",
        },
        {
          id_ubigeo: "3606-3607-3613",
          nombre_ubigeo: "Ica - Ica - Parcona",
          codigo_ubigeo: "110106",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3613",
        },
        {
          id_ubigeo: "3606-3607-3614",
          nombre_ubigeo: "Ica - Ica - Pueblo Nuevo",
          codigo_ubigeo: "110107",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3614",
        },
        {
          id_ubigeo: "3606-3607-3615",
          nombre_ubigeo: "Ica - Ica - Salas",
          codigo_ubigeo: "110108",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3615",
        },
        {
          id_ubigeo: "3606-3607-3616",
          nombre_ubigeo: "Ica - Ica - San Jose de los Molinos",
          codigo_ubigeo: "110109",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3616",
        },
        {
          id_ubigeo: "3606-3607-3617",
          nombre_ubigeo: "Ica - Ica - San Juan Bautista",
          codigo_ubigeo: "110110",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3617",
        },
        {
          id_ubigeo: "3606-3607-3618",
          nombre_ubigeo: "Ica - Ica - Santiago",
          codigo_ubigeo: "110111",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3618",
        },
        {
          id_ubigeo: "3606-3607-3619",
          nombre_ubigeo: "Ica - Ica - Subtanjalla",
          codigo_ubigeo: "110112",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3619",
        },
        {
          id_ubigeo: "3606-3607-3620",
          nombre_ubigeo: "Ica - Ica - Tate",
          codigo_ubigeo: "110113",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3620",
        },
        {
          id_ubigeo: "3606-3607-3621",
          nombre_ubigeo: "Ica - Ica - Yauca del Rosario  1/",
          codigo_ubigeo: "110114",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3607",
          id_padre_ubigeo_dst: "3621",
        },
        {
          id_ubigeo: "3606-3634-3636",
          nombre_ubigeo: "Ica - Nazca - Changuillo",
          codigo_ubigeo: "110302",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3634",
          id_padre_ubigeo_dst: "3636",
        },
        {
          id_ubigeo: "3606-3634-3637",
          nombre_ubigeo: "Ica - Nazca - El Ingenio",
          codigo_ubigeo: "110303",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3634",
          id_padre_ubigeo_dst: "3637",
        },
        {
          id_ubigeo: "3606-3634-3638",
          nombre_ubigeo: "Ica - Nazca - Marcona",
          codigo_ubigeo: "110304",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3634",
          id_padre_ubigeo_dst: "3638",
        },
        {
          id_ubigeo: "3606-3634-3635",
          nombre_ubigeo: "Ica - Nazca - Nazca",
          codigo_ubigeo: "110301",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3634",
          id_padre_ubigeo_dst: "3635",
        },
        {
          id_ubigeo: "3606-3634-3639",
          nombre_ubigeo: "Ica - Nazca - Vista Alegre",
          codigo_ubigeo: "110305",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3634",
          id_padre_ubigeo_dst: "3639",
        },
        {
          id_ubigeo: "3606-3640-3642",
          nombre_ubigeo: "Ica - Palpa - Llipata",
          codigo_ubigeo: "110402",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3640",
          id_padre_ubigeo_dst: "3642",
        },
        {
          id_ubigeo: "3606-3640-3641",
          nombre_ubigeo: "Ica - Palpa - Palpa",
          codigo_ubigeo: "110401",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3640",
          id_padre_ubigeo_dst: "3641",
        },
        {
          id_ubigeo: "3606-3640-3643",
          nombre_ubigeo: "Ica - Palpa - Rio Grande",
          codigo_ubigeo: "110403",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3640",
          id_padre_ubigeo_dst: "3643",
        },
        {
          id_ubigeo: "3606-3640-3644",
          nombre_ubigeo: "Ica - Palpa - Santa Cruz",
          codigo_ubigeo: "110404",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3640",
          id_padre_ubigeo_dst: "3644",
        },
        {
          id_ubigeo: "3606-3640-3645",
          nombre_ubigeo: "Ica - Palpa - Tibillo",
          codigo_ubigeo: "110405",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3640",
          id_padre_ubigeo_dst: "3645",
        },
        {
          id_ubigeo: "3606-3646-3648",
          nombre_ubigeo: "Ica - Pisco - Huancano",
          codigo_ubigeo: "110502",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3648",
        },
        {
          id_ubigeo: "3606-3646-3649",
          nombre_ubigeo: "Ica - Pisco - Humay",
          codigo_ubigeo: "110503",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3649",
        },
        {
          id_ubigeo: "3606-3646-3650",
          nombre_ubigeo: "Ica - Pisco - Independencia",
          codigo_ubigeo: "110504",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3650",
        },
        {
          id_ubigeo: "3606-3646-3651",
          nombre_ubigeo: "Ica - Pisco - Paracas",
          codigo_ubigeo: "110505",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3651",
        },
        {
          id_ubigeo: "3606-3646-3647",
          nombre_ubigeo: "Ica - Pisco - Pisco",
          codigo_ubigeo: "110501",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3647",
        },
        {
          id_ubigeo: "3606-3646-3652",
          nombre_ubigeo: "Ica - Pisco - San Andres",
          codigo_ubigeo: "110506",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3652",
        },
        {
          id_ubigeo: "3606-3646-3653",
          nombre_ubigeo: "Ica - Pisco - San Clemente",
          codigo_ubigeo: "110507",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3653",
        },
        {
          id_ubigeo: "3606-3646-3654",
          nombre_ubigeo: "Ica - Pisco - Tupac Amaru Inca",
          codigo_ubigeo: "110508",
          id_padre_ubigeo_dpto: "3606",
          id_padre_ubigeo_prov: "3646",
          id_padre_ubigeo_dst: "3654",
        },
        {
          id_ubigeo: "3655-3701-3702",
          nombre_ubigeo: "Junin - Chanchamayo - Chanchamayo",
          codigo_ubigeo: "120301",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3701",
          id_padre_ubigeo_dst: "3702",
        },
        {
          id_ubigeo: "3655-3701-3703",
          nombre_ubigeo: "Junin - Chanchamayo - Perene",
          codigo_ubigeo: "120302",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3701",
          id_padre_ubigeo_dst: "3703",
        },
        {
          id_ubigeo: "3655-3701-3704",
          nombre_ubigeo: "Junin - Chanchamayo - Pichanaqui",
          codigo_ubigeo: "120303",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3701",
          id_padre_ubigeo_dst: "3704",
        },
        {
          id_ubigeo: "3655-3701-3705",
          nombre_ubigeo: "Junin - Chanchamayo - San Luis de Shuaro",
          codigo_ubigeo: "120304",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3701",
          id_padre_ubigeo_dst: "3705",
        },
        {
          id_ubigeo: "3655-3701-3706",
          nombre_ubigeo: "Junin - Chanchamayo - San Ramon",
          codigo_ubigeo: "120305",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3701",
          id_padre_ubigeo_dst: "3706",
        },
        {
          id_ubigeo: "3655-3701-3707",
          nombre_ubigeo: "Junin - Chanchamayo - Vitoc",
          codigo_ubigeo: "120306",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3701",
          id_padre_ubigeo_dst: "3707",
        },
        {
          id_ubigeo: "3655-3778-3780",
          nombre_ubigeo: "Junin - Chupaca - Ahuac",
          codigo_ubigeo: "120902",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3780",
        },
        {
          id_ubigeo: "3655-3778-3781",
          nombre_ubigeo: "Junin - Chupaca - Chongos Bajo",
          codigo_ubigeo: "120903",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3781",
        },
        {
          id_ubigeo: "3655-3778-3779",
          nombre_ubigeo: "Junin - Chupaca - Chupaca",
          codigo_ubigeo: "120901",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3779",
        },
        {
          id_ubigeo: "3655-3778-3782",
          nombre_ubigeo: "Junin - Chupaca - Huachac",
          codigo_ubigeo: "120904",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3782",
        },
        {
          id_ubigeo: "3655-3778-3783",
          nombre_ubigeo: "Junin - Chupaca - Huamancaca Chico",
          codigo_ubigeo: "120905",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3783",
        },
        {
          id_ubigeo: "3655-3778-3784",
          nombre_ubigeo: "Junin - Chupaca - San Juan de Iscos",
          codigo_ubigeo: "120906",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3784",
        },
        {
          id_ubigeo: "3655-3778-3785",
          nombre_ubigeo: "Junin - Chupaca - San Juan de Jarpa",
          codigo_ubigeo: "120907",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3785",
        },
        {
          id_ubigeo: "3655-3778-3786",
          nombre_ubigeo: "Junin - Chupaca - Tres de Diciembre",
          codigo_ubigeo: "120908",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3786",
        },
        {
          id_ubigeo: "3655-3778-3787",
          nombre_ubigeo: "Junin - Chupaca - Yanacancha",
          codigo_ubigeo: "120909",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3778",
          id_padre_ubigeo_dst: "3787",
        },
        {
          id_ubigeo: "3655-3685-3687",
          nombre_ubigeo: "Junin - Concepcion - Aco",
          codigo_ubigeo: "120202",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3687",
        },
        {
          id_ubigeo: "3655-3685-3688",
          nombre_ubigeo: "Junin - Concepcion - Andamarca",
          codigo_ubigeo: "120203",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3688",
        },
        {
          id_ubigeo: "3655-3685-3689",
          nombre_ubigeo: "Junin - Concepcion - Chambara",
          codigo_ubigeo: "120204",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3689",
        },
        {
          id_ubigeo: "3655-3685-3690",
          nombre_ubigeo: "Junin - Concepcion - Cochas",
          codigo_ubigeo: "120205",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3690",
        },
        {
          id_ubigeo: "3655-3685-3691",
          nombre_ubigeo: "Junin - Concepcion - Comas",
          codigo_ubigeo: "120206",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3691",
        },
        {
          id_ubigeo: "3655-3685-3686",
          nombre_ubigeo: "Junin - Concepcion - Concepcion",
          codigo_ubigeo: "120201",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3686",
        },
        {
          id_ubigeo: "3655-3685-3692",
          nombre_ubigeo: "Junin - Concepcion - Heroinas Toledo",
          codigo_ubigeo: "120207",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3692",
        },
        {
          id_ubigeo: "3655-3685-3693",
          nombre_ubigeo: "Junin - Concepcion - Manzanares",
          codigo_ubigeo: "120208",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3693",
        },
        {
          id_ubigeo: "3655-3685-3694",
          nombre_ubigeo: "Junin - Concepcion - Mariscal Castilla",
          codigo_ubigeo: "120209",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3694",
        },
        {
          id_ubigeo: "3655-3685-3695",
          nombre_ubigeo: "Junin - Concepcion - Matahuasi",
          codigo_ubigeo: "120210",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3695",
        },
        {
          id_ubigeo: "3655-3685-3696",
          nombre_ubigeo: "Junin - Concepcion - Mito",
          codigo_ubigeo: "120211",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3696",
        },
        {
          id_ubigeo: "3655-3685-3697",
          nombre_ubigeo: "Junin - Concepcion - Nueve de Julio",
          codigo_ubigeo: "120212",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3697",
        },
        {
          id_ubigeo: "3655-3685-3698",
          nombre_ubigeo: "Junin - Concepcion - Orcotuna",
          codigo_ubigeo: "120213",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3698",
        },
        {
          id_ubigeo: "3655-3685-3699",
          nombre_ubigeo: "Junin - Concepcion - San Jose de Quero",
          codigo_ubigeo: "120214",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3699",
        },
        {
          id_ubigeo: "3655-3685-3700",
          nombre_ubigeo: "Junin - Concepcion - Santa Rosa de Ocopa",
          codigo_ubigeo: "120215",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3685",
          id_padre_ubigeo_dst: "3700",
        },
        {
          id_ubigeo: "3655-3656-3658",
          nombre_ubigeo: "Junin - Huancayo - Carhuacallanga",
          codigo_ubigeo: "120104",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3658",
        },
        {
          id_ubigeo: "3655-3656-3659",
          nombre_ubigeo: "Junin - Huancayo - Chacapampa",
          codigo_ubigeo: "120105",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3659",
        },
        {
          id_ubigeo: "3655-3656-3660",
          nombre_ubigeo: "Junin - Huancayo - Chicche",
          codigo_ubigeo: "120106",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3660",
        },
        {
          id_ubigeo: "3655-3656-3661",
          nombre_ubigeo: "Junin - Huancayo - Chilca",
          codigo_ubigeo: "120107",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3661",
        },
        {
          id_ubigeo: "3655-3656-3662",
          nombre_ubigeo: "Junin - Huancayo - Chongos Alto",
          codigo_ubigeo: "120108",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3662",
        },
        {
          id_ubigeo: "3655-3656-3663",
          nombre_ubigeo: "Junin - Huancayo - Chupuro",
          codigo_ubigeo: "120111",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3663",
        },
        {
          id_ubigeo: "3655-3656-3664",
          nombre_ubigeo: "Junin - Huancayo - Colca",
          codigo_ubigeo: "120112",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3664",
        },
        {
          id_ubigeo: "3655-3656-3665",
          nombre_ubigeo: "Junin - Huancayo - Cullhuas",
          codigo_ubigeo: "120113",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3665",
        },
        {
          id_ubigeo: "3655-3656-3666",
          nombre_ubigeo: "Junin - Huancayo - El Tambo",
          codigo_ubigeo: "120114",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3666",
        },
        {
          id_ubigeo: "3655-3656-3667",
          nombre_ubigeo: "Junin - Huancayo - Huacrapuquio",
          codigo_ubigeo: "120116",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3667",
        },
        {
          id_ubigeo: "3655-3656-3668",
          nombre_ubigeo: "Junin - Huancayo - Hualhuas",
          codigo_ubigeo: "120117",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3668",
        },
        {
          id_ubigeo: "3655-3656-3669",
          nombre_ubigeo: "Junin - Huancayo - Huancan",
          codigo_ubigeo: "120119",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3669",
        },
        {
          id_ubigeo: "3655-3656-3657",
          nombre_ubigeo: "Junin - Huancayo - Huancayo",
          codigo_ubigeo: "120101",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3657",
        },
        {
          id_ubigeo: "3655-3656-3670",
          nombre_ubigeo: "Junin - Huancayo - Huasicancha",
          codigo_ubigeo: "120120",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3670",
        },
        {
          id_ubigeo: "3655-3656-3671",
          nombre_ubigeo: "Junin - Huancayo - Huayucachi",
          codigo_ubigeo: "120121",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3671",
        },
        {
          id_ubigeo: "3655-3656-3672",
          nombre_ubigeo: "Junin - Huancayo - Ingenio",
          codigo_ubigeo: "120122",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3672",
        },
        {
          id_ubigeo: "3655-3656-3673",
          nombre_ubigeo: "Junin - Huancayo - Pariahuanca",
          codigo_ubigeo: "120124",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3673",
        },
        {
          id_ubigeo: "3655-3656-3674",
          nombre_ubigeo: "Junin - Huancayo - Pilcomayo",
          codigo_ubigeo: "120125",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3674",
        },
        {
          id_ubigeo: "3655-3656-3675",
          nombre_ubigeo: "Junin - Huancayo - Pucara",
          codigo_ubigeo: "120126",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3675",
        },
        {
          id_ubigeo: "3655-3656-3676",
          nombre_ubigeo: "Junin - Huancayo - Quichuay",
          codigo_ubigeo: "120127",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3676",
        },
        {
          id_ubigeo: "3655-3656-3677",
          nombre_ubigeo: "Junin - Huancayo - Quilcas",
          codigo_ubigeo: "120128",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3677",
        },
        {
          id_ubigeo: "3655-3656-3678",
          nombre_ubigeo: "Junin - Huancayo - San Agustin",
          codigo_ubigeo: "120129",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3678",
        },
        {
          id_ubigeo: "3655-3656-3679",
          nombre_ubigeo: "Junin - Huancayo - San Jeronimo de Tunan",
          codigo_ubigeo: "120130",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3679",
        },
        {
          id_ubigeo: "3655-3656-3683",
          nombre_ubigeo: "Junin - Huancayo - Santo Domingo de Acobamba",
          codigo_ubigeo: "120135",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3683",
        },
        {
          id_ubigeo: "3655-3656-3681",
          nombre_ubigeo: "Junin - Huancayo - Sapallanga",
          codigo_ubigeo: "120133",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3681",
        },
        {
          id_ubigeo: "3655-3656-3680",
          nombre_ubigeo: "Junin - Huancayo - Saqo",
          codigo_ubigeo: "120132",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3680",
        },
        {
          id_ubigeo: "3655-3656-3682",
          nombre_ubigeo: "Junin - Huancayo - Sicaya",
          codigo_ubigeo: "120134",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3682",
        },
        {
          id_ubigeo: "3655-3656-3684",
          nombre_ubigeo: "Junin - Huancayo - Viques",
          codigo_ubigeo: "120136",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3656",
          id_padre_ubigeo_dst: "3684",
        },
        {
          id_ubigeo: "3655-3708-3710",
          nombre_ubigeo: "Junin - Jauja - Acolla",
          codigo_ubigeo: "120402",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3710",
        },
        {
          id_ubigeo: "3655-3708-3711",
          nombre_ubigeo: "Junin - Jauja - Apata",
          codigo_ubigeo: "120403",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3711",
        },
        {
          id_ubigeo: "3655-3708-3712",
          nombre_ubigeo: "Junin - Jauja - Ataura",
          codigo_ubigeo: "120404",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3712",
        },
        {
          id_ubigeo: "3655-3708-3713",
          nombre_ubigeo: "Junin - Jauja - Canchayllo",
          codigo_ubigeo: "120405",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3713",
        },
        {
          id_ubigeo: "3655-3708-3714",
          nombre_ubigeo: "Junin - Jauja - Curicaca",
          codigo_ubigeo: "120406",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3714",
        },
        {
          id_ubigeo: "3655-3708-3715",
          nombre_ubigeo: "Junin - Jauja - El Mantaro",
          codigo_ubigeo: "120407",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3715",
        },
        {
          id_ubigeo: "3655-3708-3716",
          nombre_ubigeo: "Junin - Jauja - Huamali",
          codigo_ubigeo: "120408",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3716",
        },
        {
          id_ubigeo: "3655-3708-3717",
          nombre_ubigeo: "Junin - Jauja - Huaripampa",
          codigo_ubigeo: "120409",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3717",
        },
        {
          id_ubigeo: "3655-3708-3718",
          nombre_ubigeo: "Junin - Jauja - Huertas",
          codigo_ubigeo: "120410",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3718",
        },
        {
          id_ubigeo: "3655-3708-3719",
          nombre_ubigeo: "Junin - Jauja - Janjaillo",
          codigo_ubigeo: "120411",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3719",
        },
        {
          id_ubigeo: "3655-3708-3709",
          nombre_ubigeo: "Junin - Jauja - Jauja",
          codigo_ubigeo: "120401",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3709",
        },
        {
          id_ubigeo: "3655-3708-3720",
          nombre_ubigeo: "Junin - Jauja - Julcan",
          codigo_ubigeo: "120412",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3720",
        },
        {
          id_ubigeo: "3655-3708-3721",
          nombre_ubigeo: "Junin - Jauja - Leonor Ordoqez",
          codigo_ubigeo: "120413",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3721",
        },
        {
          id_ubigeo: "3655-3708-3722",
          nombre_ubigeo: "Junin - Jauja - Llocllapampa",
          codigo_ubigeo: "120414",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3722",
        },
        {
          id_ubigeo: "3655-3708-3723",
          nombre_ubigeo: "Junin - Jauja - Marco",
          codigo_ubigeo: "120415",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3723",
        },
        {
          id_ubigeo: "3655-3708-3724",
          nombre_ubigeo: "Junin - Jauja - Masma",
          codigo_ubigeo: "120416",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3724",
        },
        {
          id_ubigeo: "3655-3708-3725",
          nombre_ubigeo: "Junin - Jauja - Masma Chicche",
          codigo_ubigeo: "120417",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3725",
        },
        {
          id_ubigeo: "3655-3708-3726",
          nombre_ubigeo: "Junin - Jauja - Molinos",
          codigo_ubigeo: "120418",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3726",
        },
        {
          id_ubigeo: "3655-3708-3727",
          nombre_ubigeo: "Junin - Jauja - Monobamba",
          codigo_ubigeo: "120419",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3727",
        },
        {
          id_ubigeo: "3655-3708-3728",
          nombre_ubigeo: "Junin - Jauja - Muqui",
          codigo_ubigeo: "120420",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3728",
        },
        {
          id_ubigeo: "3655-3708-3729",
          nombre_ubigeo: "Junin - Jauja - Muquiyauyo",
          codigo_ubigeo: "120421",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3729",
        },
        {
          id_ubigeo: "3655-3708-3730",
          nombre_ubigeo: "Junin - Jauja - Paca",
          codigo_ubigeo: "120422",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3730",
        },
        {
          id_ubigeo: "3655-3708-3731",
          nombre_ubigeo: "Junin - Jauja - Paccha",
          codigo_ubigeo: "120423",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3731",
        },
        {
          id_ubigeo: "3655-3708-3732",
          nombre_ubigeo: "Junin - Jauja - Pancan",
          codigo_ubigeo: "120424",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3732",
        },
        {
          id_ubigeo: "3655-3708-3733",
          nombre_ubigeo: "Junin - Jauja - Parco",
          codigo_ubigeo: "120425",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3733",
        },
        {
          id_ubigeo: "3655-3708-3734",
          nombre_ubigeo: "Junin - Jauja - Pomacancha",
          codigo_ubigeo: "120426",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3734",
        },
        {
          id_ubigeo: "3655-3708-3735",
          nombre_ubigeo: "Junin - Jauja - Ricran",
          codigo_ubigeo: "120427",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3735",
        },
        {
          id_ubigeo: "3655-3708-3736",
          nombre_ubigeo: "Junin - Jauja - San Lorenzo",
          codigo_ubigeo: "120428",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3736",
        },
        {
          id_ubigeo: "3655-3708-3737",
          nombre_ubigeo: "Junin - Jauja - San Pedro de Chunan",
          codigo_ubigeo: "120429",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3737",
        },
        {
          id_ubigeo: "3655-3708-3738",
          nombre_ubigeo: "Junin - Jauja - Sausa",
          codigo_ubigeo: "120430",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3738",
        },
        {
          id_ubigeo: "3655-3708-3739",
          nombre_ubigeo: "Junin - Jauja - Sincos",
          codigo_ubigeo: "120431",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3739",
        },
        {
          id_ubigeo: "3655-3708-3740",
          nombre_ubigeo: "Junin - Jauja - Tunan Marca",
          codigo_ubigeo: "120432",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3740",
        },
        {
          id_ubigeo: "3655-3708-3741",
          nombre_ubigeo: "Junin - Jauja - Yauli",
          codigo_ubigeo: "120433",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3741",
        },
        {
          id_ubigeo: "3655-3708-3742",
          nombre_ubigeo: "Junin - Jauja - Yauyos",
          codigo_ubigeo: "120434",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3708",
          id_padre_ubigeo_dst: "3742",
        },
        {
          id_ubigeo: "3655-3743-3745",
          nombre_ubigeo: "Junin - Junin - Carhuamayo",
          codigo_ubigeo: "120502",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3743",
          id_padre_ubigeo_dst: "3745",
        },
        {
          id_ubigeo: "3655-3743-3744",
          nombre_ubigeo: "Junin - Junin - Junin",
          codigo_ubigeo: "120501",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3743",
          id_padre_ubigeo_dst: "3744",
        },
        {
          id_ubigeo: "3655-3743-3746",
          nombre_ubigeo: "Junin - Junin - Ondores",
          codigo_ubigeo: "120503",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3743",
          id_padre_ubigeo_dst: "3746",
        },
        {
          id_ubigeo: "3655-3743-3747",
          nombre_ubigeo: "Junin - Junin - Ulcumayo",
          codigo_ubigeo: "120504",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3743",
          id_padre_ubigeo_dst: "3747",
        },
        {
          id_ubigeo: "3655-3748-3750",
          nombre_ubigeo: "Junin - Satipo - Coviriali",
          codigo_ubigeo: "120602",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3750",
        },
        {
          id_ubigeo: "3655-3748-3751",
          nombre_ubigeo: "Junin - Satipo - Llaylla",
          codigo_ubigeo: "120603",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3751",
        },
        {
          id_ubigeo: "3655-3748-3752",
          nombre_ubigeo: "Junin - Satipo - Mazamari",
          codigo_ubigeo: "120604",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3752",
        },
        {
          id_ubigeo: "3655-3748-3753",
          nombre_ubigeo: "Junin - Satipo - Pampa Hermosa",
          codigo_ubigeo: "120605",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3753",
        },
        {
          id_ubigeo: "3655-3748-3754",
          nombre_ubigeo: "Junin - Satipo - Pangoa",
          codigo_ubigeo: "120606",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3754",
        },
        {
          id_ubigeo: "3655-3748-3755",
          nombre_ubigeo: "Junin - Satipo - Rio Negro",
          codigo_ubigeo: "120607",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3755",
        },
        {
          id_ubigeo: "3655-3748-3756",
          nombre_ubigeo: "Junin - Satipo - Rio Tambo",
          codigo_ubigeo: "120608",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3756",
        },
        {
          id_ubigeo: "3655-3748-3749",
          nombre_ubigeo: "Junin - Satipo - Satipo",
          codigo_ubigeo: "120601",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3748",
          id_padre_ubigeo_dst: "3749",
        },
        {
          id_ubigeo: "3655-3757-3759",
          nombre_ubigeo: "Junin - Tarma - Acobamba",
          codigo_ubigeo: "120702",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3759",
        },
        {
          id_ubigeo: "3655-3757-3760",
          nombre_ubigeo: "Junin - Tarma - Huaricolca",
          codigo_ubigeo: "120703",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3760",
        },
        {
          id_ubigeo: "3655-3757-3761",
          nombre_ubigeo: "Junin - Tarma - Huasahuasi",
          codigo_ubigeo: "120704",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3761",
        },
        {
          id_ubigeo: "3655-3757-3762",
          nombre_ubigeo: "Junin - Tarma - La Union",
          codigo_ubigeo: "120705",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3762",
        },
        {
          id_ubigeo: "3655-3757-3763",
          nombre_ubigeo: "Junin - Tarma - Palca",
          codigo_ubigeo: "120706",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3763",
        },
        {
          id_ubigeo: "3655-3757-3764",
          nombre_ubigeo: "Junin - Tarma - Palcamayo",
          codigo_ubigeo: "120707",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3764",
        },
        {
          id_ubigeo: "3655-3757-3765",
          nombre_ubigeo: "Junin - Tarma - San Pedro de Cajas",
          codigo_ubigeo: "120708",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3765",
        },
        {
          id_ubigeo: "3655-3757-3766",
          nombre_ubigeo: "Junin - Tarma - Tapo",
          codigo_ubigeo: "120709",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3766",
        },
        {
          id_ubigeo: "3655-3757-3758",
          nombre_ubigeo: "Junin - Tarma - Tarma",
          codigo_ubigeo: "120701",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3757",
          id_padre_ubigeo_dst: "3758",
        },
        {
          id_ubigeo: "3655-3767-3769",
          nombre_ubigeo: "Junin - Yauli - Chacapalpa",
          codigo_ubigeo: "120802",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3769",
        },
        {
          id_ubigeo: "3655-3767-3770",
          nombre_ubigeo: "Junin - Yauli - Huay-Huay",
          codigo_ubigeo: "120803",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3770",
        },
        {
          id_ubigeo: "3655-3767-3768",
          nombre_ubigeo: "Junin - Yauli - La Oroya",
          codigo_ubigeo: "120801",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3768",
        },
        {
          id_ubigeo: "3655-3767-3771",
          nombre_ubigeo: "Junin - Yauli - Marcapomacocha",
          codigo_ubigeo: "120804",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3771",
        },
        {
          id_ubigeo: "3655-3767-3772",
          nombre_ubigeo: "Junin - Yauli - Morococha",
          codigo_ubigeo: "120805",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3772",
        },
        {
          id_ubigeo: "3655-3767-3773",
          nombre_ubigeo: "Junin - Yauli - Paccha",
          codigo_ubigeo: "120806",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3773",
        },
        {
          id_ubigeo: "3655-3767-3774",
          nombre_ubigeo: "Junin - Yauli - Santa Barbara de Carhuacayan",
          codigo_ubigeo: "120807",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3774",
        },
        {
          id_ubigeo: "3655-3767-3775",
          nombre_ubigeo: "Junin - Yauli - Santa Rosa de Sacco",
          codigo_ubigeo: "120808",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3775",
        },
        {
          id_ubigeo: "3655-3767-3776",
          nombre_ubigeo: "Junin - Yauli - Suitucancha",
          codigo_ubigeo: "120809",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3776",
        },
        {
          id_ubigeo: "3655-3767-3777",
          nombre_ubigeo: "Junin - Yauli - Yauli",
          codigo_ubigeo: "120810",
          id_padre_ubigeo_dpto: "3655",
          id_padre_ubigeo_prov: "3767",
          id_padre_ubigeo_dst: "3777",
        },
        {
          id_ubigeo: "3788-3801-3802",
          nombre_ubigeo: "La Libertad - Ascope - Ascope",
          codigo_ubigeo: "130201",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3802",
        },
        {
          id_ubigeo: "3788-3801-3809",
          nombre_ubigeo: "La Libertad - Ascope - Casa Grande",
          codigo_ubigeo: "130208",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3809",
        },
        {
          id_ubigeo: "3788-3801-3803",
          nombre_ubigeo: "La Libertad - Ascope - Chicama",
          codigo_ubigeo: "130202",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3803",
        },
        {
          id_ubigeo: "3788-3801-3804",
          nombre_ubigeo: "La Libertad - Ascope - Chocope",
          codigo_ubigeo: "130203",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3804",
        },
        {
          id_ubigeo: "3788-3801-3805",
          nombre_ubigeo: "La Libertad - Ascope - Magdalena de Cao",
          codigo_ubigeo: "130204",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3805",
        },
        {
          id_ubigeo: "3788-3801-3806",
          nombre_ubigeo: "La Libertad - Ascope - Paijan",
          codigo_ubigeo: "130205",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3806",
        },
        {
          id_ubigeo: "3788-3801-3807",
          nombre_ubigeo: "La Libertad - Ascope - Razuri",
          codigo_ubigeo: "130206",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3807",
        },
        {
          id_ubigeo: "3788-3801-3808",
          nombre_ubigeo: "La Libertad - Ascope - Santiago de Cao",
          codigo_ubigeo: "130207",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3801",
          id_padre_ubigeo_dst: "3808",
        },
        {
          id_ubigeo: "3788-3810-3812",
          nombre_ubigeo: "La Libertad - Bolivar - Bambamarca",
          codigo_ubigeo: "130302",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3810",
          id_padre_ubigeo_dst: "3812",
        },
        {
          id_ubigeo: "3788-3810-3811",
          nombre_ubigeo: "La Libertad - Bolivar - Bolivar",
          codigo_ubigeo: "130301",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3810",
          id_padre_ubigeo_dst: "3811",
        },
        {
          id_ubigeo: "3788-3810-3813",
          nombre_ubigeo: "La Libertad - Bolivar - Condormarca",
          codigo_ubigeo: "130303",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3810",
          id_padre_ubigeo_dst: "3813",
        },
        {
          id_ubigeo: "3788-3810-3814",
          nombre_ubigeo: "La Libertad - Bolivar - Longotea",
          codigo_ubigeo: "130304",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3810",
          id_padre_ubigeo_dst: "3814",
        },
        {
          id_ubigeo: "3788-3810-3815",
          nombre_ubigeo: "La Libertad - Bolivar - Uchumarca",
          codigo_ubigeo: "130305",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3810",
          id_padre_ubigeo_dst: "3815",
        },
        {
          id_ubigeo: "3788-3810-3816",
          nombre_ubigeo: "La Libertad - Bolivar - Ucuncha",
          codigo_ubigeo: "130306",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3810",
          id_padre_ubigeo_dst: "3816",
        },
        {
          id_ubigeo: "3788-3817-3818",
          nombre_ubigeo: "La Libertad - Chepen - Chepen",
          codigo_ubigeo: "130401",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3817",
          id_padre_ubigeo_dst: "3818",
        },
        {
          id_ubigeo: "3788-3817-3819",
          nombre_ubigeo: "La Libertad - Chepen - Pacanga",
          codigo_ubigeo: "130402",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3817",
          id_padre_ubigeo_dst: "3819",
        },
        {
          id_ubigeo: "3788-3817-3820",
          nombre_ubigeo: "La Libertad - Chepen - Pueblo Nuevo",
          codigo_ubigeo: "130403",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3817",
          id_padre_ubigeo_dst: "3820",
        },
        {
          id_ubigeo: "3788-3875-3876",
          nombre_ubigeo: "La Libertad - Gran Chimu - Cascas",
          codigo_ubigeo: "131101",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3875",
          id_padre_ubigeo_dst: "3876",
        },
        {
          id_ubigeo: "3788-3875-3877",
          nombre_ubigeo: "La Libertad - Gran Chimu - Lucma",
          codigo_ubigeo: "131102",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3875",
          id_padre_ubigeo_dst: "3877",
        },
        {
          id_ubigeo: "3788-3875-3878",
          nombre_ubigeo: "La Libertad - Gran Chimu - Marmot",
          codigo_ubigeo: "131103",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3875",
          id_padre_ubigeo_dst: "3878",
        },
        {
          id_ubigeo: "3788-3875-3879",
          nombre_ubigeo: "La Libertad - Gran Chimu - Sayapullo",
          codigo_ubigeo: "131104",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3875",
          id_padre_ubigeo_dst: "3879",
        },
        {
          id_ubigeo: "3788-3821-3823",
          nombre_ubigeo: "La Libertad - Julcan - Calamarca",
          codigo_ubigeo: "130502",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3821",
          id_padre_ubigeo_dst: "3823",
        },
        {
          id_ubigeo: "3788-3821-3824",
          nombre_ubigeo: "La Libertad - Julcan - Carabamba",
          codigo_ubigeo: "130503",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3821",
          id_padre_ubigeo_dst: "3824",
        },
        {
          id_ubigeo: "3788-3821-3825",
          nombre_ubigeo: "La Libertad - Julcan - Huaso",
          codigo_ubigeo: "130504",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3821",
          id_padre_ubigeo_dst: "3825",
        },
        {
          id_ubigeo: "3788-3821-3822",
          nombre_ubigeo: "La Libertad - Julcan - Julcan",
          codigo_ubigeo: "130501",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3821",
          id_padre_ubigeo_dst: "3822",
        },
        {
          id_ubigeo: "3788-3826-3828",
          nombre_ubigeo: "La Libertad - Otuzco - Agallpampa",
          codigo_ubigeo: "130602",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3828",
        },
        {
          id_ubigeo: "3788-3826-3829",
          nombre_ubigeo: "La Libertad - Otuzco - Charat",
          codigo_ubigeo: "130604",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3829",
        },
        {
          id_ubigeo: "3788-3826-3830",
          nombre_ubigeo: "La Libertad - Otuzco - Huaranchal",
          codigo_ubigeo: "130605",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3830",
        },
        {
          id_ubigeo: "3788-3826-3831",
          nombre_ubigeo: "La Libertad - Otuzco - La Cuesta",
          codigo_ubigeo: "130606",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3831",
        },
        {
          id_ubigeo: "3788-3826-3832",
          nombre_ubigeo: "La Libertad - Otuzco - Mache",
          codigo_ubigeo: "130608",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3832",
        },
        {
          id_ubigeo: "3788-3826-3827",
          nombre_ubigeo: "La Libertad - Otuzco - Otuzco",
          codigo_ubigeo: "130601",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3827",
        },
        {
          id_ubigeo: "3788-3826-3833",
          nombre_ubigeo: "La Libertad - Otuzco - Paranday",
          codigo_ubigeo: "130610",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3833",
        },
        {
          id_ubigeo: "3788-3826-3834",
          nombre_ubigeo: "La Libertad - Otuzco - Salpo",
          codigo_ubigeo: "130611",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3834",
        },
        {
          id_ubigeo: "3788-3826-3835",
          nombre_ubigeo: "La Libertad - Otuzco - Sinsicap",
          codigo_ubigeo: "130613",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3835",
        },
        {
          id_ubigeo: "3788-3826-3836",
          nombre_ubigeo: "La Libertad - Otuzco - Usquil",
          codigo_ubigeo: "130614",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3826",
          id_padre_ubigeo_dst: "3836",
        },
        {
          id_ubigeo: "3788-3837-3839",
          nombre_ubigeo: "La Libertad - Pacasmayo - Guadalupe",
          codigo_ubigeo: "130702",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3837",
          id_padre_ubigeo_dst: "3839",
        },
        {
          id_ubigeo: "3788-3837-3840",
          nombre_ubigeo: "La Libertad - Pacasmayo - Jequetepeque",
          codigo_ubigeo: "130703",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3837",
          id_padre_ubigeo_dst: "3840",
        },
        {
          id_ubigeo: "3788-3837-3841",
          nombre_ubigeo: "La Libertad - Pacasmayo - Pacasmayo",
          codigo_ubigeo: "130704",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3837",
          id_padre_ubigeo_dst: "3841",
        },
        {
          id_ubigeo: "3788-3837-3842",
          nombre_ubigeo: "La Libertad - Pacasmayo - San Jose",
          codigo_ubigeo: "130705",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3837",
          id_padre_ubigeo_dst: "3842",
        },
        {
          id_ubigeo: "3788-3837-3838",
          nombre_ubigeo: "La Libertad - Pacasmayo - San Pedro de Lloc",
          codigo_ubigeo: "130701",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3837",
          id_padre_ubigeo_dst: "3838",
        },
        {
          id_ubigeo: "3788-3843-3845",
          nombre_ubigeo: "La Libertad - Pataz - Buldibuyo",
          codigo_ubigeo: "130802",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3845",
        },
        {
          id_ubigeo: "3788-3843-3846",
          nombre_ubigeo: "La Libertad - Pataz - Chillia",
          codigo_ubigeo: "130803",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3846",
        },
        {
          id_ubigeo: "3788-3843-3847",
          nombre_ubigeo: "La Libertad - Pataz - Huancaspata",
          codigo_ubigeo: "130804",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3847",
        },
        {
          id_ubigeo: "3788-3843-3848",
          nombre_ubigeo: "La Libertad - Pataz - Huaylillas",
          codigo_ubigeo: "130805",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3848",
        },
        {
          id_ubigeo: "3788-3843-3849",
          nombre_ubigeo: "La Libertad - Pataz - Huayo",
          codigo_ubigeo: "130806",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3849",
        },
        {
          id_ubigeo: "3788-3843-3850",
          nombre_ubigeo: "La Libertad - Pataz - Ongon",
          codigo_ubigeo: "130807",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3850",
        },
        {
          id_ubigeo: "3788-3843-3851",
          nombre_ubigeo: "La Libertad - Pataz - Parcoy",
          codigo_ubigeo: "130808",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3851",
        },
        {
          id_ubigeo: "3788-3843-3852",
          nombre_ubigeo: "La Libertad - Pataz - Pataz",
          codigo_ubigeo: "130809",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3852",
        },
        {
          id_ubigeo: "3788-3843-3853",
          nombre_ubigeo: "La Libertad - Pataz - Pias",
          codigo_ubigeo: "130810",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3853",
        },
        {
          id_ubigeo: "3788-3843-3854",
          nombre_ubigeo: "La Libertad - Pataz - Santiago de Challas",
          codigo_ubigeo: "130811",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3854",
        },
        {
          id_ubigeo: "3788-3843-3855",
          nombre_ubigeo: "La Libertad - Pataz - Taurija",
          codigo_ubigeo: "130812",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3855",
        },
        {
          id_ubigeo: "3788-3843-3844",
          nombre_ubigeo: "La Libertad - Pataz - Tayabamba",
          codigo_ubigeo: "130801",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3844",
        },
        {
          id_ubigeo: "3788-3843-3856",
          nombre_ubigeo: "La Libertad - Pataz - Urpay",
          codigo_ubigeo: "130813",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3843",
          id_padre_ubigeo_dst: "3856",
        },
        {
          id_ubigeo: "3788-3857-3859",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Chugay",
          codigo_ubigeo: "130902",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3859",
        },
        {
          id_ubigeo: "3788-3857-3860",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Cochorco",
          codigo_ubigeo: "130903",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3860",
        },
        {
          id_ubigeo: "3788-3857-3861",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Curgos",
          codigo_ubigeo: "130904",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3861",
        },
        {
          id_ubigeo: "3788-3857-3858",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Huamachuco",
          codigo_ubigeo: "130901",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3858",
        },
        {
          id_ubigeo: "3788-3857-3862",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Marcabal",
          codigo_ubigeo: "130905",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3862",
        },
        {
          id_ubigeo: "3788-3857-3863",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Sanagoran",
          codigo_ubigeo: "130906",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3863",
        },
        {
          id_ubigeo: "3788-3857-3864",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Sarin",
          codigo_ubigeo: "130907",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3864",
        },
        {
          id_ubigeo: "3788-3857-3865",
          nombre_ubigeo: "La Libertad - Sanchez Carrion - Sartimbamba",
          codigo_ubigeo: "130908",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3857",
          id_padre_ubigeo_dst: "3865",
        },
        {
          id_ubigeo: "3788-3866-3868",
          nombre_ubigeo: "La Libertad - Santiago de Chuco - Angasmarca",
          codigo_ubigeo: "131002",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3868",
        },
        {
          id_ubigeo: "3788-3866-3869",
          nombre_ubigeo: "La Libertad - Santiago de Chuco - Cachicadan",
          codigo_ubigeo: "131003",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3869",
        },
        {
          id_ubigeo: "3788-3866-3870",
          nombre_ubigeo: "La Libertad - Santiago de Chuco - Mollebamba",
          codigo_ubigeo: "131004",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3870",
        },
        {
          id_ubigeo: "3788-3866-3871",
          nombre_ubigeo: "La Libertad - Santiago de Chuco - Mollepata",
          codigo_ubigeo: "131005",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3871",
        },
        {
          id_ubigeo: "3788-3866-3872",
          nombre_ubigeo: "La Libertad - Santiago de Chuco - Quiruvilca",
          codigo_ubigeo: "131006",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3872",
        },
        {
          id_ubigeo: "3788-3866-3873",
          nombre_ubigeo:
            "La Libertad - Santiago de Chuco - Santa Cruz de Chuca",
          codigo_ubigeo: "131007",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3873",
        },
        {
          id_ubigeo: "3788-3866-3867",
          nombre_ubigeo: "La Libertad - Santiago de Chuco - Santiago de Chuco",
          codigo_ubigeo: "131001",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3867",
        },
        {
          id_ubigeo: "3788-3866-3874",
          nombre_ubigeo: "La Libertad - Santiago de Chuco - Sitabamba",
          codigo_ubigeo: "131008",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3866",
          id_padre_ubigeo_dst: "3874",
        },
        {
          id_ubigeo: "3788-3789-3791",
          nombre_ubigeo: "La Libertad - Trujillo - El Porvenir",
          codigo_ubigeo: "130102",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3791",
        },
        {
          id_ubigeo: "3788-3789-3792",
          nombre_ubigeo: "La Libertad - Trujillo - Florencia de Mora",
          codigo_ubigeo: "130103",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3792",
        },
        {
          id_ubigeo: "3788-3789-3793",
          nombre_ubigeo: "La Libertad - Trujillo - Huanchaco",
          codigo_ubigeo: "130104",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3793",
        },
        {
          id_ubigeo: "3788-3789-3794",
          nombre_ubigeo: "La Libertad - Trujillo - La Esperanza",
          codigo_ubigeo: "130105",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3794",
        },
        {
          id_ubigeo: "3788-3789-3795",
          nombre_ubigeo: "La Libertad - Trujillo - Laredo",
          codigo_ubigeo: "130106",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3795",
        },
        {
          id_ubigeo: "3788-3789-3796",
          nombre_ubigeo: "La Libertad - Trujillo - Moche",
          codigo_ubigeo: "130107",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3796",
        },
        {
          id_ubigeo: "3788-3789-3797",
          nombre_ubigeo: "La Libertad - Trujillo - Poroto",
          codigo_ubigeo: "130108",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3797",
        },
        {
          id_ubigeo: "3788-3789-3798",
          nombre_ubigeo: "La Libertad - Trujillo - Salaverry",
          codigo_ubigeo: "130109",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3798",
        },
        {
          id_ubigeo: "3788-3789-3799",
          nombre_ubigeo: "La Libertad - Trujillo - Simbal",
          codigo_ubigeo: "130110",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3799",
        },
        {
          id_ubigeo: "3788-3789-3790",
          nombre_ubigeo: "La Libertad - Trujillo - Trujillo",
          codigo_ubigeo: "130101",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3790",
        },
        {
          id_ubigeo: "3788-3789-3800",
          nombre_ubigeo: "La Libertad - Trujillo - Victor Larco Herrera",
          codigo_ubigeo: "130111",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3789",
          id_padre_ubigeo_dst: "3800",
        },
        {
          id_ubigeo: "3788-3880-3882",
          nombre_ubigeo: "La Libertad - Viru - Chao",
          codigo_ubigeo: "131202",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3880",
          id_padre_ubigeo_dst: "3882",
        },
        {
          id_ubigeo: "3788-3880-3883",
          nombre_ubigeo: "La Libertad - Viru - Guadalupito",
          codigo_ubigeo: "131203",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3880",
          id_padre_ubigeo_dst: "3883",
        },
        {
          id_ubigeo: "3788-3880-3881",
          nombre_ubigeo: "La Libertad - Viru - Viru",
          codigo_ubigeo: "131201",
          id_padre_ubigeo_dpto: "3788",
          id_padre_ubigeo_prov: "3880",
          id_padre_ubigeo_dst: "3881",
        },
        {
          id_ubigeo: "3884-3885-3901",
          nombre_ubigeo: "Lambayeque - Chiclayo - Cayalt\xed",
          codigo_ubigeo: "140116",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3901",
        },
        {
          id_ubigeo: "3884-3885-3886",
          nombre_ubigeo: "Lambayeque - Chiclayo - Chiclayo",
          codigo_ubigeo: "140101",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3886",
        },
        {
          id_ubigeo: "3884-3885-3887",
          nombre_ubigeo: "Lambayeque - Chiclayo - Chongoyape",
          codigo_ubigeo: "140102",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3887",
        },
        {
          id_ubigeo: "3884-3885-3888",
          nombre_ubigeo: "Lambayeque - Chiclayo - Eten",
          codigo_ubigeo: "140103",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3888",
        },
        {
          id_ubigeo: "3884-3885-3889",
          nombre_ubigeo: "Lambayeque - Chiclayo - Eten Puerto",
          codigo_ubigeo: "140104",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3889",
        },
        {
          id_ubigeo: "3884-3885-3890",
          nombre_ubigeo: "Lambayeque - Chiclayo - Jose Leonardo Ortiz",
          codigo_ubigeo: "140105",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3890",
        },
        {
          id_ubigeo: "3884-3885-3891",
          nombre_ubigeo: "Lambayeque - Chiclayo - La Victoria",
          codigo_ubigeo: "140106",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3891",
        },
        {
          id_ubigeo: "3884-3885-3892",
          nombre_ubigeo: "Lambayeque - Chiclayo - Lagunas",
          codigo_ubigeo: "140107",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3892",
        },
        {
          id_ubigeo: "3884-3885-3893",
          nombre_ubigeo: "Lambayeque - Chiclayo - Monsefu",
          codigo_ubigeo: "140108",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3893",
        },
        {
          id_ubigeo: "3884-3885-3894",
          nombre_ubigeo: "Lambayeque - Chiclayo - Nueva Arica",
          codigo_ubigeo: "140109",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3894",
        },
        {
          id_ubigeo: "3884-3885-3895",
          nombre_ubigeo: "Lambayeque - Chiclayo - Oyotun",
          codigo_ubigeo: "140110",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3895",
        },
        {
          id_ubigeo: "3884-3885-3902",
          nombre_ubigeo: "Lambayeque - Chiclayo - Patapo",
          codigo_ubigeo: "140117",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3902",
        },
        {
          id_ubigeo: "3884-3885-3896",
          nombre_ubigeo: "Lambayeque - Chiclayo - Picsi",
          codigo_ubigeo: "140111",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3896",
        },
        {
          id_ubigeo: "3884-3885-3897",
          nombre_ubigeo: "Lambayeque - Chiclayo - Pimentel",
          codigo_ubigeo: "140112",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3897",
        },
        {
          id_ubigeo: "3884-3885-3903",
          nombre_ubigeo: "Lambayeque - Chiclayo - Pomalca",
          codigo_ubigeo: "140118",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3903",
        },
        {
          id_ubigeo: "3884-3885-3904",
          nombre_ubigeo: "Lambayeque - Chiclayo - Pucal\xe1",
          codigo_ubigeo: "140119",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3904",
        },
        {
          id_ubigeo: "3884-3885-3898",
          nombre_ubigeo: "Lambayeque - Chiclayo - Reque",
          codigo_ubigeo: "140113",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3898",
        },
        {
          id_ubigeo: "3884-3885-3899",
          nombre_ubigeo: "Lambayeque - Chiclayo - Santa Rosa",
          codigo_ubigeo: "140114",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3899",
        },
        {
          id_ubigeo: "3884-3885-3900",
          nombre_ubigeo: "Lambayeque - Chiclayo - Saqa",
          codigo_ubigeo: "140115",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3900",
        },
        {
          id_ubigeo: "3884-3885-3905",
          nombre_ubigeo: "Lambayeque - Chiclayo - Tum\xe1n",
          codigo_ubigeo: "140120",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3885",
          id_padre_ubigeo_dst: "3905",
        },
        {
          id_ubigeo: "3884-3906-3908",
          nombre_ubigeo: "Lambayeque - Ferreqafe - Caqaris",
          codigo_ubigeo: "140202",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3906",
          id_padre_ubigeo_dst: "3908",
        },
        {
          id_ubigeo: "3884-3906-3907",
          nombre_ubigeo: "Lambayeque - Ferreqafe - Ferreqafe",
          codigo_ubigeo: "140201",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3906",
          id_padre_ubigeo_dst: "3907",
        },
        {
          id_ubigeo: "3884-3906-3909",
          nombre_ubigeo: "Lambayeque - Ferreqafe - Incahuasi",
          codigo_ubigeo: "140203",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3906",
          id_padre_ubigeo_dst: "3909",
        },
        {
          id_ubigeo: "3884-3906-3910",
          nombre_ubigeo: "Lambayeque - Ferreqafe - Manuel Antonio Mesones Muro",
          codigo_ubigeo: "140204",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3906",
          id_padre_ubigeo_dst: "3910",
        },
        {
          id_ubigeo: "3884-3906-3911",
          nombre_ubigeo: "Lambayeque - Ferreqafe - Pitipo",
          codigo_ubigeo: "140205",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3906",
          id_padre_ubigeo_dst: "3911",
        },
        {
          id_ubigeo: "3884-3906-3912",
          nombre_ubigeo: "Lambayeque - Ferreqafe - Pueblo Nuevo",
          codigo_ubigeo: "140206",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3906",
          id_padre_ubigeo_dst: "3912",
        },
        {
          id_ubigeo: "3884-3913-3915",
          nombre_ubigeo: "Lambayeque - Lambayeque - Chochope",
          codigo_ubigeo: "140302",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3915",
        },
        {
          id_ubigeo: "3884-3913-3916",
          nombre_ubigeo: "Lambayeque - Lambayeque - Illimo",
          codigo_ubigeo: "140303",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3916",
        },
        {
          id_ubigeo: "3884-3913-3917",
          nombre_ubigeo: "Lambayeque - Lambayeque - Jayanca",
          codigo_ubigeo: "140304",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3917",
        },
        {
          id_ubigeo: "3884-3913-3914",
          nombre_ubigeo: "Lambayeque - Lambayeque - Lambayeque",
          codigo_ubigeo: "140301",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3914",
        },
        {
          id_ubigeo: "3884-3913-3918",
          nombre_ubigeo: "Lambayeque - Lambayeque - Mochumi",
          codigo_ubigeo: "140305",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3918",
        },
        {
          id_ubigeo: "3884-3913-3919",
          nombre_ubigeo: "Lambayeque - Lambayeque - Morrope",
          codigo_ubigeo: "140306",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3919",
        },
        {
          id_ubigeo: "3884-3913-3920",
          nombre_ubigeo: "Lambayeque - Lambayeque - Motupe",
          codigo_ubigeo: "140307",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3920",
        },
        {
          id_ubigeo: "3884-3913-3921",
          nombre_ubigeo: "Lambayeque - Lambayeque - Olmos",
          codigo_ubigeo: "140308",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3921",
        },
        {
          id_ubigeo: "3884-3913-3922",
          nombre_ubigeo: "Lambayeque - Lambayeque - Pacora",
          codigo_ubigeo: "140309",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3922",
        },
        {
          id_ubigeo: "3884-3913-3923",
          nombre_ubigeo: "Lambayeque - Lambayeque - Salas",
          codigo_ubigeo: "140310",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3923",
        },
        {
          id_ubigeo: "3884-3913-3924",
          nombre_ubigeo: "Lambayeque - Lambayeque - San Jose",
          codigo_ubigeo: "140311",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3924",
        },
        {
          id_ubigeo: "3884-3913-3925",
          nombre_ubigeo: "Lambayeque - Lambayeque - Tucume",
          codigo_ubigeo: "140312",
          id_padre_ubigeo_dpto: "3884",
          id_padre_ubigeo_prov: "3913",
          id_padre_ubigeo_dst: "3925",
        },
        {
          id_ubigeo: "3926-3971-3972",
          nombre_ubigeo: "Lima - Barranca - Barranca",
          codigo_ubigeo: "150201",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3971",
          id_padre_ubigeo_dst: "3972",
        },
        {
          id_ubigeo: "3926-3971-3973",
          nombre_ubigeo: "Lima - Barranca - Paramonga",
          codigo_ubigeo: "150202",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3971",
          id_padre_ubigeo_dst: "3973",
        },
        {
          id_ubigeo: "3926-3971-3974",
          nombre_ubigeo: "Lima - Barranca - Pativilca",
          codigo_ubigeo: "150203",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3971",
          id_padre_ubigeo_dst: "3974",
        },
        {
          id_ubigeo: "3926-3971-3975",
          nombre_ubigeo: "Lima - Barranca - Supe",
          codigo_ubigeo: "150204",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3971",
          id_padre_ubigeo_dst: "3975",
        },
        {
          id_ubigeo: "3926-3971-3976",
          nombre_ubigeo: "Lima - Barranca - Supe Puerto",
          codigo_ubigeo: "150205",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3971",
          id_padre_ubigeo_dst: "3976",
        },
        {
          id_ubigeo: "3926-3977-3978",
          nombre_ubigeo: "Lima - Cajatambo - Cajatambo",
          codigo_ubigeo: "150301",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3977",
          id_padre_ubigeo_dst: "3978",
        },
        {
          id_ubigeo: "3926-3977-3979",
          nombre_ubigeo: "Lima - Cajatambo - Copa",
          codigo_ubigeo: "150302",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3977",
          id_padre_ubigeo_dst: "3979",
        },
        {
          id_ubigeo: "3926-3977-3980",
          nombre_ubigeo: "Lima - Cajatambo - Gorgor",
          codigo_ubigeo: "150303",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3977",
          id_padre_ubigeo_dst: "3980",
        },
        {
          id_ubigeo: "3926-3977-3981",
          nombre_ubigeo: "Lima - Cajatambo - Huancapon",
          codigo_ubigeo: "150304",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3977",
          id_padre_ubigeo_dst: "3981",
        },
        {
          id_ubigeo: "3926-3977-3982",
          nombre_ubigeo: "Lima - Cajatambo - Manas",
          codigo_ubigeo: "150305",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3977",
          id_padre_ubigeo_dst: "3982",
        },
        {
          id_ubigeo: "3926-3285-3287",
          nombre_ubigeo: "Lima - Callao - Bellavista",
          codigo_ubigeo: "150102",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3285",
          id_padre_ubigeo_dst: "3287",
        },
        {
          id_ubigeo: "3926-3285-3286",
          nombre_ubigeo: "Lima - Callao - Callao",
          codigo_ubigeo: "150101",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3285",
          id_padre_ubigeo_dst: "3286",
        },
        {
          id_ubigeo: "3926-3285-3288",
          nombre_ubigeo: "Lima - Callao - Carmen de la Legua Reynoso",
          codigo_ubigeo: "150103",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3285",
          id_padre_ubigeo_dst: "3288",
        },
        {
          id_ubigeo: "3926-3285-3289",
          nombre_ubigeo: "Lima - Callao - La Perla",
          codigo_ubigeo: "150104",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3285",
          id_padre_ubigeo_dst: "3289",
        },
        {
          id_ubigeo: "3926-3285-3290",
          nombre_ubigeo: "Lima - Callao - La Punta",
          codigo_ubigeo: "150105",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3285",
          id_padre_ubigeo_dst: "3290",
        },
        {
          id_ubigeo: "3926-3285-3291",
          nombre_ubigeo: "Lima - Callao - Ventanilla",
          codigo_ubigeo: "150106",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3285",
          id_padre_ubigeo_dst: "3291",
        },
        {
          id_ubigeo: "3926-3991-3993",
          nombre_ubigeo: "Lima - Ca\xf1ete - Asia",
          codigo_ubigeo: "150502",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3993",
        },
        {
          id_ubigeo: "3926-3991-3994",
          nombre_ubigeo: "Lima - Ca\xf1ete - Calango",
          codigo_ubigeo: "150503",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3994",
        },
        {
          id_ubigeo: "3926-3991-3995",
          nombre_ubigeo: "Lima - Ca\xf1ete - Cerro Azul",
          codigo_ubigeo: "150504",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3995",
        },
        {
          id_ubigeo: "3926-3991-3996",
          nombre_ubigeo: "Lima - Ca\xf1ete - Chilca",
          codigo_ubigeo: "150505",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3996",
        },
        {
          id_ubigeo: "3926-3991-3997",
          nombre_ubigeo: "Lima - Ca\xf1ete - Coayllo",
          codigo_ubigeo: "150506",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3997",
        },
        {
          id_ubigeo: "3926-3991-3998",
          nombre_ubigeo: "Lima - Ca\xf1ete - Imperial",
          codigo_ubigeo: "150507",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3998",
        },
        {
          id_ubigeo: "3926-3991-3999",
          nombre_ubigeo: "Lima - Ca\xf1ete - Lunahuana",
          codigo_ubigeo: "150508",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3999",
        },
        {
          id_ubigeo: "3926-3991-4000",
          nombre_ubigeo: "Lima - Ca\xf1ete - Mala",
          codigo_ubigeo: "150509",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4000",
        },
        {
          id_ubigeo: "3926-3991-4001",
          nombre_ubigeo: "Lima - Ca\xf1ete - Nuevo Imperial",
          codigo_ubigeo: "150510",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4001",
        },
        {
          id_ubigeo: "3926-3991-4002",
          nombre_ubigeo: "Lima - Ca\xf1ete - Pacaran",
          codigo_ubigeo: "150511",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4002",
        },
        {
          id_ubigeo: "3926-3991-4003",
          nombre_ubigeo: "Lima - Ca\xf1ete - Quilmana",
          codigo_ubigeo: "150512",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4003",
        },
        {
          id_ubigeo: "3926-3991-4004",
          nombre_ubigeo: "Lima - Ca\xf1ete - San Antonio",
          codigo_ubigeo: "150513",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4004",
        },
        {
          id_ubigeo: "3926-3991-4005",
          nombre_ubigeo: "Lima - Ca\xf1ete - San Luis",
          codigo_ubigeo: "150514",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4005",
        },
        {
          id_ubigeo: "3926-3991-3992",
          nombre_ubigeo: "Lima - Ca\xf1ete - San Vicente de Ca\xf1ete",
          codigo_ubigeo: "150501",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "3992",
        },
        {
          id_ubigeo: "3926-3991-4006",
          nombre_ubigeo: "Lima - Ca\xf1ete - Santa Cruz de Flores",
          codigo_ubigeo: "150515",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4006",
        },
        {
          id_ubigeo: "3926-3991-4007",
          nombre_ubigeo: "Lima - Ca\xf1ete - Zuqiga",
          codigo_ubigeo: "150516",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3991",
          id_padre_ubigeo_dst: "4007",
        },
        {
          id_ubigeo: "3926-3983-3985",
          nombre_ubigeo: "Lima - Canta - Arahuay",
          codigo_ubigeo: "150402",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3983",
          id_padre_ubigeo_dst: "3985",
        },
        {
          id_ubigeo: "3926-3983-3984",
          nombre_ubigeo: "Lima - Canta - Canta",
          codigo_ubigeo: "150401",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3983",
          id_padre_ubigeo_dst: "3984",
        },
        {
          id_ubigeo: "3926-3983-3986",
          nombre_ubigeo: "Lima - Canta - Huamantanga",
          codigo_ubigeo: "150403",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3983",
          id_padre_ubigeo_dst: "3986",
        },
        {
          id_ubigeo: "3926-3983-3987",
          nombre_ubigeo: "Lima - Canta - Huaros",
          codigo_ubigeo: "150404",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3983",
          id_padre_ubigeo_dst: "3987",
        },
        {
          id_ubigeo: "3926-3983-3988",
          nombre_ubigeo: "Lima - Canta - Lachaqui",
          codigo_ubigeo: "150405",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3983",
          id_padre_ubigeo_dst: "3988",
        },
        {
          id_ubigeo: "3926-3983-3989",
          nombre_ubigeo: "Lima - Canta - San Buenaventura",
          codigo_ubigeo: "150406",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3983",
          id_padre_ubigeo_dst: "3989",
        },
        {
          id_ubigeo: "3926-3983-3990",
          nombre_ubigeo: "Lima - Canta - Santa Rosa de Quives",
          codigo_ubigeo: "150407",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3983",
          id_padre_ubigeo_dst: "3990",
        },
        {
          id_ubigeo: "3926-4008-4010",
          nombre_ubigeo: "Lima - Huaral - Atavillos Alto",
          codigo_ubigeo: "150602",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4010",
        },
        {
          id_ubigeo: "3926-4008-4011",
          nombre_ubigeo: "Lima - Huaral - Atavillos Bajo",
          codigo_ubigeo: "150603",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4011",
        },
        {
          id_ubigeo: "3926-4008-4012",
          nombre_ubigeo: "Lima - Huaral - Aucallama",
          codigo_ubigeo: "150604",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4012",
        },
        {
          id_ubigeo: "3926-4008-4013",
          nombre_ubigeo: "Lima - Huaral - Chancay",
          codigo_ubigeo: "150605",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4013",
        },
        {
          id_ubigeo: "3926-4008-4009",
          nombre_ubigeo: "Lima - Huaral - Huaral",
          codigo_ubigeo: "150601",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4009",
        },
        {
          id_ubigeo: "3926-4008-4014",
          nombre_ubigeo: "Lima - Huaral - Ihuari",
          codigo_ubigeo: "150606",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4014",
        },
        {
          id_ubigeo: "3926-4008-4015",
          nombre_ubigeo: "Lima - Huaral - Lampian",
          codigo_ubigeo: "150607",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4015",
        },
        {
          id_ubigeo: "3926-4008-4016",
          nombre_ubigeo: "Lima - Huaral - Pacaraos",
          codigo_ubigeo: "150608",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4016",
        },
        {
          id_ubigeo: "3926-4008-4017",
          nombre_ubigeo: "Lima - Huaral - San Miguel de Acos",
          codigo_ubigeo: "150609",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4017",
        },
        {
          id_ubigeo: "3926-4008-4018",
          nombre_ubigeo: "Lima - Huaral - Santa Cruz de Andamarca",
          codigo_ubigeo: "150610",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4018",
        },
        {
          id_ubigeo: "3926-4008-4019",
          nombre_ubigeo: "Lima - Huaral - Sumbilca",
          codigo_ubigeo: "150611",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4019",
        },
        {
          id_ubigeo: "3926-4008-4020",
          nombre_ubigeo: "Lima - Huaral - Veintisiete de Noviembre",
          codigo_ubigeo: "150612",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4008",
          id_padre_ubigeo_dst: "4020",
        },
        {
          id_ubigeo: "3926-4021-4023",
          nombre_ubigeo: "Lima - Huarochiri - Antioquia",
          codigo_ubigeo: "150702",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4023",
        },
        {
          id_ubigeo: "3926-4021-4024",
          nombre_ubigeo: "Lima - Huarochiri - Callahuanca",
          codigo_ubigeo: "150703",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4024",
        },
        {
          id_ubigeo: "3926-4021-4025",
          nombre_ubigeo: "Lima - Huarochiri - Carampoma",
          codigo_ubigeo: "150704",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4025",
        },
        {
          id_ubigeo: "3926-4021-4026",
          nombre_ubigeo: "Lima - Huarochiri - Chicla",
          codigo_ubigeo: "150705",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4026",
        },
        {
          id_ubigeo: "3926-4021-4027",
          nombre_ubigeo: "Lima - Huarochiri - Cuenca",
          codigo_ubigeo: "150706",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4027",
        },
        {
          id_ubigeo: "3926-4021-4028",
          nombre_ubigeo: "Lima - Huarochiri - Huachupampa",
          codigo_ubigeo: "150707",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4028",
        },
        {
          id_ubigeo: "3926-4021-4029",
          nombre_ubigeo: "Lima - Huarochiri - Huanza",
          codigo_ubigeo: "150708",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4029",
        },
        {
          id_ubigeo: "3926-4021-4030",
          nombre_ubigeo: "Lima - Huarochiri - Huarochiri",
          codigo_ubigeo: "150709",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4030",
        },
        {
          id_ubigeo: "3926-4021-4031",
          nombre_ubigeo: "Lima - Huarochiri - Lahuaytambo",
          codigo_ubigeo: "150710",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4031",
        },
        {
          id_ubigeo: "3926-4021-4032",
          nombre_ubigeo: "Lima - Huarochiri - Langa",
          codigo_ubigeo: "150711",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4032",
        },
        {
          id_ubigeo: "3926-4021-4033",
          nombre_ubigeo: "Lima - Huarochiri - Laraos",
          codigo_ubigeo: "150712",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4033",
        },
        {
          id_ubigeo: "3926-4021-4034",
          nombre_ubigeo: "Lima - Huarochiri - Mariatana",
          codigo_ubigeo: "150713",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4034",
        },
        {
          id_ubigeo: "3926-4021-4022",
          nombre_ubigeo: "Lima - Huarochiri - Matucana",
          codigo_ubigeo: "150701",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4022",
        },
        {
          id_ubigeo: "3926-4021-4035",
          nombre_ubigeo: "Lima - Huarochiri - Ricardo Palma",
          codigo_ubigeo: "150714",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4035",
        },
        {
          id_ubigeo: "3926-4021-4036",
          nombre_ubigeo: "Lima - Huarochiri - San Andres de Tupicocha",
          codigo_ubigeo: "150715",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4036",
        },
        {
          id_ubigeo: "3926-4021-4037",
          nombre_ubigeo: "Lima - Huarochiri - San Antonio",
          codigo_ubigeo: "150716",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4037",
        },
        {
          id_ubigeo: "3926-4021-4038",
          nombre_ubigeo: "Lima - Huarochiri - San Bartolome",
          codigo_ubigeo: "150717",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4038",
        },
        {
          id_ubigeo: "3926-4021-4039",
          nombre_ubigeo: "Lima - Huarochiri - San Damian",
          codigo_ubigeo: "150718",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4039",
        },
        {
          id_ubigeo: "3926-4021-4040",
          nombre_ubigeo: "Lima - Huarochiri - San Juan de Iris",
          codigo_ubigeo: "150719",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4040",
        },
        {
          id_ubigeo: "3926-4021-4041",
          nombre_ubigeo: "Lima - Huarochiri - San Juan de Tantaranche",
          codigo_ubigeo: "150720",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4041",
        },
        {
          id_ubigeo: "3926-4021-4042",
          nombre_ubigeo: "Lima - Huarochiri - San Lorenzo de Quinti",
          codigo_ubigeo: "150721",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4042",
        },
        {
          id_ubigeo: "3926-4021-4043",
          nombre_ubigeo: "Lima - Huarochiri - San Mateo",
          codigo_ubigeo: "150722",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4043",
        },
        {
          id_ubigeo: "3926-4021-4044",
          nombre_ubigeo: "Lima - Huarochiri - San Mateo de Otao",
          codigo_ubigeo: "150723",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4044",
        },
        {
          id_ubigeo: "3926-4021-4045",
          nombre_ubigeo: "Lima - Huarochiri - San Pedro de Casta",
          codigo_ubigeo: "150724",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4045",
        },
        {
          id_ubigeo: "3926-4021-4046",
          nombre_ubigeo: "Lima - Huarochiri - San Pedro de Huancayre",
          codigo_ubigeo: "150725",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4046",
        },
        {
          id_ubigeo: "3926-4021-4047",
          nombre_ubigeo: "Lima - Huarochiri - Sangallaya",
          codigo_ubigeo: "150726",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4047",
        },
        {
          id_ubigeo: "3926-4021-4048",
          nombre_ubigeo: "Lima - Huarochiri - Santa Cruz de Cocachacra",
          codigo_ubigeo: "150727",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4048",
        },
        {
          id_ubigeo: "3926-4021-4049",
          nombre_ubigeo: "Lima - Huarochiri - Santa Eulalia",
          codigo_ubigeo: "150728",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4049",
        },
        {
          id_ubigeo: "3926-4021-4050",
          nombre_ubigeo: "Lima - Huarochiri - Santiago de Anchucaya",
          codigo_ubigeo: "150729",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4050",
        },
        {
          id_ubigeo: "3926-4021-4051",
          nombre_ubigeo: "Lima - Huarochiri - Santiago de Tuna",
          codigo_ubigeo: "150730",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4051",
        },
        {
          id_ubigeo: "3926-4021-4052",
          nombre_ubigeo: "Lima - Huarochiri - Santo Domingo de los Olleros",
          codigo_ubigeo: "150731",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4052",
        },
        {
          id_ubigeo: "3926-4021-4053",
          nombre_ubigeo: "Lima - Huarochiri - Surco",
          codigo_ubigeo: "150732",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4021",
          id_padre_ubigeo_dst: "4053",
        },
        {
          id_ubigeo: "3926-4054-4056",
          nombre_ubigeo: "Lima - Huaura - Ambar",
          codigo_ubigeo: "150802",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4056",
        },
        {
          id_ubigeo: "3926-4054-4057",
          nombre_ubigeo: "Lima - Huaura - Caleta de Carquin",
          codigo_ubigeo: "150803",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4057",
        },
        {
          id_ubigeo: "3926-4054-4058",
          nombre_ubigeo: "Lima - Huaura - Checras",
          codigo_ubigeo: "150804",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4058",
        },
        {
          id_ubigeo: "3926-4054-4055",
          nombre_ubigeo: "Lima - Huaura - Huacho",
          codigo_ubigeo: "150801",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4055",
        },
        {
          id_ubigeo: "3926-4054-4059",
          nombre_ubigeo: "Lima - Huaura - Hualmay",
          codigo_ubigeo: "150805",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4059",
        },
        {
          id_ubigeo: "3926-4054-4060",
          nombre_ubigeo: "Lima - Huaura - Huaura",
          codigo_ubigeo: "150806",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4060",
        },
        {
          id_ubigeo: "3926-4054-4061",
          nombre_ubigeo: "Lima - Huaura - Leoncio Prado",
          codigo_ubigeo: "150807",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4061",
        },
        {
          id_ubigeo: "3926-4054-4062",
          nombre_ubigeo: "Lima - Huaura - Paccho",
          codigo_ubigeo: "150808",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4062",
        },
        {
          id_ubigeo: "3926-4054-4063",
          nombre_ubigeo: "Lima - Huaura - Santa Leonor",
          codigo_ubigeo: "150809",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4063",
        },
        {
          id_ubigeo: "3926-4054-4064",
          nombre_ubigeo: "Lima - Huaura - Santa Maria",
          codigo_ubigeo: "150810",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4064",
        },
        {
          id_ubigeo: "3926-4054-4065",
          nombre_ubigeo: "Lima - Huaura - Sayan",
          codigo_ubigeo: "150811",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4065",
        },
        {
          id_ubigeo: "3926-4054-4066",
          nombre_ubigeo: "Lima - Huaura - Vegueta",
          codigo_ubigeo: "150812",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4054",
          id_padre_ubigeo_dst: "4066",
        },
        {
          id_ubigeo: "3926-3927-3929",
          nombre_ubigeo: "Lima - Lima - Ancon",
          codigo_ubigeo: "150102",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3929",
        },
        {
          id_ubigeo: "3926-3927-3930",
          nombre_ubigeo: "Lima - Lima - Ate",
          codigo_ubigeo: "150103",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3930",
        },
        {
          id_ubigeo: "3926-3927-3931",
          nombre_ubigeo: "Lima - Lima - Barranco",
          codigo_ubigeo: "150104",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3931",
        },
        {
          id_ubigeo: "3926-3927-3932",
          nombre_ubigeo: "Lima - Lima - Bre\xf1a",
          codigo_ubigeo: "150105",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3932",
        },
        {
          id_ubigeo: "3926-3927-3933",
          nombre_ubigeo: "Lima - Lima - Carabayllo",
          codigo_ubigeo: "150106",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3933",
        },
        {
          id_ubigeo: "3926-3927-3928",
          nombre_ubigeo: "Lima - Lima - Cercado de Lima",
          codigo_ubigeo: "150101",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3928",
        },
        {
          id_ubigeo: "3926-3927-3934",
          nombre_ubigeo: "Lima - Lima - Chaclacayo",
          codigo_ubigeo: "150107",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3934",
        },
        {
          id_ubigeo: "3926-3927-3935",
          nombre_ubigeo: "Lima - Lima - Chorrillos",
          codigo_ubigeo: "150108",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3935",
        },
        {
          id_ubigeo: "3926-3927-3936",
          nombre_ubigeo: "Lima - Lima - Cieneguilla",
          codigo_ubigeo: "150109",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3936",
        },
        {
          id_ubigeo: "3926-3927-3937",
          nombre_ubigeo: "Lima - Lima - Comas",
          codigo_ubigeo: "150110",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3937",
        },
        {
          id_ubigeo: "3926-3927-3938",
          nombre_ubigeo: "Lima - Lima - El Agustino",
          codigo_ubigeo: "150111",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3938",
        },
        {
          id_ubigeo: "3926-3927-3939",
          nombre_ubigeo: "Lima - Lima - Independencia",
          codigo_ubigeo: "150112",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3939",
        },
        {
          id_ubigeo: "3926-3927-3940",
          nombre_ubigeo: "Lima - Lima - Jesus Maria",
          codigo_ubigeo: "150113",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3940",
        },
        {
          id_ubigeo: "3926-3927-3941",
          nombre_ubigeo: "Lima - Lima - La Molina",
          codigo_ubigeo: "150114",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3941",
        },
        {
          id_ubigeo: "3926-3927-3942",
          nombre_ubigeo: "Lima - Lima - La Victoria",
          codigo_ubigeo: "150115",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3942",
        },
        {
          id_ubigeo: "3926-3927-3943",
          nombre_ubigeo: "Lima - Lima - Lince",
          codigo_ubigeo: "150116",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3943",
        },
        {
          id_ubigeo: "3926-3927-3944",
          nombre_ubigeo: "Lima - Lima - Los Olivos",
          codigo_ubigeo: "150117",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3944",
        },
        {
          id_ubigeo: "3926-3927-3945",
          nombre_ubigeo: "Lima - Lima - Lurigancho",
          codigo_ubigeo: "150118",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3945",
        },
        {
          id_ubigeo: "3926-3927-3946",
          nombre_ubigeo: "Lima - Lima - Lurin",
          codigo_ubigeo: "150119",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3946",
        },
        {
          id_ubigeo: "3926-3927-3947",
          nombre_ubigeo: "Lima - Lima - Magdalena del Mar",
          codigo_ubigeo: "150120",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3947",
        },
        {
          id_ubigeo: "3926-3927-3949",
          nombre_ubigeo: "Lima - Lima - Miraflores",
          codigo_ubigeo: "150122",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3949",
        },
        {
          id_ubigeo: "3926-3927-3950",
          nombre_ubigeo: "Lima - Lima - Pachacamac",
          codigo_ubigeo: "150123",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3950",
        },
        {
          id_ubigeo: "3926-3927-3951",
          nombre_ubigeo: "Lima - Lima - Pucusana",
          codigo_ubigeo: "150124",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3951",
        },
        {
          id_ubigeo: "3926-3927-3948",
          nombre_ubigeo: "Lima - Lima - Pueblo Libre",
          codigo_ubigeo: "150121",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3948",
        },
        {
          id_ubigeo: "3926-3927-3952",
          nombre_ubigeo: "Lima - Lima - Puente Piedra",
          codigo_ubigeo: "150125",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3952",
        },
        {
          id_ubigeo: "3926-3927-3953",
          nombre_ubigeo: "Lima - Lima - Punta Hermosa",
          codigo_ubigeo: "150126",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3953",
        },
        {
          id_ubigeo: "3926-3927-3954",
          nombre_ubigeo: "Lima - Lima - Punta Negra",
          codigo_ubigeo: "150127",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3954",
        },
        {
          id_ubigeo: "3926-3927-3955",
          nombre_ubigeo: "Lima - Lima - Rimac",
          codigo_ubigeo: "150128",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3955",
        },
        {
          id_ubigeo: "3926-3927-3956",
          nombre_ubigeo: "Lima - Lima - San Bartolo",
          codigo_ubigeo: "150129",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3956",
        },
        {
          id_ubigeo: "3926-3927-3957",
          nombre_ubigeo: "Lima - Lima - San Borja",
          codigo_ubigeo: "150130",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3957",
        },
        {
          id_ubigeo: "3926-3927-3958",
          nombre_ubigeo: "Lima - Lima - San Isidro",
          codigo_ubigeo: "150131",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3958",
        },
        {
          id_ubigeo: "3926-3927-3959",
          nombre_ubigeo: "Lima - Lima - San Juan de Lurigancho",
          codigo_ubigeo: "150132",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3959",
        },
        {
          id_ubigeo: "3926-3927-3960",
          nombre_ubigeo: "Lima - Lima - San Juan de Miraflores",
          codigo_ubigeo: "150133",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3960",
        },
        {
          id_ubigeo: "3926-3927-3961",
          nombre_ubigeo: "Lima - Lima - San Luis",
          codigo_ubigeo: "150134",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3961",
        },
        {
          id_ubigeo: "3926-3927-3962",
          nombre_ubigeo: "Lima - Lima - San Martin de Porres",
          codigo_ubigeo: "150135",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3962",
        },
        {
          id_ubigeo: "3926-3927-3963",
          nombre_ubigeo: "Lima - Lima - San Miguel",
          codigo_ubigeo: "150136",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3963",
        },
        {
          id_ubigeo: "3926-3927-3964",
          nombre_ubigeo: "Lima - Lima - Santa Anita",
          codigo_ubigeo: "150137",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3964",
        },
        {
          id_ubigeo: "3926-3927-3965",
          nombre_ubigeo: "Lima - Lima - Santa Maria del Mar",
          codigo_ubigeo: "150138",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3965",
        },
        {
          id_ubigeo: "3926-3927-3966",
          nombre_ubigeo: "Lima - Lima - Santa Rosa",
          codigo_ubigeo: "150139",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3966",
        },
        {
          id_ubigeo: "3926-3927-3967",
          nombre_ubigeo: "Lima - Lima - Santiago de Surco",
          codigo_ubigeo: "150140",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3967",
        },
        {
          id_ubigeo: "3926-3927-3968",
          nombre_ubigeo: "Lima - Lima - Surquillo",
          codigo_ubigeo: "150141",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3968",
        },
        {
          id_ubigeo: "3926-3927-3969",
          nombre_ubigeo: "Lima - Lima - Villa El Salvador",
          codigo_ubigeo: "150142",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3969",
        },
        {
          id_ubigeo: "3926-3927-3970",
          nombre_ubigeo: "Lima - Lima - Villa Maria del Triunfo",
          codigo_ubigeo: "150143",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "3927",
          id_padre_ubigeo_dst: "3970",
        },
        {
          id_ubigeo: "3926-4067-4069",
          nombre_ubigeo: "Lima - Oyon - Andajes",
          codigo_ubigeo: "150902",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4067",
          id_padre_ubigeo_dst: "4069",
        },
        {
          id_ubigeo: "3926-4067-4070",
          nombre_ubigeo: "Lima - Oyon - Caujul",
          codigo_ubigeo: "150903",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4067",
          id_padre_ubigeo_dst: "4070",
        },
        {
          id_ubigeo: "3926-4067-4071",
          nombre_ubigeo: "Lima - Oyon - Cochamarca",
          codigo_ubigeo: "150904",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4067",
          id_padre_ubigeo_dst: "4071",
        },
        {
          id_ubigeo: "3926-4067-4072",
          nombre_ubigeo: "Lima - Oyon - Navan",
          codigo_ubigeo: "150905",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4067",
          id_padre_ubigeo_dst: "4072",
        },
        {
          id_ubigeo: "3926-4067-4068",
          nombre_ubigeo: "Lima - Oyon - Oyon",
          codigo_ubigeo: "150901",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4067",
          id_padre_ubigeo_dst: "4068",
        },
        {
          id_ubigeo: "3926-4067-4073",
          nombre_ubigeo: "Lima - Oyon - Pachangara",
          codigo_ubigeo: "150906",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4067",
          id_padre_ubigeo_dst: "4073",
        },
        {
          id_ubigeo: "3926-4074-4076",
          nombre_ubigeo: "Lima - Yauyos - Alis",
          codigo_ubigeo: "151002",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4076",
        },
        {
          id_ubigeo: "3926-4074-4077",
          nombre_ubigeo: "Lima - Yauyos - Ayauca",
          codigo_ubigeo: "151003",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4077",
        },
        {
          id_ubigeo: "3926-4074-4078",
          nombre_ubigeo: "Lima - Yauyos - Ayaviri",
          codigo_ubigeo: "151004",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4078",
        },
        {
          id_ubigeo: "3926-4074-4079",
          nombre_ubigeo: "Lima - Yauyos - Azangaro",
          codigo_ubigeo: "151005",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4079",
        },
        {
          id_ubigeo: "3926-4074-4080",
          nombre_ubigeo: "Lima - Yauyos - Cacra",
          codigo_ubigeo: "151006",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4080",
        },
        {
          id_ubigeo: "3926-4074-4081",
          nombre_ubigeo: "Lima - Yauyos - Carania",
          codigo_ubigeo: "151007",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4081",
        },
        {
          id_ubigeo: "3926-4074-4082",
          nombre_ubigeo: "Lima - Yauyos - Catahuasi",
          codigo_ubigeo: "151008",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4082",
        },
        {
          id_ubigeo: "3926-4074-4083",
          nombre_ubigeo: "Lima - Yauyos - Chocos",
          codigo_ubigeo: "151009",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4083",
        },
        {
          id_ubigeo: "3926-4074-4084",
          nombre_ubigeo: "Lima - Yauyos - Cochas",
          codigo_ubigeo: "151010",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4084",
        },
        {
          id_ubigeo: "3926-4074-4085",
          nombre_ubigeo: "Lima - Yauyos - Colonia",
          codigo_ubigeo: "151011",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4085",
        },
        {
          id_ubigeo: "3926-4074-4086",
          nombre_ubigeo: "Lima - Yauyos - Hongos",
          codigo_ubigeo: "151012",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4086",
        },
        {
          id_ubigeo: "3926-4074-4087",
          nombre_ubigeo: "Lima - Yauyos - Huampara",
          codigo_ubigeo: "151013",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4087",
        },
        {
          id_ubigeo: "3926-4074-4088",
          nombre_ubigeo: "Lima - Yauyos - Huancaya",
          codigo_ubigeo: "151014",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4088",
        },
        {
          id_ubigeo: "3926-4074-4089",
          nombre_ubigeo: "Lima - Yauyos - Huangascar",
          codigo_ubigeo: "151015",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4089",
        },
        {
          id_ubigeo: "3926-4074-4090",
          nombre_ubigeo: "Lima - Yauyos - Huantan",
          codigo_ubigeo: "151016",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4090",
        },
        {
          id_ubigeo: "3926-4074-4091",
          nombre_ubigeo: "Lima - Yauyos - Huaqec",
          codigo_ubigeo: "151017",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4091",
        },
        {
          id_ubigeo: "3926-4074-4092",
          nombre_ubigeo: "Lima - Yauyos - Laraos",
          codigo_ubigeo: "151018",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4092",
        },
        {
          id_ubigeo: "3926-4074-4093",
          nombre_ubigeo: "Lima - Yauyos - Lincha",
          codigo_ubigeo: "151019",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4093",
        },
        {
          id_ubigeo: "3926-4074-4094",
          nombre_ubigeo: "Lima - Yauyos - Madean",
          codigo_ubigeo: "151020",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4094",
        },
        {
          id_ubigeo: "3926-4074-4095",
          nombre_ubigeo: "Lima - Yauyos - Miraflores",
          codigo_ubigeo: "151021",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4095",
        },
        {
          id_ubigeo: "3926-4074-4096",
          nombre_ubigeo: "Lima - Yauyos - Omas",
          codigo_ubigeo: "151022",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4096",
        },
        {
          id_ubigeo: "3926-4074-4097",
          nombre_ubigeo: "Lima - Yauyos - Putinza",
          codigo_ubigeo: "151023",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4097",
        },
        {
          id_ubigeo: "3926-4074-4098",
          nombre_ubigeo: "Lima - Yauyos - Quinches",
          codigo_ubigeo: "151024",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4098",
        },
        {
          id_ubigeo: "3926-4074-4099",
          nombre_ubigeo: "Lima - Yauyos - Quinocay",
          codigo_ubigeo: "151025",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4099",
        },
        {
          id_ubigeo: "3926-4074-4100",
          nombre_ubigeo: "Lima - Yauyos - San Joaquin",
          codigo_ubigeo: "151026",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4100",
        },
        {
          id_ubigeo: "3926-4074-4101",
          nombre_ubigeo: "Lima - Yauyos - San Pedro de Pilas",
          codigo_ubigeo: "151027",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4101",
        },
        {
          id_ubigeo: "3926-4074-4102",
          nombre_ubigeo: "Lima - Yauyos - Tanta",
          codigo_ubigeo: "151028",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4102",
        },
        {
          id_ubigeo: "3926-4074-4103",
          nombre_ubigeo: "Lima - Yauyos - Tauripampa",
          codigo_ubigeo: "151029",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4103",
        },
        {
          id_ubigeo: "3926-4074-4104",
          nombre_ubigeo: "Lima - Yauyos - Tomas",
          codigo_ubigeo: "151030",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4104",
        },
        {
          id_ubigeo: "3926-4074-4105",
          nombre_ubigeo: "Lima - Yauyos - Tupe",
          codigo_ubigeo: "151031",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4105",
        },
        {
          id_ubigeo: "3926-4074-4106",
          nombre_ubigeo: "Lima - Yauyos - Viqac",
          codigo_ubigeo: "151032",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4106",
        },
        {
          id_ubigeo: "3926-4074-4107",
          nombre_ubigeo: "Lima - Yauyos - Vitis",
          codigo_ubigeo: "151033",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4107",
        },
        {
          id_ubigeo: "3926-4074-4075",
          nombre_ubigeo: "Lima - Yauyos - Yauyos",
          codigo_ubigeo: "151001",
          id_padre_ubigeo_dpto: "3926",
          id_padre_ubigeo_prov: "4074",
          id_padre_ubigeo_dst: "4075",
        },
        {
          id_ubigeo: "4108-4123-4125",
          nombre_ubigeo: "Loreto - Alto Amazonas - Balsapuerto",
          codigo_ubigeo: "160202",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4125",
        },
        {
          id_ubigeo: "4108-4123-4126",
          nombre_ubigeo: "Loreto - Alto Amazonas - Barranca",
          codigo_ubigeo: "160203",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4126",
        },
        {
          id_ubigeo: "4108-4123-4127",
          nombre_ubigeo: "Loreto - Alto Amazonas - Cahuapanas",
          codigo_ubigeo: "160204",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4127",
        },
        {
          id_ubigeo: "4108-4123-4128",
          nombre_ubigeo: "Loreto - Alto Amazonas - Jeberos",
          codigo_ubigeo: "160205",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4128",
        },
        {
          id_ubigeo: "4108-4123-4129",
          nombre_ubigeo: "Loreto - Alto Amazonas - Lagunas",
          codigo_ubigeo: "160206",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4129",
        },
        {
          id_ubigeo: "4108-4123-4130",
          nombre_ubigeo: "Loreto - Alto Amazonas - Manseriche",
          codigo_ubigeo: "160207",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4130",
        },
        {
          id_ubigeo: "4108-4123-4131",
          nombre_ubigeo: "Loreto - Alto Amazonas - Morona",
          codigo_ubigeo: "160208",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4131",
        },
        {
          id_ubigeo: "4108-4123-4132",
          nombre_ubigeo: "Loreto - Alto Amazonas - Pastaza",
          codigo_ubigeo: "160209",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4132",
        },
        {
          id_ubigeo: "4108-4123-4133",
          nombre_ubigeo: "Loreto - Alto Amazonas - Santa Cruz",
          codigo_ubigeo: "160210",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4133",
        },
        {
          id_ubigeo: "4108-4123-4134",
          nombre_ubigeo: "Loreto - Alto Amazonas - Teniente Cesar Lopez Rojas",
          codigo_ubigeo: "160211",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4134",
        },
        {
          id_ubigeo: "4108-4123-4124",
          nombre_ubigeo: "Loreto - Alto Amazonas - Yurimaguas",
          codigo_ubigeo: "160201",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4123",
          id_padre_ubigeo_dst: "4124",
        },
        {
          id_ubigeo: "4108-4135-4136",
          nombre_ubigeo: "Loreto - Loreto - Nauta",
          codigo_ubigeo: "160301",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4135",
          id_padre_ubigeo_dst: "4136",
        },
        {
          id_ubigeo: "4108-4135-4137",
          nombre_ubigeo: "Loreto - Loreto - Parinari",
          codigo_ubigeo: "160302",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4135",
          id_padre_ubigeo_dst: "4137",
        },
        {
          id_ubigeo: "4108-4135-4138",
          nombre_ubigeo: "Loreto - Loreto - Tigre",
          codigo_ubigeo: "160303",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4135",
          id_padre_ubigeo_dst: "4138",
        },
        {
          id_ubigeo: "4108-4135-4139",
          nombre_ubigeo: "Loreto - Loreto - Trompeteros",
          codigo_ubigeo: "160304",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4135",
          id_padre_ubigeo_dst: "4139",
        },
        {
          id_ubigeo: "4108-4135-4140",
          nombre_ubigeo: "Loreto - Loreto - Urarinas",
          codigo_ubigeo: "160305",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4135",
          id_padre_ubigeo_dst: "4140",
        },
        {
          id_ubigeo: "4108-4141-4143",
          nombre_ubigeo: "Loreto - Mariscal Ramon Castilla - Pebas",
          codigo_ubigeo: "160402",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4141",
          id_padre_ubigeo_dst: "4143",
        },
        {
          id_ubigeo: "4108-4141-4142",
          nombre_ubigeo: "Loreto - Mariscal Ramon Castilla - Ramon Castilla",
          codigo_ubigeo: "160401",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4141",
          id_padre_ubigeo_dst: "4142",
        },
        {
          id_ubigeo: "4108-4141-4145",
          nombre_ubigeo: "Loreto - Mariscal Ramon Castilla - San Pablo",
          codigo_ubigeo: "160404",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4141",
          id_padre_ubigeo_dst: "4145",
        },
        {
          id_ubigeo: "4108-4141-4144",
          nombre_ubigeo: "Loreto - Mariscal Ramon Castilla - Yavari",
          codigo_ubigeo: "160403",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4141",
          id_padre_ubigeo_dst: "4144",
        },
        {
          id_ubigeo: "4108-4109-4111",
          nombre_ubigeo: "Loreto - Maynas - Alto Nanay",
          codigo_ubigeo: "160102",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4111",
        },
        {
          id_ubigeo: "4108-4109-4121",
          nombre_ubigeo: "Loreto - Maynas - Bel\xe9n",
          codigo_ubigeo: "160112",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4121",
        },
        {
          id_ubigeo: "4108-4109-4112",
          nombre_ubigeo: "Loreto - Maynas - Fernando Lores",
          codigo_ubigeo: "160103",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4112",
        },
        {
          id_ubigeo: "4108-4109-4113",
          nombre_ubigeo: "Loreto - Maynas - Indiana",
          codigo_ubigeo: "160104",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4113",
        },
        {
          id_ubigeo: "4108-4109-4110",
          nombre_ubigeo: "Loreto - Maynas - Iquitos",
          codigo_ubigeo: "160101",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4110",
        },
        {
          id_ubigeo: "4108-4109-4114",
          nombre_ubigeo: "Loreto - Maynas - Las Amazonas",
          codigo_ubigeo: "160105",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4114",
        },
        {
          id_ubigeo: "4108-4109-4115",
          nombre_ubigeo: "Loreto - Maynas - Mazan",
          codigo_ubigeo: "160106",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4115",
        },
        {
          id_ubigeo: "4108-4109-4116",
          nombre_ubigeo: "Loreto - Maynas - Napo",
          codigo_ubigeo: "160107",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4116",
        },
        {
          id_ubigeo: "4108-4109-4117",
          nombre_ubigeo: "Loreto - Maynas - Punchana",
          codigo_ubigeo: "160108",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4117",
        },
        {
          id_ubigeo: "4108-4109-4118",
          nombre_ubigeo: "Loreto - Maynas - Putumayo",
          codigo_ubigeo: "160109",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4118",
        },
        {
          id_ubigeo: "4108-4109-4122",
          nombre_ubigeo: "Loreto - Maynas - San Juan Bautista",
          codigo_ubigeo: "160113",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4122",
        },
        {
          id_ubigeo: "4108-4109-4119",
          nombre_ubigeo: "Loreto - Maynas - Torres Causana",
          codigo_ubigeo: "160110",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4119",
        },
        {
          id_ubigeo: "4108-4109-4120",
          nombre_ubigeo: "Loreto - Maynas - Yaquerana",
          codigo_ubigeo: "160111",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4109",
          id_padre_ubigeo_dst: "4120",
        },
        {
          id_ubigeo: "4108-4146-4148",
          nombre_ubigeo: "Loreto - Requena - Alto Tapiche",
          codigo_ubigeo: "160502",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4148",
        },
        {
          id_ubigeo: "4108-4146-4149",
          nombre_ubigeo: "Loreto - Requena - Capelo",
          codigo_ubigeo: "160503",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4149",
        },
        {
          id_ubigeo: "4108-4146-4150",
          nombre_ubigeo: "Loreto - Requena - Emilio San Martin",
          codigo_ubigeo: "160504",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4150",
        },
        {
          id_ubigeo: "4108-4146-4156",
          nombre_ubigeo: "Loreto - Requena - Jenaro Herrera",
          codigo_ubigeo: "160510",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4156",
        },
        {
          id_ubigeo: "4108-4146-4151",
          nombre_ubigeo: "Loreto - Requena - Maquia",
          codigo_ubigeo: "160505",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4151",
        },
        {
          id_ubigeo: "4108-4146-4152",
          nombre_ubigeo: "Loreto - Requena - Puinahua",
          codigo_ubigeo: "160506",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4152",
        },
        {
          id_ubigeo: "4108-4146-4147",
          nombre_ubigeo: "Loreto - Requena - Requena",
          codigo_ubigeo: "160501",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4147",
        },
        {
          id_ubigeo: "4108-4146-4153",
          nombre_ubigeo: "Loreto - Requena - Saquena",
          codigo_ubigeo: "160507",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4153",
        },
        {
          id_ubigeo: "4108-4146-4154",
          nombre_ubigeo: "Loreto - Requena - Soplin",
          codigo_ubigeo: "160508",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4154",
        },
        {
          id_ubigeo: "4108-4146-4155",
          nombre_ubigeo: "Loreto - Requena - Tapiche",
          codigo_ubigeo: "160509",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4155",
        },
        {
          id_ubigeo: "4108-4146-4157",
          nombre_ubigeo: "Loreto - Requena - Yaquerana",
          codigo_ubigeo: "160511",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4146",
          id_padre_ubigeo_dst: "4157",
        },
        {
          id_ubigeo: "4108-4158-4159",
          nombre_ubigeo: "Loreto - Ucayali - Contamana",
          codigo_ubigeo: "160601",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4158",
          id_padre_ubigeo_dst: "4159",
        },
        {
          id_ubigeo: "4108-4158-4160",
          nombre_ubigeo: "Loreto - Ucayali - Inahuaya",
          codigo_ubigeo: "160602",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4158",
          id_padre_ubigeo_dst: "4160",
        },
        {
          id_ubigeo: "4108-4158-4161",
          nombre_ubigeo: "Loreto - Ucayali - Padre Marquez",
          codigo_ubigeo: "160603",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4158",
          id_padre_ubigeo_dst: "4161",
        },
        {
          id_ubigeo: "4108-4158-4162",
          nombre_ubigeo: "Loreto - Ucayali - Pampa Hermosa",
          codigo_ubigeo: "160604",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4158",
          id_padre_ubigeo_dst: "4162",
        },
        {
          id_ubigeo: "4108-4158-4163",
          nombre_ubigeo: "Loreto - Ucayali - Sarayacu",
          codigo_ubigeo: "160605",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4158",
          id_padre_ubigeo_dst: "4163",
        },
        {
          id_ubigeo: "4108-4158-4164",
          nombre_ubigeo: "Loreto - Ucayali - Vargas Guerra",
          codigo_ubigeo: "160606",
          id_padre_ubigeo_dpto: "4108",
          id_padre_ubigeo_prov: "4158",
          id_padre_ubigeo_dst: "4164",
        },
        {
          id_ubigeo: "4165-4171-4173",
          nombre_ubigeo: "Madre de Dios - Manu - Fitzcarrald",
          codigo_ubigeo: "170202",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4171",
          id_padre_ubigeo_dst: "4173",
        },
        {
          id_ubigeo: "4165-4171-4175",
          nombre_ubigeo: "Madre de Dios - Manu - Huepetuhe",
          codigo_ubigeo: "170204",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4171",
          id_padre_ubigeo_dst: "4175",
        },
        {
          id_ubigeo: "4165-4171-4174",
          nombre_ubigeo: "Madre de Dios - Manu - Madre de Dios",
          codigo_ubigeo: "170203",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4171",
          id_padre_ubigeo_dst: "4174",
        },
        {
          id_ubigeo: "4165-4171-4172",
          nombre_ubigeo: "Madre de Dios - Manu - Manu",
          codigo_ubigeo: "170201",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4171",
          id_padre_ubigeo_dst: "4172",
        },
        {
          id_ubigeo: "4165-4176-4178",
          nombre_ubigeo: "Madre de Dios - Tahuamanu - Iberia",
          codigo_ubigeo: "170302",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4176",
          id_padre_ubigeo_dst: "4178",
        },
        {
          id_ubigeo: "4165-4176-4177",
          nombre_ubigeo: "Madre de Dios - Tahuamanu - Iqapari",
          codigo_ubigeo: "170301",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4176",
          id_padre_ubigeo_dst: "4177",
        },
        {
          id_ubigeo: "4165-4176-4179",
          nombre_ubigeo: "Madre de Dios - Tahuamanu - Tahuamanu",
          codigo_ubigeo: "170303",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4176",
          id_padre_ubigeo_dst: "4179",
        },
        {
          id_ubigeo: "4165-4166-4168",
          nombre_ubigeo: "Madre de Dios - Tambopata - Inambari",
          codigo_ubigeo: "170102",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4166",
          id_padre_ubigeo_dst: "4168",
        },
        {
          id_ubigeo: "4165-4166-4170",
          nombre_ubigeo: "Madre de Dios - Tambopata - Laberinto",
          codigo_ubigeo: "170104",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4166",
          id_padre_ubigeo_dst: "4170",
        },
        {
          id_ubigeo: "4165-4166-4169",
          nombre_ubigeo: "Madre de Dios - Tambopata - Las Piedras",
          codigo_ubigeo: "170103",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4166",
          id_padre_ubigeo_dst: "4169",
        },
        {
          id_ubigeo: "4165-4166-4167",
          nombre_ubigeo: "Madre de Dios - Tambopata - Tambopata",
          codigo_ubigeo: "170101",
          id_padre_ubigeo_dpto: "4165",
          id_padre_ubigeo_prov: "4166",
          id_padre_ubigeo_dst: "4167",
        },
        {
          id_ubigeo: "4180-4188-4190",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Chojata",
          codigo_ubigeo: "180202",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4190",
        },
        {
          id_ubigeo: "4180-4188-4191",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Coalaque",
          codigo_ubigeo: "180203",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4191",
        },
        {
          id_ubigeo: "4180-4188-4192",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Ichuqa",
          codigo_ubigeo: "180204",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4192",
        },
        {
          id_ubigeo: "4180-4188-4193",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - La Capilla",
          codigo_ubigeo: "180205",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4193",
        },
        {
          id_ubigeo: "4180-4188-4194",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Lloque",
          codigo_ubigeo: "180206",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4194",
        },
        {
          id_ubigeo: "4180-4188-4195",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Matalaque",
          codigo_ubigeo: "180207",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4195",
        },
        {
          id_ubigeo: "4180-4188-4189",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Omate",
          codigo_ubigeo: "180201",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4189",
        },
        {
          id_ubigeo: "4180-4188-4196",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Puquina",
          codigo_ubigeo: "180208",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4196",
        },
        {
          id_ubigeo: "4180-4188-4197",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Quinistaquillas",
          codigo_ubigeo: "180209",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4197",
        },
        {
          id_ubigeo: "4180-4188-4198",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Ubinas",
          codigo_ubigeo: "180210",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4198",
        },
        {
          id_ubigeo: "4180-4188-4199",
          nombre_ubigeo: "Moquegua - General Sanchez Cerro - Yunga",
          codigo_ubigeo: "180211",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4188",
          id_padre_ubigeo_dst: "4199",
        },
        {
          id_ubigeo: "4180-4200-4202",
          nombre_ubigeo: "Moquegua - Ilo - El Algarrobal",
          codigo_ubigeo: "180302",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4200",
          id_padre_ubigeo_dst: "4202",
        },
        {
          id_ubigeo: "4180-4200-4201",
          nombre_ubigeo: "Moquegua - Ilo - Ilo",
          codigo_ubigeo: "180301",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4200",
          id_padre_ubigeo_dst: "4201",
        },
        {
          id_ubigeo: "4180-4200-4203",
          nombre_ubigeo: "Moquegua - Ilo - Pacocha",
          codigo_ubigeo: "180303",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4200",
          id_padre_ubigeo_dst: "4203",
        },
        {
          id_ubigeo: "4180-4181-4183",
          nombre_ubigeo: "Moquegua - Mariscal Nieto - Carumas",
          codigo_ubigeo: "180102",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4181",
          id_padre_ubigeo_dst: "4183",
        },
        {
          id_ubigeo: "4180-4181-4184",
          nombre_ubigeo: "Moquegua - Mariscal Nieto - Cuchumbaya",
          codigo_ubigeo: "180103",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4181",
          id_padre_ubigeo_dst: "4184",
        },
        {
          id_ubigeo: "4180-4181-4182",
          nombre_ubigeo: "Moquegua - Mariscal Nieto - Moquegua",
          codigo_ubigeo: "180101",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4181",
          id_padre_ubigeo_dst: "4182",
        },
        {
          id_ubigeo: "4180-4181-4185",
          nombre_ubigeo: "Moquegua - Mariscal Nieto - Samegua",
          codigo_ubigeo: "180104",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4181",
          id_padre_ubigeo_dst: "4185",
        },
        {
          id_ubigeo: "4180-4181-4186",
          nombre_ubigeo: "Moquegua - Mariscal Nieto - San Cristobal",
          codigo_ubigeo: "180105",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4181",
          id_padre_ubigeo_dst: "4186",
        },
        {
          id_ubigeo: "4180-4181-4187",
          nombre_ubigeo: "Moquegua - Mariscal Nieto - Torata",
          codigo_ubigeo: "180106",
          id_padre_ubigeo_dpto: "4180",
          id_padre_ubigeo_prov: "4181",
          id_padre_ubigeo_dst: "4187",
        },
        {
          id_ubigeo: "4204-4219-4221",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - Chacayan",
          codigo_ubigeo: "190202",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4221",
        },
        {
          id_ubigeo: "4204-4219-4222",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - Goyllarisquizga",
          codigo_ubigeo: "190203",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4222",
        },
        {
          id_ubigeo: "4204-4219-4223",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - Paucar",
          codigo_ubigeo: "190204",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4223",
        },
        {
          id_ubigeo: "4204-4219-4224",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - San Pedro de Pillao",
          codigo_ubigeo: "190205",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4224",
        },
        {
          id_ubigeo: "4204-4219-4225",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - Santa Ana de Tusi",
          codigo_ubigeo: "190206",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4225",
        },
        {
          id_ubigeo: "4204-4219-4226",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - Tapuc",
          codigo_ubigeo: "190207",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4226",
        },
        {
          id_ubigeo: "4204-4219-4227",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - Vilcabamba",
          codigo_ubigeo: "190208",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4227",
        },
        {
          id_ubigeo: "4204-4219-4220",
          nombre_ubigeo: "Pasco - Daniel Alcides Carrion - Yanahuanca",
          codigo_ubigeo: "190201",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4219",
          id_padre_ubigeo_dst: "4220",
        },
        {
          id_ubigeo: "4204-4228-4230",
          nombre_ubigeo: "Pasco - Oxapampa - Chontabamba",
          codigo_ubigeo: "190302",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4228",
          id_padre_ubigeo_dst: "4230",
        },
        {
          id_ubigeo: "4204-4228-4231",
          nombre_ubigeo: "Pasco - Oxapampa - Huancabamba",
          codigo_ubigeo: "190303",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4228",
          id_padre_ubigeo_dst: "4231",
        },
        {
          id_ubigeo: "4204-4228-4229",
          nombre_ubigeo: "Pasco - Oxapampa - Oxapampa",
          codigo_ubigeo: "190301",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4228",
          id_padre_ubigeo_dst: "4229",
        },
        {
          id_ubigeo: "4204-4228-4232",
          nombre_ubigeo: "Pasco - Oxapampa - Palcazu",
          codigo_ubigeo: "190304",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4228",
          id_padre_ubigeo_dst: "4232",
        },
        {
          id_ubigeo: "4204-4228-4233",
          nombre_ubigeo: "Pasco - Oxapampa - Pozuzo",
          codigo_ubigeo: "190305",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4228",
          id_padre_ubigeo_dst: "4233",
        },
        {
          id_ubigeo: "4204-4228-4234",
          nombre_ubigeo: "Pasco - Oxapampa - Puerto Bermudez",
          codigo_ubigeo: "190306",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4228",
          id_padre_ubigeo_dst: "4234",
        },
        {
          id_ubigeo: "4204-4228-4235",
          nombre_ubigeo: "Pasco - Oxapampa - Villa Rica",
          codigo_ubigeo: "190307",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4228",
          id_padre_ubigeo_dst: "4235",
        },
        {
          id_ubigeo: "4204-4205-4206",
          nombre_ubigeo: "Pasco - Pasco - Chaupimarca",
          codigo_ubigeo: "190101",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4206",
        },
        {
          id_ubigeo: "4204-4205-4207",
          nombre_ubigeo: "Pasco - Pasco - Huachon",
          codigo_ubigeo: "190102",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4207",
        },
        {
          id_ubigeo: "4204-4205-4208",
          nombre_ubigeo: "Pasco - Pasco - Huariaca",
          codigo_ubigeo: "190103",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4208",
        },
        {
          id_ubigeo: "4204-4205-4209",
          nombre_ubigeo: "Pasco - Pasco - Huayllay",
          codigo_ubigeo: "190104",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4209",
        },
        {
          id_ubigeo: "4204-4205-4210",
          nombre_ubigeo: "Pasco - Pasco - Ninacaca",
          codigo_ubigeo: "190105",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4210",
        },
        {
          id_ubigeo: "4204-4205-4211",
          nombre_ubigeo: "Pasco - Pasco - Pallanchacra",
          codigo_ubigeo: "190106",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4211",
        },
        {
          id_ubigeo: "4204-4205-4212",
          nombre_ubigeo: "Pasco - Pasco - Paucartambo",
          codigo_ubigeo: "190107",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4212",
        },
        {
          id_ubigeo: "4204-4205-4213",
          nombre_ubigeo: "Pasco - Pasco - San Fco.De Asis de Yarusyacan",
          codigo_ubigeo: "190108",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4213",
        },
        {
          id_ubigeo: "4204-4205-4214",
          nombre_ubigeo: "Pasco - Pasco - Simon Bolivar",
          codigo_ubigeo: "190109",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4214",
        },
        {
          id_ubigeo: "4204-4205-4215",
          nombre_ubigeo: "Pasco - Pasco - Ticlacayan",
          codigo_ubigeo: "190110",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4215",
        },
        {
          id_ubigeo: "4204-4205-4216",
          nombre_ubigeo: "Pasco - Pasco - Tinyahuarco",
          codigo_ubigeo: "190111",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4216",
        },
        {
          id_ubigeo: "4204-4205-4217",
          nombre_ubigeo: "Pasco - Pasco - Vicco",
          codigo_ubigeo: "190112",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4217",
        },
        {
          id_ubigeo: "4204-4205-4218",
          nombre_ubigeo: "Pasco - Pasco - Yanacancha",
          codigo_ubigeo: "190113",
          id_padre_ubigeo_dpto: "4204",
          id_padre_ubigeo_prov: "4205",
          id_padre_ubigeo_dst: "4218",
        },
        {
          id_ubigeo: "4236-4247-4248",
          nombre_ubigeo: "Piura - Ayabaca - Ayabaca",
          codigo_ubigeo: "200201",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4248",
        },
        {
          id_ubigeo: "4236-4247-4249",
          nombre_ubigeo: "Piura - Ayabaca - Frias",
          codigo_ubigeo: "200202",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4249",
        },
        {
          id_ubigeo: "4236-4247-4250",
          nombre_ubigeo: "Piura - Ayabaca - Jilili",
          codigo_ubigeo: "200203",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4250",
        },
        {
          id_ubigeo: "4236-4247-4251",
          nombre_ubigeo: "Piura - Ayabaca - Lagunas",
          codigo_ubigeo: "200204",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4251",
        },
        {
          id_ubigeo: "4236-4247-4252",
          nombre_ubigeo: "Piura - Ayabaca - Montero",
          codigo_ubigeo: "200205",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4252",
        },
        {
          id_ubigeo: "4236-4247-4253",
          nombre_ubigeo: "Piura - Ayabaca - Pacaipampa",
          codigo_ubigeo: "200206",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4253",
        },
        {
          id_ubigeo: "4236-4247-4254",
          nombre_ubigeo: "Piura - Ayabaca - Paimas",
          codigo_ubigeo: "200207",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4254",
        },
        {
          id_ubigeo: "4236-4247-4255",
          nombre_ubigeo: "Piura - Ayabaca - Sapillica",
          codigo_ubigeo: "200208",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4255",
        },
        {
          id_ubigeo: "4236-4247-4256",
          nombre_ubigeo: "Piura - Ayabaca - Sicchez",
          codigo_ubigeo: "200209",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4256",
        },
        {
          id_ubigeo: "4236-4247-4257",
          nombre_ubigeo: "Piura - Ayabaca - Suyo",
          codigo_ubigeo: "200210",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4247",
          id_padre_ubigeo_dst: "4257",
        },
        {
          id_ubigeo: "4236-4258-4260",
          nombre_ubigeo: "Piura - Huancabamba - Canchaque",
          codigo_ubigeo: "200302",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4260",
        },
        {
          id_ubigeo: "4236-4258-4261",
          nombre_ubigeo: "Piura - Huancabamba - El Carmen de la Frontera",
          codigo_ubigeo: "200303",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4261",
        },
        {
          id_ubigeo: "4236-4258-4259",
          nombre_ubigeo: "Piura - Huancabamba - Huancabamba",
          codigo_ubigeo: "200301",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4259",
        },
        {
          id_ubigeo: "4236-4258-4262",
          nombre_ubigeo: "Piura - Huancabamba - Huarmaca",
          codigo_ubigeo: "200304",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4262",
        },
        {
          id_ubigeo: "4236-4258-4263",
          nombre_ubigeo: "Piura - Huancabamba - Lalaquiz",
          codigo_ubigeo: "200305",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4263",
        },
        {
          id_ubigeo: "4236-4258-4264",
          nombre_ubigeo: "Piura - Huancabamba - San Miguel de El Faique",
          codigo_ubigeo: "200306",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4264",
        },
        {
          id_ubigeo: "4236-4258-4265",
          nombre_ubigeo: "Piura - Huancabamba - Sondor",
          codigo_ubigeo: "200307",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4265",
        },
        {
          id_ubigeo: "4236-4258-4266",
          nombre_ubigeo: "Piura - Huancabamba - Sondorillo",
          codigo_ubigeo: "200308",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4258",
          id_padre_ubigeo_dst: "4266",
        },
        {
          id_ubigeo: "4236-4267-4269",
          nombre_ubigeo: "Piura - Morropon - Buenos Aires",
          codigo_ubigeo: "200402",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4269",
        },
        {
          id_ubigeo: "4236-4267-4270",
          nombre_ubigeo: "Piura - Morropon - Chalaco",
          codigo_ubigeo: "200403",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4270",
        },
        {
          id_ubigeo: "4236-4267-4268",
          nombre_ubigeo: "Piura - Morropon - Chulucanas",
          codigo_ubigeo: "200401",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4268",
        },
        {
          id_ubigeo: "4236-4267-4271",
          nombre_ubigeo: "Piura - Morropon - La Matanza",
          codigo_ubigeo: "200404",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4271",
        },
        {
          id_ubigeo: "4236-4267-4272",
          nombre_ubigeo: "Piura - Morropon - Morropon",
          codigo_ubigeo: "200405",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4272",
        },
        {
          id_ubigeo: "4236-4267-4273",
          nombre_ubigeo: "Piura - Morropon - Salitral",
          codigo_ubigeo: "200406",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4273",
        },
        {
          id_ubigeo: "4236-4267-4274",
          nombre_ubigeo: "Piura - Morropon - San Juan de Bigote",
          codigo_ubigeo: "200407",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4274",
        },
        {
          id_ubigeo: "4236-4267-4275",
          nombre_ubigeo: "Piura - Morropon - Santa Catalina de Mossa",
          codigo_ubigeo: "200408",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4275",
        },
        {
          id_ubigeo: "4236-4267-4276",
          nombre_ubigeo: "Piura - Morropon - Santo Domingo",
          codigo_ubigeo: "200409",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4276",
        },
        {
          id_ubigeo: "4236-4267-4277",
          nombre_ubigeo: "Piura - Morropon - Yamango",
          codigo_ubigeo: "200410",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4267",
          id_padre_ubigeo_dst: "4277",
        },
        {
          id_ubigeo: "4236-4278-4280",
          nombre_ubigeo: "Piura - Paita - Amotape",
          codigo_ubigeo: "200502",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4278",
          id_padre_ubigeo_dst: "4280",
        },
        {
          id_ubigeo: "4236-4278-4281",
          nombre_ubigeo: "Piura - Paita - Arenal",
          codigo_ubigeo: "200503",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4278",
          id_padre_ubigeo_dst: "4281",
        },
        {
          id_ubigeo: "4236-4278-4282",
          nombre_ubigeo: "Piura - Paita - Colan",
          codigo_ubigeo: "200504",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4278",
          id_padre_ubigeo_dst: "4282",
        },
        {
          id_ubigeo: "4236-4278-4283",
          nombre_ubigeo: "Piura - Paita - La Huaca",
          codigo_ubigeo: "200505",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4278",
          id_padre_ubigeo_dst: "4283",
        },
        {
          id_ubigeo: "4236-4278-4279",
          nombre_ubigeo: "Piura - Paita - Paita",
          codigo_ubigeo: "200501",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4278",
          id_padre_ubigeo_dst: "4279",
        },
        {
          id_ubigeo: "4236-4278-4284",
          nombre_ubigeo: "Piura - Paita - Tamarindo",
          codigo_ubigeo: "200506",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4278",
          id_padre_ubigeo_dst: "4284",
        },
        {
          id_ubigeo: "4236-4278-4285",
          nombre_ubigeo: "Piura - Paita - Vichayal",
          codigo_ubigeo: "200507",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4278",
          id_padre_ubigeo_dst: "4285",
        },
        {
          id_ubigeo: "4236-4237-4239",
          nombre_ubigeo: "Piura - Piura - Castilla",
          codigo_ubigeo: "200104",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4239",
        },
        {
          id_ubigeo: "4236-4237-4240",
          nombre_ubigeo: "Piura - Piura - Catacaos",
          codigo_ubigeo: "200105",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4240",
        },
        {
          id_ubigeo: "4236-4237-4241",
          nombre_ubigeo: "Piura - Piura - Cura Mori",
          codigo_ubigeo: "200107",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4241",
        },
        {
          id_ubigeo: "4236-4237-4242",
          nombre_ubigeo: "Piura - Piura - El Tallan",
          codigo_ubigeo: "200108",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4242",
        },
        {
          id_ubigeo: "4236-4237-4243",
          nombre_ubigeo: "Piura - Piura - La Arena",
          codigo_ubigeo: "200109",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4243",
        },
        {
          id_ubigeo: "4236-4237-4244",
          nombre_ubigeo: "Piura - Piura - La Union",
          codigo_ubigeo: "200110",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4244",
        },
        {
          id_ubigeo: "4236-4237-4245",
          nombre_ubigeo: "Piura - Piura - Las Lomas",
          codigo_ubigeo: "200111",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4245",
        },
        {
          id_ubigeo: "4236-4237-4238",
          nombre_ubigeo: "Piura - Piura - Piura",
          codigo_ubigeo: "200101",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4238",
        },
        {
          id_ubigeo: "4236-4237-4246",
          nombre_ubigeo: "Piura - Piura - Tambo Grande",
          codigo_ubigeo: "200114",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4237",
          id_padre_ubigeo_dst: "4246",
        },
        {
          id_ubigeo: "4236-4302-4304",
          nombre_ubigeo: "Piura - Sechura - Bellavista de la Union",
          codigo_ubigeo: "200802",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4302",
          id_padre_ubigeo_dst: "4304",
        },
        {
          id_ubigeo: "4236-4302-4305",
          nombre_ubigeo: "Piura - Sechura - Bernal",
          codigo_ubigeo: "200803",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4302",
          id_padre_ubigeo_dst: "4305",
        },
        {
          id_ubigeo: "4236-4302-4306",
          nombre_ubigeo: "Piura - Sechura - Cristo Nos Valga",
          codigo_ubigeo: "200804",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4302",
          id_padre_ubigeo_dst: "4306",
        },
        {
          id_ubigeo: "4236-4302-4308",
          nombre_ubigeo: "Piura - Sechura - Rinconada Llicuar",
          codigo_ubigeo: "200806",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4302",
          id_padre_ubigeo_dst: "4308",
        },
        {
          id_ubigeo: "4236-4302-4303",
          nombre_ubigeo: "Piura - Sechura - Sechura",
          codigo_ubigeo: "200801",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4302",
          id_padre_ubigeo_dst: "4303",
        },
        {
          id_ubigeo: "4236-4302-4307",
          nombre_ubigeo: "Piura - Sechura - Vice",
          codigo_ubigeo: "200805",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4302",
          id_padre_ubigeo_dst: "4307",
        },
        {
          id_ubigeo: "4236-4286-4288",
          nombre_ubigeo: "Piura - Sullana - Bellavista",
          codigo_ubigeo: "200602",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4288",
        },
        {
          id_ubigeo: "4236-4286-4289",
          nombre_ubigeo: "Piura - Sullana - Ignacio Escudero",
          codigo_ubigeo: "200603",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4289",
        },
        {
          id_ubigeo: "4236-4286-4290",
          nombre_ubigeo: "Piura - Sullana - Lancones",
          codigo_ubigeo: "200604",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4290",
        },
        {
          id_ubigeo: "4236-4286-4291",
          nombre_ubigeo: "Piura - Sullana - Marcavelica",
          codigo_ubigeo: "200605",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4291",
        },
        {
          id_ubigeo: "4236-4286-4292",
          nombre_ubigeo: "Piura - Sullana - Miguel Checa",
          codigo_ubigeo: "200606",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4292",
        },
        {
          id_ubigeo: "4236-4286-4293",
          nombre_ubigeo: "Piura - Sullana - Querecotillo",
          codigo_ubigeo: "200607",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4293",
        },
        {
          id_ubigeo: "4236-4286-4294",
          nombre_ubigeo: "Piura - Sullana - Salitral",
          codigo_ubigeo: "200608",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4294",
        },
        {
          id_ubigeo: "4236-4286-4287",
          nombre_ubigeo: "Piura - Sullana - Sullana",
          codigo_ubigeo: "200601",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4286",
          id_padre_ubigeo_dst: "4287",
        },
        {
          id_ubigeo: "4236-4295-4297",
          nombre_ubigeo: "Piura - Talara - El Alto",
          codigo_ubigeo: "200702",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4295",
          id_padre_ubigeo_dst: "4297",
        },
        {
          id_ubigeo: "4236-4295-4298",
          nombre_ubigeo: "Piura - Talara - La Brea",
          codigo_ubigeo: "200703",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4295",
          id_padre_ubigeo_dst: "4298",
        },
        {
          id_ubigeo: "4236-4295-4299",
          nombre_ubigeo: "Piura - Talara - Lobitos",
          codigo_ubigeo: "200704",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4295",
          id_padre_ubigeo_dst: "4299",
        },
        {
          id_ubigeo: "4236-4295-4300",
          nombre_ubigeo: "Piura - Talara - Los Organos",
          codigo_ubigeo: "200705",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4295",
          id_padre_ubigeo_dst: "4300",
        },
        {
          id_ubigeo: "4236-4295-4301",
          nombre_ubigeo: "Piura - Talara - Mancora",
          codigo_ubigeo: "200706",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4295",
          id_padre_ubigeo_dst: "4301",
        },
        {
          id_ubigeo: "4236-4295-4296",
          nombre_ubigeo: "Piura - Talara - Pariqas",
          codigo_ubigeo: "200701",
          id_padre_ubigeo_dpto: "4236",
          id_padre_ubigeo_prov: "4295",
          id_padre_ubigeo_dst: "4296",
        },
        {
          id_ubigeo: "4309-4326-4328",
          nombre_ubigeo: "Puno - Azangaro - Achaya",
          codigo_ubigeo: "210202",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4328",
        },
        {
          id_ubigeo: "4309-4326-4329",
          nombre_ubigeo: "Puno - Azangaro - Arapa",
          codigo_ubigeo: "210203",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4329",
        },
        {
          id_ubigeo: "4309-4326-4330",
          nombre_ubigeo: "Puno - Azangaro - Asillo",
          codigo_ubigeo: "210204",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4330",
        },
        {
          id_ubigeo: "4309-4326-4327",
          nombre_ubigeo: "Puno - Azangaro - Azangaro",
          codigo_ubigeo: "210201",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4327",
        },
        {
          id_ubigeo: "4309-4326-4331",
          nombre_ubigeo: "Puno - Azangaro - Caminaca",
          codigo_ubigeo: "210205",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4331",
        },
        {
          id_ubigeo: "4309-4326-4332",
          nombre_ubigeo: "Puno - Azangaro - Chupa",
          codigo_ubigeo: "210206",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4332",
        },
        {
          id_ubigeo: "4309-4326-4333",
          nombre_ubigeo: "Puno - Azangaro - Jose Domingo Choquehuanca",
          codigo_ubigeo: "210207",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4333",
        },
        {
          id_ubigeo: "4309-4326-4334",
          nombre_ubigeo: "Puno - Azangaro - Muqani",
          codigo_ubigeo: "210208",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4334",
        },
        {
          id_ubigeo: "4309-4326-4335",
          nombre_ubigeo: "Puno - Azangaro - Potoni",
          codigo_ubigeo: "210209",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4335",
        },
        {
          id_ubigeo: "4309-4326-4336",
          nombre_ubigeo: "Puno - Azangaro - Saman",
          codigo_ubigeo: "210210",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4336",
        },
        {
          id_ubigeo: "4309-4326-4337",
          nombre_ubigeo: "Puno - Azangaro - San Anton",
          codigo_ubigeo: "210211",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4337",
        },
        {
          id_ubigeo: "4309-4326-4338",
          nombre_ubigeo: "Puno - Azangaro - San Jose",
          codigo_ubigeo: "210212",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4338",
        },
        {
          id_ubigeo: "4309-4326-4339",
          nombre_ubigeo: "Puno - Azangaro - San Juan de Salinas",
          codigo_ubigeo: "210213",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4339",
        },
        {
          id_ubigeo: "4309-4326-4340",
          nombre_ubigeo: "Puno - Azangaro - Santiago de Pupuja",
          codigo_ubigeo: "210214",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4340",
        },
        {
          id_ubigeo: "4309-4326-4341",
          nombre_ubigeo: "Puno - Azangaro - Tirapata",
          codigo_ubigeo: "210215",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4326",
          id_padre_ubigeo_dst: "4341",
        },
        {
          id_ubigeo: "4309-4342-4344",
          nombre_ubigeo: "Puno - Carabaya - Ajoyani",
          codigo_ubigeo: "210302",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4344",
        },
        {
          id_ubigeo: "4309-4342-4345",
          nombre_ubigeo: "Puno - Carabaya - Ayapata",
          codigo_ubigeo: "210303",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4345",
        },
        {
          id_ubigeo: "4309-4342-4346",
          nombre_ubigeo: "Puno - Carabaya - Coasa",
          codigo_ubigeo: "210304",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4346",
        },
        {
          id_ubigeo: "4309-4342-4347",
          nombre_ubigeo: "Puno - Carabaya - Corani",
          codigo_ubigeo: "210305",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4347",
        },
        {
          id_ubigeo: "4309-4342-4348",
          nombre_ubigeo: "Puno - Carabaya - Crucero",
          codigo_ubigeo: "210306",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4348",
        },
        {
          id_ubigeo: "4309-4342-4349",
          nombre_ubigeo: "Puno - Carabaya - Ituata",
          codigo_ubigeo: "210307",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4349",
        },
        {
          id_ubigeo: "4309-4342-4343",
          nombre_ubigeo: "Puno - Carabaya - Macusani",
          codigo_ubigeo: "210301",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4343",
        },
        {
          id_ubigeo: "4309-4342-4350",
          nombre_ubigeo: "Puno - Carabaya - Ollachea",
          codigo_ubigeo: "210308",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4350",
        },
        {
          id_ubigeo: "4309-4342-4351",
          nombre_ubigeo: "Puno - Carabaya - San Gaban",
          codigo_ubigeo: "210309",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4351",
        },
        {
          id_ubigeo: "4309-4342-4352",
          nombre_ubigeo: "Puno - Carabaya - Usicayos",
          codigo_ubigeo: "210310",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4342",
          id_padre_ubigeo_dst: "4352",
        },
        {
          id_ubigeo: "4309-4353-4355",
          nombre_ubigeo: "Puno - Chucuito - Desaguadero",
          codigo_ubigeo: "210402",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4353",
          id_padre_ubigeo_dst: "4355",
        },
        {
          id_ubigeo: "4309-4353-4356",
          nombre_ubigeo: "Puno - Chucuito - Huacullani",
          codigo_ubigeo: "210403",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4353",
          id_padre_ubigeo_dst: "4356",
        },
        {
          id_ubigeo: "4309-4353-4354",
          nombre_ubigeo: "Puno - Chucuito - Juli",
          codigo_ubigeo: "210401",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4353",
          id_padre_ubigeo_dst: "4354",
        },
        {
          id_ubigeo: "4309-4353-4357",
          nombre_ubigeo: "Puno - Chucuito - Kelluyo",
          codigo_ubigeo: "210404",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4353",
          id_padre_ubigeo_dst: "4357",
        },
        {
          id_ubigeo: "4309-4353-4358",
          nombre_ubigeo: "Puno - Chucuito - Pisacoma",
          codigo_ubigeo: "210405",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4353",
          id_padre_ubigeo_dst: "4358",
        },
        {
          id_ubigeo: "4309-4353-4359",
          nombre_ubigeo: "Puno - Chucuito - Pomata",
          codigo_ubigeo: "210406",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4353",
          id_padre_ubigeo_dst: "4359",
        },
        {
          id_ubigeo: "4309-4353-4360",
          nombre_ubigeo: "Puno - Chucuito - Zepita",
          codigo_ubigeo: "210407",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4353",
          id_padre_ubigeo_dst: "4360",
        },
        {
          id_ubigeo: "4309-4361-4363",
          nombre_ubigeo: "Puno - El Collao - Capazo",
          codigo_ubigeo: "210502",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4361",
          id_padre_ubigeo_dst: "4363",
        },
        {
          id_ubigeo: "4309-4361-4366",
          nombre_ubigeo: "Puno - El Collao - Conduriri",
          codigo_ubigeo: "210505",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4361",
          id_padre_ubigeo_dst: "4366",
        },
        {
          id_ubigeo: "4309-4361-4362",
          nombre_ubigeo: "Puno - El Collao - Ilave",
          codigo_ubigeo: "210501",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4361",
          id_padre_ubigeo_dst: "4362",
        },
        {
          id_ubigeo: "4309-4361-4364",
          nombre_ubigeo: "Puno - El Collao - Pilcuyo",
          codigo_ubigeo: "210503",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4361",
          id_padre_ubigeo_dst: "4364",
        },
        {
          id_ubigeo: "4309-4361-4365",
          nombre_ubigeo: "Puno - El Collao - Santa Rosa",
          codigo_ubigeo: "210504",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4361",
          id_padre_ubigeo_dst: "4365",
        },
        {
          id_ubigeo: "4309-4367-4369",
          nombre_ubigeo: "Puno - Huancane - Cojata",
          codigo_ubigeo: "210602",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4369",
        },
        {
          id_ubigeo: "4309-4367-4368",
          nombre_ubigeo: "Puno - Huancane - Huancane",
          codigo_ubigeo: "210601",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4368",
        },
        {
          id_ubigeo: "4309-4367-4370",
          nombre_ubigeo: "Puno - Huancane - Huatasani",
          codigo_ubigeo: "210603",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4370",
        },
        {
          id_ubigeo: "4309-4367-4371",
          nombre_ubigeo: "Puno - Huancane - Inchupalla",
          codigo_ubigeo: "210604",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4371",
        },
        {
          id_ubigeo: "4309-4367-4372",
          nombre_ubigeo: "Puno - Huancane - Pusi",
          codigo_ubigeo: "210605",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4372",
        },
        {
          id_ubigeo: "4309-4367-4373",
          nombre_ubigeo: "Puno - Huancane - Rosaspata",
          codigo_ubigeo: "210606",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4373",
        },
        {
          id_ubigeo: "4309-4367-4374",
          nombre_ubigeo: "Puno - Huancane - Taraco",
          codigo_ubigeo: "210607",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4374",
        },
        {
          id_ubigeo: "4309-4367-4375",
          nombre_ubigeo: "Puno - Huancane - Vilque Chico",
          codigo_ubigeo: "210608",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4367",
          id_padre_ubigeo_dst: "4375",
        },
        {
          id_ubigeo: "4309-4376-4378",
          nombre_ubigeo: "Puno - Lampa - Cabanilla",
          codigo_ubigeo: "210702",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4378",
        },
        {
          id_ubigeo: "4309-4376-4379",
          nombre_ubigeo: "Puno - Lampa - Calapuja",
          codigo_ubigeo: "210703",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4379",
        },
        {
          id_ubigeo: "4309-4376-4377",
          nombre_ubigeo: "Puno - Lampa - Lampa",
          codigo_ubigeo: "210701",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4377",
        },
        {
          id_ubigeo: "4309-4376-4380",
          nombre_ubigeo: "Puno - Lampa - Nicasio",
          codigo_ubigeo: "210704",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4380",
        },
        {
          id_ubigeo: "4309-4376-4381",
          nombre_ubigeo: "Puno - Lampa - Ocuviri",
          codigo_ubigeo: "210705",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4381",
        },
        {
          id_ubigeo: "4309-4376-4382",
          nombre_ubigeo: "Puno - Lampa - Palca",
          codigo_ubigeo: "210706",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4382",
        },
        {
          id_ubigeo: "4309-4376-4383",
          nombre_ubigeo: "Puno - Lampa - Paratia",
          codigo_ubigeo: "210707",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4383",
        },
        {
          id_ubigeo: "4309-4376-4384",
          nombre_ubigeo: "Puno - Lampa - Pucara",
          codigo_ubigeo: "210708",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4384",
        },
        {
          id_ubigeo: "4309-4376-4385",
          nombre_ubigeo: "Puno - Lampa - Santa Lucia",
          codigo_ubigeo: "210709",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4385",
        },
        {
          id_ubigeo: "4309-4376-4386",
          nombre_ubigeo: "Puno - Lampa - Vilavila",
          codigo_ubigeo: "210710",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4376",
          id_padre_ubigeo_dst: "4386",
        },
        {
          id_ubigeo: "4309-4387-4389",
          nombre_ubigeo: "Puno - Melgar - Antauta",
          codigo_ubigeo: "210802",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4389",
        },
        {
          id_ubigeo: "4309-4387-4388",
          nombre_ubigeo: "Puno - Melgar - Ayaviri",
          codigo_ubigeo: "210801",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4388",
        },
        {
          id_ubigeo: "4309-4387-4390",
          nombre_ubigeo: "Puno - Melgar - Cupi",
          codigo_ubigeo: "210803",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4390",
        },
        {
          id_ubigeo: "4309-4387-4391",
          nombre_ubigeo: "Puno - Melgar - Llalli",
          codigo_ubigeo: "210804",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4391",
        },
        {
          id_ubigeo: "4309-4387-4392",
          nombre_ubigeo: "Puno - Melgar - Macari",
          codigo_ubigeo: "210805",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4392",
        },
        {
          id_ubigeo: "4309-4387-4393",
          nombre_ubigeo: "Puno - Melgar - Nuqoa",
          codigo_ubigeo: "210806",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4393",
        },
        {
          id_ubigeo: "4309-4387-4394",
          nombre_ubigeo: "Puno - Melgar - Orurillo",
          codigo_ubigeo: "210807",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4394",
        },
        {
          id_ubigeo: "4309-4387-4395",
          nombre_ubigeo: "Puno - Melgar - Santa Rosa",
          codigo_ubigeo: "210808",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4395",
        },
        {
          id_ubigeo: "4309-4387-4396",
          nombre_ubigeo: "Puno - Melgar - Umachiri",
          codigo_ubigeo: "210809",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4387",
          id_padre_ubigeo_dst: "4396",
        },
        {
          id_ubigeo: "4309-4397-4399",
          nombre_ubigeo: "Puno - Moho - Conima",
          codigo_ubigeo: "210902",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4397",
          id_padre_ubigeo_dst: "4399",
        },
        {
          id_ubigeo: "4309-4397-4400",
          nombre_ubigeo: "Puno - Moho - Huayrapata",
          codigo_ubigeo: "210903",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4397",
          id_padre_ubigeo_dst: "4400",
        },
        {
          id_ubigeo: "4309-4397-4398",
          nombre_ubigeo: "Puno - Moho - Moho",
          codigo_ubigeo: "210901",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4397",
          id_padre_ubigeo_dst: "4398",
        },
        {
          id_ubigeo: "4309-4397-4401",
          nombre_ubigeo: "Puno - Moho - Tilali",
          codigo_ubigeo: "210904",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4397",
          id_padre_ubigeo_dst: "4401",
        },
        {
          id_ubigeo: "4309-4310-4312",
          nombre_ubigeo: "Puno - Puno - Acora",
          codigo_ubigeo: "210102",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4312",
        },
        {
          id_ubigeo: "4309-4310-4313",
          nombre_ubigeo: "Puno - Puno - Amantani",
          codigo_ubigeo: "210103",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4313",
        },
        {
          id_ubigeo: "4309-4310-4314",
          nombre_ubigeo: "Puno - Puno - Atuncolla",
          codigo_ubigeo: "210104",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4314",
        },
        {
          id_ubigeo: "4309-4310-4315",
          nombre_ubigeo: "Puno - Puno - Capachica",
          codigo_ubigeo: "210105",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4315",
        },
        {
          id_ubigeo: "4309-4310-4316",
          nombre_ubigeo: "Puno - Puno - Chucuito",
          codigo_ubigeo: "210106",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4316",
        },
        {
          id_ubigeo: "4309-4310-4317",
          nombre_ubigeo: "Puno - Puno - Coata",
          codigo_ubigeo: "210107",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4317",
        },
        {
          id_ubigeo: "4309-4310-4318",
          nombre_ubigeo: "Puno - Puno - Huata",
          codigo_ubigeo: "210108",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4318",
        },
        {
          id_ubigeo: "4309-4310-4319",
          nombre_ubigeo: "Puno - Puno - Maqazo",
          codigo_ubigeo: "210109",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4319",
        },
        {
          id_ubigeo: "4309-4310-4320",
          nombre_ubigeo: "Puno - Puno - Paucarcolla",
          codigo_ubigeo: "210110",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4320",
        },
        {
          id_ubigeo: "4309-4310-4321",
          nombre_ubigeo: "Puno - Puno - Pichacani",
          codigo_ubigeo: "210111",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4321",
        },
        {
          id_ubigeo: "4309-4310-4322",
          nombre_ubigeo: "Puno - Puno - Plateria",
          codigo_ubigeo: "210112",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4322",
        },
        {
          id_ubigeo: "4309-4310-4311",
          nombre_ubigeo: "Puno - Puno - Puno",
          codigo_ubigeo: "210101",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4311",
        },
        {
          id_ubigeo: "4309-4310-4323",
          nombre_ubigeo: "Puno - Puno - San Antonio",
          codigo_ubigeo: "210113",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4323",
        },
        {
          id_ubigeo: "4309-4310-4324",
          nombre_ubigeo: "Puno - Puno - Tiquillaca",
          codigo_ubigeo: "210114",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4324",
        },
        {
          id_ubigeo: "4309-4310-4325",
          nombre_ubigeo: "Puno - Puno - Vilque",
          codigo_ubigeo: "210115",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4310",
          id_padre_ubigeo_dst: "4325",
        },
        {
          id_ubigeo: "4309-4402-4404",
          nombre_ubigeo: "Puno - San Antonio de Putina - Ananea",
          codigo_ubigeo: "211002",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4402",
          id_padre_ubigeo_dst: "4404",
        },
        {
          id_ubigeo: "4309-4402-4405",
          nombre_ubigeo: "Puno - San Antonio de Putina - Pedro Vilca Apaza",
          codigo_ubigeo: "211003",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4402",
          id_padre_ubigeo_dst: "4405",
        },
        {
          id_ubigeo: "4309-4402-4403",
          nombre_ubigeo: "Puno - San Antonio de Putina - Putina",
          codigo_ubigeo: "211001",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4402",
          id_padre_ubigeo_dst: "4403",
        },
        {
          id_ubigeo: "4309-4402-4406",
          nombre_ubigeo: "Puno - San Antonio de Putina - Quilcapuncu",
          codigo_ubigeo: "211004",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4402",
          id_padre_ubigeo_dst: "4406",
        },
        {
          id_ubigeo: "4309-4402-4407",
          nombre_ubigeo: "Puno - San Antonio de Putina - Sina",
          codigo_ubigeo: "211005",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4402",
          id_padre_ubigeo_dst: "4407",
        },
        {
          id_ubigeo: "4309-4408-4410",
          nombre_ubigeo: "Puno - San Roman - Cabana",
          codigo_ubigeo: "211102",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4408",
          id_padre_ubigeo_dst: "4410",
        },
        {
          id_ubigeo: "4309-4408-4411",
          nombre_ubigeo: "Puno - San Roman - Cabanillas",
          codigo_ubigeo: "211103",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4408",
          id_padre_ubigeo_dst: "4411",
        },
        {
          id_ubigeo: "4309-4408-4412",
          nombre_ubigeo: "Puno - San Roman - Caracoto",
          codigo_ubigeo: "211104",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4408",
          id_padre_ubigeo_dst: "4412",
        },
        {
          id_ubigeo: "4309-4408-4409",
          nombre_ubigeo: "Puno - San Roman - Juliaca",
          codigo_ubigeo: "211101",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4408",
          id_padre_ubigeo_dst: "4409",
        },
        {
          id_ubigeo: "4309-4413-4422",
          nombre_ubigeo: "Puno - Sandia - Alto Inambari",
          codigo_ubigeo: "211209",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4422",
        },
        {
          id_ubigeo: "4309-4413-4415",
          nombre_ubigeo: "Puno - Sandia - Cuyocuyo",
          codigo_ubigeo: "211202",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4415",
        },
        {
          id_ubigeo: "4309-4413-4416",
          nombre_ubigeo: "Puno - Sandia - Limbani",
          codigo_ubigeo: "211203",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4416",
        },
        {
          id_ubigeo: "4309-4413-4417",
          nombre_ubigeo: "Puno - Sandia - Patambuco",
          codigo_ubigeo: "211204",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4417",
        },
        {
          id_ubigeo: "4309-4413-4418",
          nombre_ubigeo: "Puno - Sandia - Phara",
          codigo_ubigeo: "211205",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4418",
        },
        {
          id_ubigeo: "4309-4413-4419",
          nombre_ubigeo: "Puno - Sandia - Quiaca",
          codigo_ubigeo: "211206",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4419",
        },
        {
          id_ubigeo: "4309-4413-4420",
          nombre_ubigeo: "Puno - Sandia - San Juan del Oro",
          codigo_ubigeo: "211207",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4420",
        },
        {
          id_ubigeo: "4309-4413-4414",
          nombre_ubigeo: "Puno - Sandia - Sandia",
          codigo_ubigeo: "211201",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4414",
        },
        {
          id_ubigeo: "4309-4413-4421",
          nombre_ubigeo: "Puno - Sandia - Yanahuaya",
          codigo_ubigeo: "211208",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4413",
          id_padre_ubigeo_dst: "4421",
        },
        {
          id_ubigeo: "4309-4423-4425",
          nombre_ubigeo: "Puno - Yunguyo - Anapia",
          codigo_ubigeo: "211302",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4423",
          id_padre_ubigeo_dst: "4425",
        },
        {
          id_ubigeo: "4309-4423-4426",
          nombre_ubigeo: "Puno - Yunguyo - Copani",
          codigo_ubigeo: "211303",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4423",
          id_padre_ubigeo_dst: "4426",
        },
        {
          id_ubigeo: "4309-4423-4427",
          nombre_ubigeo: "Puno - Yunguyo - Cuturapi",
          codigo_ubigeo: "211304",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4423",
          id_padre_ubigeo_dst: "4427",
        },
        {
          id_ubigeo: "4309-4423-4428",
          nombre_ubigeo: "Puno - Yunguyo - Ollaraya",
          codigo_ubigeo: "211305",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4423",
          id_padre_ubigeo_dst: "4428",
        },
        {
          id_ubigeo: "4309-4423-4429",
          nombre_ubigeo: "Puno - Yunguyo - Tinicachi",
          codigo_ubigeo: "211306",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4423",
          id_padre_ubigeo_dst: "4429",
        },
        {
          id_ubigeo: "4309-4423-4430",
          nombre_ubigeo: "Puno - Yunguyo - Unicachi",
          codigo_ubigeo: "211307",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4423",
          id_padre_ubigeo_dst: "4430",
        },
        {
          id_ubigeo: "4309-4423-4424",
          nombre_ubigeo: "Puno - Yunguyo - Yunguyo",
          codigo_ubigeo: "211301",
          id_padre_ubigeo_dpto: "4309",
          id_padre_ubigeo_prov: "4423",
          id_padre_ubigeo_dst: "4424",
        },
        {
          id_ubigeo: "4431-4439-4441",
          nombre_ubigeo: "San Martin - Bellavista - Alto Biavo",
          codigo_ubigeo: "220202",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4439",
          id_padre_ubigeo_dst: "4441",
        },
        {
          id_ubigeo: "4431-4439-4442",
          nombre_ubigeo: "San Martin - Bellavista - Bajo Biavo",
          codigo_ubigeo: "220203",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4439",
          id_padre_ubigeo_dst: "4442",
        },
        {
          id_ubigeo: "4431-4439-4440",
          nombre_ubigeo: "San Martin - Bellavista - Bellavista",
          codigo_ubigeo: "220201",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4439",
          id_padre_ubigeo_dst: "4440",
        },
        {
          id_ubigeo: "4431-4439-4443",
          nombre_ubigeo: "San Martin - Bellavista - Huallaga",
          codigo_ubigeo: "220204",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4439",
          id_padre_ubigeo_dst: "4443",
        },
        {
          id_ubigeo: "4431-4439-4444",
          nombre_ubigeo: "San Martin - Bellavista - San Pablo",
          codigo_ubigeo: "220205",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4439",
          id_padre_ubigeo_dst: "4444",
        },
        {
          id_ubigeo: "4431-4439-4445",
          nombre_ubigeo: "San Martin - Bellavista - San Rafael",
          codigo_ubigeo: "220206",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4439",
          id_padre_ubigeo_dst: "4445",
        },
        {
          id_ubigeo: "4431-4446-4448",
          nombre_ubigeo: "San Martin - El Dorado - Agua Blanca",
          codigo_ubigeo: "220302",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4446",
          id_padre_ubigeo_dst: "4448",
        },
        {
          id_ubigeo: "4431-4446-4447",
          nombre_ubigeo: "San Martin - El Dorado - San Jose de Sisa",
          codigo_ubigeo: "220301",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4446",
          id_padre_ubigeo_dst: "4447",
        },
        {
          id_ubigeo: "4431-4446-4449",
          nombre_ubigeo: "San Martin - El Dorado - San Martin",
          codigo_ubigeo: "220303",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4446",
          id_padre_ubigeo_dst: "4449",
        },
        {
          id_ubigeo: "4431-4446-4450",
          nombre_ubigeo: "San Martin - El Dorado - Santa Rosa",
          codigo_ubigeo: "220304",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4446",
          id_padre_ubigeo_dst: "4450",
        },
        {
          id_ubigeo: "4431-4446-4451",
          nombre_ubigeo: "San Martin - El Dorado - Shatoja",
          codigo_ubigeo: "220305",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4446",
          id_padre_ubigeo_dst: "4451",
        },
        {
          id_ubigeo: "4431-4452-4454",
          nombre_ubigeo: "San Martin - Huallaga - Alto Saposoa",
          codigo_ubigeo: "220402",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4452",
          id_padre_ubigeo_dst: "4454",
        },
        {
          id_ubigeo: "4431-4452-4455",
          nombre_ubigeo: "San Martin - Huallaga - El Eslabon",
          codigo_ubigeo: "220403",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4452",
          id_padre_ubigeo_dst: "4455",
        },
        {
          id_ubigeo: "4431-4452-4456",
          nombre_ubigeo: "San Martin - Huallaga - Piscoyacu",
          codigo_ubigeo: "220404",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4452",
          id_padre_ubigeo_dst: "4456",
        },
        {
          id_ubigeo: "4431-4452-4457",
          nombre_ubigeo: "San Martin - Huallaga - Sacanche",
          codigo_ubigeo: "220405",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4452",
          id_padre_ubigeo_dst: "4457",
        },
        {
          id_ubigeo: "4431-4452-4453",
          nombre_ubigeo: "San Martin - Huallaga - Saposoa",
          codigo_ubigeo: "220401",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4452",
          id_padre_ubigeo_dst: "4453",
        },
        {
          id_ubigeo: "4431-4452-4458",
          nombre_ubigeo: "San Martin - Huallaga - Tingo de Saposoa",
          codigo_ubigeo: "220406",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4452",
          id_padre_ubigeo_dst: "4458",
        },
        {
          id_ubigeo: "4431-4459-4461",
          nombre_ubigeo: "San Martin - Lamas - Alonso de Alvarado",
          codigo_ubigeo: "220502",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4461",
        },
        {
          id_ubigeo: "4431-4459-4462",
          nombre_ubigeo: "San Martin - Lamas - Barranquita",
          codigo_ubigeo: "220503",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4462",
        },
        {
          id_ubigeo: "4431-4459-4463",
          nombre_ubigeo: "San Martin - Lamas - Caynarachi",
          codigo_ubigeo: "220504",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4463",
        },
        {
          id_ubigeo: "4431-4459-4464",
          nombre_ubigeo: "San Martin - Lamas - Cuqumbuqui",
          codigo_ubigeo: "220505",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4464",
        },
        {
          id_ubigeo: "4431-4459-4460",
          nombre_ubigeo: "San Martin - Lamas - Lamas",
          codigo_ubigeo: "220501",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4460",
        },
        {
          id_ubigeo: "4431-4459-4465",
          nombre_ubigeo: "San Martin - Lamas - Pinto Recodo",
          codigo_ubigeo: "220506",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4465",
        },
        {
          id_ubigeo: "4431-4459-4466",
          nombre_ubigeo: "San Martin - Lamas - Rumisapa",
          codigo_ubigeo: "220507",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4466",
        },
        {
          id_ubigeo: "4431-4459-4467",
          nombre_ubigeo: "San Martin - Lamas - San Roque de Cumbaza",
          codigo_ubigeo: "220508",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4467",
        },
        {
          id_ubigeo: "4431-4459-4468",
          nombre_ubigeo: "San Martin - Lamas - Shanao",
          codigo_ubigeo: "220509",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4468",
        },
        {
          id_ubigeo: "4431-4459-4469",
          nombre_ubigeo: "San Martin - Lamas - Tabalosos",
          codigo_ubigeo: "220510",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4469",
        },
        {
          id_ubigeo: "4431-4459-4470",
          nombre_ubigeo: "San Martin - Lamas - Zapatero",
          codigo_ubigeo: "220511",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4459",
          id_padre_ubigeo_dst: "4470",
        },
        {
          id_ubigeo: "4431-4471-4473",
          nombre_ubigeo: "San Martin - Mariscal Caceres - Campanilla",
          codigo_ubigeo: "220602",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4471",
          id_padre_ubigeo_dst: "4473",
        },
        {
          id_ubigeo: "4431-4471-4474",
          nombre_ubigeo: "San Martin - Mariscal Caceres - Huicungo",
          codigo_ubigeo: "220603",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4471",
          id_padre_ubigeo_dst: "4474",
        },
        {
          id_ubigeo: "4431-4471-4472",
          nombre_ubigeo: "San Martin - Mariscal Caceres - Juanjui",
          codigo_ubigeo: "220601",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4471",
          id_padre_ubigeo_dst: "4472",
        },
        {
          id_ubigeo: "4431-4471-4475",
          nombre_ubigeo: "San Martin - Mariscal Caceres - Pachiza",
          codigo_ubigeo: "220604",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4471",
          id_padre_ubigeo_dst: "4475",
        },
        {
          id_ubigeo: "4431-4471-4476",
          nombre_ubigeo: "San Martin - Mariscal Caceres - Pajarillo",
          codigo_ubigeo: "220605",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4471",
          id_padre_ubigeo_dst: "4476",
        },
        {
          id_ubigeo: "4431-4432-4434",
          nombre_ubigeo: "San Martin - Moyobamba - Calzada",
          codigo_ubigeo: "220102",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4432",
          id_padre_ubigeo_dst: "4434",
        },
        {
          id_ubigeo: "4431-4432-4435",
          nombre_ubigeo: "San Martin - Moyobamba - Habana",
          codigo_ubigeo: "220103",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4432",
          id_padre_ubigeo_dst: "4435",
        },
        {
          id_ubigeo: "4431-4432-4436",
          nombre_ubigeo: "San Martin - Moyobamba - Jepelacio",
          codigo_ubigeo: "220104",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4432",
          id_padre_ubigeo_dst: "4436",
        },
        {
          id_ubigeo: "4431-4432-4433",
          nombre_ubigeo: "San Martin - Moyobamba - Moyobamba",
          codigo_ubigeo: "220101",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4432",
          id_padre_ubigeo_dst: "4433",
        },
        {
          id_ubigeo: "4431-4432-4437",
          nombre_ubigeo: "San Martin - Moyobamba - Soritor",
          codigo_ubigeo: "220105",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4432",
          id_padre_ubigeo_dst: "4437",
        },
        {
          id_ubigeo: "4431-4432-4438",
          nombre_ubigeo: "San Martin - Moyobamba - Yantalo",
          codigo_ubigeo: "220106",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4432",
          id_padre_ubigeo_dst: "4438",
        },
        {
          id_ubigeo: "4431-4477-4479",
          nombre_ubigeo: "San Martin - Picota - Buenos Aires",
          codigo_ubigeo: "220702",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4479",
        },
        {
          id_ubigeo: "4431-4477-4480",
          nombre_ubigeo: "San Martin - Picota - Caspisapa",
          codigo_ubigeo: "220703",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4480",
        },
        {
          id_ubigeo: "4431-4477-4478",
          nombre_ubigeo: "San Martin - Picota - Picota",
          codigo_ubigeo: "220701",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4478",
        },
        {
          id_ubigeo: "4431-4477-4481",
          nombre_ubigeo: "San Martin - Picota - Pilluana",
          codigo_ubigeo: "220704",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4481",
        },
        {
          id_ubigeo: "4431-4477-4482",
          nombre_ubigeo: "San Martin - Picota - Pucacaca",
          codigo_ubigeo: "220705",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4482",
        },
        {
          id_ubigeo: "4431-4477-4483",
          nombre_ubigeo: "San Martin - Picota - San Cristobal",
          codigo_ubigeo: "220706",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4483",
        },
        {
          id_ubigeo: "4431-4477-4484",
          nombre_ubigeo: "San Martin - Picota - San Hilarion",
          codigo_ubigeo: "220707",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4484",
        },
        {
          id_ubigeo: "4431-4477-4485",
          nombre_ubigeo: "San Martin - Picota - Shamboyacu",
          codigo_ubigeo: "220708",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4485",
        },
        {
          id_ubigeo: "4431-4477-4486",
          nombre_ubigeo: "San Martin - Picota - Tingo de Ponasa",
          codigo_ubigeo: "220709",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4486",
        },
        {
          id_ubigeo: "4431-4477-4487",
          nombre_ubigeo: "San Martin - Picota - Tres Unidos",
          codigo_ubigeo: "220710",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4477",
          id_padre_ubigeo_dst: "4487",
        },
        {
          id_ubigeo: "4431-4488-4490",
          nombre_ubigeo: "San Martin - Rioja - Awajun",
          codigo_ubigeo: "220802",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4490",
        },
        {
          id_ubigeo: "4431-4488-4491",
          nombre_ubigeo: "San Martin - Rioja - Elias Soplin Vargas",
          codigo_ubigeo: "220803",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4491",
        },
        {
          id_ubigeo: "4431-4488-4492",
          nombre_ubigeo: "San Martin - Rioja - Nueva Cajamarca",
          codigo_ubigeo: "220804",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4492",
        },
        {
          id_ubigeo: "4431-4488-4493",
          nombre_ubigeo: "San Martin - Rioja - Pardo Miguel",
          codigo_ubigeo: "220805",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4493",
        },
        {
          id_ubigeo: "4431-4488-4494",
          nombre_ubigeo: "San Martin - Rioja - Posic",
          codigo_ubigeo: "220806",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4494",
        },
        {
          id_ubigeo: "4431-4488-4489",
          nombre_ubigeo: "San Martin - Rioja - Rioja",
          codigo_ubigeo: "220801",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4489",
        },
        {
          id_ubigeo: "4431-4488-4495",
          nombre_ubigeo: "San Martin - Rioja - San Fernando",
          codigo_ubigeo: "220807",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4495",
        },
        {
          id_ubigeo: "4431-4488-4496",
          nombre_ubigeo: "San Martin - Rioja - Yorongos",
          codigo_ubigeo: "220808",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4496",
        },
        {
          id_ubigeo: "4431-4488-4497",
          nombre_ubigeo: "San Martin - Rioja - Yuracyacu",
          codigo_ubigeo: "220809",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4488",
          id_padre_ubigeo_dst: "4497",
        },
        {
          id_ubigeo: "4431-4498-4500",
          nombre_ubigeo: "San Martin - San Martin - Alberto Leveau",
          codigo_ubigeo: "220902",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4500",
        },
        {
          id_ubigeo: "4431-4498-4501",
          nombre_ubigeo: "San Martin - San Martin - Cacatachi",
          codigo_ubigeo: "220903",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4501",
        },
        {
          id_ubigeo: "4431-4498-4502",
          nombre_ubigeo: "San Martin - San Martin - Chazuta",
          codigo_ubigeo: "220904",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4502",
        },
        {
          id_ubigeo: "4431-4498-4503",
          nombre_ubigeo: "San Martin - San Martin - Chipurana",
          codigo_ubigeo: "220905",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4503",
        },
        {
          id_ubigeo: "4431-4498-4504",
          nombre_ubigeo: "San Martin - San Martin - El Porvenir",
          codigo_ubigeo: "220906",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4504",
        },
        {
          id_ubigeo: "4431-4498-4505",
          nombre_ubigeo: "San Martin - San Martin - Huimbayoc",
          codigo_ubigeo: "220907",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4505",
        },
        {
          id_ubigeo: "4431-4498-4506",
          nombre_ubigeo: "San Martin - San Martin - Juan Guerra",
          codigo_ubigeo: "220908",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4506",
        },
        {
          id_ubigeo: "4431-4498-4507",
          nombre_ubigeo: "San Martin - San Martin - La Banda de Shilcayo",
          codigo_ubigeo: "220909",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4507",
        },
        {
          id_ubigeo: "4431-4498-4508",
          nombre_ubigeo: "San Martin - San Martin - Morales",
          codigo_ubigeo: "220910",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4508",
        },
        {
          id_ubigeo: "4431-4498-4509",
          nombre_ubigeo: "San Martin - San Martin - Papaplaya",
          codigo_ubigeo: "220911",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4509",
        },
        {
          id_ubigeo: "4431-4498-4510",
          nombre_ubigeo: "San Martin - San Martin - San Antonio",
          codigo_ubigeo: "220912",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4510",
        },
        {
          id_ubigeo: "4431-4498-4511",
          nombre_ubigeo: "San Martin - San Martin - Sauce",
          codigo_ubigeo: "220913",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4511",
        },
        {
          id_ubigeo: "4431-4498-4512",
          nombre_ubigeo: "San Martin - San Martin - Shapaja",
          codigo_ubigeo: "220914",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4512",
        },
        {
          id_ubigeo: "4431-4498-4499",
          nombre_ubigeo: "San Martin - San Martin - Tarapoto",
          codigo_ubigeo: "220901",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4498",
          id_padre_ubigeo_dst: "4499",
        },
        {
          id_ubigeo: "4431-4513-4515",
          nombre_ubigeo: "San Martin - Tocache - Nuevo Progreso",
          codigo_ubigeo: "221002",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4513",
          id_padre_ubigeo_dst: "4515",
        },
        {
          id_ubigeo: "4431-4513-4516",
          nombre_ubigeo: "San Martin - Tocache - Polvora",
          codigo_ubigeo: "221003",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4513",
          id_padre_ubigeo_dst: "4516",
        },
        {
          id_ubigeo: "4431-4513-4517",
          nombre_ubigeo: "San Martin - Tocache - Shunte",
          codigo_ubigeo: "221004",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4513",
          id_padre_ubigeo_dst: "4517",
        },
        {
          id_ubigeo: "4431-4513-4514",
          nombre_ubigeo: "San Martin - Tocache - Tocache",
          codigo_ubigeo: "221001",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4513",
          id_padre_ubigeo_dst: "4514",
        },
        {
          id_ubigeo: "4431-4513-4518",
          nombre_ubigeo: "San Martin - Tocache - Uchiza",
          codigo_ubigeo: "221005",
          id_padre_ubigeo_dpto: "4431",
          id_padre_ubigeo_prov: "4513",
          id_padre_ubigeo_dst: "4518",
        },
        {
          id_ubigeo: "4519-4531-4533",
          nombre_ubigeo: "Tacna - Candarave - Cairani",
          codigo_ubigeo: "230202",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4531",
          id_padre_ubigeo_dst: "4533",
        },
        {
          id_ubigeo: "4519-4531-4534",
          nombre_ubigeo: "Tacna - Candarave - Camilaca",
          codigo_ubigeo: "230203",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4531",
          id_padre_ubigeo_dst: "4534",
        },
        {
          id_ubigeo: "4519-4531-4532",
          nombre_ubigeo: "Tacna - Candarave - Candarave",
          codigo_ubigeo: "230201",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4531",
          id_padre_ubigeo_dst: "4532",
        },
        {
          id_ubigeo: "4519-4531-4535",
          nombre_ubigeo: "Tacna - Candarave - Curibaya",
          codigo_ubigeo: "230204",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4531",
          id_padre_ubigeo_dst: "4535",
        },
        {
          id_ubigeo: "4519-4531-4536",
          nombre_ubigeo: "Tacna - Candarave - Huanuara",
          codigo_ubigeo: "230205",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4531",
          id_padre_ubigeo_dst: "4536",
        },
        {
          id_ubigeo: "4519-4531-4537",
          nombre_ubigeo: "Tacna - Candarave - Quilahuani",
          codigo_ubigeo: "230206",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4531",
          id_padre_ubigeo_dst: "4537",
        },
        {
          id_ubigeo: "4519-4538-4540",
          nombre_ubigeo: "Tacna - Jorge Basadre - Ilabaya",
          codigo_ubigeo: "230302",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4538",
          id_padre_ubigeo_dst: "4540",
        },
        {
          id_ubigeo: "4519-4538-4541",
          nombre_ubigeo: "Tacna - Jorge Basadre - Ite",
          codigo_ubigeo: "230303",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4538",
          id_padre_ubigeo_dst: "4541",
        },
        {
          id_ubigeo: "4519-4538-4539",
          nombre_ubigeo: "Tacna - Jorge Basadre - Locumba",
          codigo_ubigeo: "230301",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4538",
          id_padre_ubigeo_dst: "4539",
        },
        {
          id_ubigeo: "4519-4520-4522",
          nombre_ubigeo: "Tacna - Tacna - Alto de la Alianza",
          codigo_ubigeo: "230102",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4522",
        },
        {
          id_ubigeo: "4519-4520-4523",
          nombre_ubigeo: "Tacna - Tacna - Calana",
          codigo_ubigeo: "230103",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4523",
        },
        {
          id_ubigeo: "4519-4520-4524",
          nombre_ubigeo: "Tacna - Tacna - Ciudad Nueva",
          codigo_ubigeo: "230104",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4524",
        },
        {
          id_ubigeo: "4519-4520-4530",
          nombre_ubigeo: "Tacna - Tacna - Cor Gregorio Albarrac\xedn",
          codigo_ubigeo: "230110",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4530",
        },
        {
          id_ubigeo: "4519-4520-4525",
          nombre_ubigeo: "Tacna - Tacna - Inclan",
          codigo_ubigeo: "230105",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4525",
        },
        {
          id_ubigeo: "4519-4520-4526",
          nombre_ubigeo: "Tacna - Tacna - Pachia",
          codigo_ubigeo: "230106",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4526",
        },
        {
          id_ubigeo: "4519-4520-4527",
          nombre_ubigeo: "Tacna - Tacna - Palca",
          codigo_ubigeo: "230107",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4527",
        },
        {
          id_ubigeo: "4519-4520-4528",
          nombre_ubigeo: "Tacna - Tacna - Pocollay",
          codigo_ubigeo: "230108",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4528",
        },
        {
          id_ubigeo: "4519-4520-4529",
          nombre_ubigeo: "Tacna - Tacna - Sama",
          codigo_ubigeo: "230109",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4529",
        },
        {
          id_ubigeo: "4519-4520-4521",
          nombre_ubigeo: "Tacna - Tacna - Tacna",
          codigo_ubigeo: "230101",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4520",
          id_padre_ubigeo_dst: "4521",
        },
        {
          id_ubigeo: "4519-4542-4544",
          nombre_ubigeo: "Tacna - Tarata - Chucatamani",
          codigo_ubigeo: "230402",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4544",
        },
        {
          id_ubigeo: "4519-4542-4545",
          nombre_ubigeo: "Tacna - Tarata - Estique",
          codigo_ubigeo: "230403",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4545",
        },
        {
          id_ubigeo: "4519-4542-4546",
          nombre_ubigeo: "Tacna - Tarata - Estique-Pampa",
          codigo_ubigeo: "230404",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4546",
        },
        {
          id_ubigeo: "4519-4542-4547",
          nombre_ubigeo: "Tacna - Tarata - Sitajara",
          codigo_ubigeo: "230405",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4547",
        },
        {
          id_ubigeo: "4519-4542-4548",
          nombre_ubigeo: "Tacna - Tarata - Susapaya",
          codigo_ubigeo: "230406",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4548",
        },
        {
          id_ubigeo: "4519-4542-4543",
          nombre_ubigeo: "Tacna - Tarata - Tarata",
          codigo_ubigeo: "230401",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4543",
        },
        {
          id_ubigeo: "4519-4542-4549",
          nombre_ubigeo: "Tacna - Tarata - Tarucachi",
          codigo_ubigeo: "230407",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4549",
        },
        {
          id_ubigeo: "4519-4542-4550",
          nombre_ubigeo: "Tacna - Tarata - Ticaco",
          codigo_ubigeo: "230408",
          id_padre_ubigeo_dpto: "4519",
          id_padre_ubigeo_prov: "4542",
          id_padre_ubigeo_dst: "4550",
        },
        {
          id_ubigeo: "4551-4559-4561",
          nombre_ubigeo: "Tumbes - Contralmirante Villar - Casitas",
          codigo_ubigeo: "240202",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4559",
          id_padre_ubigeo_dst: "4561",
        },
        {
          id_ubigeo: "4551-4559-4560",
          nombre_ubigeo: "Tumbes - Contralmirante Villar - Zorritos",
          codigo_ubigeo: "240201",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4559",
          id_padre_ubigeo_dst: "4560",
        },
        {
          id_ubigeo: "4551-4552-4554",
          nombre_ubigeo: "Tumbes - Tumbes - Corrales",
          codigo_ubigeo: "240102",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4552",
          id_padre_ubigeo_dst: "4554",
        },
        {
          id_ubigeo: "4551-4552-4555",
          nombre_ubigeo: "Tumbes - Tumbes - La Cruz",
          codigo_ubigeo: "240103",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4552",
          id_padre_ubigeo_dst: "4555",
        },
        {
          id_ubigeo: "4551-4552-4556",
          nombre_ubigeo: "Tumbes - Tumbes - Pampas de Hospital",
          codigo_ubigeo: "240104",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4552",
          id_padre_ubigeo_dst: "4556",
        },
        {
          id_ubigeo: "4551-4552-4557",
          nombre_ubigeo: "Tumbes - Tumbes - San Jacinto",
          codigo_ubigeo: "240105",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4552",
          id_padre_ubigeo_dst: "4557",
        },
        {
          id_ubigeo: "4551-4552-4558",
          nombre_ubigeo: "Tumbes - Tumbes - San Juan de la Virgen",
          codigo_ubigeo: "240106",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4552",
          id_padre_ubigeo_dst: "4558",
        },
        {
          id_ubigeo: "4551-4552-4553",
          nombre_ubigeo: "Tumbes - Tumbes - Tumbes",
          codigo_ubigeo: "240101",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4552",
          id_padre_ubigeo_dst: "4553",
        },
        {
          id_ubigeo: "4551-4562-4564",
          nombre_ubigeo: "Tumbes - Zarumilla - Aguas Verdes",
          codigo_ubigeo: "240302",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4562",
          id_padre_ubigeo_dst: "4564",
        },
        {
          id_ubigeo: "4551-4562-4565",
          nombre_ubigeo: "Tumbes - Zarumilla - Matapalo",
          codigo_ubigeo: "240303",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4562",
          id_padre_ubigeo_dst: "4565",
        },
        {
          id_ubigeo: "4551-4562-4566",
          nombre_ubigeo: "Tumbes - Zarumilla - Papayal",
          codigo_ubigeo: "240304",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4562",
          id_padre_ubigeo_dst: "4566",
        },
        {
          id_ubigeo: "4551-4562-4563",
          nombre_ubigeo: "Tumbes - Zarumilla - Zarumilla",
          codigo_ubigeo: "240301",
          id_padre_ubigeo_dpto: "4551",
          id_padre_ubigeo_prov: "4562",
          id_padre_ubigeo_dst: "4563",
        },
        {
          id_ubigeo: "4567-4575-4576",
          nombre_ubigeo: "Ucayali - Atalaya - Raymondi",
          codigo_ubigeo: "250201",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4575",
          id_padre_ubigeo_dst: "4576",
        },
        {
          id_ubigeo: "4567-4575-4577",
          nombre_ubigeo: "Ucayali - Atalaya - Sepahua",
          codigo_ubigeo: "250202",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4575",
          id_padre_ubigeo_dst: "4577",
        },
        {
          id_ubigeo: "4567-4575-4578",
          nombre_ubigeo: "Ucayali - Atalaya - Tahuania",
          codigo_ubigeo: "250203",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4575",
          id_padre_ubigeo_dst: "4578",
        },
        {
          id_ubigeo: "4567-4575-4579",
          nombre_ubigeo: "Ucayali - Atalaya - Yurua",
          codigo_ubigeo: "250204",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4575",
          id_padre_ubigeo_dst: "4579",
        },
        {
          id_ubigeo: "4567-4568-4569",
          nombre_ubigeo: "Ucayali - Coronel Portillo - Calleria",
          codigo_ubigeo: "250101",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4568",
          id_padre_ubigeo_dst: "4569",
        },
        {
          id_ubigeo: "4567-4568-4570",
          nombre_ubigeo: "Ucayali - Coronel Portillo - Campoverde",
          codigo_ubigeo: "250102",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4568",
          id_padre_ubigeo_dst: "4570",
        },
        {
          id_ubigeo: "4567-4568-4571",
          nombre_ubigeo: "Ucayali - Coronel Portillo - Iparia",
          codigo_ubigeo: "250103",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4568",
          id_padre_ubigeo_dst: "4571",
        },
        {
          id_ubigeo: "4567-4568-4572",
          nombre_ubigeo: "Ucayali - Coronel Portillo - Masisea",
          codigo_ubigeo: "250104",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4568",
          id_padre_ubigeo_dst: "4572",
        },
        {
          id_ubigeo: "4567-4568-4574",
          nombre_ubigeo: "Ucayali - Coronel Portillo - Nueva Requena",
          codigo_ubigeo: "250106",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4568",
          id_padre_ubigeo_dst: "4574",
        },
        {
          id_ubigeo: "4567-4568-4573",
          nombre_ubigeo: "Ucayali - Coronel Portillo - Yarinacocha",
          codigo_ubigeo: "250105",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4568",
          id_padre_ubigeo_dst: "4573",
        },
        {
          id_ubigeo: "4567-4580-4583",
          nombre_ubigeo: "Ucayali - Padre Abad - Curimana",
          codigo_ubigeo: "250303",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4580",
          id_padre_ubigeo_dst: "4583",
        },
        {
          id_ubigeo: "4567-4580-4582",
          nombre_ubigeo: "Ucayali - Padre Abad - Irazola",
          codigo_ubigeo: "250302",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4580",
          id_padre_ubigeo_dst: "4582",
        },
        {
          id_ubigeo: "4567-4580-4581",
          nombre_ubigeo: "Ucayali - Padre Abad - Padre Abad",
          codigo_ubigeo: "250301",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4580",
          id_padre_ubigeo_dst: "4581",
        },
        {
          id_ubigeo: "4567-4584-4585",
          nombre_ubigeo: "Ucayali - Purus - Purus",
          codigo_ubigeo: "250401",
          id_padre_ubigeo_dpto: "4567",
          id_padre_ubigeo_prov: "4584",
          id_padre_ubigeo_dst: "4585",
        },
      ];
      var Bi = b(3601),
        Oi = b(8675),
        Fi = b(8372),
        ki = b(9300),
        Ni = b(6406),
        Ji = b(3101),
        k = b(4968),
        oe = b(6451);
      const Di = ["content"],
        ji = ["scroll"],
        Ui = ["padding"],
        B = function (_) {
          return { searchTerm: _ };
        };
      function Yi(_, a) {
        if ((1 & _ && (e.TgZ(0, "div", 6), e.GkF(1, 7), e.qZA()), 2 & _)) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J("ngTemplateOutlet", i.headerTemplate)(
              "ngTemplateOutletContext",
              e.VKq(2, B, i.filterValue)
            );
        }
      }
      function Ri(_, a) {
        if ((1 & _ && (e.TgZ(0, "div", 8), e.GkF(1, 7), e.qZA()), 2 & _)) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J("ngTemplateOutlet", i.footerTemplate)(
              "ngTemplateOutletContext",
              e.VKq(2, B, i.filterValue)
            );
        }
      }
      const ye = ["*"],
        Vi = ["searchInput"];
      function Gi(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "span", 15),
            e.NdJ("click", function () {
              e.CHM(i);
              const d = e.oxw().$implicit,
                r = e.oxw(2);
              return e.KtG(r.unselect(d));
            }),
            e._uU(1, "\xd7"),
            e.qZA(),
            e._UZ(2, "span", 16);
        }
        if (2 & _) {
          const i = e.oxw().$implicit,
            o = e.oxw(2);
          e.xp6(2), e.Q6J("ngItemLabel", i.label)("escape", o.escapeHTML);
        }
      }
      function $i(_, a) {}
      const Wi = function (_, a, i) {
        return { item: _, clear: a, label: i };
      };
      function Ki(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 12),
            e.YNc(1, Gi, 3, 2, "ng-template", null, 13, e.W1O),
            e.YNc(3, $i, 0, 0, "ng-template", 14),
            e.qZA()),
          2 & _)
        ) {
          const i = a.$implicit,
            o = e.MAs(2),
            d = e.oxw(2);
          e.ekj("ng-value-disabled", i.disabled),
            e.xp6(3),
            e.Q6J("ngTemplateOutlet", d.labelTemplate || o)(
              "ngTemplateOutletContext",
              e.kEZ(4, Wi, i.value, d.clearItem, i.label)
            );
        }
      }
      function Xi(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Ki, 4, 8, "div", 11), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          e.xp6(1),
            e.Q6J("ngForOf", i.selectedItems)("ngForTrackBy", i.trackByOption);
        }
      }
      function eo(_, a) {}
      const io = function (_, a) {
        return { items: _, clear: a };
      };
      function oo(_, a) {
        if ((1 & _ && e.YNc(0, eo, 0, 0, "ng-template", 14), 2 & _)) {
          const i = e.oxw();
          e.Q6J("ngTemplateOutlet", i.multiLabelTemplate)(
            "ngTemplateOutletContext",
            e.WLB(2, io, i.selectedValues, i.clearItem)
          );
        }
      }
      function _o(_, a) {
        1 & _ && e._UZ(0, "div", 19);
      }
      function ao(_, a) {}
      function ro(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.YNc(1, _o, 1, 0, "ng-template", null, 17, e.W1O),
            e.YNc(3, ao, 0, 0, "ng-template", 18),
            e.BQk()),
          2 & _)
        ) {
          const i = e.MAs(2),
            o = e.oxw();
          e.xp6(3), e.Q6J("ngTemplateOutlet", o.loadingSpinnerTemplate || i);
        }
      }
      function uo(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "span", 20)(1, "span", 21), e._uU(2, "\xd7"), e.qZA()()),
          2 & _)
        ) {
          const i = e.oxw();
          e.s9C("title", i.clearAllText);
        }
      }
      function to(_, a) {
        if ((1 & _ && e._UZ(0, "span", 27), 2 & _)) {
          const i = e.oxw().$implicit,
            o = e.oxw(2);
          e.Q6J("ngItemLabel", i.label)("escape", o.escapeHTML);
        }
      }
      function go(_, a) {}
      const no = function (_, a, i, o) {
        return { item: _, item$: a, index: i, searchTerm: o };
      };
      function po(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "div", 25),
            e.NdJ("click", function () {
              const r = e.CHM(i).$implicit,
                u = e.oxw(2);
              return e.KtG(u.toggleItem(r));
            })("mouseover", function () {
              const r = e.CHM(i).$implicit,
                u = e.oxw(2);
              return e.KtG(u.onItemHover(r));
            }),
            e.YNc(1, to, 1, 2, "ng-template", null, 26, e.W1O),
            e.YNc(3, go, 0, 0, "ng-template", 14),
            e.qZA();
        }
        if (2 & _) {
          const i = a.$implicit,
            o = e.MAs(2),
            d = e.oxw(2);
          e.ekj("ng-option-disabled", i.disabled)(
            "ng-option-selected",
            i.selected
          )("ng-optgroup", i.children)("ng-option", !i.children)(
            "ng-option-child",
            !!i.parent
          )("ng-option-marked", i === d.itemsList.markedItem),
            e.uIk("role", i.children ? "group" : "option")(
              "aria-selected",
              i.selected
            )("id", null == i ? null : i.htmlId),
            e.xp6(3),
            e.Q6J(
              "ngTemplateOutlet",
              i.children ? d.optgroupTemplate || o : d.optionTemplate || o
            )(
              "ngTemplateOutletContext",
              e.l5B(17, no, i.value, i, i.index, d.searchTerm)
            );
        }
      }
      function bo(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "span")(1, "span", 30),
            e._uU(2),
            e.qZA(),
            e._uU(3),
            e.qZA()),
          2 & _)
        ) {
          const i = e.oxw(3);
          e.xp6(2),
            e.Oqu(i.addTagText),
            e.xp6(1),
            e.hij('"', i.searchTerm, '"');
        }
      }
      function so(_, a) {}
      function co(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "div", 28),
            e.NdJ("mouseover", function () {
              e.CHM(i);
              const d = e.oxw(2);
              return e.KtG(d.itemsList.unmarkItem());
            })("click", function () {
              e.CHM(i);
              const d = e.oxw(2);
              return e.KtG(d.selectTag());
            }),
            e.YNc(1, bo, 4, 2, "ng-template", null, 29, e.W1O),
            e.YNc(3, so, 0, 0, "ng-template", 14),
            e.qZA();
        }
        if (2 & _) {
          const i = e.MAs(2),
            o = e.oxw(2);
          e.ekj("ng-option-marked", !o.itemsList.markedItem),
            e.xp6(3),
            e.Q6J("ngTemplateOutlet", o.tagTemplate || i)(
              "ngTemplateOutletContext",
              e.VKq(4, B, o.searchTerm)
            );
        }
      }
      function lo(_, a) {
        if ((1 & _ && (e.TgZ(0, "div", 32), e._uU(1), e.qZA()), 2 & _)) {
          const i = e.oxw(3);
          e.xp6(1), e.Oqu(i.notFoundText);
        }
      }
      function mo(_, a) {}
      function ho(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.YNc(1, lo, 2, 1, "ng-template", null, 31, e.W1O),
            e.YNc(3, mo, 0, 0, "ng-template", 14),
            e.BQk()),
          2 & _)
        ) {
          const i = e.MAs(2),
            o = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngTemplateOutlet", o.notFoundTemplate || i)(
              "ngTemplateOutletContext",
              e.VKq(2, B, o.searchTerm)
            );
        }
      }
      function vo(_, a) {
        if ((1 & _ && (e.TgZ(0, "div", 32), e._uU(1), e.qZA()), 2 & _)) {
          const i = e.oxw(3);
          e.xp6(1), e.Oqu(i.typeToSearchText);
        }
      }
      function fo(_, a) {}
      function Co(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.YNc(1, vo, 2, 1, "ng-template", null, 33, e.W1O),
            e.YNc(3, fo, 0, 0, "ng-template", 18),
            e.BQk()),
          2 & _)
        ) {
          const i = e.MAs(2),
            o = e.oxw(2);
          e.xp6(3), e.Q6J("ngTemplateOutlet", o.typeToSearchTemplate || i);
        }
      }
      function yo(_, a) {
        if ((1 & _ && (e.TgZ(0, "div", 32), e._uU(1), e.qZA()), 2 & _)) {
          const i = e.oxw(3);
          e.xp6(1), e.Oqu(i.loadingText);
        }
      }
      function Ao(_, a) {}
      function To(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.YNc(1, yo, 2, 1, "ng-template", null, 34, e.W1O),
            e.YNc(3, Ao, 0, 0, "ng-template", 14),
            e.BQk()),
          2 & _)
        ) {
          const i = e.MAs(2),
            o = e.oxw(2);
          e.xp6(3),
            e.Q6J("ngTemplateOutlet", o.loadingTextTemplate || i)(
              "ngTemplateOutletContext",
              e.VKq(2, B, o.searchTerm)
            );
        }
      }
      function Po(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "ng-dropdown-panel", 22),
            e.NdJ("update", function (d) {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG((r.viewPortItems = d));
            })("scroll", function (d) {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.scroll.emit(d));
            })("scrollToEnd", function (d) {
              e.CHM(i);
              const r = e.oxw();
              return e.KtG(r.scrollToEnd.emit(d));
            })("outsideClick", function () {
              e.CHM(i);
              const d = e.oxw();
              return e.KtG(d.close());
            }),
            e.ynx(1),
            e.YNc(2, po, 4, 22, "div", 23),
            e.YNc(3, co, 4, 6, "div", 24),
            e.BQk(),
            e.YNc(4, ho, 4, 4, "ng-container", 3),
            e.YNc(5, Co, 4, 1, "ng-container", 3),
            e.YNc(6, To, 4, 4, "ng-container", 3),
            e.qZA();
        }
        if (2 & _) {
          const i = e.oxw();
          e.ekj("ng-select-multiple", i.multiple),
            e.Q6J("virtualScroll", i.virtualScroll)(
              "bufferAmount",
              i.bufferAmount
            )("appendTo", i.appendTo)("position", i.dropdownPosition)(
              "headerTemplate",
              i.headerTemplate
            )("footerTemplate", i.footerTemplate)("filterValue", i.searchTerm)(
              "items",
              i.itemsList.filteredItems
            )("markedItem", i.itemsList.markedItem)(
              "ngClass",
              i.appendTo ? i.classes : null
            )("id", i.dropdownId),
            e.xp6(2),
            e.Q6J("ngForOf", i.viewPortItems)("ngForTrackBy", i.trackByOption),
            e.xp6(1),
            e.Q6J("ngIf", i.showAddTag),
            e.xp6(1),
            e.Q6J("ngIf", i.showNoItemsFound()),
            e.xp6(1),
            e.Q6J("ngIf", i.showTypeToSearch()),
            e.xp6(1),
            e.Q6J("ngIf", i.loading && 0 === i.itemsList.filteredItems.length);
        }
      }
      const Ae = /[&<>"']/g,
        Lo = RegExp(Ae.source),
        Mo = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        };
      function h(_) {
        return null != _;
      }
      function O(_) {
        return "object" == typeof _ && h(_);
      }
      function N(_) {
        return _ instanceof Function;
      }
      let Eo = (() => {
          class _ {
            constructor(i) {
              (this.element = i), (this.escape = !0);
            }
            ngOnChanges(i) {
              this.element.nativeElement.innerHTML = this.escape
                ? (function So(_) {
                    return _ && Lo.test(_) ? _.replace(Ae, (a) => Mo[a]) : _;
                  })(this.ngItemLabel)
                : this.ngItemLabel;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.SBq));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ngItemLabel", ""]],
              inputs: { ngItemLabel: "ngItemLabel", escape: "escape" },
              features: [e.TTD],
            })),
            _
          );
        })(),
        xo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-option-tmp", ""]],
            })),
            _
          );
        })(),
        qo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-optgroup-tmp", ""]],
            })),
            _
          );
        })(),
        zo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-label-tmp", ""]],
            })),
            _
          );
        })(),
        wo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-multi-label-tmp", ""]],
            })),
            _
          );
        })(),
        Qo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-header-tmp", ""]],
            })),
            _
          );
        })(),
        Ho = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-footer-tmp", ""]],
            })),
            _
          );
        })(),
        Zo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-notfound-tmp", ""]],
            })),
            _
          );
        })(),
        Bo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-typetosearch-tmp", ""]],
            })),
            _
          );
        })(),
        Oo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-loadingtext-tmp", ""]],
            })),
            _
          );
        })(),
        Fo = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({ type: _, selectors: [["", "ng-tag-tmp", ""]] })),
            _
          );
        })(),
        ko = (() => {
          class _ {
            constructor(i) {
              this.template = i;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.Rgc));
            }),
            (_.ɵdir = e.lG2({
              type: _,
              selectors: [["", "ng-loadingspinner-tmp", ""]],
            })),
            _
          );
        })();
      function Te() {
        return "axxxxxxxxxxx".replace(/[x]/g, () =>
          ((16 * Math.random()) | 0).toString(16)
        );
      }
      const No = {
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
      function J(_) {
        return _.replace(/[^\u0000-\u007E]/g, (i) => No[i] || i);
      }
      class Jo {
        constructor(a, i) {
          (this._ngSelect = a),
            (this._selectionModel = i),
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
          let a = this.selectedItems.length - 1;
          for (; a >= 0; a--) {
            const i = this.selectedItems[a];
            if (!i.disabled) return i;
          }
          return null;
        }
        setItems(a) {
          (this._items = a.map((i, o) => this.mapItem(i, o))),
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
        select(a) {
          if (a.selected || this.maxItemsSelected) return;
          const i = this._ngSelect.multiple;
          i || this.clearSelected(),
            this._selectionModel.select(
              a,
              i,
              this._ngSelect.selectableGroupAsModel
            ),
            this._ngSelect.hideSelected && this._hideSelected(a);
        }
        unselect(a) {
          !a.selected ||
            (this._selectionModel.unselect(a, this._ngSelect.multiple),
            this._ngSelect.hideSelected &&
              h(a.index) &&
              this._ngSelect.multiple &&
              this._showSelected(a));
        }
        findItem(a) {
          let i;
          return (
            (i = this._ngSelect.compareWith
              ? (o) => this._ngSelect.compareWith(o.value, a)
              : this._ngSelect.bindValue
              ? (o) =>
                  !o.children &&
                  this.resolveNested(o.value, this._ngSelect.bindValue) === a
              : (o) =>
                  o.value === a ||
                  (!o.children &&
                    o.label &&
                    o.label ===
                      this.resolveNested(a, this._ngSelect.bindLabel))),
            this._items.find((o) => i(o))
          );
        }
        addItem(a) {
          const i = this.mapItem(a, this._items.length);
          return this._items.push(i), this._filteredItems.push(i), i;
        }
        clearSelected(a = !1) {
          this._selectionModel.clear(a),
            this._items.forEach((i) => {
              (i.selected = a && i.selected && i.disabled), (i.marked = !1);
            }),
            this._ngSelect.hideSelected && this.resetFilteredItems();
        }
        findByLabel(a) {
          return (
            (a = J(a).toLocaleLowerCase()),
            this.filteredItems.find(
              (i) => J(i.label).toLocaleLowerCase().substr(0, a.length) === a
            )
          );
        }
        filter(a) {
          if (!a) return void this.resetFilteredItems();
          (this._filteredItems = []),
            (a = this._ngSelect.searchFn ? a : J(a).toLocaleLowerCase());
          const i = this._ngSelect.searchFn || this._defaultSearchFn,
            o = this._ngSelect.hideSelected;
          for (const d of Array.from(this._groups.keys())) {
            const r = [];
            for (const u of this._groups.get(d))
              (o && ((u.parent && u.parent.selected) || u.selected)) ||
                (i(a, this._ngSelect.searchFn ? u.value : u) && r.push(u));
            if (r.length > 0) {
              const [u] = r.slice(-1);
              if (u.parent) {
                const g = this._items.find((n) => n === u.parent);
                this._filteredItems.push(g);
              }
              this._filteredItems.push(...r);
            }
          }
        }
        resetFilteredItems() {
          this._filteredItems.length !== this._items.length &&
            (this._filteredItems =
              this._ngSelect.hideSelected && this.selectedItems.length > 0
                ? this._items.filter((a) => !a.selected)
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
        markItem(a) {
          this._markedIndex = this._filteredItems.indexOf(a);
        }
        markSelectedOrDefault(a) {
          if (0 === this._filteredItems.length) return;
          const i = this._getLastMarkedIndex();
          this._markedIndex =
            i > -1
              ? i
              : a
              ? this.filteredItems.findIndex((o) => !o.disabled)
              : -1;
        }
        resolveNested(a, i) {
          if (!O(a)) return a;
          if (-1 === i.indexOf(".")) return a[i];
          {
            const o = i.split(".");
            let d = a;
            for (let r = 0, u = o.length; r < u; ++r) {
              if (null == d) return null;
              d = d[o[r]];
            }
            return d;
          }
        }
        mapItem(a, i) {
          const o = h(a.$ngOptionLabel)
              ? a.$ngOptionLabel
              : this.resolveNested(a, this._ngSelect.bindLabel),
            d = h(a.$ngOptionValue) ? a.$ngOptionValue : a;
          return {
            index: i,
            label: h(o) ? o.toString() : "",
            value: d,
            disabled: a.disabled,
            htmlId: `${this._ngSelect.dropdownId}-${i}`,
          };
        }
        mapSelectedItems() {
          const a = this._ngSelect.multiple;
          for (const i of this.selectedItems) {
            const o = this._ngSelect.bindValue
                ? this.resolveNested(i.value, this._ngSelect.bindValue)
                : i.value,
              d = h(o) ? this.findItem(o) : null;
            this._selectionModel.unselect(i, a),
              this._selectionModel.select(
                d || i,
                a,
                this._ngSelect.selectableGroupAsModel
              );
          }
          this._ngSelect.hideSelected &&
            (this._filteredItems = this.filteredItems.filter(
              (i) => -1 === this.selectedItems.indexOf(i)
            ));
        }
        _showSelected(a) {
          if ((this._filteredItems.push(a), a.parent)) {
            const i = a.parent;
            this._filteredItems.find((d) => d === i) ||
              this._filteredItems.push(i);
          } else if (a.children)
            for (const i of a.children)
              (i.selected = !1), this._filteredItems.push(i);
          this._filteredItems = [
            ...this._filteredItems.sort((i, o) => i.index - o.index),
          ];
        }
        _hideSelected(a) {
          (this._filteredItems = this._filteredItems.filter((i) => i !== a)),
            a.parent
              ? a.parent.children.every((o) => o.selected) &&
                (this._filteredItems = this._filteredItems.filter(
                  (o) => o !== a.parent
                ))
              : a.children &&
                (this._filteredItems = this.filteredItems.filter(
                  (i) => i.parent !== a
                ));
        }
        _defaultSearchFn(a, i) {
          return J(i.label).toLocaleLowerCase().indexOf(a) > -1;
        }
        _getNextItemIndex(a) {
          return a > 0
            ? this._markedIndex >= this._filteredItems.length - 1
              ? 0
              : this._markedIndex + 1
            : this._markedIndex <= 0
            ? this._filteredItems.length - 1
            : this._markedIndex - 1;
        }
        _stepToItem(a) {
          0 === this._filteredItems.length ||
            this._filteredItems.every((i) => i.disabled) ||
            ((this._markedIndex = this._getNextItemIndex(a)),
            this.markedItem.disabled && this._stepToItem(a));
        }
        _getLastMarkedIndex() {
          if (
            this._ngSelect.hideSelected ||
            (this._markedIndex > -1 && void 0 === this.markedItem)
          )
            return -1;
          const a = this._filteredItems.indexOf(this.lastSelectedItem);
          return this.lastSelectedItem && a < 0
            ? -1
            : Math.max(this.markedIndex, a);
        }
        _groupBy(a, i) {
          const o = new Map();
          if (0 === a.length) return o;
          if (Array.isArray(a[0].value[i])) {
            for (const u of a) {
              const g = (u.value[i] || []).map((n, p) => this.mapItem(n, p));
              o.set(u, g);
            }
            return o;
          }
          const d = N(this._ngSelect.groupBy),
            r = (u) => {
              const g = d ? i(u.value) : u.value[i];
              return h(g) ? g : void 0;
            };
          for (const u of a) {
            const g = r(u),
              n = o.get(g);
            n ? n.push(u) : o.set(g, [u]);
          }
          return o;
        }
        _flatten(a) {
          const i = N(this._ngSelect.groupBy),
            o = [];
          for (const d of Array.from(a.keys())) {
            let r = o.length;
            if (void 0 === d) {
              const s = a.get(void 0) || [];
              o.push(...s.map((c) => ((c.index = r++), c)));
              continue;
            }
            const u = O(d),
              g = {
                label: u ? "" : String(d),
                children: void 0,
                parent: null,
                index: r++,
                disabled: !this._ngSelect.selectableGroup,
                htmlId: Te(),
              },
              n = i ? this._ngSelect.bindLabel : this._ngSelect.groupBy,
              p =
                this._ngSelect.groupValue || (() => (u ? d.value : { [n]: d })),
              m = a
                .get(d)
                .map(
                  (s) => (
                    (s.parent = g), (s.children = void 0), (s.index = r++), s
                  )
                );
            (g.children = m),
              (g.value = p(
                d,
                m.map((s) => s.value)
              )),
              o.push(g),
              o.push(...m);
          }
          return o;
        }
      }
      var L = (() => {
        return (
          ((_ = L || (L = {}))[(_.Tab = 9)] = "Tab"),
          (_[(_.Enter = 13)] = "Enter"),
          (_[(_.Esc = 27)] = "Esc"),
          (_[(_.Space = 32)] = "Space"),
          (_[(_.ArrowUp = 38)] = "ArrowUp"),
          (_[(_.ArrowDown = 40)] = "ArrowDown"),
          (_[(_.Backspace = 8)] = "Backspace"),
          L
        );
        var _;
      })();
      let Pe = (() => {
        class _ {
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
          calculateItems(i, o, d) {
            const r = this._dimensions,
              u = r.itemHeight * o,
              n = (Math.max(0, i) / u) * o;
            let p = Math.min(o, Math.ceil(n) + (r.itemsPerViewport + 1));
            const s = Math.max(0, p - r.itemsPerViewport);
            let c = Math.min(s, Math.floor(n)),
              f = r.itemHeight * Math.ceil(c) - r.itemHeight * Math.min(c, d);
            return (
              (f = isNaN(f) ? 0 : f),
              (c = isNaN(c) ? -1 : c),
              (p = isNaN(p) ? -1 : p),
              (c -= d),
              (c = Math.max(0, c)),
              (p += d),
              (p = Math.min(o, p)),
              { topPadding: f, scrollHeight: u, start: c, end: p }
            );
          }
          setDimensions(i, o) {
            const d = Math.max(1, Math.floor(o / i));
            this._dimensions = {
              itemHeight: i,
              panelHeight: o,
              itemsPerViewport: d,
            };
          }
          getScrollTo(i, o, d) {
            const { panelHeight: r } = this.dimensions,
              u = i + o,
              n = d + r;
            return r >= u && d === i
              ? null
              : u > n
              ? d + u - n
              : i <= d
              ? i
              : null;
          }
        }
        return (
          (_.ɵfac = function (i) {
            return new (i || _)();
          }),
          (_.ɵprov = e.Yz7({ token: _, factory: _.ɵfac })),
          _
        );
      })();
      const Le = ["top", "right", "bottom", "left"],
        Do = typeof requestAnimationFrame < "u" ? Ni.Z : Ji.E;
      let Me = (() => {
          class _ {
            constructor(i, o, d, r, u) {
              (this._renderer = i),
                (this._zone = o),
                (this._panelService = d),
                (this._document = u),
                (this.items = []),
                (this.position = "auto"),
                (this.virtualScroll = !1),
                (this.filterValue = null),
                (this.update = new e.vpe()),
                (this.scroll = new e.vpe()),
                (this.scrollToEnd = new e.vpe()),
                (this.outsideClick = new e.vpe()),
                (this._destroy$ = new A.x()),
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
            set itemsLength(i) {
              i !== this._itemsLength &&
                ((this._itemsLength = i), this._onItemsLengthChanged());
            }
            get _startOffset() {
              if (this.markedItem) {
                const { itemHeight: i, panelHeight: o } =
                    this._panelService.dimensions,
                  d = this.markedItem.index * i;
                return o > d ? 0 : d;
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
            ngOnChanges(i) {
              if (i.items) {
                const o = i.items;
                this._onItemsChange(o.currentValue, o.firstChange);
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
            scrollTo(i, o = !1) {
              if (!i) return;
              const d = this.items.indexOf(i);
              if (d < 0 || d >= this.itemsLength) return;
              let r;
              if (this.virtualScroll) {
                const u = this._panelService.dimensions.itemHeight;
                r = this._panelService.getScrollTo(
                  d * u,
                  u,
                  this._lastScrollPosition
                );
              } else {
                const u = this._dropdown.querySelector(`#${i.htmlId}`);
                r = this._panelService.getScrollTo(
                  u.offsetTop,
                  u.clientHeight,
                  o ? u.offsetTop : this._lastScrollPosition
                );
              }
              h(r) && (this._scrollablePanel.scrollTop = r);
            }
            scrollToTag() {
              const i = this._scrollablePanel;
              i.scrollTop = i.scrollHeight - i.clientHeight;
            }
            adjustPosition() {
              this._updateYPosition();
            }
            _handleDropdownPosition() {
              (this._currentPosition = this._calculateCurrentPosition(
                this._dropdown
              )),
                Le.includes(this._currentPosition)
                  ? this._updateDropdownClass(this._currentPosition)
                  : this._updateDropdownClass("bottom"),
                this.appendTo && this._updateYPosition(),
                (this._dropdown.style.opacity = "1");
            }
            _updateDropdownClass(i) {
              Le.forEach((d) => {
                const r = `ng-select-${d}`;
                this._renderer.removeClass(this._dropdown, r),
                  this._renderer.removeClass(this._select, r);
              });
              const o = `ng-select-${i}`;
              this._renderer.addClass(this._dropdown, o),
                this._renderer.addClass(this._select, o);
            }
            _handleScroll() {
              this._zone.runOutsideAngular(() => {
                (0, k.R)(this.scrollElementRef.nativeElement, "scroll")
                  .pipe((0, l.R)(this._destroy$), (0, Bi.e)(0, Do))
                  .subscribe((i) => {
                    const o = i.path || (i.composedPath && i.composedPath());
                    this._onContentScrolled(
                      o && 0 !== o.length ? o[0].scrollTop : i.target.scrollTop
                    );
                  });
              });
            }
            _handleOutsideClick() {
              !this._document ||
                this._zone.runOutsideAngular(() => {
                  (0, oe.T)(
                    (0, k.R)(this._document, "touchstart", { capture: !0 }),
                    (0, k.R)(this._document, "mousedown", { capture: !0 })
                  )
                    .pipe((0, l.R)(this._destroy$))
                    .subscribe((i) => this._checkToClose(i));
                });
            }
            _checkToClose(i) {
              if (
                this._select.contains(i.target) ||
                this._dropdown.contains(i.target)
              )
                return;
              const o = i.path || (i.composedPath && i.composedPath());
              (i.target &&
                i.target.shadowRoot &&
                o &&
                o[0] &&
                this._select.contains(o[0])) ||
                this._zone.run(() => this.outsideClick.emit());
            }
            _onItemsChange(i, o) {
              (this.items = i || []),
                (this._scrollToEndFired = !1),
                (this.itemsLength = i.length),
                this.virtualScroll
                  ? this._updateItemsRange(o)
                  : (this._setVirtualHeight(), this._updateItems(o));
            }
            _updateItems(i) {
              this.update.emit(this.items),
                !1 !== i &&
                  this._zone.runOutsideAngular(() => {
                    Promise.resolve().then(() => {
                      this._panelService.setDimensions(
                        0,
                        this._scrollablePanel.clientHeight
                      ),
                        this._handleDropdownPosition(),
                        this.scrollTo(this.markedItem, i);
                    });
                  });
            }
            _updateItemsRange(i) {
              this._zone.runOutsideAngular(() => {
                this._measureDimensions().then(() => {
                  i
                    ? (this._renderItemsRange(this._startOffset),
                      this._handleDropdownPosition())
                    : this._renderItemsRange();
                });
              });
            }
            _onContentScrolled(i) {
              this.virtualScroll && this._renderItemsRange(i),
                (this._lastScrollPosition = i),
                this._fireScrollToEnd(i);
            }
            _updateVirtualHeight(i) {
              this._updateScrollHeight &&
                ((this._virtualPadding.style.height = `${i}px`),
                (this._updateScrollHeight = !1));
            }
            _setVirtualHeight() {
              !this._virtualPadding ||
                (this._virtualPadding.style.height = "0px");
            }
            _onItemsLengthChanged() {
              this._updateScrollHeight = !0;
            }
            _renderItemsRange(i = null) {
              if (i && this._lastScrollPosition === i) return;
              const o = this._panelService.calculateItems(
                (i = i || this._scrollablePanel.scrollTop),
                this.itemsLength,
                this.bufferAmount
              );
              this._updateVirtualHeight(o.scrollHeight),
                (this._contentPanel.style.transform = `translateY(${o.topPadding}px)`),
                this._zone.run(() => {
                  this.update.emit(this.items.slice(o.start, o.end)),
                    this.scroll.emit({ start: o.start, end: o.end });
                }),
                h(i) &&
                  0 === this._lastScrollPosition &&
                  ((this._scrollablePanel.scrollTop = i),
                  (this._lastScrollPosition = i));
            }
            _measureDimensions() {
              if (
                this._panelService.dimensions.itemHeight > 0 ||
                0 === this.itemsLength
              )
                return Promise.resolve(this._panelService.dimensions);
              const [i] = this.items;
              return (
                this.update.emit([i]),
                Promise.resolve().then(() => {
                  const d = this._dropdown.querySelector(
                    `#${i.htmlId}`
                  ).clientHeight;
                  return (
                    (this._virtualPadding.style.height =
                      d * this.itemsLength + "px"),
                    this._panelService.setDimensions(
                      d,
                      this._scrollablePanel.clientHeight
                    ),
                    this._panelService.dimensions
                  );
                })
              );
            }
            _fireScrollToEnd(i) {
              this._scrollToEndFired ||
                0 === i ||
                (i + this._dropdown.clientHeight >=
                  (this.virtualScroll
                    ? this._virtualPadding
                    : this._contentPanel
                  ).clientHeight -
                    1 &&
                  (this._zone.run(() => this.scrollToEnd.emit()),
                  (this._scrollToEndFired = !0)));
            }
            _calculateCurrentPosition(i) {
              if ("auto" !== this.position) return this.position;
              const o = this._select.getBoundingClientRect(),
                d =
                  document.documentElement.scrollTop || document.body.scrollTop;
              return o.top +
                window.pageYOffset +
                o.height +
                i.getBoundingClientRect().height >
                d + document.documentElement.clientHeight
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
              const i = this._select.getBoundingClientRect(),
                o = this._parent.getBoundingClientRect();
              (this._dropdown.style.left = i.left - o.left + "px"),
                (this._dropdown.style.width = i.width + "px"),
                (this._dropdown.style.minWidth = i.width + "px");
            }
            _updateYPosition() {
              const i = this._select.getBoundingClientRect(),
                o = this._parent.getBoundingClientRect(),
                d = i.height;
              "top" === this._currentPosition
                ? ((this._dropdown.style.bottom =
                    o.bottom - i.bottom + d + "px"),
                  (this._dropdown.style.top = "auto"))
                : "bottom" === this._currentPosition &&
                  ((this._dropdown.style.top = i.top - o.top + d + "px"),
                  (this._dropdown.style.bottom = "auto"));
            }
            _setupMousedownListener() {
              this._zone.runOutsideAngular(() => {
                (0, k.R)(this._dropdown, "mousedown")
                  .pipe((0, l.R)(this._destroy$))
                  .subscribe((i) => {
                    "INPUT" !== i.target.tagName && i.preventDefault();
                  });
              });
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(
                e.Y36(e.Qsj),
                e.Y36(e.R0b),
                e.Y36(Pe),
                e.Y36(e.SBq),
                e.Y36(C.K0, 8)
              );
            }),
            (_.ɵcmp = e.Xpm({
              type: _,
              selectors: [["ng-dropdown-panel"]],
              viewQuery: function (i, o) {
                if (
                  (1 & i &&
                    (e.Gf(Di, 7, e.SBq),
                    e.Gf(ji, 7, e.SBq),
                    e.Gf(Ui, 7, e.SBq)),
                  2 & i)
                ) {
                  let d;
                  e.iGM((d = e.CRH())) && (o.contentElementRef = d.first),
                    e.iGM((d = e.CRH())) && (o.scrollElementRef = d.first),
                    e.iGM((d = e.CRH())) && (o.paddingElementRef = d.first);
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
              template: function (i, o) {
                1 & i &&
                  (e.F$t(),
                  e.YNc(0, Yi, 2, 4, "div", 0),
                  e.TgZ(1, "div", 1, 2),
                  e._UZ(3, "div", null, 3),
                  e.TgZ(5, "div", null, 4),
                  e.Hsn(7),
                  e.qZA()(),
                  e.YNc(8, Ri, 2, 4, "div", 5)),
                  2 & i &&
                    (e.Q6J("ngIf", o.headerTemplate),
                    e.xp6(3),
                    e.ekj("total-padding", o.virtualScroll),
                    e.xp6(2),
                    e.ekj(
                      "scrollable-content",
                      o.virtualScroll && o.items.length
                    ),
                    e.xp6(3),
                    e.Q6J("ngIf", o.footerTemplate));
              },
              dependencies: [C.O5, C.tP],
              encapsulation: 2,
              changeDetection: 0,
            })),
            _
          );
        })(),
        Se = (() => {
          class _ {
            constructor(i) {
              (this.elementRef = i),
                (this.stateChange$ = new A.x()),
                (this._disabled = !1);
            }
            get disabled() {
              return this._disabled;
            }
            set disabled(i) {
              this._disabled = this._isDisabled(i);
            }
            get label() {
              return (this.elementRef.nativeElement.textContent || "").trim();
            }
            ngOnChanges(i) {
              i.disabled &&
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
            _isDisabled(i) {
              return null != i && "false" != `${i}`;
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)(e.Y36(e.SBq));
            }),
            (_.ɵcmp = e.Xpm({
              type: _,
              selectors: [["ng-option"]],
              inputs: { value: "value", disabled: "disabled" },
              features: [e.TTD],
              ngContentSelectors: ye,
              decls: 1,
              vars: 0,
              template: function (i, o) {
                1 & i && (e.F$t(), e.Hsn(0));
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            _
          );
        })(),
        jo = (() => {
          class _ {
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
            (_.ɵfac = function (i) {
              return new (i || _)();
            }),
            (_.ɵprov = e.Yz7({
              token: _,
              factory: _.ɵfac,
              providedIn: "root",
            })),
            _
          );
        })(),
        Uo = (() => {
          class _ {
            warn(i) {
              console.warn(i);
            }
          }
          return (
            (_.ɵfac = function (i) {
              return new (i || _)();
            }),
            (_.ɵprov = e.Yz7({
              token: _,
              factory: _.ɵfac,
              providedIn: "root",
            })),
            _
          );
        })();
      const Ie = new e.OlP("ng-select-selection-model");
      let Yo = (() => {
        class _ {
          constructor(i, o, d, r, u, g, n) {
            (this.classes = i),
              (this.autoFocus = o),
              (this.config = d),
              (this._cd = g),
              (this._console = n),
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
              (this.dropdownId = Te()),
              (this.escapeHTML = !0),
              (this._items = []),
              (this._defaultLabel = "label"),
              (this._pressedKeys = []),
              (this._isComposing = !1),
              (this._destroy$ = new A.x()),
              (this._keyPress$ = new A.x()),
              (this._onChange = (p) => {}),
              (this._onTouched = () => {}),
              (this.clearItem = (p) => {
                const m = this.selectedItems.find((s) => s.value === p);
                this.unselect(m);
              }),
              (this.trackByOption = (p, m) =>
                this.trackByFn ? this.trackByFn(m.value) : m),
              this._mergeGlobalConfig(d),
              (this.itemsList = new Jo(this, r())),
              (this.element = u.nativeElement);
          }
          get items() {
            return this._items;
          }
          set items(i) {
            null === i && (i = []),
              (this._itemsAreUsed = !0),
              (this._items = i);
          }
          get compareWith() {
            return this._compareWith;
          }
          set compareWith(i) {
            if (null != i && !N(i))
              throw Error("`compareWith` must be a function.");
            this._compareWith = i;
          }
          get clearSearchOnAdd() {
            return h(this._clearSearchOnAdd)
              ? this._clearSearchOnAdd
              : h(this.config.clearSearchOnAdd)
              ? this.config.clearSearchOnAdd
              : this.closeOnSelect;
          }
          set clearSearchOnAdd(i) {
            this._clearSearchOnAdd = i;
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
            return this.selectedItems.map((i) => i.value);
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
          ngOnChanges(i) {
            i.multiple && this.itemsList.clearSelected(),
              i.items && this._setItems(i.items.currentValue || []),
              i.isOpen && (this._manualOpen = h(i.isOpen.currentValue));
          }
          ngAfterViewInit() {
            this._itemsAreUsed ||
              ((this.escapeHTML = !1), this._setItemsFromNgOptions()),
              h(this.autoFocus) && this.focus();
          }
          ngOnDestroy() {
            this._destroy$.next(), this._destroy$.complete();
          }
          handleKeyDown(i) {
            if (L[i.which]) {
              if (!1 === this.keyDownFn(i)) return;
              this.handleKeyCode(i);
            } else
              i.key &&
                1 === i.key.length &&
                this._keyPress$.next(i.key.toLocaleLowerCase());
          }
          handleKeyCode(i) {
            switch (i.which) {
              case L.ArrowDown:
                this._handleArrowDown(i);
                break;
              case L.ArrowUp:
                this._handleArrowUp(i);
                break;
              case L.Space:
                this._handleSpace(i);
                break;
              case L.Enter:
                this._handleEnter(i);
                break;
              case L.Tab:
                this._handleTab(i);
                break;
              case L.Esc:
                this.close(), i.preventDefault();
                break;
              case L.Backspace:
                this._handleBackspace();
            }
          }
          handleMousedown(i) {
            const o = i.target;
            "INPUT" !== o.tagName && i.preventDefault(),
              o.classList.contains("ng-clear-wrapper")
                ? this.handleClearClick()
                : o.classList.contains("ng-arrow-wrapper")
                ? this.handleArrowClick()
                : o.classList.contains("ng-value-icon") ||
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
          writeValue(i) {
            this.itemsList.clearSelected(),
              this._handleWriteValue(i),
              this._cd.markForCheck();
          }
          registerOnChange(i) {
            this._onChange = i;
          }
          registerOnTouched(i) {
            this._onTouched = i;
          }
          setDisabledState(i) {
            (this._disabled = i), this._cd.markForCheck();
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
          toggleItem(i) {
            !i ||
              i.disabled ||
              this.disabled ||
              (this.multiple && i.selected ? this.unselect(i) : this.select(i),
              this._editableSearchTerm && this._setSearchTermFromItems(),
              this._onSelectionChanged());
          }
          select(i) {
            i.selected ||
              (this.itemsList.select(i),
              this.clearSearchOnAdd &&
                !this._editableSearchTerm &&
                this._clearSearch(),
              this._updateNgModel(),
              this.multiple && this.addEvent.emit(i.value)),
              (this.closeOnSelect || this.itemsList.noItemsToSelect) &&
                this.close();
          }
          focus() {
            this.searchInput.nativeElement.focus();
          }
          blur() {
            this.searchInput.nativeElement.blur();
          }
          unselect(i) {
            !i ||
              (this.itemsList.unselect(i),
              this.focus(),
              this._updateNgModel(),
              this.removeEvent.emit(i));
          }
          selectTag() {
            let i;
            i = N(this.addTag)
              ? this.addTag(this.searchTerm)
              : this._primitive
              ? this.searchTerm
              : { [this.bindLabel]: this.searchTerm };
            const o = (d) =>
              this._isTypeahead || !this.isOpen
                ? this.itemsList.mapItem(d, null)
                : this.itemsList.addItem(d);
            !(function Io(_) {
              return _ instanceof Promise;
            })(i)
              ? i && this.select(o(i))
              : i.then((d) => this.select(o(d))).catch(() => {});
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
            const i = this.searchTerm.toLowerCase().trim();
            return (
              this.addTag &&
              !this.itemsList.filteredItems.some(
                (o) => o.label.toLowerCase() === i
              ) &&
              ((!this.hideSelected && this.isOpen) ||
                !this.selectedItems.some((o) => o.label.toLowerCase() === i)) &&
              !this.loading
            );
          }
          showNoItemsFound() {
            const i = 0 === this.itemsList.filteredItems.length;
            return (
              ((i && !this._isTypeahead && !this.loading) ||
                (i && this._isTypeahead && this._validTerm && !this.loading)) &&
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
          onCompositionEnd(i) {
            (this._isComposing = !1),
              !this.searchWhileComposing && this.filter(i);
          }
          filter(i) {
            (this._isComposing && !this.searchWhileComposing) ||
              ((this.searchTerm = i),
              this._isTypeahead &&
                (this._validTerm || 0 === this.minTermLength) &&
                this.typeahead.next(i),
              this._isTypeahead ||
                (this.itemsList.filter(this.searchTerm),
                this.isOpen &&
                  this.itemsList.markSelectedOrDefault(this.markFirst)),
              this.searchEvent.emit({
                term: i,
                items: this.itemsList.filteredItems.map((o) => o.value),
              }),
              this.open());
          }
          onInputFocus(i) {
            this.focused ||
              (this._editableSearchTerm && this._setSearchTermFromItems(),
              this.element.classList.add("ng-select-focused"),
              this.focusEvent.emit(i),
              (this.focused = !0));
          }
          onInputBlur(i) {
            this.element.classList.remove("ng-select-focused"),
              this.blurEvent.emit(i),
              !this.isOpen && !this.disabled && this._onTouched(),
              this._editableSearchTerm && this._setSearchTermFromItems(),
              (this.focused = !1);
          }
          onItemHover(i) {
            i.disabled || this.itemsList.markItem(i);
          }
          detectChanges() {
            this._cd.destroyed || this._cd.detectChanges();
          }
          _setSearchTermFromItems() {
            const i = this.selectedItems && this.selectedItems[0];
            this.searchTerm = (i && i.label) || null;
          }
          _setItems(i) {
            const o = i[0];
            (this.bindLabel = this.bindLabel || this._defaultLabel),
              (this._primitive = h(o)
                ? !O(o)
                : this._primitive || this.bindLabel === this._defaultLabel),
              this.itemsList.setItems(i),
              i.length > 0 &&
                this.hasValue &&
                this.itemsList.mapSelectedItems(),
              this.isOpen &&
                h(this.searchTerm) &&
                !this._isTypeahead &&
                this.itemsList.filter(this.searchTerm),
              (this._isTypeahead || this.isOpen) &&
                this.itemsList.markSelectedOrDefault(this.markFirst);
          }
          _setItemsFromNgOptions() {
            const i = (d) => {
                (this.items = d.map((r) => ({
                  $ngOptionValue: r.value,
                  $ngOptionLabel: r.elementRef.nativeElement.innerHTML,
                  disabled: r.disabled,
                }))),
                  this.itemsList.setItems(this.items),
                  this.hasValue && this.itemsList.mapSelectedItems(),
                  this.detectChanges();
              },
              o = () => {
                const d = (0, oe.T)(this.ngOptions.changes, this._destroy$);
                (0, oe.T)(...this.ngOptions.map((r) => r.stateChange$))
                  .pipe((0, l.R)(d))
                  .subscribe((r) => {
                    const u = this.itemsList.findItem(r.value);
                    (u.disabled = r.disabled),
                      (u.label = r.label || u.label),
                      this._cd.detectChanges();
                  });
              };
            this.ngOptions.changes
              .pipe((0, Oi.O)(this.ngOptions), (0, l.R)(this._destroy$))
              .subscribe((d) => {
                (this.bindLabel = this._defaultLabel), i(d), o();
              });
          }
          _isValidWriteValue(i) {
            if (
              !h(i) ||
              (this.multiple && "" === i) ||
              (Array.isArray(i) && 0 === i.length)
            )
              return !1;
            const o = (d) =>
              !(
                !h(this.compareWith) &&
                O(d) &&
                this.bindValue &&
                (this._console.warn(
                  `Setting object(${JSON.stringify(
                    d
                  )}) as your model with bindValue is not allowed unless [compareWith] is used.`
                ),
                1)
              );
            return this.multiple
              ? Array.isArray(i)
                ? i.every((d) => o(d))
                : (this._console.warn(
                    "Multiple select ngModel should be array."
                  ),
                  !1)
              : o(i);
          }
          _handleWriteValue(i) {
            if (!this._isValidWriteValue(i)) return;
            const o = (d) => {
              let r = this.itemsList.findItem(d);
              if (r) this.itemsList.select(r);
              else {
                const u = O(d),
                  g = !u && !this.bindValue;
                u || g
                  ? this.itemsList.select(this.itemsList.mapItem(d, null))
                  : this.bindValue &&
                    ((r = { [this.bindLabel]: null, [this.bindValue]: d }),
                    this.itemsList.select(this.itemsList.mapItem(r, null)));
              }
            };
            this.multiple ? i.forEach((d) => o(d)) : o(i);
          }
          _handleKeyPresses() {
            this.searchable ||
              this._keyPress$
                .pipe(
                  (0, l.R)(this._destroy$),
                  (0, ie.b)((i) => this._pressedKeys.push(i)),
                  (0, Fi.b)(200),
                  (0, ki.h)(() => this._pressedKeys.length > 0),
                  (0, M.U)(() => this._pressedKeys.join(""))
                )
                .subscribe((i) => {
                  const o = this.itemsList.findByLabel(i);
                  o &&
                    (this.isOpen
                      ? (this.itemsList.markItem(o),
                        this._scrollToMarked(),
                        this._cd.markForCheck())
                      : this.select(o)),
                    (this._pressedKeys = []);
                });
          }
          _setInputAttributes() {
            const i = this.searchInput.nativeElement,
              o = {
                type: "text",
                autocorrect: "off",
                autocapitalize: "off",
                autocomplete: this.labelForId ? "off" : this.dropdownId,
                ...this.inputAttrs,
              };
            for (const d of Object.keys(o)) i.setAttribute(d, o[d]);
          }
          _updateNgModel() {
            const i = [];
            for (const d of this.selectedItems)
              if (this.bindValue) {
                let r = null;
                (r = d.children
                  ? d.value[
                      (this.groupValue ? this.bindValue : this.groupBy) ||
                        this.groupBy
                    ]
                  : this.itemsList.resolveNested(d.value, this.bindValue)),
                  i.push(r);
              } else i.push(d.value);
            const o = this.selectedItems.map((d) => d.value);
            this.multiple
              ? (this._onChange(i), this.changeEvent.emit(o))
              : (this._onChange(h(i[0]) ? i[0] : null),
                this.changeEvent.emit(o[0])),
              this._cd.markForCheck();
          }
          _clearSearch() {
            !this.searchTerm ||
              (this._changeSearch(null), this.itemsList.resetFilteredItems());
          }
          _changeSearch(i) {
            (this.searchTerm = i), this._isTypeahead && this.typeahead.next(i);
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
          _handleTab(i) {
            (!1 === this.isOpen && !this.addTag) ||
              (this.selectOnTab
                ? this.itemsList.markedItem
                  ? (this.toggleItem(this.itemsList.markedItem),
                    i.preventDefault())
                  : this.showAddTag
                  ? (this.selectTag(), i.preventDefault())
                  : this.close()
                : this.close());
          }
          _handleEnter(i) {
            if (this.isOpen || this._manualOpen)
              this.itemsList.markedItem
                ? this.toggleItem(this.itemsList.markedItem)
                : this.showAddTag && this.selectTag();
            else {
              if (!this.openOnEnter) return;
              this.open();
            }
            i.preventDefault();
          }
          _handleSpace(i) {
            this.isOpen ||
              this._manualOpen ||
              (this.open(), i.preventDefault());
          }
          _handleArrowDown(i) {
            this._nextItemIsTag(1)
              ? (this.itemsList.unmarkItem(), this._scrollToTag())
              : (this.itemsList.markNextItem(), this._scrollToMarked()),
              this.open(),
              i.preventDefault();
          }
          _handleArrowUp(i) {
            !this.isOpen ||
              (this._nextItemIsTag(-1)
                ? (this.itemsList.unmarkItem(), this._scrollToTag())
                : (this.itemsList.markPreviousItem(), this._scrollToMarked()),
              i.preventDefault());
          }
          _nextItemIsTag(i) {
            const o = this.itemsList.markedIndex + i;
            return (
              this.addTag &&
              this.searchTerm &&
              this.itemsList.markedItem &&
              (o < 0 || o === this.itemsList.filteredItems.length)
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
            const i = this.searchTerm && this.searchTerm.trim();
            return i && i.length >= this.minTermLength;
          }
          _mergeGlobalConfig(i) {
            (this.placeholder = this.placeholder || i.placeholder),
              (this.notFoundText = this.notFoundText || i.notFoundText),
              (this.typeToSearchText =
                this.typeToSearchText || i.typeToSearchText),
              (this.addTagText = this.addTagText || i.addTagText),
              (this.loadingText = this.loadingText || i.loadingText),
              (this.clearAllText = this.clearAllText || i.clearAllText),
              (this.virtualScroll = h(this.virtualScroll)
                ? this.virtualScroll
                : !!h(i.disableVirtualScroll) && !i.disableVirtualScroll),
              (this.openOnEnter = h(this.openOnEnter)
                ? this.openOnEnter
                : i.openOnEnter),
              (this.appendTo = this.appendTo || i.appendTo),
              (this.bindValue = this.bindValue || i.bindValue),
              (this.bindLabel = this.bindLabel || i.bindLabel),
              (this.appearance = this.appearance || i.appearance);
          }
        }
        return (
          (_.ɵfac = function (i) {
            return new (i || _)(
              e.$8M("class"),
              e.$8M("autofocus"),
              e.Y36(jo),
              e.Y36(Ie),
              e.Y36(e.SBq),
              e.Y36(e.sBO),
              e.Y36(Uo)
            );
          }),
          (_.ɵcmp = e.Xpm({
            type: _,
            selectors: [["ng-select"]],
            contentQueries: function (i, o, d) {
              if (
                (1 & i &&
                  (e.Suo(d, xo, 5, e.Rgc),
                  e.Suo(d, qo, 5, e.Rgc),
                  e.Suo(d, zo, 5, e.Rgc),
                  e.Suo(d, wo, 5, e.Rgc),
                  e.Suo(d, Qo, 5, e.Rgc),
                  e.Suo(d, Ho, 5, e.Rgc),
                  e.Suo(d, Zo, 5, e.Rgc),
                  e.Suo(d, Bo, 5, e.Rgc),
                  e.Suo(d, Oo, 5, e.Rgc),
                  e.Suo(d, Fo, 5, e.Rgc),
                  e.Suo(d, ko, 5, e.Rgc),
                  e.Suo(d, Se, 5)),
                2 & i)
              ) {
                let r;
                e.iGM((r = e.CRH())) && (o.optionTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.optgroupTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.labelTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.multiLabelTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.headerTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.footerTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.notFoundTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.typeToSearchTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.loadingTextTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.tagTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.loadingSpinnerTemplate = r.first),
                  e.iGM((r = e.CRH())) && (o.ngOptions = r);
              }
            },
            viewQuery: function (i, o) {
              if ((1 & i && (e.Gf(Me, 5), e.Gf(Vi, 7)), 2 & i)) {
                let d;
                e.iGM((d = e.CRH())) && (o.dropdownPanel = d.first),
                  e.iGM((d = e.CRH())) && (o.searchInput = d.first);
              }
            },
            hostVars: 20,
            hostBindings: function (i, o) {
              1 & i &&
                e.NdJ("keydown", function (r) {
                  return o.handleKeyDown(r);
                }),
                2 & i &&
                  e.ekj("ng-select-typeahead", o.typeahead)(
                    "ng-select-multiple",
                    o.multiple
                  )("ng-select-taggable", o.addTag)(
                    "ng-select-searchable",
                    o.searchable
                  )("ng-select-clearable", o.clearable)(
                    "ng-select-opened",
                    o.isOpen
                  )("ng-select", o.useDefaultClass)(
                    "ng-select-disabled",
                    o.disabled
                  )("ng-select-filtered", o.filtered)(
                    "ng-select-single",
                    o.single
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
                { provide: t.JU, useExisting: (0, e.Gpc)(() => _), multi: !0 },
                Pe,
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
            template: function (i, o) {
              if (1 & i) {
                const d = e.EpF();
                e.TgZ(0, "div", 0),
                  e.NdJ("mousedown", function (u) {
                    return o.handleMousedown(u);
                  }),
                  e.TgZ(1, "div", 1)(2, "div", 2),
                  e._uU(3),
                  e.qZA(),
                  e.YNc(4, Xi, 2, 2, "ng-container", 3),
                  e.YNc(5, oo, 1, 5, null, 3),
                  e.TgZ(6, "div", 4)(7, "input", 5, 6),
                  e.NdJ("input", function () {
                    e.CHM(d);
                    const u = e.MAs(8);
                    return e.KtG(o.filter(u.value));
                  })("compositionstart", function () {
                    return o.onCompositionStart();
                  })("compositionend", function () {
                    e.CHM(d);
                    const u = e.MAs(8);
                    return e.KtG(o.onCompositionEnd(u.value));
                  })("focus", function (u) {
                    return o.onInputFocus(u);
                  })("blur", function (u) {
                    return o.onInputBlur(u);
                  })("change", function (u) {
                    return u.stopPropagation();
                  }),
                  e.qZA()()(),
                  e.YNc(9, ro, 4, 1, "ng-container", 3),
                  e.YNc(10, uo, 3, 1, "span", 7),
                  e.TgZ(11, "span", 8),
                  e._UZ(12, "span", 9),
                  e.qZA()(),
                  e.YNc(13, Po, 7, 19, "ng-dropdown-panel", 10);
              }
              2 & i &&
                (e.ekj("ng-appearance-outline", "outline" === o.appearance)(
                  "ng-has-value",
                  o.hasValue
                ),
                e.xp6(3),
                e.Oqu(o.placeholder),
                e.xp6(1),
                e.Q6J(
                  "ngIf",
                  (!o.multiLabelTemplate || !o.multiple) &&
                    o.selectedItems.length > 0
                ),
                e.xp6(1),
                e.Q6J(
                  "ngIf",
                  o.multiple &&
                    o.multiLabelTemplate &&
                    o.selectedValues.length > 0
                ),
                e.xp6(1),
                e.uIk("aria-expanded", o.isOpen)(
                  "aria-owns",
                  o.isOpen ? o.dropdownId : null
                ),
                e.xp6(1),
                e.Q6J(
                  "readOnly",
                  !o.searchable || o.itemsList.maxItemsSelected
                )("disabled", o.disabled)(
                  "value",
                  o.searchTerm ? o.searchTerm : ""
                ),
                e.uIk("id", o.labelForId)("tabindex", o.tabIndex)(
                  "aria-activedescendant",
                  o.isOpen
                    ? null == o.itemsList || null == o.itemsList.markedItem
                      ? null
                      : o.itemsList.markedItem.htmlId
                    : null
                )("aria-controls", o.isOpen ? o.dropdownId : null),
                e.xp6(2),
                e.Q6J("ngIf", o.loading),
                e.xp6(1),
                e.Q6J("ngIf", o.showClear()),
                e.xp6(3),
                e.Q6J("ngIf", o.isOpen));
            },
            dependencies: [C.mk, C.sg, C.O5, C.tP, Me, Eo],
            styles: [
              '@charset "UTF-8";.ng-select{position:relative;display:block;box-sizing:border-box}.ng-select div,.ng-select input,.ng-select span{box-sizing:border-box}.ng-select [hidden]{display:none}.ng-select.ng-select-searchable .ng-select-container .ng-value-container .ng-input{opacity:1}.ng-select.ng-select-opened .ng-select-container{z-index:1001}.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-placeholder,.ng-select.ng-select-disabled .ng-select-container .ng-value-container .ng-value{-webkit-user-select:none;user-select:none;cursor:default}.ng-select.ng-select-disabled .ng-arrow-wrapper{cursor:default}.ng-select.ng-select-filtered .ng-placeholder{display:none}.ng-select .ng-select-container{cursor:default;display:flex;outline:none;overflow:hidden;position:relative;width:100%}.ng-select .ng-select-container .ng-value-container{display:flex;flex:1}.ng-select .ng-select-container .ng-value-container .ng-input{opacity:0}.ng-select .ng-select-container .ng-value-container .ng-input>input{box-sizing:content-box;background:none transparent;border:0 none;box-shadow:none;outline:none;padding:0;cursor:default;width:100%}.ng-select .ng-select-container .ng-value-container .ng-input>input::-ms-clear{display:none}.ng-select .ng-select-container .ng-value-container .ng-input>input[readonly]{-webkit-user-select:none;user-select:none;width:0;padding:0}.ng-select.ng-select-single.ng-select-filtered .ng-select-container .ng-value-container .ng-value{visibility:hidden}.ng-select.ng-select-single .ng-select-container .ng-value-container,.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-single .ng-select-container .ng-value-container .ng-input{position:absolute;left:0;width:100%}.ng-select.ng-select-multiple.ng-select-disabled>.ng-select-container .ng-value-container .ng-value .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container{flex-wrap:wrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{position:absolute}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value{white-space:nowrap}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value.ng-value-disabled .ng-value-icon{display:none}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-value .ng-value-icon{cursor:pointer}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-input{flex:1;z-index:2}.ng-select.ng-select-multiple .ng-select-container .ng-value-container .ng-placeholder{z-index:1}.ng-select .ng-clear-wrapper{cursor:pointer;position:relative;width:17px;-webkit-user-select:none;user-select:none}.ng-select .ng-clear-wrapper .ng-clear{display:inline-block;font-size:18px;line-height:1;pointer-events:none}.ng-select .ng-spinner-loader{border-radius:50%;width:17px;height:17px;margin-right:5px;font-size:10px;position:relative;text-indent:-9999em;border-top:2px solid rgba(66,66,66,.2);border-right:2px solid rgba(66,66,66,.2);border-bottom:2px solid rgba(66,66,66,.2);border-left:2px solid #424242;transform:translateZ(0);animation:load8 .8s infinite linear}.ng-select .ng-spinner-loader:after{border-radius:50%;width:17px;height:17px}@keyframes load8{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.ng-select .ng-arrow-wrapper{cursor:pointer;position:relative;text-align:center;-webkit-user-select:none;user-select:none}.ng-select .ng-arrow-wrapper .ng-arrow{pointer-events:none;display:inline-block;height:0;width:0;position:relative}.ng-dropdown-panel{box-sizing:border-box;position:absolute;opacity:0;width:100%;z-index:1050;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .ng-dropdown-panel-items{display:block;height:auto;box-sizing:border-box;max-height:240px;overflow-y:auto}.ng-dropdown-panel .ng-dropdown-panel-items .ng-optgroup{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option{box-sizing:border-box;cursor:pointer;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .ng-option-label:empty:before{content:"\\200b"}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option .highlighted{font-weight:700;text-decoration:underline}.ng-dropdown-panel .ng-dropdown-panel-items .ng-option.disabled{cursor:default}.ng-dropdown-panel .scroll-host{overflow:hidden;overflow-y:auto;position:relative;display:block;-webkit-overflow-scrolling:touch}.ng-dropdown-panel .scrollable-content{top:0;left:0;width:100%;height:100%;position:absolute}.ng-dropdown-panel .total-padding{width:1px;opacity:0}\n',
            ],
            encapsulation: 2,
            changeDetection: 0,
          })),
          _
        );
      })();
      function Ro() {
        return new Vo();
      }
      class Vo {
        constructor() {
          this._selected = [];
        }
        get value() {
          return this._selected;
        }
        select(a, i, o) {
          if (
            ((a.selected = !0),
            (!a.children || (!i && o)) && this._selected.push(a),
            i)
          )
            if (a.parent) {
              const d = a.parent.children.length,
                r = a.parent.children.filter((u) => u.selected).length;
              a.parent.selected = d === r;
            } else
              a.children &&
                (this._setChildrenSelectedState(a.children, !0),
                this._removeChildren(a),
                (this._selected =
                  o && this._activeChildren(a)
                    ? [...this._selected.filter((d) => d.parent !== a), a]
                    : [
                        ...this._selected,
                        ...a.children.filter((d) => !d.disabled),
                      ]));
        }
        unselect(a, i) {
          if (
            ((this._selected = this._selected.filter((o) => o !== a)),
            (a.selected = !1),
            i)
          )
            if (a.parent && a.parent.selected) {
              const o = a.parent.children;
              this._removeParent(a.parent),
                this._removeChildren(a.parent),
                this._selected.push(...o.filter((d) => d !== a && !d.disabled)),
                (a.parent.selected = !1);
            } else
              a.children &&
                (this._setChildrenSelectedState(a.children, !1),
                this._removeChildren(a));
        }
        clear(a) {
          this._selected = a ? this._selected.filter((i) => i.disabled) : [];
        }
        _setChildrenSelectedState(a, i) {
          for (const o of a) o.disabled || (o.selected = i);
        }
        _removeChildren(a) {
          this._selected = [
            ...this._selected.filter((i) => i.parent !== a),
            ...a.children.filter(
              (i) => i.parent === a && i.disabled && i.selected
            ),
          ];
        }
        _removeParent(a) {
          this._selected = this._selected.filter((i) => i !== a);
        }
        _activeChildren(a) {
          return a.children.every((i) => !i.disabled || i.selected);
        }
      }
      let Go = (() => {
        class _ {}
        return (
          (_.ɵfac = function (i) {
            return new (i || _)();
          }),
          (_.ɵmod = e.oAB({ type: _ })),
          (_.ɵinj = e.cJS({
            providers: [{ provide: Ie, useValue: Ro }],
            imports: [C.ez],
          })),
          _
        );
      })();
      var $o = b(3117);
      let Wo = (() => {
        class _ {
          constructor() {
            (this.numero = ""),
              (this.descripcion = ""),
              (this.for = ""),
              (this.textoAdicional = "");
          }
          ngOnInit() {}
        }
        return (
          (_.ɵfac = function (i) {
            return new (i || _)();
          }),
          (_.ɵcmp = e.Xpm({
            type: _,
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
              [
                1,
                "numeracion",
                "d-flex",
                "justify-content-center",
                "align-items-center",
              ],
              [3, "innerHTML"],
              [1, "align-self-center", 3, "for"],
              [1, "text-muted", "text-secondary-question"],
            ],
            template: function (i, o) {
              1 & i &&
                (e.TgZ(0, "div", 0)(1, "div", 1),
                e._UZ(2, "p", 2),
                e.qZA(),
                e.TgZ(3, "label", 3),
                e._uU(4),
                e.qZA()(),
                e.TgZ(5, "p", 4),
                e._uU(6),
                e.qZA()),
                2 & i &&
                  (e.xp6(2),
                  e.Q6J("innerHTML", o.numero, e.oJD),
                  e.xp6(1),
                  e.Q6J("for", o.for),
                  e.xp6(1),
                  e.Oqu(o.descripcion),
                  e.xp6(2),
                  e.hij(" ", o.textoAdicional, "\n"));
            },
            styles: [
              "label[_ngcontent-%COMP%]{color:#42526e;font-family:Flexo-regular,sans-serif;font-weight:600}.numeracion[_ngcontent-%COMP%]{background:url(./assets/images/cuestionario/bg-numeracion.svg);background-repeat:no-repeat;background-size:contain;font-size:12px;min-width:27px;height:27px;color:#fff;font-family:Flexo-bold,sans-serif}.text-secondary-question[_ngcontent-%COMP%]{font-family:JetBrains Mono,monospace;font-size:12px}",
            ],
          })),
          _
        );
      })();
      function Ko(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Xo(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function e_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Xo, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("lenguaMaterna.lengua")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function i_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function o_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, i_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("lenguaMaterna.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function __(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.TgZ(1, "div", 23)(2, "div", 17)(3, "label", 96),
            e._uU(4, "Especifique la lengua:"),
            e.qZA(),
            e._UZ(5, "input", 97),
            e.YNc(6, o_, 2, 1, "ng-container", 22),
            e.qZA()(),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(6),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("lenguaMaterna.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("lenguaMaterna.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function a_(_, a) {
        if ((1 & _ && (e.TgZ(0, "ng-option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i.nombre_ubigeo),
            e.xp6(1),
            e.hij(" ", i.nombre_ubigeo, " ");
        }
      }
      function d_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function r_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, d_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("ubigeo")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function u_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function t_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, u_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("responsable.nombresApellidos")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function g_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function n_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " solo numeros "), e.qZA());
      }
      function p_(_, a) {
        1 & _ &&
          (e.TgZ(0, "p", 95), e._uU(1, " M\xednimo 8 digitos "), e.qZA());
      }
      function b_(_, a) {
        1 & _ &&
          (e.TgZ(0, "p", 95), e._uU(1, " M\xe1ximo 8 digitos "), e.qZA());
      }
      function s_(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.YNc(1, g_, 2, 0, "p", 94),
            e.YNc(2, n_, 2, 0, "p", 94),
            e.YNc(3, p_, 2, 0, "p", 94),
            e.YNc(4, b_, 2, 0, "p", 94),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw();
          let o, d, r, u;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("responsable.dni")) || null == o.errors
                ? null
                : o.errors.required
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (d = i.getControl("responsable.dni")) || null == d.errors
                ? null
                : d.errors.pattern
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (r = i.getControl("responsable.dni")) || null == r.errors
                ? null
                : r.errors.minlength
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (u = i.getControl("responsable.dni")) || null == u.errors
                ? null
                : u.errors.maxlength
            );
        }
      }
      function c_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function l_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, c_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("postulante.nombresApellidos")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function m_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function h_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " solo numeros "), e.qZA());
      }
      function v_(_, a) {
        1 & _ &&
          (e.TgZ(0, "p", 95), e._uU(1, " M\xednimo 8 digitos "), e.qZA());
      }
      function f_(_, a) {
        1 & _ &&
          (e.TgZ(0, "p", 95), e._uU(1, " M\xe1ximo 8 digitos "), e.qZA());
      }
      function C_(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.YNc(1, m_, 2, 0, "p", 94),
            e.YNc(2, h_, 2, 0, "p", 94),
            e.YNc(3, v_, 2, 0, "p", 94),
            e.YNc(4, f_, 2, 0, "p", 94),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw();
          let o, d, r, u;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("postulante.dni")) || null == o.errors
                ? null
                : o.errors.required
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (d = i.getControl("postulante.dni")) || null == d.errors
                ? null
                : d.errors.pattern
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (r = i.getControl("postulante.dni")) || null == r.errors
                ? null
                : r.errors.minlength
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (u = i.getControl("postulante.dni")) || null == u.errors
                ? null
                : u.errors.maxlength
            );
        }
      }
      function y_(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function A_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function T_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, A_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("postulante.parentesco.tipo")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function P_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function L_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, P_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("postulante.parentesco.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function M_(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0, 23),
            e.TgZ(1, "div", 17),
            e._UZ(2, "app-label-form", 18)(3, "input", 98),
            e.YNc(4, L_, 2, 1, "ng-container", 22),
            e.qZA(),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(2),
            e.Q6J("numero", "6.1")("descripcion", "Especifique parentesco:")(
              "for",
              "detalleParentesco"
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("postulante.parentesco.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("postulante.parentesco.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function S_(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function I_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function E_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, I_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (o = i.getControl("universidadAlaQuePostula.universidad")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function x_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function q_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, x_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("universidadAlaQuePostula.carrera")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function z_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function w_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, z_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("fortalezasCualidadesPostulante")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Q_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function H_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Q_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("ayudaProcesoPostulaci\xf3n")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Z_(_, a) {
        if ((1 & _ && (e.TgZ(0, "ng-option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function B_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function O_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, B_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("accionesApoyo")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function F_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function k_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, F_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("tipoAccion.detalle")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function N_(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.TgZ(1, "div", 100)(2, "div", 101)(3, "p"),
            e._uU(4, " Acci\xf3n: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e._UZ(7, "input", 102),
            e.YNc(8, k_, 2, 1, "ng-container", 22),
            e.qZA()(),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o, d;
          e.xp6(6),
            e.hij(
              " ",
              null == (o = i.get("tipoAccion.accion")) ? null : o.value,
              " "
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (d = i.get("tipoAccion.detalle")) ? null : d.invalid) &&
                (null == (d = i.get("tipoAccion.detalle")) ? null : d.touched)
            );
        }
      }
      function J_(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 99),
            e.YNc(1, N_, 9, 2, "ng-container", 22),
            e.qZA()),
          2 & _)
        ) {
          const i = a.$implicit;
          let d;
          e.Q6J("formGroupName", a.index),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              "Otros (especificar)" ===
                (null == (d = i.get("tipoAccion.accion")) ? null : d.value)
            );
        }
      }
      function D_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function j_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, D_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("eleccionUniCarrera.motivo")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function U_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Seleccione el tipo "), e.qZA());
      }
      function Y_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, U_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("eleccionUniCarrera.estaDeAcuerdo")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function R_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function V_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, R_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("eleccionUniCarrera.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function G_(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e._UZ(1, "app-label-form", 85)(2, "textarea", 103),
            e.YNc(3, V_, 2, 1, "ng-container", 22),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J("numero", "11.2")("descripcion", "\xbfPor qu\xe9?:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("eleccionUniCarrera.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("eleccionUniCarrera.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function $_(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function W_(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function K_(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, W_, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("beneficioEconomico.fueAcreedor")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function X_(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function ea(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function ia(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ea, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (o = i.getControl(
                  "beneficioEconomico.tipoBeneficio.beneficio"
                )) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function oa(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function _a(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, oa, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(3);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (o = i.getControl(
                  "beneficioEconomico.tipoBeneficio.detalle"
                )) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function aa(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div"),
            e._UZ(1, "app-label-form", 85)(2, "input", 106),
            e.YNc(3, _a, 2, 1, "ng-container", 22),
            e.qZA()),
          2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J("numero", "12.2")("descripcion", "Especificar beneficio:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null ==
              (o = i.getControl("beneficioEconomico.tipoBeneficio.detalle"))
                ? null
                : o.invalid) &&
                (null ==
                (o = i.getControl("beneficioEconomico.tipoBeneficio.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function da(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 104)(1, "div", 17),
            e._UZ(2, "app-label-form", 85),
            e.TgZ(3, "select", 105)(4, "option", 20),
            e._uU(5, "-Seleccionar-"),
            e.qZA(),
            e.YNc(6, X_, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(7, ia, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(8, "div", 17),
            e.YNc(9, aa, 4, 3, "div", 22),
            e.qZA()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(2),
            e.Q6J("numero", "12.1")(
              "descripcion",
              "En caso haya marcado S\xed, Este beneficio fue:"
            ),
            e.xp6(4),
            e.Q6J("ngForOf", i.listBeneficio),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null ==
              (o = i.getControl("beneficioEconomico.tipoBeneficio.beneficio"))
                ? null
                : o.invalid) &&
                (null ==
                (o = i.getControl("beneficioEconomico.tipoBeneficio.beneficio"))
                  ? null
                  : o.touched)
            ),
            e.xp6(2),
            e.Q6J("ngIf", i.hasOtroBeneficio);
        }
      }
      function ra(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function ua(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function ta(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ua, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("preparacionPreUniversitaria.tuvo")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function ga(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function na(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function pa(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, na, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (o = i.getControl(
                  "preparacionPreUniversitaria.aCargo.pagadoPor"
                )) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function ba(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function sa(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ba, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(3);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (o = i.getControl(
                  "preparacionPreUniversitaria.aCargo.detalle"
                )) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function ca(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div"),
            e._UZ(1, "app-label-form", 85)(2, "input", 110),
            e.YNc(3, sa, 2, 1, "ng-container", 22),
            e.qZA()),
          2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J("numero", "13.1.2")("descripcion", "Especificar detalle:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null ==
              (o = i.getControl("preparacionPreUniversitaria.aCargo.detalle"))
                ? null
                : o.invalid) &&
                (null ==
                (o = i.getControl("preparacionPreUniversitaria.aCargo.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function la(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function ma(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function ha(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ma, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (o = i.getControl(
                  "preparacionPreUniversitaria.aCargo.periodo"
                )) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function va(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 107)(1, "div", 17),
            e._UZ(2, "app-label-form", 85),
            e.TgZ(3, "select", 108)(4, "option", 20),
            e._uU(5, "-Seleccionar-"),
            e.qZA(),
            e.YNc(6, ga, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(7, pa, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(8, "div", 17),
            e.YNc(9, ca, 4, 3, "div", 22),
            e.qZA(),
            e.TgZ(10, "div", 17),
            e._UZ(11, "app-label-form", 85),
            e.TgZ(12, "select", 109)(13, "option", 20),
            e._uU(14, "-Seleccionar-"),
            e.qZA(),
            e.YNc(15, la, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(16, ha, 2, 1, "ng-container", 22),
            e.qZA()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o, d;
          e.xp6(2),
            e.Q6J("numero", "13.1")(
              "descripcion",
              "Esta preparaci\xf3n preuniversitaria fue:"
            ),
            e.xp6(4),
            e.Q6J("ngForOf", i.listPagoPreparacion),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null ==
              (o = i.getControl("preparacionPreUniversitaria.aCargo.pagadoPor"))
                ? null
                : o.invalid) &&
                (null ==
                (o = i.getControl(
                  "preparacionPreUniversitaria.aCargo.pagadoPor"
                ))
                  ? null
                  : o.touched)
            ),
            e.xp6(2),
            e.Q6J("ngIf", i.hasOtroPago),
            e.xp6(2),
            e.Q6J("numero", "13.2")(
              "descripcion",
              "EIndicar el tiempo de preparaci\xf3n preuniversitaria:"
            ),
            e.xp6(4),
            e.Q6J("ngForOf", i.rangosPreparacion),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null ==
              (d = i.getControl("preparacionPreUniversitaria.aCargo.periodo"))
                ? null
                : d.invalid) &&
                (null ==
                (d = i.getControl("preparacionPreUniversitaria.aCargo.periodo"))
                  ? null
                  : d.touched)
            );
        }
      }
      function fa(_, a) {
        if ((1 & _ && (e.TgZ(0, "ng-option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Ca(_, a) {
        1 & _ &&
          (e.ynx(0),
          e.TgZ(1, "p", 95),
          e._uU(2, "Campo requerido"),
          e.qZA(),
          e.BQk());
      }
      function ya(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function Aa(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ya, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("tipoActividad.detalle")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Ta(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e._UZ(1, "input", 118),
            e.YNc(2, Aa, 2, 1, "ng-container", 22),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.get("tipoActividad.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.get("tipoActividad.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function Pa(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function La(_, a) {
        1 & _ &&
          (e.TgZ(0, "p", 95), e._uU(1, " Seleccione financiamiento "), e.qZA());
      }
      function Ma(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, La, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("financiado.financiadoPor")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Sa(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function Ia(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Sa, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("financiado.detalle")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Ea(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.TgZ(1, "label", 119),
            e._uU(2, "Especificar:"),
            e.qZA(),
            e._UZ(3, "input", 120),
            e.YNc(4, Ia, 2, 1, "ng-container", 22),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(4),
            e.Q6J(
              "ngIf",
              (null == (o = i.get("financiado.detalle")) ? null : o.invalid) &&
                (null == (o = i.get("financiado.detalle")) ? null : o.touched)
            );
        }
      }
      function xa(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "div", 99)(1, "div", 111)(2, "div", 112)(3, "p"),
            e._uU(4, " Actividad: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e.YNc(7, Ta, 3, 1, "ng-container", 22),
            e.qZA()(),
            e.TgZ(8, "div", 113)(9, "div", 114)(10, "label", 115),
            e._uU(11, "Financiamiento"),
            e.qZA(),
            e.TgZ(12, "select", 116, 117),
            e.NdJ("change", function (d) {
              const u = e.CHM(i).index,
                g = e.oxw();
              return e.KtG(g.changeFinanciadoPor(d, u));
            }),
            e.YNc(14, Pa, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(15, Ma, 2, 1, "ng-container", 22),
            e.YNc(16, Ea, 5, 1, "ng-container", 22),
            e.qZA()()();
        }
        if (2 & _) {
          const i = a.$implicit,
            o = a.index,
            d = e.MAs(13),
            r = e.oxw();
          let u, g, n;
          e.Q6J("formGroupName", o),
            e.xp6(6),
            e.hij(
              " ",
              null == (u = i.get("tipoActividad.actividad")) ? null : u.value,
              " "
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (g = i.get("tipoActividad.actividad"))
                ? null
                : g.value) === r.objActividades.otros
            ),
            e.xp6(7),
            e.Q6J("ngForOf", r.listTipoFinanciamiento),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (n = i.get("financiado.financiadoPor"))
                ? null
                : n.invalid) &&
                (null == (n = i.get("financiado.financiadoPor"))
                  ? null
                  : n.touched)
            ),
            e.xp6(1),
            e.Q6J("ngIf", d.value === r.objActividades.otros);
        }
      }
      function qa(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function za(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, qa, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("direccionVivienda")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function wa(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 6)(1, "div", 41)(2, "div", 17),
            e._UZ(3, "app-label-form", 24)(4, "input", 121),
            e.YNc(5, za, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(3),
            e.Q6J("numero", i.objPregunta.quince.nro)(
              "descripcion",
              i.objPregunta.quince.descripcion
            )("textoAdicional", i.objPregunta.quince.datoAdicional)(
              "for",
              i.objPregunta.quince.for
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("direccionVivienda"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("direccionVivienda"))
                  ? null
                  : o.touched)
            );
        }
      }
      function Qa(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Ha(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Qa, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("coordenadasVivienda")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Za(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "div", 6)(1, "div", 122)(2, "div", 17)(3, "label", 123),
            e._uU(4, "Indicar direcci\xf3n en mapa(bot\xf3n indicar en mapa):"),
            e.qZA(),
            e._UZ(5, "input", 124),
            e.YNc(6, Ha, 2, 1, "ng-container", 22),
            e.qZA()(),
            e.TgZ(7, "div", 125)(8, "button", 126),
            e.NdJ("click", function () {
              e.CHM(i);
              const d = e.oxw();
              return e.KtG(d.openMaps());
            }),
            e._UZ(9, "i", 127),
            e._uU(10, " Indicar en mapa "),
            e.qZA()()();
        }
        if (2 & _) {
          const i = e.oxw();
          let o;
          e.xp6(5),
            e.Q6J("readonly", !0),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("coordenadasVivienda"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("coordenadasVivienda"))
                  ? null
                  : o.touched)
            );
        }
      }
      function Ba(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Oa(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Fa(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Oa, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("tiempoTraslado")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function ka(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 6)(1, "div", 23)(2, "div", 17),
            e._UZ(3, "app-label-form", 18),
            e.TgZ(4, "select", 128),
            e.YNc(5, Ba, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(6, Fa, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(3),
            e.Q6J("numero", i.objPregunta.dieciseis.nro)(
              "descripcion",
              i.objPregunta.dieciseis.descripcion
            )("for", i.objPregunta.dieciseis.for),
            e.xp6(2),
            e.Q6J("ngForOf", i.listTiempoTraslado),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("tiempoTraslado"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("tiempoTraslado"))
                  ? null
                  : o.touched)
            );
        }
      }
      function Na(_, a) {
        if ((1 & _ && (e.TgZ(0, "th", 129), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Udp("min-width", i.style.minWidth, "px"),
            e.xp6(1),
            e.hij(" ", i.value, " ");
        }
      }
      function Ja(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese parentesco "), e.qZA());
      }
      function Da(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Ja, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("parentesco")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function ja(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese nombres "), e.qZA());
      }
      function Ua(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ja, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("nombres")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Ya(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese apellidos "), e.qZA());
      }
      function Ra(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Ya, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("apellidos")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Va(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese edad "), e.qZA());
      }
      function Ga(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Va, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("edad")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function $a(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Wa(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Seleccione "), e.qZA());
      }
      function Ka(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Wa, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("estadoCivil")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Xa(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function ed(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Seleccione "), e.qZA());
      }
      function id(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ed, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("nivelEducacion")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function od(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function _d(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Seleccione "), e.qZA());
      }
      function ad(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, _d, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("viveoFallecido")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function dd(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function rd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Seleccione "), e.qZA());
      }
      function ud(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, rd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("viveConElPostulante")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function td(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function gd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Seleccione "), e.qZA());
      }
      function nd(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, gd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("situacionLaboral")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function pd(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.TgZ(0, "td")(1, "button", 141),
            e.NdJ("click", function () {
              e.CHM(i);
              const d = e.oxw().index,
                r = e.oxw();
              return e.KtG(r.deleteFamiliarNuclear(d));
            }),
            e._UZ(2, "i", 142),
            e.qZA()();
        }
      }
      function bd(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "tr", 130)(1, "td"),
            e._UZ(2, "input", 131),
            e.YNc(3, Da, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(4, "td"),
            e._UZ(5, "input", 132),
            e.YNc(6, Ua, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(7, "td"),
            e._UZ(8, "input", 133),
            e.YNc(9, Ra, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(10, "td"),
            e._UZ(11, "input", 134),
            e.YNc(12, Ga, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(13, "td")(14, "select", 135)(15, "option", 20),
            e._uU(16, "-Seleccionar-"),
            e.qZA(),
            e.YNc(17, $a, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(18, Ka, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(19, "td")(20, "select", 136)(21, "option", 20),
            e._uU(22, "-Seleccionar-"),
            e.qZA(),
            e.YNc(23, Xa, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(24, id, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(25, "td", 137)(26, "select", 138)(27, "option", 20),
            e._uU(28, "-Seleccionar-"),
            e.qZA(),
            e.YNc(29, od, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(30, ad, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(31, "td")(32, "select", 139)(33, "option", 20),
            e._uU(34, "-Seleccionar-"),
            e.qZA(),
            e.YNc(35, dd, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(36, ud, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(37, "td")(38, "select", 140)(39, "option", 20),
            e._uU(40, "-Seleccionar-"),
            e.qZA(),
            e.YNc(41, td, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(42, nd, 2, 1, "ng-container", 22),
            e.qZA(),
            e.YNc(43, pd, 3, 0, "td", 22),
            e.qZA()),
          2 & _)
        ) {
          const i = a.$implicit,
            o = a.index,
            d = a.first,
            r = e.oxw();
          let u, g, n, p, m, s, c, f, T;
          e.Q6J("formGroupName", o),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (u = i.get("parentesco")) ? null : u.invalid) &&
                (null == (u = i.get("parentesco")) ? null : u.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (g = i.get("nombres")) ? null : g.invalid) &&
                (null == (g = i.get("nombres")) ? null : g.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (n = i.get("apellidos")) ? null : n.invalid) &&
                (null == (n = i.get("apellidos")) ? null : n.touched)
            ),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (p = i.get("edad")) ? null : p.invalid) &&
                (null == (p = i.get("edad")) ? null : p.touched)
            ),
            e.xp6(5),
            e.Q6J("ngForOf", r.listEstadoCivil),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (m = i.get("estadoCivil")) ? null : m.invalid) &&
                (null == (m = i.get("estadoCivil")) ? null : m.touched)
            ),
            e.xp6(5),
            e.Q6J("ngForOf", r.listNivelEducacion),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (s = i.get("nivelEducacion")) ? null : s.invalid) &&
                (null == (s = i.get("nivelEducacion")) ? null : s.touched)
            ),
            e.xp6(5),
            e.Q6J("ngForOf", r.listEstadoPersona),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (c = i.get("viveoFallecido")) ? null : c.invalid) &&
                (null == (c = i.get("viveoFallecido")) ? null : c.touched)
            ),
            e.xp6(5),
            e.Q6J("ngForOf", r.listSiNo),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (f = i.get("viveConElPostulante")) ? null : f.invalid) &&
                (null == (f = i.get("viveConElPostulante")) ? null : f.touched)
            ),
            e.xp6(5),
            e.Q6J("ngForOf", r.listSituacionLaboral),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (T = i.get("situacionLaboral")) ? null : T.invalid) &&
                (null == (T = i.get("situacionLaboral")) ? null : T.touched)
            ),
            e.xp6(1),
            e.Q6J("ngIf", !d);
        }
      }
      function sd(_, a) {
        if ((1 & _ && (e.TgZ(0, "ng-option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function cd(_, a) {
        1 & _ &&
          (e.ynx(0),
          e.TgZ(1, "p", 95),
          e._uU(2, "Campo requerido"),
          e.qZA(),
          e.BQk());
      }
      function ld(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function md(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ld, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("tipoTarea.detalle")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function hd(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.TgZ(1, "div", 100)(2, "div", 143)(3, "p"),
            e._uU(4, " Tarea: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e._UZ(7, "input", 144),
            e.YNc(8, md, 2, 1, "ng-container", 22),
            e.qZA()(),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o, d;
          e.xp6(6),
            e.hij(
              " ",
              null == (o = i.get("tipoTarea.tarea")) ? null : o.value,
              " "
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (d = i.get("tipoTarea.detalle")) ? null : d.invalid) &&
                (null == (d = i.get("tipoTarea.detalle")) ? null : d.touched)
            );
        }
      }
      function vd(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 99),
            e.YNc(1, hd, 9, 2, "ng-container", 22),
            e.qZA()),
          2 & _)
        ) {
          const i = a.$implicit,
            o = a.index,
            d = e.oxw();
          let r;
          e.Q6J("formGroupName", o),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (r = i.get("tipoTarea.tarea")) ? null : r.value) ===
                d.objTareaHogar.otros
            );
        }
      }
      function fd(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Cd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function yd(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Cd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null ==
                (o = i.getControl(
                  "horasDiariasApoyoTareasDelHogarPostulante"
                )) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Ad(_, a) {
        if ((1 & _ && (e.TgZ(0, "ng-option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Td(_, a) {
        1 & _ &&
          (e.ynx(0),
          e.TgZ(1, "p", 95),
          e._uU(2, "Campo requerido"),
          e.qZA(),
          e.BQk());
      }
      function Pd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function Ld(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Pd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("encargado.detalle")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Md(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e._UZ(1, "input", 148),
            e.YNc(2, Ld, 2, 1, "ng-container", 22),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.get("encargado.detalle")) ? null : o.invalid) &&
                (null == (o = i.get("encargado.detalle")) ? null : o.touched)
            );
        }
      }
      function Sd(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Id(_, a) {
        1 & _ &&
          (e.TgZ(0, "p", 95), e._uU(1, " Seleccione duraci\xf3n "), e.qZA());
      }
      function Ed(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Id, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("porcentaje")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function xd(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 99)(1, "div", 111)(2, "div", 145)(3, "p"),
            e._uU(4, " Encargado: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e.YNc(7, Md, 3, 1, "ng-container", 22),
            e.qZA()(),
            e.TgZ(8, "div", 111)(9, "div", 17)(10, "label", 146),
            e._uU(11, "Porcentaje responsabilidad:"),
            e.qZA(),
            e.TgZ(12, "select", 147),
            e.YNc(13, Sd, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(14, Ed, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = a.$implicit,
            o = a.index,
            d = e.oxw();
          let r, u, g;
          e.Q6J("formGroupName", o),
            e.xp6(6),
            e.hij(
              " ",
              null == (r = i.get("encargado.miembro")) ? null : r.value,
              " "
            ),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (u = i.get("encargado.miembro")) ? null : u.value) ===
                d.objEncargado.otros
            ),
            e.xp6(6),
            e.Q6J("ngForOf", d.listPorcentajesResponsabilidad),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (g = i.get("porcentaje")) ? null : g.invalid) &&
                (null == (g = i.get("porcentaje")) ? null : g.touched)
            );
        }
      }
      function qd(_, a) {
        if ((1 & _ && (e.TgZ(0, "th", 129), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function zd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function wd(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, zd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("actividad")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Qd(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e._UZ(1, "input", 152),
            e.YNc(2, wd, 2, 1, "ng-container", 22),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.get("actividad")) ? null : o.invalid) &&
                (null == (o = i.get("actividad")) ? null : o.touched)
            );
        }
      }
      function Hd(_, a) {
        if ((1 & _ && (e.TgZ(0, "p"), e._uU(1), e.qZA()), 2 & _)) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1), e.Oqu(null == (o = i.get("actividad")) ? null : o.value);
        }
      }
      function Zd(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Bd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Seleccione "), e.qZA());
      }
      function Od(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Bd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("necesita")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Fd(_, a) {
        if (1 & _) {
          const i = e.EpF();
          e.ynx(0),
            e.TgZ(1, "button", 141),
            e.NdJ("click", function () {
              e.CHM(i);
              const d = e.oxw().index,
                r = e.oxw();
              return e.KtG(r.deletActiviadaApoyo(d));
            }),
            e._UZ(2, "i", 142),
            e.qZA(),
            e.BQk();
        }
      }
      function kd(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "tr", 130)(1, "td"),
            e.YNc(2, Qd, 3, 1, "ng-container", 149),
            e.YNc(3, Hd, 2, 1, "ng-template", null, 150, e.W1O),
            e.qZA(),
            e.TgZ(5, "td")(6, "select", 151)(7, "option", 20),
            e._uU(8, "-Seleccionar-"),
            e.qZA(),
            e.YNc(9, Zd, 2, 2, "option", 21),
            e.qZA(),
            e.YNc(10, Od, 2, 1, "ng-container", 22),
            e.qZA(),
            e.TgZ(11, "td"),
            e.YNc(12, Fd, 3, 0, "ng-container", 22),
            e.qZA()()),
          2 & _)
        ) {
          const i = a.$implicit,
            o = a.index,
            d = e.MAs(4),
            r = e.oxw();
          let u;
          e.Q6J("formGroupName", o),
            e.xp6(2),
            e.Q6J("ngIf", o > r.listTipoApoyoEconomico.length - 1)(
              "ngIfElse",
              d
            ),
            e.xp6(7),
            e.Q6J("ngForOf", r.listSiNo),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              (null == (u = i.get("necesita")) ? null : u.invalid) &&
                (null == (u = i.get("necesita")) ? null : u.touched)
            ),
            e.xp6(2),
            e.Q6J("ngIf", o > r.listTipoApoyoEconomico.length - 1);
        }
      }
      function Nd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Jd(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Nd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("principalesReglasCasa")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Dd(_, a) {
        if ((1 & _ && (e.TgZ(0, "ng-option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function jd(_, a) {
        1 & _ &&
          (e.ynx(0),
          e.TgZ(1, "p", 95),
          e._uU(2, "Campo requerido"),
          e.qZA(),
          e.BQk());
      }
      function Ud(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function Yd(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Ud, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("significado.detalle")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Rd(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.TgZ(1, "label", 154),
            e._uU(2, " Otros (especificar)"),
            e.qZA(),
            e._UZ(3, "input", 155),
            e.YNc(4, Yd, 2, 1, "ng-container", 22),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o;
          e.xp6(4),
            e.Q6J(
              "ngIf",
              (null == (o = i.get("significado.detalle")) ? null : o.invalid) &&
                (null == (o = i.get("significado.detalle")) ? null : o.touched)
            );
        }
      }
      function Vd(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 99)(1, "div", 100)(2, "div", 153),
            e.YNc(3, Rd, 5, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = a.$implicit,
            o = a.index,
            d = e.oxw();
          let r;
          e.Q6J("formGroupName", o),
            e.xp6(3),
            e.Q6J(
              "ngIf",
              (null == (r = i.get("significado.rpta")) ? null : r.value) ===
                d.objActividades.otros
            );
        }
      }
      function Gd(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function $d(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Wd(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, $d, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("accionesConcretas.accion")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Kd(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Xd(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Kd, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("accionesConcretas.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function er(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 6)(1, "div", 32)(2, "div", 17),
            e._UZ(3, "app-label-form", 85)(4, "textarea", 103),
            e.YNc(5, Xd, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(3),
            e.Q6J("numero", "21.1")("descripcion", "Ingresar detalle:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("accionesConcretas.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("accionesConcretas.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function ir(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function or(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function _r(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, or, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("situacionComplicada.rpta")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function ar(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function dr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, ar, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("situacionComplicada.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function rr(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 6)(1, "div", 32)(2, "div", 17),
            e._UZ(3, "app-label-form", 85)(4, "textarea", 103),
            e.YNc(5, dr, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(3),
            e.Q6J("numero", "22.1")("descripcion", "Ingresar detalle:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("situacionComplicada.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("situacionComplicada.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function ur(_, a) {
        if ((1 & _ && (e.TgZ(0, "ng-option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function tr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function gr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, tr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("problemasQuePresenta")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function nr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Ingrese detalle "), e.qZA());
      }
      function pr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, nr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2).$implicit;
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.get("tipoProblema.detalle")) || null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function br(_, a) {
        if (
          (1 & _ &&
            (e.ynx(0),
            e.TgZ(1, "div", 100)(2, "div", 156)(3, "p"),
            e._uU(4, " Problema: "),
            e._UZ(5, "br"),
            e._uU(6),
            e.qZA(),
            e._UZ(7, "input", 157),
            e.YNc(8, pr, 2, 1, "ng-container", 22),
            e.qZA()(),
            e.BQk()),
          2 & _)
        ) {
          const i = e.oxw().$implicit;
          let o, d;
          e.xp6(6),
            e.hij(
              " ",
              null == (o = i.get("tipoProblema.problema")) ? null : o.value,
              " "
            ),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (d = i.get("tipoProblema.detalle"))
                ? null
                : d.invalid) &&
                (null == (d = i.get("tipoProblema.detalle")) ? null : d.touched)
            );
        }
      }
      function sr(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 99),
            e.YNc(1, br, 9, 2, "ng-container", 22),
            e.qZA()),
          2 & _)
        ) {
          const i = a.$implicit;
          let d;
          e.Q6J("formGroupName", a.index),
            e.xp6(1),
            e.Q6J(
              "ngIf",
              "Otros (especificar)" ===
                (null == (d = i.get("tipoProblema.problema")) ? null : d.value)
            );
        }
      }
      function cr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function lr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, cr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("estrategiasResolverProblema")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function mr(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function hr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function vr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, hr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("fortalezasFamiliares.rpta")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function fr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Cr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, fr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("fortalezasFamiliares.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function yr(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 6)(1, "div", 32)(2, "div", 17),
            e._UZ(3, "app-label-form", 85)(4, "textarea", 103),
            e.YNc(5, Cr, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(3),
            e.Q6J("numero", "24.1")("descripcion", "Ingresar detalle:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("fortalezasFamiliares.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("fortalezasFamiliares.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function Ar(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Tr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Pr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Tr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("momentoEnFamilia.rpta")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Lr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function Mr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Lr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("momentoEnFamilia.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function Sr(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 6)(1, "div", 32)(2, "div", 17),
            e._UZ(3, "app-label-form", 85)(4, "textarea", 103),
            e.YNc(5, Mr, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(3),
            e.Q6J("numero", "25.1")("descripcion", "Ingresar detalle:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("momentoEnFamilia.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("momentoEnFamilia.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      function Ir(_, a) {
        if ((1 & _ && (e.TgZ(0, "option", 93), e._uU(1), e.qZA()), 2 & _)) {
          const i = a.$implicit;
          e.Q6J("value", i), e.xp6(1), e.hij(" ", i, " ");
        }
      }
      function Er(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function xr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, Er, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("reorganizacionTareas.rpta")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function qr(_, a) {
        1 & _ && (e.TgZ(0, "p", 95), e._uU(1, " Campo requerido "), e.qZA());
      }
      function zr(_, a) {
        if (
          (1 & _ && (e.ynx(0), e.YNc(1, qr, 2, 0, "p", 94), e.BQk()), 2 & _)
        ) {
          const i = e.oxw(2);
          let o;
          e.xp6(1),
            e.Q6J(
              "ngIf",
              null == (o = i.getControl("reorganizacionTareas.detalle")) ||
                null == o.errors
                ? null
                : o.errors.required
            );
        }
      }
      function wr(_, a) {
        if (
          (1 & _ &&
            (e.TgZ(0, "div", 6)(1, "div", 32)(2, "div", 17),
            e._UZ(3, "app-label-form", 85)(4, "textarea", 103),
            e.YNc(5, zr, 2, 1, "ng-container", 22),
            e.qZA()()()),
          2 & _)
        ) {
          const i = e.oxw();
          let o;
          e.xp6(3),
            e.Q6J("numero", "26.1")("descripcion", "Ingresar detalle:"),
            e.xp6(2),
            e.Q6J(
              "ngIf",
              (null == (o = i.getControl("reorganizacionTareas.detalle"))
                ? null
                : o.invalid) &&
                (null == (o = i.getControl("reorganizacionTareas.detalle"))
                  ? null
                  : o.touched)
            );
        }
      }
      const Qr = [
        {
          path: "cuestionario",
          component: (() => {
            class _ {
              constructor(i, o) {
                (this.fb = i),
                  (this.modalService = o),
                  (this.title = "Cuestionario de padres de familia"),
                  (this.lenguajes = ii),
                  (this.listParentesco = oi),
                  (this.universidades = ti),
                  (this.listApoyo = gi),
                  (this.beneficios = _i),
                  (this.listBeneficio = ai),
                  (this.rangosPreparacion = ri),
                  (this.frecuenciaActividades = pi),
                  (this.tiempoActividades = bi),
                  (this.listTipoFinanciamiento = si),
                  (this.listTiempoTraslado = ci),
                  (this.listSiNo = li),
                  (this.siNoObj = he),
                  (this.displayedColumns = Ci),
                  (this.listEstadoCivil = mi),
                  (this.listNivelEducacion = hi),
                  (this.listEstadoPersona = vi),
                  (this.listSituacionLaboral = fi),
                  (this.displayedColumnsOtrosFam = yi),
                  (this.listTareaHogar = Ai),
                  (this.objTareaHogar = ve),
                  (this.listDuracionTarea = Ti),
                  (this.listFrecuenciaTarea = Pi),
                  (this.listEncargados = Li),
                  (this.objEncargado = fe),
                  (this.listPorcentajesResponsabilidad = Mi),
                  (this.listTipoApoyoEconomico = Ii),
                  (this.displayedColumnsApoyoEcon = Si),
                  (this.listMontoEstimado = Ei),
                  (this.listSignificaEducacion = xi),
                  (this.listNroHorasDeApoyo = qi),
                  (this.objPregunta = Hi),
                  (this.lstOpcionesStandar = zi),
                  (this.lstTipoProblemas = wi),
                  (this.lstReorganizacion = Qi),
                  (this.lstUbigeo = Zi),
                  (this.listPreparacion = di),
                  (this.listPagoPreparacion = ui),
                  (this.actividadesExtracademicas = ni),
                  (this.objActividades = me),
                  (this.hasLenguaje = !1),
                  (this.hasParentesco = !1),
                  (this.hasBeneficio = !1),
                  (this.hasOtroBeneficio = !1),
                  (this.hasPreparacion = !1),
                  (this.hasOtroPago = !1),
                  (this.hasAcciones = !1),
                  (this.hasSituacionComplicada = !1),
                  (this.hasFortalezaFamiliar = !1),
                  (this.hasMomentoFamilia = !1),
                  (this.hasReorganizarTareas = !1),
                  (this.hasDeAcuerdo = !1),
                  (this.hasDetalleViaje = !1),
                  (this.isFromLima = !1),
                  this.initForm();
              }
              ngOnInit() {
                this.initActividadesApoyoEconomico(),
                  this.changeLengua(),
                  this.changeParentesco(),
                  this.changeBeneficio(),
                  this.changeTipoBeneficio(),
                  this.changePreUniversitario(),
                  this.changeTipoPago(),
                  this.changeAccionesConcretas(),
                  this.changeSituacionComplicada(),
                  this.changeFortalezaFamiliar(),
                  this.changeMomentoEnFamilia(),
                  this.changeReorganizarTareas(),
                  this.changeEstaDeAcuerdo();
              }
              addValidatorRequired(i) {
                this.getControl(i)?.addValidators(t.kI.required),
                  this.getControl(i)?.updateValueAndValidity({ emitEvent: !1 });
              }
              clearValidatorRequired(i) {
                this.getControl(i)?.clearValidators(),
                  this.getControl(i)?.updateValueAndValidity({ emitEvent: !1 }),
                  this.getControl(i)?.setValue("", { emitEvent: !1 });
              }
              changeLengua() {
                const i =
                  this.cuestionarioForm.controls.lenguaMaterna.valueChanges.subscribe(
                    ({ lengua: o }) => {
                      if (o === ne.Otra)
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
                i || this.subscriptions.push(i);
              }
              changeEstaDeAcuerdo() {
                const i =
                  this.cuestionarioForm.controls.eleccionUniCarrera.valueChanges.subscribe(
                    ({ estaDeAcuerdo: o }) => {
                      if (["No", "No precisa"].includes(o))
                        return (
                          (this.hasDeAcuerdo = !0),
                          void this.addValidatorRequired(
                            "eleccionUniCarrera.detalle"
                          )
                        );
                      this.clearValidatorRequired("eleccionUniCarrera.detalle"),
                        (this.hasDeAcuerdo = !1);
                    }
                  );
                i || this.subscriptions.push(i);
              }
              changeParentesco() {
                const i =
                  this.cuestionarioForm
                    .get("postulante.parentesco")
                    ?.valueChanges.subscribe(({ tipo: o }) => {
                      if (o === pe.Otro)
                        return (
                          (this.hasParentesco = !0),
                          void this.addValidatorRequired(
                            "postulante.parentesco.detalle"
                          )
                        );
                      this.clearValidatorRequired(
                        "postulante.parentesco.detalle"
                      ),
                        (this.hasParentesco = !1);
                    }) || new Z.w0();
                i || this.subscriptions.push(i);
              }
              changeBeneficio() {
                const i =
                  this.cuestionarioForm
                    .get("beneficioEconomico")
                    ?.valueChanges.subscribe(({ fueAcreedor: o }) => {
                      if (o === be.si)
                        return (
                          (this.hasBeneficio = !0),
                          this.getControl(
                            "beneficioEconomico.tipoBeneficio.beneficio"
                          )?.addValidators(t.kI.required),
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
                    }) || new Z.w0();
                i || this.subscriptions.push(i);
              }
              changeTipoBeneficio() {
                const i =
                  this.cuestionarioForm
                    .get("beneficioEconomico.tipoBeneficio")
                    ?.valueChanges.pipe((0, ie.b)((o) => console.log(o)))
                    .subscribe(({ beneficio: o }) => {
                      if (o === se.otros)
                        return (
                          (this.hasOtroBeneficio = !0),
                          this.getControl(
                            "beneficioEconomico.tipoBeneficio.detalle"
                          )?.addValidators(t.kI.required),
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
                    }) || new Z.w0();
                i || this.subscriptions.push(i);
              }
              changePreUniversitario() {
                const i =
                  this.cuestionarioForm
                    .get("preparacionPreUniversitaria")
                    ?.valueChanges.subscribe(({ tuvo: o }) => {
                      if (o === ce.si)
                        return (
                          (this.hasPreparacion = !0),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.periodo"
                          )?.addValidators(t.kI.required),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.periodo"
                          )?.updateValueAndValidity({ emitEvent: !1 }),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.pagadoPor"
                          )?.addValidators(t.kI.required),
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
                    }) || new Z.w0();
                i || this.subscriptions.push(i);
              }
              changeTipoPago() {
                const i =
                  this.cuestionarioForm
                    .get("preparacionPreUniversitaria.aCargo")
                    ?.valueChanges.pipe((0, ie.b)((o) => console.log(o)))
                    .subscribe(({ pagadoPor: o }) => {
                      if (o === le.otros)
                        return (
                          (this.hasOtroPago = !0),
                          this.getControl(
                            "preparacionPreUniversitaria.aCargo.detalle"
                          )?.addValidators(t.kI.required),
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
                    }) || new Z.w0();
                i || this.subscriptions.push(i);
              }
              changeAccionesConcretas() {
                const i =
                  this.cuestionarioForm.controls.accionesConcretas.valueChanges.subscribe(
                    ({ accion: o }) => {
                      if ((console.log(o), o === this.lstOpcionesStandar[0]))
                        return (
                          (this.hasAcciones = !0),
                          this.getControl(
                            "accionesConcretas.detalle"
                          )?.addValidators(t.kI.required),
                          void this.getControl(
                            "accionesConcretas.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "accionesConcretas.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "accionesConcretas.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl("accionesConcretas.detalle")?.setValue(
                          "",
                          { emitEvent: !1 }
                        ),
                        (this.hasAcciones = !1);
                    }
                  );
                i || this.subscriptions.push(i);
              }
              changeSituacionComplicada() {
                const i =
                  this.cuestionarioForm.controls.situacionComplicada.valueChanges.subscribe(
                    ({ rpta: o }) => {
                      if ((console.log(o), o === this.lstOpcionesStandar[0]))
                        return (
                          (this.hasSituacionComplicada = !0),
                          this.getControl(
                            "situacionComplicada.detalle"
                          )?.addValidators(t.kI.required),
                          void this.getControl(
                            "situacionComplicada.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "situacionComplicada.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "situacionComplicada.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "situacionComplicada.detalle"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasSituacionComplicada = !1);
                    }
                  );
                i || this.subscriptions.push(i);
              }
              changeFortalezaFamiliar() {
                const i =
                  this.cuestionarioForm.controls.fortalezasFamiliares.valueChanges.subscribe(
                    ({ rpta: o }) => {
                      if ((console.log(o), o === this.lstOpcionesStandar[0]))
                        return (
                          (this.hasFortalezaFamiliar = !0),
                          this.getControl(
                            "fortalezasFamiliares.detalle"
                          )?.addValidators(t.kI.required),
                          void this.getControl(
                            "fortalezasFamiliares.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "fortalezasFamiliares.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "fortalezasFamiliares.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "fortalezasFamiliares.detalle"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasFortalezaFamiliar = !1);
                    }
                  );
                i || this.subscriptions.push(i);
              }
              changeMomentoEnFamilia() {
                const i =
                  this.cuestionarioForm.controls.momentoEnFamilia.valueChanges.subscribe(
                    ({ rpta: o }) => {
                      if ((console.log(o), o === this.lstOpcionesStandar[0]))
                        return (
                          (this.hasMomentoFamilia = !0),
                          this.getControl(
                            "momentoEnFamilia.detalle"
                          )?.addValidators(t.kI.required),
                          void this.getControl(
                            "momentoEnFamilia.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "momentoEnFamilia.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "momentoEnFamilia.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl("momentoEnFamilia.detalle")?.setValue(
                          "",
                          { emitEvent: !1 }
                        ),
                        (this.hasMomentoFamilia = !1);
                    }
                  );
                i || this.subscriptions.push(i);
              }
              changeReorganizarTareas() {
                const i =
                  this.cuestionarioForm.controls.reorganizacionTareas.valueChanges.subscribe(
                    ({ rpta: o }) => {
                      if ((console.log(o), "Otros (especificar)" === o))
                        return (
                          (this.hasReorganizarTareas = !0),
                          this.getControl(
                            "reorganizacionTareas.detalle"
                          )?.addValidators(t.kI.required),
                          void this.getControl(
                            "reorganizacionTareas.detalle"
                          )?.updateValueAndValidity({ emitEvent: !1 })
                        );
                      this.getControl(
                        "reorganizacionTareas.detalle"
                      )?.clearValidators(),
                        this.getControl(
                          "reorganizacionTareas.detalle"
                        )?.updateValueAndValidity({ emitEvent: !1 }),
                        this.getControl(
                          "reorganizacionTareas.detalle"
                        )?.setValue("", { emitEvent: !1 }),
                        (this.hasReorganizarTareas = !1);
                    }
                  );
                i || this.subscriptions.push(i);
              }
              initForm() {
                this.cuestionarioForm = this.fb.group({
                  lenguaMaterna: this.fb.group({
                    lengua: ["", [t.kI.required]],
                    detalle: [""],
                  }),
                  ubigeo: ["", [t.kI.required]],
                  responsable: this.fb.group({
                    nombresApellidos: ["", [t.kI.required]],
                    dni: [
                      "",
                      [
                        t.kI.required,
                        t.kI.pattern(de.I.onlyNumber),
                        t.kI.minLength(8),
                        t.kI.maxLength(8),
                      ],
                    ],
                  }),
                  postulante: this.fb.group({
                    nombresApellidos: ["", [t.kI.required]],
                    dni: [
                      "",
                      [
                        t.kI.required,
                        t.kI.pattern(de.I.onlyNumber),
                        t.kI.minLength(8),
                        t.kI.maxLength(8),
                      ],
                    ],
                    parentesco: this.fb.group({
                      tipo: ["", [t.kI.required]],
                      detalle: [""],
                    }),
                  }),
                  universidadAlaQuePostula: this.fb.group({
                    universidad: ["", [t.kI.required]],
                    carrera: ["", [t.kI.required]],
                  }),
                  fortalezasCualidadesPostulante: ["", [t.kI.required]],
                  ayudaProcesoPostulación: ["", [t.kI.required]],
                  accionesApoyo: this.fb.array([], t.kI.required),
                  eleccionUniCarrera: this.fb.group({
                    motivo: ["", [t.kI.required]],
                    estaDeAcuerdo: ["", [t.kI.required]],
                    detalle: [""],
                  }),
                  beneficioEconomico: this.fb.group({
                    fueAcreedor: ["", [t.kI.required]],
                    tipoBeneficio: this.fb.group({
                      beneficio: [""],
                      detalle: [""],
                    }),
                  }),
                  preparacionPreUniversitaria: this.fb.group({
                    tuvo: ["", [t.kI.required]],
                    aCargo: this.fb.group({
                      periodo: [""],
                      pagadoPor: [""],
                      detalle: [""],
                    }),
                  }),
                  actividadesExtracademicas: this.fb.array([], t.kI.required),
                  direccionVivienda: [""],
                  coordenadasVivienda: [{ value: "", disabled: !1 }],
                  tiempoTraslado: [""],
                  familiaNuclear: this.fb.array([this.initFamiliaNuclear()]),
                  tareasQueApoyaElPostulante: this.fb.array([], t.kI.required),
                  horasDiariasApoyoTareasDelHogarPostulante: [
                    "",
                    [t.kI.required],
                  ],
                  encargadosTareasDelHogar: this.fb.array([], t.kI.required),
                  actividadesApoyoEconomico: this.fb.array([]),
                  principalesReglasCasa: ["", [t.kI.required]],
                  significadoEducacion: this.fb.array([], t.kI.required),
                  accionesConcretas: this.fb.group({
                    accion: ["", [t.kI.required]],
                    detalle: [""],
                  }),
                  situacionComplicada: this.fb.group({
                    rpta: ["", [t.kI.required]],
                    detalle: [""],
                  }),
                  problemasQuePresenta: this.fb.array([], t.kI.required),
                  estrategiasResolverProblema: ["", [t.kI.required]],
                  fortalezasFamiliares: this.fb.group({
                    rpta: ["", [t.kI.required]],
                    detalle: [""],
                  }),
                  momentoEnFamilia: this.fb.group({
                    rpta: ["", [t.kI.required]],
                    detalle: [""],
                  }),
                  reorganizacionTareas: this.fb.group({
                    rpta: ["", [t.kI.required]],
                    detalle: [""],
                  }),
                });
              }
              addActividad(i) {
                console.log(i),
                  this.arrayActividades.push(
                    this.initActividadExtracademica(i)
                  );
              }
              addSignificadoEducacion(i) {
                this.arraySignificadoEducacion.length < 2 &&
                  this.arraySignificadoEducacion.push(
                    this.initSignificadoEducacion(i)
                  );
              }
              changeUbigeo(i) {
                console.log(i);
                const o = ["Lima", "Callao"];
                if (i.length) {
                  const d = [
                      "direccionVivienda",
                      "coordenadasVivienda",
                      "tiempoTraslado",
                    ],
                    u = i[0].split("-").map((g) => g.trim());
                  if ("Lima" === u[0] && o.includes(u[1]))
                    return (
                      console.log("es lima"),
                      d.forEach((g) => {
                        this.getControl(g)?.addValidators(t.kI.required),
                          this.getControl(g)?.updateValueAndValidity({
                            emitEvent: !1,
                          });
                      }),
                      void (this.isFromLima = !0)
                    );
                  d.forEach((g) => {
                    this.getControl(g)?.clearValidators(),
                      this.getControl(g)?.updateValueAndValidity({
                        emitEvent: !1,
                      }),
                      this.getControl(g)?.setValue("", { emitEvent: !1 });
                  }),
                    (this.isFromLima = !1);
                } else this.isFromLima = !1;
              }
              addTareaHogar(i) {
                console.log(i),
                  this.arrayTareasHogar.push(this.initTareasDelHogar(i));
              }
              addAccionApoyo(i) {
                console.log(i),
                  this.arrayAccionesApoyo.push(this.initAccionApoyo(i));
              }
              addProblemasQuePresenta(i) {
                console.log(i),
                  this.arrayProblemasQuePresenta.push(
                    this.initProblemaQuePresenta(i)
                  );
              }
              addEncargadoTarea(i) {
                console.log(i),
                  this.arrayEncargadoTarea.push(
                    this.initEncargadosTareasDelHogar(i)
                  );
              }
              deleteActividad(i) {
                const o = this.arrayActividades.value.findIndex(
                  (d) => d.tipoActividad.actividad === i.value
                );
                o >= 0 && this.arrayActividades.removeAt(o);
              }
              deleteSignificadoEducacion(i) {
                const o = this.arraySignificadoEducacion.value.findIndex(
                  (d) => d.significado.rpta === i.value
                );
                o >= 0 && this.arraySignificadoEducacion.removeAt(o);
              }
              deleteTareaHogar(i) {
                const o = this.arrayTareasHogar.value.findIndex(
                  (d) => d.tipoTarea.tarea === i.value
                );
                o >= 0 && this.arrayTareasHogar.removeAt(o);
              }
              deleteAccionApoyo(i) {
                const o = this.arrayAccionesApoyo.value.findIndex(
                  (d) => d.tipoAccion.accion === i.value
                );
                o >= 0 && this.arrayAccionesApoyo.removeAt(o);
              }
              deleteProblemaQuePresenta(i) {
                const o = this.arrayProblemasQuePresenta.value.findIndex(
                  (d) => d.tipoProblema.problema === i.value
                );
                o >= 0 && this.arrayProblemasQuePresenta.removeAt(o);
              }
              deleteEncargadoTarea(i) {
                const o = this.arrayEncargadoTarea.value.findIndex(
                  (d) => d.encargado.miembro === i.value
                );
                o >= 0 && this.arrayEncargadoTarea.removeAt(o);
              }
              clearActividades() {
                this.arrayActividades.value.forEach(() =>
                  this.arrayActividades.removeAt(0)
                );
              }
              clearAccionApoyo() {
                this.arrayAccionesApoyo.value.forEach(() =>
                  this.arrayAccionesApoyo.removeAt(0)
                );
              }
              clearProblemasQuePresenta() {
                this.arrayProblemasQuePresenta.value.forEach(() =>
                  this.arrayProblemasQuePresenta.removeAt(0)
                );
              }
              clearSignificadoEducacion() {
                this.arraySignificadoEducacion.value.forEach(() =>
                  this.arraySignificadoEducacion.removeAt(0)
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
              initActividadExtracademica(i = "") {
                return this.fb.group({
                  tipoActividad: this.fb.group({
                    actividad: [i, [t.kI.required]],
                    detalle: this.getValidatorsRequired(i),
                  }),
                  financiado: this.fb.group({
                    financiadoPor: ["", [t.kI.required]],
                    detalle: ["", []],
                  }),
                });
              }
              initSignificadoEducacion(i = "") {
                return this.fb.group({
                  significado: this.fb.group({
                    rpta: [i, [t.kI.required]],
                    detalle: this.getValidatorsRequired(i),
                  }),
                });
              }
              initTareasDelHogar(i = "") {
                return this.fb.group({
                  tipoTarea: this.fb.group({
                    tarea: [i, [t.kI.required]],
                    detalle: this.getValidatorsRequired(i),
                  }),
                });
              }
              initAccionApoyo(i = "") {
                return this.fb.group({
                  tipoAccion: this.fb.group({
                    accion: [i, [t.kI.required]],
                    detalle: this.getValidatorsRequired(i),
                  }),
                });
              }
              initProblemaQuePresenta(i = "") {
                return this.fb.group({
                  tipoProblema: this.fb.group({
                    problema: [i, [t.kI.required]],
                    detalle: this.getValidatorsRequired(i),
                  }),
                });
              }
              initEncargadosTareasDelHogar(i = "") {
                return this.fb.group({
                  encargado: this.fb.group({
                    miembro: [i, [t.kI.required]],
                    detalle: this.getValidatorsRequired(i),
                  }),
                  porcentaje: ["", [t.kI.required]],
                });
              }
              initFamiliaNuclear() {
                return this.fb.group({
                  parentesco: ["", [t.kI.required]],
                  nombres: ["", [t.kI.required]],
                  apellidos: ["", [t.kI.required]],
                  edad: ["", [t.kI.required]],
                  estadoCivil: ["", [t.kI.required]],
                  nivelEducacion: ["", [t.kI.required]],
                  viveoFallecido: ["", [t.kI.required]],
                  viveConElPostulante: ["", [t.kI.required]],
                  situacionLaboral: ["", [t.kI.required]],
                });
              }
              initActividadX(i = "") {
                return this.fb.group({
                  actividad: [i, [t.kI.required]],
                  necesita: ["", [t.kI.required]],
                });
              }
              initActividadesApoyoEconomico() {
                this.listTipoApoyoEconomico.forEach((i) =>
                  this.arrayActividadesApoyoEconomico.push(
                    this.initActividadX(i)
                  )
                );
              }
              addActividadApoyo() {
                this.arrayActividadesApoyoEconomico.push(this.initActividadX());
              }
              deletActiviadaApoyo(i) {
                this.arrayActividadesApoyoEconomico.removeAt(i);
              }
              addFamiliarNuclear() {
                this.arrayFamiliaNuclear.push(this.initFamiliaNuclear());
              }
              deleteFamiliarNuclear(i) {
                this.arrayFamiliaNuclear.removeAt(i);
              }
              changeFinanciadoPor(i, o = 0) {
                if (
                  (console.log(
                    this.arrayActividades.controls[o].get("financiado.detalle")
                  ),
                  console.log(i),
                  this.objActividades.otros === i.target.value)
                )
                  return (
                    this.arrayActividades.controls[o]
                      .get("financiado.detalle")
                      ?.addValidators(t.kI.required),
                    void this.arrayActividades.controls[o]
                      .get("financiado.detalle")
                      ?.updateValueAndValidity({ emitEvent: !1 })
                  );
                this.arrayActividades.controls[o]
                  .get("financiado.detalle")
                  ?.clearValidators(),
                  this.arrayActividades.controls[o]
                    .get("financiado.detalle")
                    ?.updateValueAndValidity({ emitEvent: !1 }),
                  this.arrayActividades.controls[o]
                    .get("financiado.detalle")
                    ?.setValue("", { emitEvent: !1 }),
                  console.log(
                    this.arrayActividades.controls[o].get("financiado.detalle")
                  );
              }
              getValidatorsRequired(i = "") {
                return this.objActividades.otros === i
                  ? ["", [t.kI.required]]
                  : [""];
              }
              get arraySignificadoEducacion() {
                return this.cuestionarioForm.get("significadoEducacion");
              }
              get arrayAccionesApoyo() {
                return this.cuestionarioForm.get("accionesApoyo");
              }
              get arrayProblemasQuePresenta() {
                return this.cuestionarioForm.get("problemasQuePresenta");
              }
              get arrayActividades() {
                return this.cuestionarioForm.get("actividadesExtracademicas");
              }
              get arrayFamiliaNuclear() {
                return this.cuestionarioForm.get("familiaNuclear");
              }
              get arrayTareasHogar() {
                return this.cuestionarioForm.get("tareasQueApoyaElPostulante");
              }
              get arrayEncargadoTarea() {
                return this.cuestionarioForm.get("encargadosTareasDelHogar");
              }
              get arrayActividadesApoyoEconomico() {
                return this.cuestionarioForm.get("actividadesApoyoEconomico");
              }
              getControl(i) {
                return this.cuestionarioForm.get(i);
              }
              openDialogErrorform() {
                const i = this.modalService.open(Ce.b, { backdrop: "static" });
                (i.componentInstance.title = "IMPORTANTE!!! Campos Requeridos"),
                  (i.componentInstance.message =
                    "Por favor, ingresar todos los campos requeridos."),
                  (i.componentInstance.icon = "warning"),
                  (i.componentInstance.showBtnCancel = !1),
                  (i.componentInstance.textBtnSuccess = "Aceptar"),
                  i.result.then((o) => {
                    console.log(o);
                  });
              }
              openMaps() {
                this.modalService
                  .open(ei, { backdrop: "static", keyboard: !1 })
                  .result.then((o) => {
                    console.log(o);
                    const d = o[0];
                    this.getControl("coordenadasVivienda")?.setValue(
                      JSON.stringify(d)
                    );
                  });
              }
              submitForm() {
                if (this.cuestionarioForm.invalid)
                  this.openDialogErrorform(),
                    this.cuestionarioForm.markAllAsTouched();
                else {
                  const i = this.modalService.open(Ce.b, {
                    backdrop: "static",
                  });
                  (i.componentInstance.title = "\xa1Muchas Gracias!"),
                    (i.componentInstance.message =
                      "Los datos del cuestionario fueron registrados con \xe9xito"),
                    (i.componentInstance.modalHeader = !1),
                    (i.componentInstance.titleSuccess = !0),
                    (i.componentInstance.showBtnCancel = !1),
                    i.result.then((o) => {
                      console.log(o);
                    });
                }
              }
            }
            return (
              (_.ɵfac = function (i) {
                return new (i || _)(e.Y36(t.qu), e.Y36(F.FF));
              }),
              (_.ɵcmp = e.Xpm({
                type: _,
                selectors: [["app-questionary-bcp"]],
                decls: 331,
                vars: 195,
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
                  [
                    "href",
                    "https://www.leyes.congreso.gob.pe/Documentos/Leyes/29733.pdf",
                    "target",
                    "_blank",
                    1,
                    "color-azul",
                    "txt-underline",
                  ],
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
                  ["value", "", "disabled", "", "hidden", ""],
                  [3, "value", 4, "ngFor", "ngForOf"],
                  [4, "ngIf"],
                  [1, "col-sm-12", "col-md-6"],
                  [3, "numero", "descripcion", "textoAdicional", "for"],
                  [
                    "placeholder",
                    "-Seleccionar-",
                    "formControlName",
                    "ubigeo",
                    3,
                    "multiple",
                    "maxSelectedItems",
                    "closeOnSelect",
                    "change",
                  ],
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
                  [1, "col-sm-12", "col-md-8"],
                  [
                    "placeholder",
                    "-Seleccionar-",
                    "id",
                    "accionesApoyo",
                    3,
                    "multiple",
                    "maxSelectedItems",
                    "closeOnSelect",
                    "add",
                    "remove",
                    "clear",
                  ],
                  ["formArrayName", "accionesApoyo"],
                  ["class", "row", 3, "formGroupName", 4, "ngFor", "ngForOf"],
                  ["formGroupName", "eleccionUniCarrera", 1, "row"],
                  ["formControlName", "motivo", "rows", "5", 1, "form-control"],
                  [
                    "formControlName",
                    "estaDeAcuerdo",
                    1,
                    "form-select",
                    "mb-2",
                  ],
                  ["value", "Si"],
                  ["value", "No"],
                  ["value", "No precisa"],
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
                  [
                    "placeholder",
                    "-Seleccionar-",
                    3,
                    "multiple",
                    "closeOnSelect",
                    "add",
                    "remove",
                    "clear",
                  ],
                  ["formArrayName", "actividadesExtracademicas"],
                  ["class", "row", 4, "ngIf"],
                  ["formArrayName", "familiaNuclear"],
                  [1, "table-responsive", "col-sm-12", "col-md", "12", "mb-3"],
                  [1, "table"],
                  ["scope", "col", 3, "min-width", 4, "ngFor", "ngForOf"],
                  [3, "formGroupName", 4, "ngFor", "ngForOf"],
                  [1, "d-flex", "justify-content-end"],
                  [1, "mdi", "mdi-arrow-right"],
                  [1, "col-sm-12"],
                  [1, "btn", "btn-outline-success", "mt-1", "mb-3", 3, "click"],
                  [1, "mdi", "mdi-plus"],
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
                  [
                    "placeholder",
                    "-Seleccionar-",
                    3,
                    "multiple",
                    "maxSelectedItems",
                    "closeOnSelect",
                    "add",
                    "remove",
                    "clear",
                  ],
                  ["formArrayName", "significadoEducacion"],
                  ["formGroupName", "accionesConcretas"],
                  ["formControlName", "accion", 1, "form-select"],
                  ["formGroupName", "situacionComplicada"],
                  ["formControlName", "rpta", 1, "form-select"],
                  ["formArrayName", "problemasQuePresenta"],
                  [3, "numero", "descripcion"],
                  [
                    "formControlName",
                    "estrategiasResolverProblema",
                    "rows",
                    "5",
                    1,
                    "form-control",
                  ],
                  ["formGroupName", "fortalezasFamiliares"],
                  ["formGroupName", "momentoEnFamilia"],
                  ["formGroupName", "reorganizacionTareas"],
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
                  [1, "row", 3, "formGroupName"],
                  [1, "col-sm-3", "col-md-6"],
                  ["formGroupName", "tipoAccion", 1, "mb-3"],
                  [
                    "type",
                    "text",
                    "formControlName",
                    "detalle",
                    "placeholder",
                    "especificar acci\xf3n",
                    1,
                    "form-control",
                  ],
                  [
                    "formControlName",
                    "detalle",
                    "rows",
                    "5",
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
                  [
                    "formControlName",
                    "beneficio",
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
                    "Especificar beneficio",
                    1,
                    "form-control",
                  ],
                  ["formGroupName", "aCargo", 1, "col-sm-12", "col-md-12"],
                  [
                    "formControlName",
                    "pagadoPor",
                    "id",
                    "selecBene",
                    1,
                    "form-select",
                  ],
                  ["formControlName", "periodo", 1, "form-select"],
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
                  [1, "col-sm-3", "col-md-3"],
                  ["formGroupName", "tipoActividad", 1, "mb-3"],
                  [1, "col-sm-3", "col-md-4"],
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
                  ["for", ""],
                  [
                    "formControlName",
                    "detalle",
                    "type",
                    "text",
                    1,
                    "form-control",
                  ],
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
                  ["lblApoyoEconomico", ""],
                  ["formControlName", "necesita", 1, "form-select"],
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
                  ["formGroupName", "significado", 1, "mb-3"],
                  ["for", "detalleSignificado"],
                  [
                    "type",
                    "text",
                    "formControlName",
                    "detalle",
                    "placeholder",
                    "especificar significado",
                    "id",
                    "detalleSignificado",
                    1,
                    "form-control",
                  ],
                  ["formGroupName", "tipoProblema", 1, "mb-3"],
                  [
                    "type",
                    "text",
                    "formControlName",
                    "detalle",
                    "placeholder",
                    "especificar problema",
                    1,
                    "form-control",
                  ],
                ],
                template: function (i, o) {
                  if (
                    (1 & i &&
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
                        " A continuaci\xf3n encontrar\xe1n una serie de preguntas que requerimos respondan con total transparencia y sinceridad. Estas preguntas tienen car\xe1cter de declaraci\xf3n jurada. No hay respuestas correctas o incorrectas. El objetivo de las mismas es poder conocer a las familias de nuestros postulantes como parte del Proceso de Selecci\xf3n al Programa. "
                      ),
                      e.qZA(),
                      e.TgZ(13, "div", 9)(14, "div", 10)(15, "p"),
                      e._uU(
                        16,
                        " Si tuvieran alguna dificultad para la comprensi\xf3n o redacci\xf3n de sus ideas por escrito, le recomendamos pedirle ayuda a un familiar o comunicarse con el equipo de IPFE al "
                      ),
                      e.TgZ(17, "b"),
                      e._uU(18, "tel\xe9fono (01) 739 0570"),
                      e.qZA(),
                      e._uU(19, ". "),
                      e.qZA(),
                      e.TgZ(20, "p"),
                      e._uU(
                        21,
                        " Las respuestas a estas preguntas no influyen de ninguna manera en el proceso de selecci\xf3n o posible asignaci\xf3n del beneficio. "
                      ),
                      e.qZA(),
                      e.TgZ(22, "p"),
                      e._uU(
                        23,
                        " Esta informaci\xf3n ser\xe1 tratada con total confidencialidad de acuerdo a la "
                      ),
                      e.TgZ(24, "a", 11),
                      e._uU(
                        25,
                        "Ley de Protecci\xf3n de Datos Personales N\xb0 29733."
                      ),
                      e.qZA()(),
                      e.TgZ(26, "p"),
                      e._uU(
                        27,
                        " Les agradecemos de antemano por el tiempo y honestidad brindada. "
                      ),
                      e.qZA(),
                      e._UZ(28, "br"),
                      e.TgZ(29, "p"),
                      e._uU(30, "Atentamente,"),
                      e.qZA(),
                      e.TgZ(31, "p", 12)(32, "b"),
                      e._uU(33, "Programa de Becas BCP"),
                      e.qZA()(),
                      e._UZ(34, "br"),
                      e.TgZ(35, "p", 8)(36, "b"),
                      e._uU(37, "(*) Importante:"),
                      e.qZA(),
                      e._uU(
                        38,
                        " Es necesario que la persona que responda el cuestionario sea el/la principal cuidador(a) del/la postulante. "
                      ),
                      e.qZA()(),
                      e._UZ(39, "img", 13),
                      e.qZA()()(),
                      e.TgZ(40, "div", 6)(41, "form", 14, 15)(43, "div", 6)(
                        44,
                        "div",
                        16
                      )(45, "div", 17),
                      e._UZ(46, "app-label-form", 18),
                      e.TgZ(47, "select", 19)(48, "option", 20),
                      e._uU(49, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(50, Ko, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(51, e_, 2, 1, "ng-container", 22),
                      e.qZA(),
                      e.YNc(52, __, 7, 1, "ng-container", 22),
                      e.qZA(),
                      e.TgZ(53, "div", 23)(54, "div", 17),
                      e._UZ(55, "app-label-form", 24),
                      e.TgZ(56, "ng-select", 25),
                      e.NdJ("change", function (r) {
                        return o.changeUbigeo(r);
                      }),
                      e.YNc(57, a_, 2, 2, "ng-option", 21),
                      e.qZA(),
                      e.YNc(58, r_, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(59, "div", 26)(60, "div", 23)(61, "div", 17),
                      e._UZ(62, "app-label-form", 18)(63, "input", 27),
                      e.YNc(64, t_, 2, 1, "ng-container", 22),
                      e.qZA()(),
                      e.TgZ(65, "div", 23)(66, "div", 17),
                      e._UZ(67, "app-label-form", 18)(68, "input", 28),
                      e.YNc(69, s_, 5, 4, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(70, "div", 29)(71, "div", 23)(72, "div", 17),
                      e._UZ(73, "app-label-form", 18)(74, "input", 30),
                      e.YNc(75, l_, 2, 1, "ng-container", 22),
                      e.qZA()(),
                      e.TgZ(76, "div", 23)(77, "div", 17),
                      e._UZ(78, "app-label-form", 18)(79, "input", 31),
                      e.YNc(80, C_, 5, 4, "ng-container", 22),
                      e.qZA()(),
                      e.TgZ(81, "div", 32)(82, "div", 33)(83, "div", 23)(
                        84,
                        "div",
                        17
                      ),
                      e._UZ(85, "app-label-form", 18),
                      e.TgZ(86, "select", 34)(87, "option", 20),
                      e._uU(88, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(89, y_, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(90, T_, 2, 1, "ng-container", 22),
                      e.qZA()(),
                      e.TgZ(91, "div", 23),
                      e.YNc(92, M_, 5, 4, "ng-container", 35),
                      e.qZA()()()(),
                      e.TgZ(93, "div", 36)(94, "div", 23)(95, "div", 17),
                      e._UZ(96, "app-label-form", 18),
                      e.TgZ(97, "select", 37)(98, "option", 20),
                      e._uU(99, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(100, S_, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(101, E_, 2, 1, "ng-container", 22),
                      e.qZA()(),
                      e.TgZ(102, "div", 23)(103, "div", 17),
                      e._UZ(104, "app-label-form", 18)(105, "input", 38),
                      e.YNc(106, q_, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(107, "div", 6)(108, "div", 32)(109, "div", 17),
                      e._UZ(110, "app-label-form", 18)(111, "textarea", 39),
                      e.YNc(112, w_, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(113, "div", 6)(114, "div", 32)(115, "div", 17),
                      e._UZ(116, "app-label-form", 18)(117, "textarea", 40),
                      e.YNc(118, H_, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(119, "div", 6)(120, "div", 41)(121, "div", 17),
                      e._UZ(122, "app-label-form", 24),
                      e.TgZ(123, "ng-select", 42),
                      e.NdJ("add", function (r) {
                        return o.addAccionApoyo(r);
                      })("remove", function (r) {
                        return o.deleteAccionApoyo(r);
                      })("clear", function () {
                        return o.clearAccionApoyo();
                      }),
                      e.YNc(124, Z_, 2, 2, "ng-option", 21),
                      e.qZA(),
                      e.YNc(125, O_, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.ynx(126, 43),
                      e.YNc(127, J_, 2, 2, "div", 44),
                      e.BQk(),
                      e.TgZ(128, "div", 45)(129, "div", 23)(130, "div", 17),
                      e._UZ(131, "app-label-form", 18)(132, "textarea", 46),
                      e.YNc(133, j_, 2, 1, "ng-container", 22),
                      e.qZA()(),
                      e.TgZ(134, "div", 23)(135, "div", 17),
                      e._UZ(136, "app-label-form", 18),
                      e.TgZ(137, "select", 47)(138, "option", 20),
                      e._uU(139, "-Seleccionar-"),
                      e.qZA(),
                      e.TgZ(140, "option", 48),
                      e._uU(141, "S\xed"),
                      e.qZA(),
                      e.TgZ(142, "option", 49),
                      e._uU(143, "No"),
                      e.qZA(),
                      e.TgZ(144, "option", 50),
                      e._uU(145, "No precisa"),
                      e.qZA()(),
                      e.YNc(146, Y_, 2, 1, "ng-container", 22),
                      e.YNc(147, G_, 4, 3, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(148, "div", 51)(149, "div", 23)(150, "div", 17),
                      e._UZ(151, "app-label-form", 18),
                      e.TgZ(152, "select", 52)(153, "option", 20),
                      e._uU(154, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(155, $_, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(156, K_, 2, 1, "ng-container", 22),
                      e.qZA()(),
                      e.YNc(157, da, 10, 5, "div", 53),
                      e.qZA(),
                      e.TgZ(158, "div", 54)(159, "div", 23)(160, "div", 17),
                      e._UZ(161, "app-label-form", 18),
                      e.TgZ(162, "select", 55)(163, "option", 20),
                      e._uU(164, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(165, ra, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(166, ta, 2, 1, "ng-container", 22),
                      e.qZA()(),
                      e.YNc(167, va, 17, 9, "div", 56),
                      e.qZA(),
                      e.TgZ(168, "div", 6)(169, "div", 32)(170, "div", 17),
                      e._UZ(171, "app-label-form", 24),
                      e.TgZ(172, "ng-select", 57),
                      e.NdJ("add", function (r) {
                        return o.addActividad(r);
                      })("remove", function (r) {
                        return o.deleteActividad(r);
                      })("clear", function () {
                        return o.clearActividades();
                      }),
                      e.YNc(173, fa, 2, 2, "ng-option", 21),
                      e.qZA(),
                      e.YNc(174, Ca, 3, 0, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(175, "div", 58),
                      e.YNc(176, xa, 17, 6, "div", 44),
                      e.qZA(),
                      e.YNc(177, wa, 6, 5, "div", 59),
                      e.YNc(178, Za, 11, 2, "div", 59),
                      e.YNc(179, ka, 7, 5, "div", 59),
                      e.TgZ(180, "div", 17),
                      e._UZ(181, "app-label-form", 18),
                      e.qZA(),
                      e.ynx(182, 60),
                      e.TgZ(183, "div", 61)(184, "table", 62)(185, "thead")(
                        186,
                        "tr"
                      ),
                      e.YNc(187, Na, 2, 3, "th", 63),
                      e._UZ(188, "th"),
                      e.qZA()(),
                      e.TgZ(189, "tbody"),
                      e.YNc(190, bd, 44, 16, "tr", 64),
                      e.qZA()()(),
                      e.TgZ(191, "div", 65)(192, "p", 8),
                      e._uU(193, " Revisar campos a la derecha "),
                      e._UZ(194, "i", 66),
                      e.qZA()(),
                      e.TgZ(195, "div", 6)(196, "div", 67)(197, "button", 68),
                      e.NdJ("click", function () {
                        return o.addFamiliarNuclear();
                      }),
                      e._UZ(198, "i", 69),
                      e._uU(199, " Agregar familiar "),
                      e.qZA()()(),
                      e.BQk(),
                      e.TgZ(200, "div", 6)(201, "div", 32)(202, "div", 17),
                      e._UZ(203, "app-label-form", 24),
                      e.TgZ(204, "ng-select", 57),
                      e.NdJ("add", function (r) {
                        return o.addTareaHogar(r);
                      })("remove", function (r) {
                        return o.deleteTareaHogar(r);
                      })("clear", function () {
                        return o.clearTareasHogar();
                      }),
                      e.YNc(205, sd, 2, 2, "ng-option", 21),
                      e.qZA(),
                      e.YNc(206, cd, 3, 0, "ng-container", 22),
                      e.qZA()()(),
                      e.ynx(207, 70),
                      e.YNc(208, vd, 2, 2, "div", 44),
                      e.BQk(),
                      e.TgZ(209, "div", 6)(210, "div", 32)(211, "div", 17),
                      e._UZ(212, "app-label-form", 18),
                      e.TgZ(213, "select", 71)(214, "option", 20),
                      e._uU(215, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(216, fd, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(217, yd, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(218, "div", 6)(219, "div", 32)(220, "div", 17),
                      e._UZ(221, "app-label-form", 24),
                      e.TgZ(222, "ng-select", 57),
                      e.NdJ("add", function (r) {
                        return o.addEncargadoTarea(r);
                      })("remove", function (r) {
                        return o.deleteEncargadoTarea(r);
                      })("clear", function () {
                        return o.clearResponsablesTarea();
                      }),
                      e.YNc(223, Ad, 2, 2, "ng-option", 21),
                      e.qZA(),
                      e.YNc(224, Td, 3, 0, "ng-container", 22),
                      e.qZA()()(),
                      e.ynx(225, 72),
                      e.YNc(226, xd, 15, 5, "div", 44),
                      e.BQk(),
                      e.TgZ(227, "div", 6)(228, "div", 73),
                      e._UZ(229, "app-label-form", 24),
                      e.qZA()(),
                      e.ynx(230, 74),
                      e.TgZ(231, "div", 75)(232, "table", 62)(233, "thead")(
                        234,
                        "tr"
                      ),
                      e.YNc(235, qd, 2, 1, "th", 76),
                      e._UZ(236, "th"),
                      e.qZA()(),
                      e.TgZ(237, "tbody"),
                      e.YNc(238, kd, 13, 6, "tr", 64),
                      e.qZA()(),
                      e.TgZ(239, "button", 68),
                      e.NdJ("click", function () {
                        return o.addActividadApoyo();
                      }),
                      e._UZ(240, "i", 69),
                      e._uU(241, " Agregar otra actividad "),
                      e.qZA()(),
                      e.BQk(),
                      e.TgZ(242, "div", 6)(243, "div", 32)(244, "div", 17),
                      e._UZ(245, "app-label-form", 24)(246, "textarea", 77),
                      e.YNc(247, Jd, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(248, "div", 6)(249, "div", 32)(250, "div", 17),
                      e._UZ(251, "app-label-form", 24),
                      e.TgZ(252, "ng-select", 78),
                      e.NdJ("add", function (r) {
                        return o.addSignificadoEducacion(r);
                      })("remove", function (r) {
                        return o.deleteSignificadoEducacion(r);
                      })("clear", function () {
                        return o.clearSignificadoEducacion();
                      }),
                      e.YNc(253, Dd, 2, 2, "ng-option", 21),
                      e.qZA(),
                      e.YNc(254, jd, 3, 0, "ng-container", 22),
                      e.qZA()()(),
                      e.TgZ(255, "div", 79),
                      e.YNc(256, Vd, 4, 2, "div", 44),
                      e.qZA(),
                      e.ynx(257, 80),
                      e.TgZ(258, "div", 6)(259, "div", 32)(260, "div", 17),
                      e._UZ(261, "app-label-form", 24),
                      e.TgZ(262, "select", 81)(263, "option", 20),
                      e._uU(264, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(265, Gd, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(266, Wd, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.YNc(267, er, 6, 3, "div", 59),
                      e.BQk(),
                      e.ynx(268, 82),
                      e.TgZ(269, "div", 6)(270, "div", 32)(271, "div", 17),
                      e._UZ(272, "app-label-form", 24),
                      e.TgZ(273, "select", 83)(274, "option", 20),
                      e._uU(275, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(276, ir, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(277, _r, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.YNc(278, rr, 6, 3, "div", 59),
                      e.BQk(),
                      e.TgZ(279, "div", 6)(280, "div", 41)(281, "div", 17),
                      e._UZ(282, "app-label-form", 24),
                      e.TgZ(283, "ng-select", 57),
                      e.NdJ("add", function (r) {
                        return o.addProblemasQuePresenta(r);
                      })("remove", function (r) {
                        return o.deleteProblemaQuePresenta(r);
                      })("clear", function () {
                        return o.clearProblemasQuePresenta();
                      }),
                      e.YNc(284, ur, 2, 2, "ng-option", 21),
                      e.qZA(),
                      e.YNc(285, gr, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.ynx(286, 84),
                      e.YNc(287, sr, 2, 2, "div", 44),
                      e.BQk(),
                      e.TgZ(288, "div", 6)(289, "div", 32)(290, "div", 17),
                      e._UZ(291, "app-label-form", 85)(292, "textarea", 86),
                      e.YNc(293, lr, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.ynx(294, 87),
                      e.TgZ(295, "div", 6)(296, "div", 32)(297, "div", 17),
                      e._UZ(298, "app-label-form", 24),
                      e.TgZ(299, "select", 83)(300, "option", 20),
                      e._uU(301, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(302, mr, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(303, vr, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.YNc(304, yr, 6, 3, "div", 59),
                      e.BQk(),
                      e.ynx(305, 88),
                      e.TgZ(306, "div", 6)(307, "div", 32)(308, "div", 17),
                      e._UZ(309, "app-label-form", 24),
                      e.TgZ(310, "select", 83)(311, "option", 20),
                      e._uU(312, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(313, Ar, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(314, Pr, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.YNc(315, Sr, 6, 3, "div", 59),
                      e.BQk(),
                      e.ynx(316, 89),
                      e.TgZ(317, "div", 6)(318, "div", 32)(319, "div", 17),
                      e._UZ(320, "app-label-form", 24),
                      e.TgZ(321, "select", 83)(322, "option", 20),
                      e._uU(323, "-Seleccionar-"),
                      e.qZA(),
                      e.YNc(324, Ir, 2, 2, "option", 21),
                      e.qZA(),
                      e.YNc(325, xr, 2, 1, "ng-container", 22),
                      e.qZA()()(),
                      e.YNc(326, wr, 6, 3, "div", 59),
                      e.BQk(),
                      e.TgZ(327, "button", 90),
                      e.NdJ("click", function () {
                        return o.submitForm();
                      }),
                      e.TgZ(328, "span", 91),
                      e._uU(329, "ENVIAR"),
                      e.qZA(),
                      e._UZ(330, "img", 92),
                      e.qZA()()()()()()),
                    2 & i)
                  ) {
                    const d = e.MAs(42);
                    let r,
                      u,
                      g,
                      n,
                      p,
                      m,
                      s,
                      c,
                      f,
                      T,
                      I,
                      E,
                      x,
                      q,
                      z,
                      w,
                      D,
                      j,
                      U,
                      Y,
                      R,
                      V,
                      G,
                      $,
                      W;
                    e.xp6(4),
                      e.Oqu(o.title),
                      e.xp6(37),
                      e.Q6J("formGroup", o.cuestionarioForm),
                      e.xp6(5),
                      e.Q6J("numero", o.objPregunta.uno.nro)(
                        "descripcion",
                        o.objPregunta.uno.descripcion
                      )("for", o.objPregunta.uno.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.lenguajes),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (r = o.getControl("lenguaMaterna.lengua"))
                          ? null
                          : r.invalid) &&
                          (null == (r = o.getControl("lenguaMaterna.lengua"))
                            ? null
                            : r.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasLenguaje),
                      e.xp6(3),
                      e.Q6J("numero", o.objPregunta.unoUno.nro)(
                        "descripcion",
                        o.objPregunta.unoUno.descripcion
                      )("textoAdicional", o.objPregunta.unoUno.datoAdicional)(
                        "for",
                        o.objPregunta.unoUno.for
                      ),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("maxSelectedItems", 1)(
                        "closeOnSelect",
                        !0
                      ),
                      e.xp6(1),
                      e.Q6J("ngForOf", o.lstUbigeo),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (u = o.getControl("ubigeo"))
                          ? null
                          : u.invalid) &&
                          (null == (u = o.getControl("ubigeo"))
                            ? null
                            : u.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.dos.nro)(
                        "descripcion",
                        o.objPregunta.dos.descripcion
                      )("for", o.objPregunta.dos.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (g = o.getControl("responsable.nombresApellidos"))
                          ? null
                          : g.invalid) &&
                          (null ==
                          (g = o.getControl("responsable.nombresApellidos"))
                            ? null
                            : g.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", o.objPregunta.tres.nro)(
                        "descripcion",
                        o.objPregunta.tres.descripcion
                      )("for", o.objPregunta.tres.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (n = o.getControl("responsable.dni"))
                          ? null
                          : n.invalid) &&
                          (null == (n = o.getControl("responsable.dni"))
                            ? null
                            : n.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.cinco.nro)(
                        "descripcion",
                        o.objPregunta.cinco.descripcion
                      )("for", o.objPregunta.cinco.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (p = o.getControl("postulante.nombresApellidos"))
                          ? null
                          : p.invalid) &&
                          (null ==
                          (p = o.getControl("postulante.nombresApellidos"))
                            ? null
                            : p.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", o.objPregunta.seis.nro)(
                        "descripcion",
                        o.objPregunta.seis.descripcion
                      )("for", o.objPregunta.seis.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (m = o.getControl("postulante.dni"))
                          ? null
                          : m.invalid) &&
                          (null == (m = o.getControl("postulante.dni"))
                            ? null
                            : m.touched)
                      ),
                      e.xp6(5),
                      e.Q6J("numero", o.objPregunta.cuatro.nro)(
                        "descripcion",
                        o.objPregunta.cuatro.descripcion
                      )("for", o.objPregunta.cuatro.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.listParentesco),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (s = o.getControl("postulante.parentesco.tipo"))
                          ? null
                          : s.invalid) &&
                          (null ==
                          (s = o.getControl("postulante.parentesco.tipo"))
                            ? null
                            : s.touched)
                      ),
                      e.xp6(2),
                      e.Q6J("ngIf", o.hasParentesco),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.siete.nro)(
                        "descripcion",
                        o.objPregunta.siete.descripcion
                      )("for", o.objPregunta.siete.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.universidades),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (c = o.getControl(
                          "universidadAlaQuePostula.universidad"
                        ))
                          ? null
                          : c.invalid) &&
                          (null ==
                          (c = o.getControl(
                            "universidadAlaQuePostula.universidad"
                          ))
                            ? null
                            : c.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", o.objPregunta.sieteUno.nro)(
                        "descripcion",
                        o.objPregunta.sieteUno.descripcion
                      )("for", o.objPregunta.sieteUno.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (f = o.getControl("universidadAlaQuePostula.carrera"))
                          ? null
                          : f.invalid) &&
                          (null ==
                          (f = o.getControl("universidadAlaQuePostula.carrera"))
                            ? null
                            : f.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.ocho.nro)(
                        "descripcion",
                        o.objPregunta.ocho.descripcion
                      )("for", o.objPregunta.ocho.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (T = o.getControl("fortalezasCualidadesPostulante"))
                          ? null
                          : T.invalid) &&
                          (null ==
                          (T = o.getControl("fortalezasCualidadesPostulante"))
                            ? null
                            : T.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.nueve.nro)(
                        "descripcion",
                        o.objPregunta.nueve.descripcion
                      )("for", o.objPregunta.nueve.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (I = o.getControl("ayudaProcesoPostulaci\xf3n"))
                          ? null
                          : I.invalid) &&
                          (null ==
                          (I = o.getControl("ayudaProcesoPostulaci\xf3n"))
                            ? null
                            : I.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.diez.nro)(
                        "descripcion",
                        o.objPregunta.diez.descripcion
                      )("textoAdicional", o.objPregunta.diez.datoAdicional)(
                        "for",
                        o.objPregunta.diez.for
                      ),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("maxSelectedItems", 3)(
                        "closeOnSelect",
                        !1
                      ),
                      e.xp6(1),
                      e.Q6J("ngForOf", o.listApoyo),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (E = o.getControl("accionesApoyo"))
                          ? null
                          : E.invalid) &&
                          (null == (E = o.getControl("accionesApoyo"))
                            ? null
                            : E.touched)
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", o.arrayAccionesApoyo.controls),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.once.nro)(
                        "descripcion",
                        o.objPregunta.once.descripcion
                      )("for", o.objPregunta.once.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (x = o.getControl("eleccionUniCarrera.motivo"))
                          ? null
                          : x.invalid) &&
                          (null ==
                          (x = o.getControl("eleccionUniCarrera.motivo"))
                            ? null
                            : x.touched)
                      ),
                      e.xp6(3),
                      e.Q6J("numero", o.objPregunta.onceUno.nro)(
                        "descripcion",
                        o.objPregunta.onceUno.descripcion
                      )("for", o.objPregunta.onceUno.for),
                      e.xp6(10),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (q = o.getControl("eleccionUniCarrera.estaDeAcuerdo"))
                          ? null
                          : q.invalid) &&
                          (null ==
                          (q = o.getControl("eleccionUniCarrera.estaDeAcuerdo"))
                            ? null
                            : q.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasDeAcuerdo),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.doce.nro)(
                        "descripcion",
                        o.objPregunta.doce.descripcion
                      )("for", o.objPregunta.doce.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.beneficios),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (z = o.getControl("beneficioEconomico.fueAcreedor"))
                          ? null
                          : z.invalid) &&
                          (null ==
                          (z = o.getControl("beneficioEconomico.fueAcreedor"))
                            ? null
                            : z.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasBeneficio),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.trece.nro)(
                        "descripcion",
                        o.objPregunta.trece.descripcion
                      )("for", o.objPregunta.trece.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.listPreparacion),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (w = o.getControl("preparacionPreUniversitaria.tuvo"))
                          ? null
                          : w.invalid) &&
                          (null ==
                          (w = o.getControl("preparacionPreUniversitaria.tuvo"))
                            ? null
                            : w.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasPreparacion),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.catorce.nro)(
                        "descripcion",
                        o.objPregunta.catorce.descripcion
                      )("textoAdicional", o.objPregunta.catorce.datoAdicional)(
                        "for",
                        o.objPregunta.catorce.for
                      ),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", o.actividadesExtracademicas),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        o.arrayActividades.controls.length < 1 && d.submitted
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", o.arrayActividades.controls),
                      e.xp6(1),
                      e.Q6J("ngIf", o.isFromLima),
                      e.xp6(1),
                      e.Q6J("ngIf", o.isFromLima),
                      e.xp6(1),
                      e.Q6J("ngIf", o.isFromLima),
                      e.xp6(2),
                      e.Q6J("numero", o.objPregunta.dieciocho.nro)(
                        "descripcion",
                        o.objPregunta.dieciocho.descripcion
                      )("for", o.objPregunta.dieciocho.for),
                      e.xp6(6),
                      e.Q6J("ngForOf", o.displayedColumns),
                      e.xp6(3),
                      e.Q6J("ngForOf", o.arrayFamiliaNuclear.controls),
                      e.xp6(13),
                      e.Q6J("numero", o.objPregunta.veinte.nro)(
                        "descripcion",
                        o.objPregunta.veinte.descripcion
                      )("textoAdicional", o.objPregunta.veinte.datoAdicional)(
                        "for",
                        o.objPregunta.veinte.for
                      ),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", o.listTareaHogar),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        o.arrayTareasHogar.controls.length < 1 && d.submitted
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", o.arrayTareasHogar.controls),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.veinteUno.nro)(
                        "descripcion",
                        o.objPregunta.veinteUno.descripcion
                      )("for", o.objPregunta.veinteUno.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.listNroHorasDeApoyo),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (D = o.getControl(
                          "horasDiariasApoyoTareasDelHogarPostulante"
                        ))
                          ? null
                          : D.invalid) &&
                          (null ==
                          (D = o.getControl(
                            "horasDiariasApoyoTareasDelHogarPostulante"
                          ))
                            ? null
                            : D.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.veintiuno.nro)(
                        "descripcion",
                        o.objPregunta.veintiuno.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.veintiuno.datoAdicional
                      )("for", o.objPregunta.veintiuno.for),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", o.listEncargados),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        o.arrayEncargadoTarea.controls.length < 1 && d.submitted
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", o.arrayEncargadoTarea.controls),
                      e.xp6(3),
                      e.Q6J("numero", o.objPregunta.veinticuatro.nro)(
                        "descripcion",
                        o.objPregunta.veinticuatro.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.veinticuatro.datoAdicional
                      )("for", o.objPregunta.veinticuatro.for),
                      e.xp6(6),
                      e.Q6J("ngForOf", o.displayedColumnsApoyoEcon),
                      e.xp6(3),
                      e.Q6J(
                        "ngForOf",
                        o.arrayActividadesApoyoEconomico.controls
                      ),
                      e.xp6(7),
                      e.Q6J("numero", o.objPregunta.veinticinco.nro)(
                        "descripcion",
                        o.objPregunta.veinticinco.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.veinticinco.datoAdicional
                      )("for", o.objPregunta.veinticinco.for),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null == (j = o.getControl("principalesReglasCasa"))
                          ? null
                          : j.invalid) &&
                          (null == (j = o.getControl("principalesReglasCasa"))
                            ? null
                            : j.touched)
                      ),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.veintiseis.nro)(
                        "descripcion",
                        o.objPregunta.veintiseis.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.veintiseis.datoAdicional
                      )("for", o.objPregunta.veintiseis.for),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("maxSelectedItems", 2)(
                        "closeOnSelect",
                        !1
                      ),
                      e.xp6(1),
                      e.Q6J("ngForOf", o.listSignificaEducacion),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        o.arraySignificadoEducacion.controls.length < 1 &&
                          d.submitted
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", o.arraySignificadoEducacion.controls),
                      e.xp6(5),
                      e.Q6J("numero", o.objPregunta.treinta.nro)(
                        "descripcion",
                        o.objPregunta.treinta.descripcion
                      )("textoAdicional", o.objPregunta.treinta.datoAdicional)(
                        "for",
                        o.objPregunta.treinta.for
                      ),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.lstOpcionesStandar),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (U = o.getControl("accionesConcretas.accion"))
                          ? null
                          : U.invalid) &&
                          (null ==
                          (U = o.getControl("accionesConcretas.accion"))
                            ? null
                            : U.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasAcciones),
                      e.xp6(5),
                      e.Q6J("numero", o.objPregunta.veintisiete.nro)(
                        "descripcion",
                        o.objPregunta.veintisiete.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.veintisiete.datoAdicional
                      )("for", o.objPregunta.veintisiete.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.lstOpcionesStandar),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (Y = o.getControl("situacionComplicada.rpta"))
                          ? null
                          : Y.invalid) &&
                          (null ==
                          (Y = o.getControl("situacionComplicada.rpta"))
                            ? null
                            : Y.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasSituacionComplicada),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.treintayUno.nro)(
                        "descripcion",
                        o.objPregunta.treintayUno.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.treintayUno.datoAdicional
                      )("for", o.objPregunta.treintayUno.for),
                      e.xp6(1),
                      e.Q6J("multiple", !0)("closeOnSelect", !1),
                      e.xp6(1),
                      e.Q6J("ngForOf", o.lstTipoProblemas),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (R = o.getControl("problemasQuePresenta"))
                          ? null
                          : R.invalid) &&
                          (null == (R = o.getControl("problemasQuePresenta"))
                            ? null
                            : R.touched)
                      ),
                      e.xp6(2),
                      e.Q6J("ngForOf", o.arrayProblemasQuePresenta.controls),
                      e.xp6(4),
                      e.Q6J("numero", o.objPregunta.treintayCuatro.nro)(
                        "descripcion",
                        o.objPregunta.treintayCuatro.descripcion
                      ),
                      e.xp6(2),
                      e.Q6J(
                        "ngIf",
                        (null ==
                        (V = o.getControl("estrategiasResolverProblema"))
                          ? null
                          : V.invalid) &&
                          (null ==
                          (V = o.getControl("estrategiasResolverProblema"))
                            ? null
                            : V.touched)
                      ),
                      e.xp6(5),
                      e.Q6J("numero", o.objPregunta.treintayDos.nro)(
                        "descripcion",
                        o.objPregunta.treintayDos.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.treintayDos.datoAdicional
                      )("for", o.objPregunta.treintayDos.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.lstOpcionesStandar),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (G = o.getControl("fortalezasFamiliares.rpta"))
                          ? null
                          : G.invalid) &&
                          (null ==
                          (G = o.getControl("fortalezasFamiliares.rpta"))
                            ? null
                            : G.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasFortalezaFamiliar),
                      e.xp6(5),
                      e.Q6J("numero", o.objPregunta.veintinueve.nro)(
                        "descripcion",
                        o.objPregunta.veintinueve.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.veintinueve.datoAdicional
                      )("for", o.objPregunta.veintinueve.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.lstOpcionesStandar),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == ($ = o.getControl("momentoEnFamilia.rpta"))
                          ? null
                          : $.invalid) &&
                          (null == ($ = o.getControl("momentoEnFamilia.rpta"))
                            ? null
                            : $.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasMomentoFamilia),
                      e.xp6(5),
                      e.Q6J("numero", o.objPregunta.treintayTres.nro)(
                        "descripcion",
                        o.objPregunta.treintayTres.descripcion
                      )(
                        "textoAdicional",
                        o.objPregunta.treintayTres.datoAdicional
                      )("for", o.objPregunta.treintayTres.for),
                      e.xp6(4),
                      e.Q6J("ngForOf", o.lstReorganizacion),
                      e.xp6(1),
                      e.Q6J(
                        "ngIf",
                        (null == (W = o.getControl("reorganizacionTareas.rpta"))
                          ? null
                          : W.invalid) &&
                          (null ==
                          (W = o.getControl("reorganizacionTareas.rpta"))
                            ? null
                            : W.touched)
                      ),
                      e.xp6(1),
                      e.Q6J("ngIf", o.hasReorganizarTareas);
                  }
                },
                dependencies: [
                  C.sg,
                  C.O5,
                  t._Y,
                  t.YN,
                  t.Kr,
                  t.Fj,
                  t.EJ,
                  t.JJ,
                  t.JL,
                  t.sg,
                  t.u,
                  t.x0,
                  t.CE,
                  Yo,
                  Se,
                  $o.X,
                  Wo,
                ],
                styles: [
                  '@import"https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&family=Poppins:wght@300;400&display=swap";[_nghost-%COMP%]{font-family:Flexo-regular,sans-serif}.txt-underline[_ngcontent-%COMP%]{text-decoration:underline}.form-select[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%], .ng-select[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{border:1px solid black}label[_ngcontent-%COMP%]{color:#000;font-weight:500}.hero-cuestionario[_ngcontent-%COMP%]{line-height:1.2}.hero-cuestionario[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:18px}.hero-cuestionario[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.3125rem;margin-bottom:1rem;font-family:Flexo-light,sans-serif}.color-orange[_ngcontent-%COMP%]{color:#ff4d00}.color-azul[_ngcontent-%COMP%]{color:#002d74}.cursiva[_ngcontent-%COMP%]{font-style:italic}.textLightIt[_ngcontent-%COMP%]{font-family:Flexo-lightIt,sans-serif}.head-cuestionario[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;align-items:center;color:#fff;background-color:#002d74;flex-direction:column}@media (min-width: 48rem){.head-cuestionario[_ngcontent-%COMP%]{flex-direction:row}}.head-cuestionario__title[_ngcontent-%COMP%]{font-style:italic;font-size:2.25rem;font-family:Flexo-mediumit,sans-serif;margin-left:1.5rem;order:1;margin-bottom:1rem}@media (min-width: 48rem){.head-cuestionario__title[_ngcontent-%COMP%]{order:0;margin-bottom:0}}.head-cuestionario__img[_ngcontent-%COMP%]{max-width:416px;max-height:136px;margin:2rem 0;order:0}@media (min-width: 48rem){.head-cuestionario__img[_ngcontent-%COMP%]{order:1}}.flex-disposicion[_ngcontent-%COMP%]{flex-direction:column}@media (min-width: 48rem){.flex-disposicion[_ngcontent-%COMP%]{flex-direction:row}}.bloq-text[_ngcontent-%COMP%]{margin-top:1rem}.right-img[_ngcontent-%COMP%]{max-width:151px;max-height:297px;align-self:center;justify-self:center}@media (min-width: 48rem){.right-img[_ngcontent-%COMP%]{max-width:251px}}@media (min-width: 62rem){.right-img[_ngcontent-%COMP%]{max-width:351px}}.btn-cuestionario[_ngcontent-%COMP%]{background:url(./assets/images/cuestionario/btn-bg.svg) no-repeat;background-position:center;color:#fff;font-family:Flexo-bold,sans-serif;font-size:1.125rem;display:inline-block;padding:2rem;border:none}.text-submit[_ngcontent-%COMP%]{margin-right:.5rem}',
                ],
              })),
              _
            );
          })(),
        },
        { path: "", redirectTo: "cuestionario", pathMatch: "full" },
      ];
      let Hr = (() => {
        class _ {}
        return (
          (_.ɵfac = function (i) {
            return new (i || _)();
          }),
          (_.ɵmod = e.oAB({ type: _ })),
          (_.ɵinj = e.cJS({ imports: [ae.Bz.forChild(Qr), ae.Bz] })),
          _
        );
      })();
      var Zr = b(2276);
      let Br = (() => {
        class _ {}
        return (
          (_.ɵfac = function (i) {
            return new (i || _)();
          }),
          (_.ɵmod = e.oAB({ type: _ })),
          (_.ɵinj = e.cJS({
            imports: [C.ez, t.u5, t.UX, $e, K.JF, K.Ed, Go, F.IJ, Zr.m, Hr],
          })),
          _
        );
      })();
    },
  },
]);
