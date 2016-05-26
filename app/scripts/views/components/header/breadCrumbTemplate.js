/*
 * Copyright (c) 2015 Memorial Sloan-Kettering Cancer Center.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS
 * FOR A PARTICULAR PURPOSE. The software and documentation provided hereunder
 * is on an 'as is' basis, and Memorial Sloan-Kettering Cancer Center has no
 * obligations to provide maintenance, support, updates, enhancements or
 * modifications. In no event shall Memorial Sloan-Kettering Cancer Center be
 * liable to any party for direct, indirect, special, incidental or
 * consequential damages, including lost profits, arising out of the use of this
 * software and its documentation, even if Memorial Sloan-Kettering Cancer
 * Center has been advised of the possibility of such damage.
 */

/*
 * This file is part of cBioPortal.
 *
 * cBioPortal is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * Created by Karthik Kalletla on 4/18/16.
 */
'use strict';
(function(Vue) {
  Vue.component('breadCrumb', {
    template: '<div class="breadcrumb_container" v-if="attributes.filter.length > 0">' +
    '<span>{{attributes.attr_id}}&nbsp;&nbsp;:&nbsp;&nbsp;</span><div class="breadcrumd_items">' +
    '<div v-if="filters.filterType === \'RangedFilter\'"><span class="breadcrumb_item">{{filters[0]}}-{{filters[0]}}</span>' +
    '<img class="breadcrumb_remove" src="../../../../images/remove_breadcrumb_icon.png" @click="removeFilter(filters)"></div><div' +
    ' v-else>' +
    '<div v-for="filter in filters" style="display:inline-block;">' +
    '<span class="breadcrumb_item">{{filter}}</span>' +
    '<img class="breadcrumb_remove" src="../../../../images/remove_breadcrumb_icon.png" @click="removeFilter(filter)">' +
    '</div></div></div></div>',
    props: [
      'filters', 'attributes'
    ],
    methods: {
      removeFilter: function(val) {
        if (this.attributes.view_type === 'bar_chart') {
          this.filters = []
        } else {
          this.filters.$remove(val)
        }
      }
    }
  });
})(window.Vue);