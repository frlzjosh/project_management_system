<template>
<div class="sidebar">
    <div class="sidebar__home">
        <h4><i class="fas fa-home"></i></h4>
    </div>
    <ul class="sidebar__list">
        <router-link to="/deliverables"><li class="sidebar__list-item">Deliverables</li></router-link>
        <router-link  active-class="hr-nav" to="/tasks">       <li class="sidebar__list-item"></li> Tasks</router-link>
        <router-link  active-class="hr-nav" to="/issues">      <li class="sidebar__list-item"></li> Issues</router-link>
        <router-link  active-class="hr-nav" to="/changes">     <li class="sidebar__list-item"></li> Changes</router-link>
        <router-link  active-class="hr-nav" to="/references">  <li class="sidebar__list-item"></li> References</router-link>
        <router-link  active-class="hr-nav" to="/resources">   <li class="sidebar__list-item"></li> Resources</router-link>
        <router-link  active-class="hr-nav" to="/actionItems"> <li class="sidebar__list-item"></li> Actions Items</router-link>
        <router-link  active-class="hr-nav" to="/requirements"><li class="sidebar__list-item"></li> Requirements</router-link>
        <router-link  active-class="hr-nav" to="/decisions">   <li class="sidebar__list-item"></li> Decisions</router-link>
        <router-link  active-class="hr-nav" to="/risks">       <li class="sidebar__list-item"></li> Risks</router-link>
    </ul>
</div>
</template>
<script>
</script>

