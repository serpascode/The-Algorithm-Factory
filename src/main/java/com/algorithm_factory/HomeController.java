package com.algorithm_factory;


import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
	
	@RequestMapping("/")
	public String index(ModelMap model) {
		model.addAttribute("content", "welcome");
		return "index";
	}
	
	@RequestMapping("/insertionSort")
	public String insertionSortView(ModelMap model) {
		model.addAttribute("content", "insertionSort");
		return "index";
	}
	
	@RequestMapping("/bubbleSort")
	public String bubbleSortView(ModelMap model) {
		model.addAttribute("content", "bubbleSort");
		return "index";
	}
	
	@RequestMapping("/quickSort")
	public String quickSortView(ModelMap model) {
		model.addAttribute("content", "quickSort");
		return "index";
	}
	
	@RequestMapping("/mergeSort")
	public String mergeSortView(ModelMap model) {
		model.addAttribute("content", "mergeSort");
		return "index";
	}
}
